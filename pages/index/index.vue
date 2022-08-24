<template>
	<view class="content" :class="[theme]">
		<view>{{theme}}</view>
		<button @click="changeTheme">模式切换</button>
	</view>
</template>
<script>
	import {
		getHotCollection
	} from '@/api';
	import requestListData from '@/mixins/requestListData.js'
	export default {
		mixins: [requestListData],
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.req = getHotCollection;
			this.getList()
		},
		onShow() {
			this.updateTabBarStyle();
		},
		methods: {
			changeTheme() {
				this.$store.commit('UPDATE_THEME');
				this.updateTabBarStyle()
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
