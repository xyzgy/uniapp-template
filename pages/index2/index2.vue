<template>
	<view class="">

		<x-text text="123"/>
		
		<x-get-sms/>
		
		<view style="height: 800rpx;border: 1px solid red;"></view>
		<!-- <button @click="show=true">cccc{{show}}</button> -->
		<view style="height: 800rpx;border: 1px solid red;"></view>
		
		
		<x-fixed bottom="0">
			<view style="padding:20rpx;background-color: #ccc;">123456</view>
		</x-fixed>
	</view>
</template>
<script setup>
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
</script>
<style lang='scss' scoped>
</style>
