import {
	getCurrentInstance
} from 'vue';
export default function() {
	const {
		proxy,
		emit,
		appContext: {
			app: {
				config: {
					globalProperties
				}
			}
		}
	} = getCurrentInstance();
	
	console.log(proxy)
}
