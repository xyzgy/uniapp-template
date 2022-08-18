import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		theme: 'light', // light dark
		themeStatus: false,
	},
	mutations: {
		UPDATE_THEME(state) {
			const key = state.theme === 'light' ? 'dark' : 'light';
			state.theme = key;
			state.themeStatus = false;
			uni.setStorageSync('CURRENT_APP_THEME', key);
		},
		UPDATE_THEME_STATUS(state, key = true) {
			state.themeStatus = key;
		}
	},
	getters: {
		theme: state => state.theme,
		themeStatus: state => state.themeStatus
	}
})

export default store
