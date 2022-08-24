// 检查api是否授权，未授权，将发起授权
const checkApiAuthorize = (type = 'userLocation') => {
	return new Promise((resolve, reject) => {
		uni.getSetting({
			success(res) {
				console.log('setting', res)
				const scope = `scope.${type}`;
				if (res.authSetting[scope]) {
					resolve(true)
				} else {
					uni.authorize({
						scope,
						success() {
							resolve(true)
						},
						fail(err) {
							reject(err)
						}
					})
				}
			},
			fail(err) {
				reject(err)
			}
		})
	})
}

// 获取当前位置信息
export const getMpLocation = (type = 'wgs84') => {
	return new Promise((resolve, reject) => {
		checkApiAuthorize('userLocation').then(res => {
			uni.getLocation({
				type,
				success(res) {
					resolve(res)
				},
				fail(err) {
					console.error('getLocation', err)
					reject(err)
				}
			})
		}).catch(err => {
			reject(err)
		})
	})
}

// 获取用户信息
export const getMpUserInfo = () => {
	return new Promise((resolve, reject) => {
		checkApiAuthorize('userInfo').then(res => {
			uni.getUserInfo({
				success(res) {
					resolve(res)
				},
				fail(err) {
					console.error('getLocation', err)
					reject(err)
				}
			})
		}).catch(err => {
			reject(err)
		})
	})
}


export const getMpLogin = () => {
	return new Promise((resolve, reject) => {
		uni.login({
			success(res) {
				resolve(res);
			},
			fail(err) {
				reject(err);
			}
		});
	});
}
