// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import {
	createPinia,
	Pinia
} from '@/pinia'
import App from './App.vue'
import {
	useThemeStore
} from "@/pinia/modules/theme.js";
export function createApp() {
	const app = createSSRApp(App);
	app.use(createPinia);
	const {
		theme
	} = Pinia.storeToRefs(useThemeStore()); //pinia在install之后使用
	app.provide('global', theme)
	app.config.globalProperties.$theme = theme;
	return {
		app,
		Pinia
	}
}
// #endif
