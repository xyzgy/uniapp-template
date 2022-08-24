import md5 from 'crypto-js/md5'
// 处理图片，包含app端图片缓存
export const handelImage = (url, w) => {
	if (url) {
		let path = url;
		const ext = url.substr(url.lastIndexOf(".") + 1);
		if (['gif'].includes(ext)) {} else {
			path = `${url}?x-oss-process=image/resize,w_${w*2},m_lfit`
		}
		const storageKey = md5(path).toString();
		let cacheFileInfo = uni.getStorageSync(storageKey);
		// #ifndef APP-PLUS
		cacheFileInfo = null
		// #endif
		if (cacheFileInfo) {
			return cacheFileInfo
		} else {
			// #ifdef APP-PLUS
			uni.downloadFile({
				url: path,
				success(res) {
					if (res.statusCode === 200) {
						uni.saveFile({
							tempFilePath: res.tempFilePath,
							success(res1) {
								uni.setStorageSync(storageKey, res1.savedFilePath)
							}
						})
					}
				}
			})
			// #endif
			return path
		}

	} else {
		return url
	}
}

// 上传图片到阿里云
export const uploadOssFile = (url, dir = '') => {
	const sign = {}; //服务端返回oss配置信息 接口返回
	if (sign) {
		return new Promise((resolve, reject) => {
			const imageKey = md5(url).toString();
			const fileType = url.substring(url.lastIndexOf("."));
			const name = imageKey + fileType
			const key = sign.dir + `/${dir}/` + name;
			const param = {
				key: key,
				name: name,
				policy: sign.policy,
				OSSAccessKeyId: sign.accessid,
				success_action_status: 200,
				callback: sign.callback,
				signature: sign.signature,
			}
			uni.uploadFile({
				url: sign.host,
				filePath: url,
				name: 'file',
				formData: param,
				success: (data) => {
					if (data.statusCode == 200) {
						resolve(sign.host + '/' + key)
					}
				},
				fail: (err) => {
					console.log('uploadFile', err)
				}
			})
		})
	} else {
		uni.showToast({
			title: '图片上传失败',
			icon: 'none',
			duration: 2000
		});
	}
}
