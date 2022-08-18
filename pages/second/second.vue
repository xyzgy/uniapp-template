<template>
	<view>
		<button @click="themeStore.updateTheme('light')">updateTabBarStyle</button>
		<view> {{$theme}}</view>
		<view> {{theme}}</view>
	</view>
</template>

<script setup>
	import {
		onLoad,
		onShow
	} from "@dcloudio/uni-app";
	import {
		useThemeStore
	} from "@/pinia/modules/theme.js";
	import {
		inject
	} from 'vue'
	import updateTabBarStyle from '@/hooks/updateTabBar.js'
	updateTabBarStyle()

	const themeStore = useThemeStore(),
		theme = inject('global');
	onShow(() => {
		console.log('lllllllll', theme)
	})
</script>

<style>

</style>
