<script>
	import {
		useThemeStore
	} from '@/pinia/modules/theme.js'
	export default {
		onLaunch: function() {
			console.log('App Launch');
			const themeStore = useThemeStore();
			themeStore.initTheme()
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
	@import '@/uni_modules/uni-scss/index.scss';
	@import '@/static/style/base.scss';

	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
		// border: 1px solid red;
		min-height: 100%;
	}

	/* #endif */
	.dark{
		background-color: #333;
		color: red;
		height: 100%;
	}
</style>
