const path = require('path');
const fs = require('fs');
const rootPath = path.resolve(process.cwd(), 'node_modules');

/** 解析绝对路径
 * @param {Object} dir 
 */
function resolvePath(dir) {
	return path.resolve(rootPath, dir);
}

const webpack = require(resolvePath('webpack'));

const fromFile = path.join(__filename, '../pages.json');
const fileData = fs.readFileSync(fromFile)
const fileObj = JSON.parse(fileData.toString().replace(/\/\/.*/g, ''));
const routesObj = {};
fileObj.pages.forEach(item => {
	const title = item.style ? item.style.navigationBarTitleText : '未知';
	const path = '/' + item.path;
	routesObj[path] = {
		visible: item.visible === false ? false : true,
		title,
		path
	}
})
const tabBarInfo = fileObj.tabBar;
const routerTabBarObj = {
	light: {
		"color": tabBarInfo['color'],
		"selectedColor": tabBarInfo['selectedColor'],
		"borderStyle": tabBarInfo['borderStyle'],
		"backgroundColor": tabBarInfo['backgroundColor'],
	},
	dark: {
		"color": tabBarInfo['dark-color'] || tabBarInfo['color'],
		"selectedColor": tabBarInfo['dark-selectedColor'] || tabBarInfo['selectedColor'],
		"borderStyle": tabBarInfo['dark-borderStyle'] || tabBarInfo['borderStyle'],
		"backgroundColor": tabBarInfo['dark-backgroundColor'] || tabBarInfo['backgroundColor'],
	},
	'light-path': [],
	'dark-path': []
}


tabBarInfo.list.forEach((item, index) => {
	const path = '/' + item.pagePath;
	routerTabBarObj[path] = {
		visible: item.visible === false ? false : true,
		path,
		index
	}
	routerTabBarObj['light-path'][index] = {
		index: index,
		path,
		visible: item.visible === false ? false : true,
		"iconPath": item['iconPath'],
		"selectedIconPath": item['selectedIconPath']
	}
	routerTabBarObj['dark-path'][index] = {
		index: index,
		path,
		visible: item.visible === false ? false : true,
		"iconPath": '/' + (item['dark-iconPath'] || item['iconPath']),
		"selectedIconPath": '/' + (item['dark-selectedIconPath'] || item['selectedIconPath'])
	}
})
// 如果有分包
if (fileObj.subPackages) {
	fileObj.subPackages.forEach(item => {
		item.pages.forEach(item1 => {
			const title = item1.style ? item1.style.navigationBarTitleText : '未知';
			const path = '/' + item.root + '/' + item1.path;
			routesObj[path] = {
				visible: item.visible === false ? false : true,
				title,
				path
			}
		})
	})
}
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					return JSON.stringify(routesObj)
				}, true),
				ROUTES_TABBAR: webpack.DefinePlugin.runtimeValue(() => {
					return JSON.stringify(routerTabBarObj)
				}, true)
			})
		],
	},
	chainWebpack: (config) => {
		// 发行或运行时启用了压缩时会生效
		config.optimization.minimizer('terser').tap((args) => {
			const compress = args[0].terserOptions.compress
			// 非 App 平台移除 console 代码(包含所有 console 方法，如 log,debug,info...)
			compress.drop_console = true
			compress.pure_funcs = [
				'__f__', // App 平台 vue 移除日志代码
				'console.log' // 可移除指定的 console 方法
			]
			return args
		})
	}
}