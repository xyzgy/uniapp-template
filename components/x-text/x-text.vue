<template>
	<view class="x-text">
		<view class="x-text-box" :style="[boxWidth]">
			<text class="x-text-box-text" :style="[textStyle]">{{text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			size: {
				type: Number,
				default: 24
			},
			text: {
				type: [String, Number],
				default: ''
			},
			align: {
				type: String,
				default: 'left'
			},
			lines: { //文字显示行数
				type: [String, Number],
				default: 1
			}
		},
		computed: {
			boxWidth() {
				const style = {
					'text-align': this.align
				};
				let size = this.size;
				// #ifdef H5
				if (size < 24) {
					if (size % 2 !== 0) {
						size = size + 1
					}
					const info = {
						22: '110%',
						20: '120%',
						18: '132%',
						16: '152%',
						14: '172%',
					}
					if (info[size]) {
						style.width = info[size]
					} else {
						style.width = `${ ((1-size/24) + 1)*100 }%`
					}

				}
				// #endif
				return style
			},
			textStyle() {
				const style = {},
					lines = this.lines;
				let size = this.size;
				style.fontSize = `${size}rpx`;
				if (size < 24) {
					// #ifdef H5
					if (size % 2 !== 0) {
						size = size + 1
					}
					style.fontSize = '24rpx';
					style.transform = `scale(${size/24})`;
					style.transformOrigin = 'left';
					// #endif
				}
				style['-webkit-line-clamp'] = lines;
				return style
			}
		}
	}
</script>
<style lang='scss' scoped>
	.x-text {
		overflow-x: hidden;
		display: inline-block;
		.x-text-box {
			text {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				word-break: break-all;
			}

		}
	}
</style>
