## uni-ui + luch-request + vue3
* uview暂不支持vue3
* window目录存在时，css变量--window-left、--window-right值才会计算，否则一直为0

### 区别
* vue3 中 easycom 移除 ，自定义组件符合components/xxx/xxx.vue 可直接使用
* vue2 pages.json
```
"easycom": {
	"autoscan": true,
	"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
}
```

### 部分文件说明
* utils/app-plus  包含app更新 缓存计算，缓存清理
* utils/date.js  借助dayjs对 时间格式化
* vite.config.js  自定义打包，导出全局变量 ROUTES、 ROUTES_TABBAR 用于相关操作