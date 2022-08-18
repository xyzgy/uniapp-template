<template>
	<view>
		<view v-if="statusBarShow">
			<view class="navbar-fixed" :style="[statusBarHeight]"></view>
			<template v-if="placeholder">
				<view :style="[statusBarHeight]"></view>
			</template>
		</view>
		<view v-if="navBarShow">
			<x-uni-nav-bar :backgroundColor="backgroundColor" :fixed="fixed" :title="currentPageTitle" :placeholder="placeholder"
				@clickLeft="leftClick" @clickRight="rightClick">
				<template v-slot:left>
					<slot name="left">
						<uni-icons :type="leftIcon" :size="24" :color="color"></uni-icons>
					</slot>
				</template>
				<slot>
					<view class="navbar-title" :style="[navBarTitleStyle]"><text>{{currentPageTitle}}</text></view>
				</slot>
				<template v-slot:right>
					<slot name="right">
						<view :style="[rightTextStyle]">
							{{rightText}}
						</view>
					</slot>
				</template>
			</x-uni-nav-bar>
		</view>
	</view>
</template>
<script>
	import xUniNavBar from '@/components/uni-components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		name: 'x-navbar',
		components:{xUniNavBar},
		props: {
			placeholder: {
				type: Boolean,
				default: true
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
		left: var(--window-left);
		right: var(--window-right);
	}

	.navbar-title {
		display: flex;
		flex: 1;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		overflow: hidden;

		text {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
</style>
