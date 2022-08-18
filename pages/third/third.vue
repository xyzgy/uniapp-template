<template>
	<view class=" " :class="[$theme.value]">

	</view>
</template>
<script setup>
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
	import updateTabBarStyle from '@/hooks/updateTabBar.js'
	onShow(() => {
		updateTabBarStyle()
	})
</script>
<style lang='scss' scoped>
</style>
