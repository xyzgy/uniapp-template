import {
	defineConfig
} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

import path from 'path';
import fs from 'fs-extra';

const rootPath = path.resolve(process.cwd(), 'node_modules');

/** 解析绝对路径
 * @param {Object} dir 
 */
function resolvePath(dir) {
	return path.resolve(rootPath, dir);
}

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
		"iconPath": '/' + item['iconPath'],
		"selectedIconPath": '/' + item['selectedIconPath']
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
export default defineConfig({
	plugins: [uni()],
	define: {
		'ROUTES': JSON.stringify(routesObj),
		'ROUTES_TABBAR': JSON.stringify(routerTabBarObj)
	},
	build: {
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
			}
		},
	},
});
