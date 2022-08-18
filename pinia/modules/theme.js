import {
	defineStore
} from 'pinia';

export const useThemeStore = defineStore('theme', {
	state: () => {
		return {
			theme: 'light',
			themeStatus: false
		};
	},
	actions: {
		initTheme() {
			this.updateTheme(uni.getStorageSync('CURRENT_APP_THEME') || 'light')
		},
		updateTheme() {
			const theme = this.theme === 'light' ? 'dark' : 'light';
			this.themeStatus = false;
			this.theme = theme;
			uni.setStorageSync('CURRENT_APP_THEME', theme);
		},
		updateThemeStatus(status = true) {
			this.themeStatus = status;
		}
	},
});
