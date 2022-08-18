import Request from 'luch-request'
import {
	VUE_APP_CONFIG
} from '../config.js'
import {
	REQUEST_REPEAT_CANCEL,
	REQUEST_TIMEOUT
} from '../config-global.js'
import {
	queryParams
} from '@/utils/index.js'
const pending = new Map();
const addPending = (url, task) => {
	if (pending.has(url)) {
		delPending(url)
	} else {
		pending.set(url, task)
	}
}
const delPending = (url) => {
	if (pending.has(url)) {
		const controller = pending.get(url);
		controller.abort(); // 取消请求
		pending.delete(url)
	}
}
const clearPending = () => {
	for (const [url, controller] of pending) {
		controller.abort(); // 取消请求
	}
	pending.clear()
}
const getUrl = (options) => {
	const {
		url = '', method = '', data = {}, params = {}
	} = options;
	const str = queryParams({
		...data,
		...params
	});
	return `${method}${url}${str}`
}
const reqMethods = [
	['post', 'delete', 'head', 'put', 'connect', 'options', 'trace'],
	['get', 'upload']
];
const http = new Request({
	baseURL: VUE_APP_CONFIG.baseUrl,
	timeout: REQUEST_TIMEOUT,

});
http.interceptors.request.use(
	config => {
		const token = uni.getStorageSync('token')
		config.header = {
			...config.header,
			token: token ? token : 'token'
		}
		config.getTask = (task, options) => {
			REQUEST_REPEAT_CANCEL&&addPending(getUrl(options), task)
		}
		return config
	}, config => {
		return Promise.reject(config)
	})
// 响应拦截器
http.interceptors.response.use(
	response => {
		// statusCode === 200
		REQUEST_REPEAT_CANCEL&&delPending(getUrl(response.config))
		return response
	}, (response) => {
		// statusCode !== 200
		const {
			statusCode,
			data = {},
			errMsg
		} = response;
		if (errMsg === 'request:fail timeout') {
			response.data = {
				msg: '请求超时'
			}
		}
		if (errMsg === 'request:fail') {
			response.data = {
				msg: '请求异常'
			}
		}
		if (statusCode == 401) {
			uni.showToast({
				title: response.data.msg ? response.data.msg : '请求失败',
				icon: 'none'
			})
			uni.reLaunch({
				url: '/pages/login/login'
			});
			uni.removeStorageSync("token")
			return false
		}
		if (statusCode == 404) {
			response.data = {
				msg: '请求不存在'
			}
		}
		return Promise.reject(response)
	})

function baseRequest(url, method, options, args) {
	const {
		loading = false
	} = args;
	if (loading) {
		uni.showLoading({
			'title': '正在加载',
			mask: true
		})
	}
	return http[method](url, options).then(res => {
		loading && uni.hideLoading();
		return Promise.resolve(res.data);
	}).catch(err => {
		loading && uni.hideLoading();
		console.warn(`请求异常`, err)
		return Promise.reject(err);
	});
}
const request = reqMethods[0].reduce((request, method) => {
	request[method] = (url, data = {}, config = {}) => {
		return baseRequest(url, method, data, config);
	};
	return request;
}, {});

reqMethods[1].forEach(method => {
	request[method] = (url, params = {}, config = {}) => {
		return baseRequest(url, method, {
			params
		}, config);
	};
});
export default request;
