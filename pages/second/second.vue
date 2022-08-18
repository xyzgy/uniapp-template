<template>
	<view :class="[$theme.value]">
		<button @click="changeTheme">主题变换</button>
		<view> {{$theme}}</view>
		<view> {{theme}}</view>
	</view>
</template>

<script setup>
	import {
		onShow
	} from "@dcloudio/uni-app";
	import {
		useThemeStore
	} from "@/pinia/modules/theme.js";
	import {
		inject,
		ref
	} from 'vue'
	import updateTabBarStyle from '@/hooks/updateTabBar.js'
	updateTabBarStyle()
	const theme = inject('global');
	const themeStore = useThemeStore();
	const changeTheme = () => {
		themeStore.updateTheme();
		updateTabBarStyle();
	}
	onShow(() => {
		console.log('xxxx')
	})
</script>

<style>

</style>
