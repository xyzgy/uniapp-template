import {
	defineStore
} from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => {
		return {
			count: 0
		};
	},
	getters: {
		zcount() {
			console.log('xxddd', this.count)
			return this.count
		}
	},
	actions: {
		increment() {
			this.count++;
			console.log('increment', this.count)
		},
	},
});
