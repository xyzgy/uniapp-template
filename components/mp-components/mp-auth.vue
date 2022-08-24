<template>
	<view class="">
		<button class="btn" type="primary" @click="toAuth">授权</button>
	</view>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				
			};
		},
		methods: {
			toAuth() {

			}
		},
		mounted() {
			if (uni.getUserProfile) {
				this.canUseGetUserProfile = true;
			}
		}
	}
</script>
<style lang='scss' scoped>
</style>
