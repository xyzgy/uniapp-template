
const platform = uni.getSystemInfoSync().platform
const permision = require('./judgePermission.js')
	
async function getCameraPermission () {
	if (platform === 'android') {
		const res = await permision.requestAndroidPermission('android.permission.CAMERA')
		if (res !== 1) return Promise.reject(new Error('未获取授权'))
	} else if (platform === 'ios'){
		const res = permision.judgeIosPermission('camera')
		if (!res) return Promise.reject(new Error('未获取授权'))
	}
	return true
}

module.exports = {
	getCameraPermission: getCameraPermission
}