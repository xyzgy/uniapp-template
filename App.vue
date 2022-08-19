<script>
	// #ifdef APP-PLUS
	import {appUpdate} from '@/utils/app-plus/index.js';
	// #endif
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// this.$store.commit('UPDATE_THEME', uni.getStorageSync('CURRENT_APP_THEME'))
			// #ifdef APP-PLUS
			// appUpdate();
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	page {
		height: 100%;

		>view {
			height: 100%;
		}
	}

	.dark {
		background-color: #333;
		color: red;
	}
</style>
