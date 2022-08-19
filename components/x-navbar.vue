<template>
	<x-uni-nav-bar :navBar="navBarShow" :statusBar="statusBarShow" :backgroundColor="backgroundColor" :fixed="true"
		:title="currentPageTitle" :navBarPlaceholder="true" :titleStyle="navBarTitleStyle" :statusBarPlaceholder="true" @clickLeft="leftClick" @clickRight="rightClick">
		<template v-slot:left>
			<slot name="left">
				<uni-icons :type="leftIcon" :size="24" :color="color"></uni-icons>
			</slot>
		</template>
		<template v-slot:right>
			<slot name="right">
				<view :style="[rightTextStyle]">
					{{rightText}}
				</view>
			</slot>
		</template>
	</x-uni-nav-bar>
</template>
<script>
	import xUniNavBar from '@/components/uni-components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		name: 'x-navbar',
		components: {
			xUniNavBar
		},
		props: {
			placeholder: {
				type: Boolean,
				default: false
			},
			statusBarShow: {
				type: Boolean,
				default: true
			},
			statusBarColor: {
				type: String,
				default: ''
			},
			navBarShow: {
				type: Boolean,
				default: true
			},
			bgColor: {
				type: String,
				default: '#FFF'
			},
			title: {
				type: String,
				default: '标题'
			},
			color: {
				type: String,
				default: '#000000'
			},
			leftIcon: {
				type: String,
				default: 'left'
			},
			rightText: {
				type: String,
				default: ''
			},
			fixed: {
				type: Boolean,
				default: true
			},
			autoBack: {
				type: Boolean,
				default: true
			},
			autoTitle: { //自动获取title
				type: Boolean,
				default: true
			}
		},
		computed: {
			statusBarHeight() {
				const style = {
					'z-index': 998
				};
				style.backgroundColor = this.statusBarColor ? this.statusBarColor : this.bgColor;
				style.height = uni.getSystemInfoSync().statusBarHeight + 'px';
				return style;
			},
			navBarTitleStyle() {
				const style = {
					'font-weight': 'bold',
					color: this.color
				};
				return style;
			},
			backgroundColor() {
				return this.bgColor;
			},
			rightTextStyle() {
				return {
					color: this.color,
					'font-size': '24rpx'
				}
			}
		},
		watch: {
			title(a, b) {
				this.currentPageTitle = a;
				uni.setNavigationBarTitle({
					title: a
				});
			}
		},
		data() {
			return {
				currentPageTitle: this.title
			};
		},
		methods: {
			leftClick() {
				if (this.autoBack) {
					const page = getCurrentPages()
					if (page && page.length > 1) {
						uni.navigateBack({
							delta: 1
						})
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
					return;
				}
				this.$emit('leftClick')
			},
			rightClick() {
				this.$emit('rightClick')
			}
		},
		mounted() {
			if (this.autoTitle) {
				const pages = getCurrentPages();
				const page = `/${pages[pages.length - 1]?.route ?? ''}`;
				const {
					path,
					title,
					visible
				} = ROUTES[page];
				this.currentPageTitle = title; //当前页面标题
			}
		}
	}
</script>
<style lang='scss' scoped>
	.navbar-fixed {
		position: fixed;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		/* #ifndef H5 */
		left: 0;
		right: 0;
		/* #endif */
	}

	.navbar-title {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border: 1px solid red;

	}

	.navbar-title-text {
		/* overflow: hidden; */
		/* white-space: nowrap; */
		/* text-overflow: ellipsis; */
		border: 1px solid red;
	}
</style>
