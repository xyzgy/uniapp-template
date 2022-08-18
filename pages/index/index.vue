<template>
	<view class="container">
		<x-navbar rightText="xxx" bgColor="transparent" statusBarColor="#fff" :navBarShow="true"></x-navbar>
		<x-video />
		<view> {{$theme}}</view>
		<button @click="mainStore.increment">pinia</button>
		<button @click="show=true">cccc{{mainStore.count}} {{mainStore.zcount}}</button>
		<!-- <x-popup :show="show">xxxxxxxxxxx</x-popup> -->
		<view style="height: 800rpx;border: 1px solid red;"></view>
		<view style="height: 800rpx;border: 1px solid red;"></view>
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
		onLoad,
		onShow
	} from "@dcloudio/uni-app";

	import updateTabBarStyle from '@/hooks/updateTabBar.js'
	updateTabBarStyle()

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
</script>

<style scoped lang="scss">
	.container {
		// background: #236666;
	}
</style>
