// 获取版本号信息
import {
	VUE_APP_CONFIG
} from '@/config.js'
export const getAppUpdateNo=(versionInfo, isPrompt = false, callback)=>{
	const platform = uni.getSystemInfoSync().platform;
	uni.request({
		url: `${VUE_APP_CONFIG.baseUrl}/versionLast`,
		success(res) {
			let data = res.data;
			if (VUE_APP_CONFIG.mode === "release") {
				if (data.data) {
					const str = AesDecrypt(data.data)
					data = JSON.parse(str)
				}
			}
			const {
				ios_path,
				path,
				wgt,
				version,
				version_tag,
				compatible
			} = data;
			let downloadUrl = wgt ? wgt : (platform == "android" ? path : ios_path);
			if (version > versionInfo.versionCode) {
				callback && callback({
					updateType: compatible == false ? 'forcibly' :
					'solicit', //forcibly = 强制更新, solicit = 弹窗确认更新, silent = 静默更新
					downloadUrl: downloadUrl,
					versionCode: version,
					setupPage: isPrompt,
					versionInfo: '发现新的版本',
					versionName: version_tag,
					type: platform == "android" ? 1101 : 1102
				});
			}
		}
	})
}

export const appUpdateColor = 'f00'
export const appUpdateIcon = ''