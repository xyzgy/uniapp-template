// #ifdef APP-PLUS
import {
	appUpdate
} from './app-plus/index.js'
// #endif
// #ifdef MP
import {
	mpUpdate
} from './mp/index.js'
// #endif

// 检测更新
export const checkUpdate = () => {
	// #ifdef APP-PLUS
	appUpdate()
	// #endif
	// #ifdef MP
	mpUpdate()
	// #endif
}

// 对象转URL参数 https://www.uviewui.com/js/queryParams.html
export const queryParams = (data = {}, isPrefix = true, arrayFormat = 'brackets') => {
	const prefix = isPrefix ? '?' : ''
	const _result = []
	if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets'
	for (const key in data) {
		const value = data[key]
		// 去掉为空的参数
		if (['', undefined, null].indexOf(value) >= 0) {
			continue
		}
		// 如果值为数组，另行处理
		if (value.constructor === Array) {
			// e.g. {ids: [1, 2, 3]}
			switch (arrayFormat) {
				case 'indices':
					// 结果: ids[0]=1&ids[1]=2&ids[2]=3
					for (let i = 0; i < value.length; i++) {
						_result.push(`${key}[${i}]=${value[i]}`)
					}
					break
				case 'brackets':
					// 结果: ids[]=1&ids[]=2&ids[]=3
					value.forEach((_value) => {
						_result.push(`${key}[]=${_value}`)
					})
					break
				case 'repeat':
					// 结果: ids=1&ids=2&ids=3
					value.forEach((_value) => {
						_result.push(`${key}=${_value}`)
					})
					break
				case 'comma':
					// 结果: ids=1,2,3
					let commaStr = ''
					value.forEach((_value) => {
						commaStr += (commaStr ? ',' : '') + _value
					})
					_result.push(`${key}=${commaStr}`)
					break
				default:
					value.forEach((_value) => {
						_result.push(`${key}[]=${_value}`)
					})
			}
		} else {
			_result.push(`${key}=${value}`)
		}
	}
	return _result.length ? prefix + _result.join('&') : ''
}


export const copyClick=(data,toast='复制成功')=> {
	uni.setClipboardData({
		data: data,
		success: function(res) {
			uni.getClipboardData({
				success: function(res) {
					if(toast){
						uni.showToast({
							title: toast,
							icon: 'none',
						});
					}
				},
			});
		},
	});
}
