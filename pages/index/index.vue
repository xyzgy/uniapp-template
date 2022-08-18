<template>
	<view class="container" :class="[$theme.value]">
		<x-navbar rightText="xxx" bgColor="#fff" statusBarColor="#fff" :navBarShow="true"></x-navbar>
		<view> {{$theme}}</view>
		<button @click="mainStore.increment">pinia</button>
		<button @click="show=true">cccc{{mainStore.count}} {{mainStore.zcount}}</button>
		<!-- <x-popup :show="show">xxxxxxxxxxx</x-popup> -->
		
	</view>
</template>

<script setup>
	import {
		ref,
		getCurrentInstance,
		computed
	} from 'vue'
	import {
		getPicture,
		getSentence
	} from '@/api/index.js';
	import {
		useMainStore
	} from "@/pinia/modules/main.js";
	import {
		useThemeStore
	} from "@/pinia/modules/theme.js";
	import {
		onShow
	} from "@dcloudio/uni-app";

	import updateTabBarStyle from '@/hooks/updateTabBar.js'
	
	onShow(()=>{
		updateTabBarStyle()
	})

	const mainStore = useMainStore();
	// const {
	// 	count,
	// 	zcount
	// } = storeToRefs(mainStore)
	// const show = ref(true);
	// console.log(mainStore)
	// const xxx = computed(() => zcount)

	// console.log('ROUTES', ROUTES)
	// console.log('ROUTES', ROUTES_TABBAR)
	// console.log(proxy.$name)
	onShow(() => {
		const themeStore = useThemeStore();
	})
</script>

<style scoped lang="scss">
	.container {
		// background: #236666;
	}
</style>
