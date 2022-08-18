// #ifdef APP-PLUS
export const calcLocalCache = () => {
	// 计算缓存
	return new Promise((resolve, reject) => {
		uni.getSavedFileList({
			success: (res) => {
				let size = 0
				let fileSizeString = "0B";
				res.fileList.forEach(item => {
					size += item.size
				})
				if (size == 0) {
					fileSizeString = "0B";
				} else if (size < 1024) {
					fileSizeString = size + "B";
				} else if (size < 1048576) {
					fileSizeString = (size / 1024).toFixed(2) + "KB";
				} else if (size < 1073741824) {
					fileSizeString = (size / 1048576).toFixed(2) + "MB";
				} else {
					fileSizeString = (size / 1073741824).toFixed(2) + "GB";
				}
				console.log(fileSizeString)
				resolve(fileSizeString)
			}
		})
	})
}

export const clearLocalCache = () => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '开始清理'
		})
		let os = plus.os.name;
		if (os == 'Android') {
			let main = plus.android.runtimeMainActivity();
			let sdRoot = main.getCacheDir();
			let files = plus.android.invoke(sdRoot, "listFiles");
			let len = files.length;
			for (let i = 0; i < len; i++) {
				let filePath = '' + files[i]; // 没有找到合适的方法获取路径，这样写可以转成文件路径
				plus.io.resolveLocalFileSystemURL(filePath, function(entry) {
					if (entry.isDirectory) {
						entry.removeRecursively(function(entry) { //递归删除其下的所有文件及子目录
							uni.hideLoading();
							uni.showToast({
								title: '缓存清理完成',
								duration: 2000
							});
							resolve()
						}, function(e) {
							console.log(e.message)
						});
					} else {
						entry.remove();
					}
				}, function(e) {
					uni.hideLoading();
					uni.showToast({
						title: '清理失败，稍后再试',
						duration: 2000
					});
					reject(e)
					console.log('文件路径读取失败')
				});
			}
		} else { // ios
			plus.cache.clear(function() {
				uni.hideLoading();
				uni.showToast({
					title: '缓存清理完成',
					duration: 2000
				});
				resolve()
			});
		}
	})
}

export const clearCacheFile = () => {
	return new Promise((resolve, reject) => {
		uni.getSavedFileList({
			success: (res) => {
				const proList = []
				console.log(res.fileList)
				res.fileList.forEach(item => {
					const promise = new Promise((resolve1, reject1) => {
						uni.removeSavedFile({
							filePath: item.filePath,
							complete: () => {
								resolve1()
							}
						})
					})
					proList.push(promise)
				})
				Promise.all(proList).then(res => {
					resolve()
				})
			}
		})
	})
}



// #endif
