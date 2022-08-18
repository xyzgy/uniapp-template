import {
	useThemeStore
} from '@/pinia/modules/theme.js'
// import {
// 	onShow
// } from "@dcloudio/uni-app";
// setTabBarStyle、setTabBarItem只能在tabBar页面使用
//  tabBar页面引入 并方法
export default function() {
	// onShow(() => {
		const themeStore = useThemeStore();
		const hasUpdateTabBarStyle = themeStore.themeStatus;
		const theme = themeStore.theme;
		if (hasUpdateTabBarStyle) {
			return
		}
		themeStore.updateThemeStatus(true);
		uni.setTabBarStyle(ROUTES_TABBAR[theme]);
		const paths = ROUTES_TABBAR[`${theme}-path`];
		paths.forEach(item => {
			uni.setTabBarItem(item)
		})
	// })
}
