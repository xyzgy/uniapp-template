<template>
	<view class="x-fixed-wrap">
		<view class="x-fixed" :style="[fixedStyle]">
			<slot></slot>
			<view class="safe-area"></view>
		</view>
		<view :style="{height:height}"></view>
	</view>
</template>

<script>
	export default {
		name: "x-fixed",
		props: {
			bottom: {
				type: String,
				default: '0px'
			},
			top: {
				type: String,
				default: ''
			}
		},
		computed: {
			fixedStyle() {
				const style = {},
					{
						bottom,
						top
					} = this;
				if (bottom) {
					style.bottom = bottom
				}
				if (top) {
					style.top = top
				}
				return style
			}
		},
		data() {
			return {
				height: '0rpx'
			}
		},
		mounted() {
			this.$nextTick(() => {
				const query = uni.createSelectorQuery().in(this),
					_this = this;;
				query.select('.x-fixed').boundingClientRect(data => {
					_this.height = data.height + 'px';
				}).exec();
			})
		},
	}
</script>

<style lang="scss" scoped>
	.x-fixed-wrap {
		.x-fixed {
			position: fixed;
			left: var(--window-left);
			right: var(--window-right);
			bottom: 0;
		}
		.safe-area{
			
			
		}
	}
</style>
