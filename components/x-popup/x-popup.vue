<template>
	<view>
		<!-- #ifndef H5 -->
		<page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
		<!-- #endif -->
		<uni-popup ref="popup" :type="mode" :background-color="bgColor" :is-mask-click="isMaskClick" @change="change">
			<view>
				<slot />
			</view>
		</uni-popup>
	</view>
</template>
<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			mode: {
				type: String,
				default: 'center'
			},
			isMaskClick: {
				type: Boolean,
				default: true
			},
			bgColor: {
				type: String,
				default: '#fff'
			}
		},
		data() {
			return {

			};
		},
		watch: {
			show(a, b) {
				if (a) {
					this.open()
				} else {
					this.close()
				}
			},
			$route() {
				// this.close()
			}
		},
		methods: {
			change(e) {
				if (e.show) {
					this.$emit('open');
				} else {
					this.$emit('close')
				}
			},
			open() {
				this.$refs.popup.open()
			},
			close() {
				this.$refs.popup.close()
			}
		},
		mounted() {
			this.show && this.open()
		},
		// #ifndef VUE3
		destroyed() {
			console.log('destroyed')
			this.close()
		},
		// #endif
		// #ifdef VUE3
		unmounted() {
			console.log('unmounted')
			this.close()
		},
		// #endif
	}
</script>
<style lang='scss' scoped>
</style>
