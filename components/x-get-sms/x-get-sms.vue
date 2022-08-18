<template>
	<view @click="start">
		<text>{{ tips ? tips : '获取验证码' }}</text>
	</view>
</template>

<script>
	export default {
		name: "x-get-sms",
		props: {
			seconds: {
				type: Number,
				default: 60
			},
			// 尚未开始时提示
			startText: {
				type: String,
				default: '获取验证码'
			},
			// 正在倒计时中的提示
			changeText: {
				type: String,
				default: 'X秒重新获取'
			},
			// 倒计时结束时的提示
			endText: {
				type: String,
				default: '重新获取'
			},
		},
		data() {
			return {
				timer: null,
				secNum: this.seconds,
				canGetCode: true,
				tips: ''
			};
		},
		watch: {
			seconds: {
				immediate: true,
				handler(n) {
					this.secNum = n
				}
			}
		},
		methods: {
			start() {
				if(!this.canGetCode) return;
				this.canGetCode = false;
				this.clearTid();
				this.$emit('start');
				this.timer = setInterval(() => {
					if (--this.secNum) {
						// 用当前倒计时的秒数替换提示字符串中的"x"字母
						this.changeEvent(this.changeText.replace(/x|X/, this.secNum))
					} else {
						clearInterval(this.timer)
						this.timer = null
						this.changeEvent(this.endText)
						this.secNum = this.seconds
						this.$emit('end')
						this.canGetCode = true
					}
				}, 1000)
			},
			changeEvent(text) {
				this.tips = text;
				this.$emit('change', text)
			},
			clearTid() {
				if (this.timer) {
					clearInterval(this.timer)
					this.timer = null
				}
			}
		},
		mounted() {
			this.start();

		},
		// #ifndef VUE3
		destroyed() {
			this.clearTid();
		},
		// #endif
		// #ifdef VUE3
		unmounted() {
			this.clearTid();
		}
		// #endif

	}
</script>

<style>

</style>
