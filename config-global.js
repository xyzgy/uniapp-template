export const CONFIG = {
	dev: {
		baseUrl: 'https://dev.shop.arthorize.com/api',
		webUrl: "",
	},
	test: {
		baseUrl: "http://test-api.swc.cn/api/v1",
		webUrl: "http://test.swc.cn",
	},
	production: {}
}

export const REQUEST_REPEAT_CANCEL = true; // 同一请求，请求未结束时，重复请求取消
export const REQUEST_TIMEOUT = 60000;