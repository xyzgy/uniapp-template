<template>
	<view class="content" :class="[theme]">
		<image class="logo" src="/static/logo.png"></image>
		<view>{{theme}}</view>
		<button @click="changeTheme">模式切换</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		onShow() {
			this.updateTabBarStyle()
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
