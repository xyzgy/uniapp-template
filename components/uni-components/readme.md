### uni-ui的组件修改
####  uni-nav-bar  
* 增加statusBarPlaceholder、navBarPlaceholder字段  控制占位
* 增加titleStyle
* 受setNavigationBarColor影响
* 调整类名 class="uni-navbar__content"  解决nvue fixed无效
```
	uni.setNavigationBarColor({
		frontColor: '#ffffff',
		backgroundColor: '#ff0000',
		animation: {
			duration: 400,
			timingFunc: 'easeIn'
		}
	})
	```