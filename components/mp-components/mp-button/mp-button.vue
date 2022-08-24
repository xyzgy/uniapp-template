<template>
	<view class=" ">
		<button :open-type="openType" @getphonenumber="getphonenumber" @getuserinfo="getuserinfo" @error="error"
			@opensetting="opensetting" @launchapp="launchapp"></button>
	</view>
</template>
<script>
	export default {
		components: {},
		props: {
			openType: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			};
		},
		methods: {
			getphonenumber(res) {
				this.$emit("getphonenumber", res);
			},
			getuserinfo(res) {
				this.$emit("getuserinfo", res);
			},
			opensetting(res) {
				this.$emit("opensetting", res);
			},
			launchapp(res) {
				this.$emit("launchapp", res);
			},
			error(res) {
				this.$emit("error", res);
			},
		},
		onLoad(option) {

		},
	}
</script>
<style lang='scss' scoped>
</style>
