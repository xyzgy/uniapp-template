export const CONFIG = {
	dev: {
		baseUrl: "https://cloud.xyzgy.xyz",
		webUrl: "",
	},
	test: {},
	production: {}
}

export const REQUEST_REPEAT_CANCEL = true; // 同一请求，请求未结束时，重复请求取消
export const REQUEST_TIMEOUT = 60000;

// app版本更新
export const APP_UPDATE_CONFIG = (config) => {
	return {
		getServerNo: (versionInfo, isPrompt = false, callback) => {
			const platform = uni.getSystemInfoSync().platform;
			uni.request({
				url: `${config.baseUrl}/last-version`,
				success(res) {
					let data = res.data
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
		},
		// 弹窗主颜色（不填默认粉色）
		appUpdateColor: "f00",
		// 弹窗图标（不填显示默认图标，链接配置示例如： '/static/demo/ic_attention.png'）
		appUpdateIcon: ''
	}

}
