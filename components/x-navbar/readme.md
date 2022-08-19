### 基于 uni-nav-bar 开发
* autoTitle 基于 vite.config.js 实现
* satusBar 与 navBar 单独控制

```
<x-navbar/>

```

* 可通过setNavigationBarColor改变颜色

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