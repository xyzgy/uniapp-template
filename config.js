import {
	APP_UPDATE_CONFIG as appUpdateConfig,
	CONFIG
} from '@/config-global.js'

export const VUE_APP_CONFIG = CONFIG.dev;
export const APP_UPDATE_CONFIG = appUpdateConfig(VUE_APP_CONFIG);
