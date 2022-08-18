import App from './App'
import Vue from 'vue'

import uView from "uview-ui";
Vue.use(uView);

import store from './store'

import {
	copyClick
} from '@/utils/index.js'

Vue.config.productionTip = false

Vue.prototype.$store = store;
Vue.prototype.$copyClick = copyClick;
Vue.prototype.$navigator = uni.$u.route;
Vue.prototype.$goBack = function(url, time = 500) {
	if (url) {
		uni.reLaunch({
			url: url
		})
	} else {
		setTimeout(() => {
			const page = getCurrentPages()
			if (page && page.length > 1) {
				uni.navigateBack()
			} else {
				// #ifdef H5
				history.back()
				// #endif
				// #ifndef H5
				uni.navigateBack({
					delta: 2
				})
				// #endif
			}
		}, time)
	}
};

Vue.prototype.$listLoadStatus = function(pager) {
	const {
		page = 1, page_size = 10, total_pages = 1, total_rows = 10
	} = pager;
	let status = 'loading';
	if (page === total_pages) {
		status = 'nomore'
	}
	if (page < total_pages) {
		status = 'loadmore'
	}
	if (total_pages === 0) {
		status = 'nodata'
	}
	return status

};


Vue.mixin({
	computed: {
		theme() {
			return store.state.theme
		},
		isLightTheme() {
			return store.state.theme === 'light'
		}
	},
	methods: {
		updateTabBarStyle() {
			const {
				theme = 'light', themeStatus
			} = store.state;
			if (themeStatus) {
				return;
			}
			uni.setTabBarStyle(ROUTES_TABBAR[theme]);
			store.commit('UPDATE_THEME_STATUS', true)
			const arr = ROUTES_TABBAR[`${theme}-path`];
			arr.forEach((item, index) => {
				uni.setTabBarItem(item)
			})
		}
	},
	onShow() {
		// const key = store.getters.theme;
		// if (key === 'light') {
		// 	uni.setNavigationBarColor({
		// 		frontColor: '#000000',
		// 		backgroundColor: '#f8f8f8'
		// 	})
		// } else {
		// 	uni.setNavigationBarColor({
		// 		frontColor: '#ffffff',
		// 		backgroundColor: '#1B1A18'
		// 	})
		// }
	}
})



App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
