const path = require('path');
const fs = require('fs');
const rootPath = path.resolve(process.cwd(), 'node_modules');
const JavaScriptObfuscator = require('webpack-obfuscator');
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
			}),
			new JavaScriptObfuscator({
				// 压缩代码（uniApp不能加）  
				// compact: true,  
				// 是否启用控制流扁平化(降低1.5倍的运行速度)  
				// controlFlowFlattening: true,  
				// 随机的死代码块(增加了混淆代码的大小)  
				// deadCodeInjection: true,  
				// 死代码块的影响概率(uniApp不能加)  
				// deadCodeInjectionThreshold: 0.4,  
				// 此选项几乎不可能使用开发者工具的控制台选项卡  
				// debugProtection: false,0  
				// 如果选中，则会在“控制台”选项卡上使用间隔强制调试模式，从而更难使用“开发人员工具”的其他功能。  
				// debugProtectionInterval: 0,  
				// 通过用空函数替换它们来禁用console.log，console.info，console.error和console.warn。这使得调试器的使用更加困难  
				disableConsoleOutput: false,
				// 标识符的混淆方式 hexadecimal(十六进制) mangled(短标识符)  
				identifierNamesGenerator: 'hexadecimal',
				// 打包是否展示log  
				log: true,
				// 是否启用全局变量和函数名称的混淆  
				// renameGlobals: false,  
				/**  
				 * 通过固定和随机（在代码混淆时生成）的位置移动数组。这使得将删除的字符串的顺序与其原始位置相匹配变得更加困难。  
				 * 如果原始源代码不小，建议使用此选项，因为辅助函数可以引起注意。  
				 */
				rotateStringArray: true,
				// 混淆后的代码,不能使用代码美化,同时需要配置 cpmpat:true; （uniApp不能加）  
				// selfDefending: true,  
				// 删除字符串文字并将它们放在一个特殊的数组中  
				stringArray: true,
				// none base64 rc4
				stringArrayEncoding: ['rc4'],
				stringArrayThreshold: 0.75,
				transformObjectKeys: false,
				/**  
				 * 允许启用/禁用字符串转换为unicode转义序列。Unicode转义序列大大增加了代码大小，  
				 * 并且可以轻松地将字符串恢复为原始视图。建议仅对小型源代码启用此选项。  
				 */
				// unicodeEscapeSequence: false  
			}, [])
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
