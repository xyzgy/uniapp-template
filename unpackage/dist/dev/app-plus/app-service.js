(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/main.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 18));\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 28));\n\nvar _uviewUi = _interopRequireDefault(__webpack_require__(/*! uview-ui */ 29));\n\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 154));\n\nvar _index = __webpack_require__(/*! @/utils/index.js */ 156);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}_vue.default.use(_uviewUi.default);\n\n\n\n_vue.default.config.productionTip = false;\n\n_vue.default.prototype.$store = _store.default;\n_vue.default.prototype.$copyClick = _index.copyClick;\n_vue.default.prototype.$navigator = uni.$u.route;\n_vue.default.prototype.$goBack = function (url) {var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  if (url) {\n    uni.reLaunch({\n      url: url });\n\n  } else {\n    setTimeout(function () {\n      var page = getCurrentPages();\n      if (page && page.length > 1) {\n        uni.navigateBack();\n      } else {\n\n\n\n\n        uni.navigateBack({\n          delta: 2 });\n\n\n      }\n    }, time);\n  }\n};\n\n_vue.default.prototype.$listLoadStatus = function (pager) {var _pager$page =\n\n\n  pager.page,page = _pager$page === void 0 ? 1 : _pager$page,_pager$page_size = pager.page_size,page_size = _pager$page_size === void 0 ? 10 : _pager$page_size,_pager$total_pages = pager.total_pages,total_pages = _pager$total_pages === void 0 ? 1 : _pager$total_pages,_pager$total_rows = pager.total_rows,total_rows = _pager$total_rows === void 0 ? 10 : _pager$total_rows;\n  var status = 'loading';\n  if (page === total_pages) {\n    status = 'nomore';\n  }\n  if (page < total_pages) {\n    status = 'loadmore';\n  }\n  if (total_pages === 0) {\n    status = 'nodata';\n  }\n  return status;\n\n};\n\n\n_vue.default.mixin({\n  computed: {\n    theme: function theme() {\n      return _store.default.state.theme;\n    },\n    isLightTheme: function isLightTheme() {\n      return _store.default.state.theme === 'light';\n    } },\n\n  methods: {\n    updateTabBarStyle: function updateTabBarStyle() {var _store$state =\n\n\n      _store.default.state,_store$state$theme = _store$state.theme,theme = _store$state$theme === void 0 ? 'light' : _store$state$theme,themeStatus = _store$state.themeStatus;\n      if (themeStatus) {\n        return;\n      }\n      uni.setTabBarStyle({\"light\":{\"color\":\"#333333\",\"selectedColor\":\"#FD2E22\",\"borderStyle\":\"white\",\"backgroundColor\":\"#FFFFFF\"},\"dark\":{\"color\":\"#333333\",\"selectedColor\":\"#FD2E22\",\"borderStyle\":\"white\",\"backgroundColor\":\"#FFFFFF\"},\"light-path\":[{\"index\":0,\"path\":\"/pages/index/index\",\"visible\":true,\"iconPath\":\"static/c1.png\",\"selectedIconPath\":\"static/c1.png\"},{\"index\":1,\"path\":\"/pages/second/second\",\"visible\":true,\"iconPath\":\"static/c2.png\",\"selectedIconPath\":\"static/c2.png\"},{\"index\":2,\"path\":\"/pages/third/third\",\"visible\":true,\"iconPath\":\"static/c3.png\",\"selectedIconPath\":\"static/c3.png\"}],\"dark-path\":[{\"index\":0,\"path\":\"/pages/index/index\",\"visible\":true,\"iconPath\":\"/static/c4.png\",\"selectedIconPath\":\"/static/c4.png\"},{\"index\":1,\"path\":\"/pages/second/second\",\"visible\":true,\"iconPath\":\"/static/c5.png\",\"selectedIconPath\":\"/static/c5.png\"},{\"index\":2,\"path\":\"/pages/third/third\",\"visible\":true,\"iconPath\":\"/static/c6.png\",\"selectedIconPath\":\"/static/c6.png\"}],\"/pages/index/index\":{\"visible\":true,\"path\":\"/pages/index/index\",\"index\":0},\"/pages/second/second\":{\"visible\":true,\"path\":\"/pages/second/second\",\"index\":1},\"/pages/third/third\":{\"visible\":true,\"path\":\"/pages/third/third\",\"index\":2}}[theme]);\n      _store.default.commit('UPDATE_THEME_STATUS', true);\n      var arr = {\"light\":{\"color\":\"#333333\",\"selectedColor\":\"#FD2E22\",\"borderStyle\":\"white\",\"backgroundColor\":\"#FFFFFF\"},\"dark\":{\"color\":\"#333333\",\"selectedColor\":\"#FD2E22\",\"borderStyle\":\"white\",\"backgroundColor\":\"#FFFFFF\"},\"light-path\":[{\"index\":0,\"path\":\"/pages/index/index\",\"visible\":true,\"iconPath\":\"static/c1.png\",\"selectedIconPath\":\"static/c1.png\"},{\"index\":1,\"path\":\"/pages/second/second\",\"visible\":true,\"iconPath\":\"static/c2.png\",\"selectedIconPath\":\"static/c2.png\"},{\"index\":2,\"path\":\"/pages/third/third\",\"visible\":true,\"iconPath\":\"static/c3.png\",\"selectedIconPath\":\"static/c3.png\"}],\"dark-path\":[{\"index\":0,\"path\":\"/pages/index/index\",\"visible\":true,\"iconPath\":\"/static/c4.png\",\"selectedIconPath\":\"/static/c4.png\"},{\"index\":1,\"path\":\"/pages/second/second\",\"visible\":true,\"iconPath\":\"/static/c5.png\",\"selectedIconPath\":\"/static/c5.png\"},{\"index\":2,\"path\":\"/pages/third/third\",\"visible\":true,\"iconPath\":\"/static/c6.png\",\"selectedIconPath\":\"/static/c6.png\"}],\"/pages/index/index\":{\"visible\":true,\"path\":\"/pages/index/index\",\"index\":0},\"/pages/second/second\":{\"visible\":true,\"path\":\"/pages/second/second\",\"index\":1},\"/pages/third/third\":{\"visible\":true,\"path\":\"/pages/third/third\",\"index\":2}}[\"\".concat(theme, \"-path\")];\n      arr.forEach(function (item, index) {\n        uni.setTabBarItem(item);\n      });\n    } },\n\n  onShow: function onShow() {\n    // const key = store.getters.theme;\n    // if (key === 'light') {\n    // \tuni.setNavigationBarColor({\n    // \t\tfrontColor: '#000000',\n    // \t\tbackgroundColor: '#f8f8f8'\n    // \t})\n    // } else {\n    // \tuni.setNavigationBarColor({\n    // \t\tfrontColor: '#ffffff',\n    // \t\tbackgroundColor: '#1B1A18'\n    // \t})\n    // }\n  } });\n\n\n\n\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJ1c2UiLCJ1VmlldyIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJwcm90b3R5cGUiLCIkc3RvcmUiLCJzdG9yZSIsIiRjb3B5Q2xpY2siLCJjb3B5Q2xpY2siLCIkbmF2aWdhdG9yIiwidW5pIiwiJHUiLCJyb3V0ZSIsIiRnb0JhY2siLCJ1cmwiLCJ0aW1lIiwicmVMYXVuY2giLCJzZXRUaW1lb3V0IiwicGFnZSIsImdldEN1cnJlbnRQYWdlcyIsImxlbmd0aCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiJGxpc3RMb2FkU3RhdHVzIiwicGFnZXIiLCJwYWdlX3NpemUiLCJ0b3RhbF9wYWdlcyIsInRvdGFsX3Jvd3MiLCJzdGF0dXMiLCJtaXhpbiIsImNvbXB1dGVkIiwidGhlbWUiLCJzdGF0ZSIsImlzTGlnaHRUaGVtZSIsIm1ldGhvZHMiLCJ1cGRhdGVUYWJCYXJTdHlsZSIsInRoZW1lU3RhdHVzIiwic2V0VGFiQmFyU3R5bGUiLCJST1VURVNfVEFCQkFSIiwiY29tbWl0IiwiYXJyIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsInNldFRhYkJhckl0ZW0iLCJvblNob3ciLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjs7QUFFQTs7O0FBR0E7O0FBRUEsOEQsd25DQUpBQSxhQUFJQyxHQUFKLENBQVFDLGdCQUFSOzs7O0FBUUFGLGFBQUlHLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUosYUFBSUssU0FBSixDQUFjQyxNQUFkLEdBQXVCQyxjQUF2QjtBQUNBUCxhQUFJSyxTQUFKLENBQWNHLFVBQWQsR0FBMkJDLGdCQUEzQjtBQUNBVCxhQUFJSyxTQUFKLENBQWNLLFVBQWQsR0FBMkJDLEdBQUcsQ0FBQ0MsRUFBSixDQUFPQyxLQUFsQztBQUNBYixhQUFJSyxTQUFKLENBQWNTLE9BQWQsR0FBd0IsVUFBU0MsR0FBVCxFQUEwQixLQUFaQyxJQUFZLHVFQUFMLEdBQUs7QUFDakQsTUFBSUQsR0FBSixFQUFTO0FBQ1JKLE9BQUcsQ0FBQ00sUUFBSixDQUFhO0FBQ1pGLFNBQUcsRUFBRUEsR0FETyxFQUFiOztBQUdBLEdBSkQsTUFJTztBQUNORyxjQUFVLENBQUMsWUFBTTtBQUNoQixVQUFNQyxJQUFJLEdBQUdDLGVBQWUsRUFBNUI7QUFDQSxVQUFJRCxJQUFJLElBQUlBLElBQUksQ0FBQ0UsTUFBTCxHQUFjLENBQTFCLEVBQTZCO0FBQzVCVixXQUFHLENBQUNXLFlBQUo7QUFDQSxPQUZELE1BRU87Ozs7O0FBS05YLFdBQUcsQ0FBQ1csWUFBSixDQUFpQjtBQUNoQkMsZUFBSyxFQUFFLENBRFMsRUFBakI7OztBQUlBO0FBQ0QsS0FkUyxFQWNQUCxJQWRPLENBQVY7QUFlQTtBQUNELENBdEJEOztBQXdCQWhCLGFBQUlLLFNBQUosQ0FBY21CLGVBQWQsR0FBZ0MsVUFBU0MsS0FBVCxFQUFnQjs7O0FBRzNDQSxPQUgyQyxDQUU5Q04sSUFGOEMsQ0FFOUNBLElBRjhDLDRCQUV2QyxDQUZ1QyxrQ0FHM0NNLEtBSDJDLENBRXBDQyxTQUZvQyxDQUVwQ0EsU0FGb0MsaUNBRXhCLEVBRndCLHlDQUczQ0QsS0FIMkMsQ0FFcEJFLFdBRm9CLENBRXBCQSxXQUZvQixtQ0FFTixDQUZNLDBDQUczQ0YsS0FIMkMsQ0FFSEcsVUFGRyxDQUVIQSxVQUZHLGtDQUVVLEVBRlY7QUFJL0MsTUFBSUMsTUFBTSxHQUFHLFNBQWI7QUFDQSxNQUFJVixJQUFJLEtBQUtRLFdBQWIsRUFBMEI7QUFDekJFLFVBQU0sR0FBRyxRQUFUO0FBQ0E7QUFDRCxNQUFJVixJQUFJLEdBQUdRLFdBQVgsRUFBd0I7QUFDdkJFLFVBQU0sR0FBRyxVQUFUO0FBQ0E7QUFDRCxNQUFJRixXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDdEJFLFVBQU0sR0FBRyxRQUFUO0FBQ0E7QUFDRCxTQUFPQSxNQUFQOztBQUVBLENBaEJEOzs7QUFtQkE3QixhQUFJOEIsS0FBSixDQUFVO0FBQ1RDLFVBQVEsRUFBRTtBQUNUQyxTQURTLG1CQUNEO0FBQ1AsYUFBT3pCLGVBQU0wQixLQUFOLENBQVlELEtBQW5CO0FBQ0EsS0FIUTtBQUlURSxnQkFKUywwQkFJTTtBQUNkLGFBQU8zQixlQUFNMEIsS0FBTixDQUFZRCxLQUFaLEtBQXNCLE9BQTdCO0FBQ0EsS0FOUSxFQUREOztBQVNURyxTQUFPLEVBQUU7QUFDUkMscUJBRFEsK0JBQ1k7OztBQUdmN0IscUJBQU0wQixLQUhTLG1DQUVsQkQsS0FGa0IsQ0FFbEJBLEtBRmtCLG1DQUVWLE9BRlUsc0JBRURLLFdBRkMsZ0JBRURBLFdBRkM7QUFJbkIsVUFBSUEsV0FBSixFQUFpQjtBQUNoQjtBQUNBO0FBQ0QxQixTQUFHLENBQUMyQixjQUFKLENBQW1CQyw2cENBQWEsQ0FBQ1AsS0FBRCxDQUFoQztBQUNBekIscUJBQU1pQyxNQUFOLENBQWEscUJBQWIsRUFBb0MsSUFBcEM7QUFDQSxVQUFNQyxHQUFHLEdBQUdGLDZwQ0FBYSxXQUFJUCxLQUFKLFdBQXpCO0FBQ0FTLFNBQUcsQ0FBQ0MsT0FBSixDQUFZLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUM1QmpDLFdBQUcsQ0FBQ2tDLGFBQUosQ0FBa0JGLElBQWxCO0FBQ0EsT0FGRDtBQUdBLEtBZE8sRUFUQTs7QUF5QlRHLFFBekJTLG9CQXlCQTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBdENRLEVBQVY7Ozs7O0FBMkNBQyxhQUFJQyxNQUFKLEdBQWEsS0FBYjtBQUNBLElBQU1DLEdBQUcsR0FBRyxJQUFJakQsWUFBSjtBQUNSK0MsWUFEUSxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuXHJcbmltcG9ydCB1VmlldyBmcm9tIFwidXZpZXctdWlcIjtcclxuVnVlLnVzZSh1Vmlldyk7XHJcblxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuXHJcbmltcG9ydCB7XHJcblx0Y29weUNsaWNrXHJcbn0gZnJvbSAnQC91dGlscy9pbmRleC5qcydcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5WdWUucHJvdG90eXBlLiRzdG9yZSA9IHN0b3JlO1xyXG5WdWUucHJvdG90eXBlLiRjb3B5Q2xpY2sgPSBjb3B5Q2xpY2s7XHJcblZ1ZS5wcm90b3R5cGUuJG5hdmlnYXRvciA9IHVuaS4kdS5yb3V0ZTtcclxuVnVlLnByb3RvdHlwZS4kZ29CYWNrID0gZnVuY3Rpb24odXJsLCB0aW1lID0gNTAwKSB7XHJcblx0aWYgKHVybCkge1xyXG5cdFx0dW5pLnJlTGF1bmNoKHtcclxuXHRcdFx0dXJsOiB1cmxcclxuXHRcdH0pXHJcblx0fSBlbHNlIHtcclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKClcclxuXHRcdFx0aWYgKHBhZ2UgJiYgcGFnZS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0ZGVsdGE6IDJcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSwgdGltZSlcclxuXHR9XHJcbn07XHJcblxyXG5WdWUucHJvdG90eXBlLiRsaXN0TG9hZFN0YXR1cyA9IGZ1bmN0aW9uKHBhZ2VyKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0cGFnZSA9IDEsIHBhZ2Vfc2l6ZSA9IDEwLCB0b3RhbF9wYWdlcyA9IDEsIHRvdGFsX3Jvd3MgPSAxMFxyXG5cdH0gPSBwYWdlcjtcclxuXHRsZXQgc3RhdHVzID0gJ2xvYWRpbmcnO1xyXG5cdGlmIChwYWdlID09PSB0b3RhbF9wYWdlcykge1xyXG5cdFx0c3RhdHVzID0gJ25vbW9yZSdcclxuXHR9XHJcblx0aWYgKHBhZ2UgPCB0b3RhbF9wYWdlcykge1xyXG5cdFx0c3RhdHVzID0gJ2xvYWRtb3JlJ1xyXG5cdH1cclxuXHRpZiAodG90YWxfcGFnZXMgPT09IDApIHtcclxuXHRcdHN0YXR1cyA9ICdub2RhdGEnXHJcblx0fVxyXG5cdHJldHVybiBzdGF0dXNcclxuXHJcbn07XHJcblxyXG5cclxuVnVlLm1peGluKHtcclxuXHRjb21wdXRlZDoge1xyXG5cdFx0dGhlbWUoKSB7XHJcblx0XHRcdHJldHVybiBzdG9yZS5zdGF0ZS50aGVtZVxyXG5cdFx0fSxcclxuXHRcdGlzTGlnaHRUaGVtZSgpIHtcclxuXHRcdFx0cmV0dXJuIHN0b3JlLnN0YXRlLnRoZW1lID09PSAnbGlnaHQnXHJcblx0XHR9XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHR1cGRhdGVUYWJCYXJTdHlsZSgpIHtcclxuXHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdHRoZW1lID0gJ2xpZ2h0JywgdGhlbWVTdGF0dXNcclxuXHRcdFx0fSA9IHN0b3JlLnN0YXRlO1xyXG5cdFx0XHRpZiAodGhlbWVTdGF0dXMpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dW5pLnNldFRhYkJhclN0eWxlKFJPVVRFU19UQUJCQVJbdGhlbWVdKTtcclxuXHRcdFx0c3RvcmUuY29tbWl0KCdVUERBVEVfVEhFTUVfU1RBVFVTJywgdHJ1ZSlcclxuXHRcdFx0Y29uc3QgYXJyID0gUk9VVEVTX1RBQkJBUltgJHt0aGVtZX0tcGF0aGBdO1xyXG5cdFx0XHRhcnIuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHR1bmkuc2V0VGFiQmFySXRlbShpdGVtKVxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25TaG93KCkge1xyXG5cdFx0Ly8gY29uc3Qga2V5ID0gc3RvcmUuZ2V0dGVycy50aGVtZTtcclxuXHRcdC8vIGlmIChrZXkgPT09ICdsaWdodCcpIHtcclxuXHRcdC8vIFx0dW5pLnNldE5hdmlnYXRpb25CYXJDb2xvcih7XHJcblx0XHQvLyBcdFx0ZnJvbnRDb2xvcjogJyMwMDAwMDAnLFxyXG5cdFx0Ly8gXHRcdGJhY2tncm91bmRDb2xvcjogJyNmOGY4ZjgnXHJcblx0XHQvLyBcdH0pXHJcblx0XHQvLyB9IGVsc2Uge1xyXG5cdFx0Ly8gXHR1bmkuc2V0TmF2aWdhdGlvbkJhckNvbG9yKHtcclxuXHRcdC8vIFx0XHRmcm9udENvbG9yOiAnI2ZmZmZmZicsXHJcblx0XHQvLyBcdFx0YmFja2dyb3VuZENvbG9yOiAnIzFCMUExOCdcclxuXHRcdC8vIFx0fSlcclxuXHRcdC8vIH1cclxuXHR9XHJcbn0pXHJcblxyXG5cclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcclxuXHQuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages.json ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}


if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/second/second', function () {return Vue.extend(__webpack_require__(/*! pages/second/second.vue?mpType=page */ 8).default);});
__definePage('pages/third/third', function () {return Vue.extend(__webpack_require__(/*! pages/third/third.vue?mpType=page */ 13).default);});

/***/ }),
/* 2 */
/*!**************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/index/index.vue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ29MO0FBQ3BMLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!********************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "content"),
      class: _vm._$s(0, "c", [_vm.theme]),
      attrs: { _i: 0 }
    },
    [
      _c("view", [_vm._v(_vm._$s(1, "t0-0", _vm._s(_vm.theme)))]),
      _c("button", { attrs: { _i: 2 }, on: { click: _vm.changeTheme } })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!**************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWduQixDQUFnQiw4bkJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      title: 'Hello' };\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  onShow: function onShow() {\n    this.updateTabBarStyle();\n  },\n  methods: {\n    changeTheme: function changeTheme() {\n      this.$store.commit('UPDATE_THEME');\n      this.updateTabBarStyle();\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBUUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxvQkFEQTs7QUFHQSxHQUxBO0FBTUEsUUFOQSxvQkFNQTs7QUFFQSxHQVJBO0FBU0EsUUFUQSxvQkFTQTtBQUNBO0FBQ0EsR0FYQTtBQVlBO0FBQ0EsZUFEQSx5QkFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBLEVBWkEsRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGVudFwiIDpjbGFzcz1cIlt0aGVtZV1cIj5cclxuXHRcdDx2aWV3Pnt7dGhlbWV9fTwvdmlldz5cclxuXHRcdDxidXR0b24gQGNsaWNrPVwiY2hhbmdlVGhlbWVcIj7mqKHlvI/liIfmjaI8L2J1dHRvbj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGl0bGU6ICdIZWxsbydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHJcblx0XHR9LFxyXG5cdFx0b25TaG93KCkge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVRhYkJhclN0eWxlKClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNoYW5nZVRoZW1lKCkge1xyXG5cdFx0XHRcdHRoaXMuJHN0b3JlLmNvbW1pdCgnVVBEQVRFX1RIRU1FJyk7XHJcblx0XHRcdFx0dGhpcy51cGRhdGVUYWJCYXJTdHlsZSgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmxvZ28ge1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1MHJweDtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWFyZWEge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzZycHg7XHJcblx0XHRjb2xvcjogIzhmOGY5NDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/*!****************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/second/second.vue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _second_vue_vue_type_template_id_e12dd0d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./second.vue?vue&type=template&id=e12dd0d4&mpType=page */ 9);\n/* harmony import */ var _second_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _second_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _second_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _second_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _second_vue_vue_type_template_id_e12dd0d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _second_vue_vue_type_template_id_e12dd0d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _second_vue_vue_type_template_id_e12dd0d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/second/second.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ29MO0FBQ3BMLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vc2Vjb25kLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMTJkZDBkNCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2Vjb25kLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZWNvbmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9zZWNvbmQvc2Vjb25kLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**********************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/second/second.vue?vue&type=template&id=e12dd0d4&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_template_id_e12dd0d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./second.vue?vue&type=template&id=e12dd0d4&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_template_id_e12dd0d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_template_id_e12dd0d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_template_id_e12dd0d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_template_id_e12dd0d4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/second/second.vue?vue&type=template&id=e12dd0d4&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { class: _vm._$s(0, "c", [_vm.theme]), attrs: { _i: 0 } })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!****************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/second/second.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./second.vue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_second_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWluQixDQUFnQiwrbkJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2Vjb25kLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlY29uZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/second/second.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n\n\n  },\n  methods: {},\n\n\n  onShow: function onShow() {\n    this.updateTabBarStyle();\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2Vjb25kL3NlY29uZC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BO0FBQ0EsTUFEQSxrQkFDQTtBQUNBOzs7QUFHQSxHQUxBO0FBTUEsYUFOQTs7O0FBU0EsUUFUQSxvQkFTQTtBQUNBO0FBQ0EsR0FYQSxFIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IDpjbGFzcz1cIlt0aGVtZV1cIj5cclxuXHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHJcblx0XHR9LFxyXG5cdFx0b25TaG93KCkge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVRhYkJhclN0eWxlKClcclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/third/third.vue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _third_vue_vue_type_template_id_089f28b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third.vue?vue&type=template&id=089f28b4&mpType=page */ 14);\n/* harmony import */ var _third_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third.vue?vue&type=script&lang=js&mpType=page */ 16);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _third_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _third_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _third_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _third_vue_vue_type_template_id_089f28b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _third_vue_vue_type_template_id_089f28b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _third_vue_vue_type_template_id_089f28b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/third/third.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ29MO0FBQ3BMLGdCQUFnQiwyTEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3RoaXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wODlmMjhiNCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGhpcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RoaXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGhpcmQvdGhpcmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!********************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/third/third.vue?vue&type=template&id=089f28b4&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_third_vue_vue_type_template_id_089f28b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./third.vue?vue&type=template&id=089f28b4&mpType=page */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_third_vue_vue_type_template_id_089f28b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_third_vue_vue_type_template_id_089f28b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_third_vue_vue_type_template_id_089f28b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_third_vue_vue_type_template_id_089f28b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/third/third.vue?vue&type=template&id=089f28b4&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { class: _vm._$s(0, "c", [_vm.theme]), attrs: { _i: 0 } })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!**************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/third/third.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_third_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./third.vue?vue&type=script&lang=js&mpType=page */ 17);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_third_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_third_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_third_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_third_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_third_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWduQixDQUFnQiw4bkJBQUcsRUFBQyIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGhpcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGhpcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/DEMO/myTemplate/uniapp-template-vue3-vue2/pages/third/third.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n\n\n  },\n  methods: {},\n\n\n  onShow: function onShow() {\n    this.updateTabBarStyle();\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGhpcmQvdGhpcmQudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTs7O0FBR0EsR0FMQTtBQU1BLGFBTkE7OztBQVNBLFFBVEEsb0JBU0E7QUFDQTtBQUNBLEdBWEEsRSIsImZpbGUiOiIxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyA6Y2xhc3M9XCJbdGhlbWVdXCI+XHJcblxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpIHtcclxuXHRcdFx0dGhpcy51cGRhdGVUYWJCYXJTdHlsZSgpXHJcblx0XHR9LFxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/App.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 19);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDOEs7QUFDOUssZ0JBQWdCLDJMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 20);\n/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJrQixDQUFnQixpbkJBQUcsRUFBQyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/DEMO/myTemplate/uniapp-template-vue3-vue2/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\nvar _index = __webpack_require__(/*! @/utils/app-plus/index.js */ 22);var _default =\n\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:7\");\n    // this.$store.commit('UPDATE_THEME', uni.getStorageSync('CURRENT_APP_THEME'))\n\n    // appUpdate();\n\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:14\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:17\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7QUFFQSxzRTs7QUFFZTtBQUNkQSxVQUFRLEVBQUUsb0JBQVc7QUFDcEIsaUJBQVksWUFBWjtBQUNBOztBQUVBOztBQUVBLEdBUGE7QUFRZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVZhO0FBV2RDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0FiYSxFIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7YXBwVXBkYXRlfSBmcm9tICdAL3V0aWxzL2FwcC1wbHVzL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRvbkxhdW5jaDogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKVxuXHRcdC8vIHRoaXMuJHN0b3JlLmNvbW1pdCgnVVBEQVRFX1RIRU1FJywgdW5pLmdldFN0b3JhZ2VTeW5jKCdDVVJSRU5UX0FQUF9USEVNRScpKVxuXG5cdFx0Ly8gYXBwVXBkYXRlKCk7XG5cblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 22 */
/*!****************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/utils/app-plus/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });Object.defineProperty(exports, \"calcLocalCache\", { enumerable: true, get: function get() {return _cache.calcLocalCache;} });Object.defineProperty(exports, \"clearLocalCache\", { enumerable: true, get: function get() {return _cache.clearLocalCache;} });Object.defineProperty(exports, \"clearCacheFile\", { enumerable: true, get: function get() {return _cache.clearCacheFile;} });Object.defineProperty(exports, \"appUpdate\", { enumerable: true, get: function get() {return _update.default;} });exports.getAppNo = void 0;\nvar _cache = __webpack_require__(/*! ./cache.js */ 23);\n\n\n\n\nvar _update = _interopRequireDefault(__webpack_require__(/*! ./update.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\nvar getAppNo = function getAppNo(callback) {\n  plus.runtime.getProperty(plus.runtime.appid, function (inf) {\n    callback && callback({\n      versionCode: inf.versionCode,\n      versionName: inf.version });\n\n  });\n};exports.getAppNo = getAppNo;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYXBwLXBsdXMvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0QXBwTm8iLCJjYWxsYmFjayIsInBsdXMiLCJydW50aW1lIiwiZ2V0UHJvcGVydHkiLCJhcHBpZCIsImluZiIsInZlcnNpb25Db2RlIiwidmVyc2lvbk5hbWUiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7O0FBS0EsaUY7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRCxFQUFZO0FBQzVCQyxNQUFJLENBQUNDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QkYsSUFBSSxDQUFDQyxPQUFMLENBQWFFLEtBQXRDLEVBQTZDLFVBQVNDLEdBQVQsRUFBYztBQUMxREwsWUFBUSxJQUFJQSxRQUFRLENBQUM7QUFDcEJNLGlCQUFXLEVBQUVELEdBQUcsQ0FBQ0MsV0FERztBQUVwQkMsaUJBQVcsRUFBRUYsR0FBRyxDQUFDRyxPQUZHLEVBQUQsQ0FBcEI7O0FBSUEsR0FMRDtBQU1BLENBUEQsQyIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge1xyXG5cdGNhbGNMb2NhbENhY2hlLFxyXG5cdGNsZWFyTG9jYWxDYWNoZSxcclxuXHRjbGVhckNhY2hlRmlsZVxyXG59IGZyb20gJy4vY2FjaGUuanMnO1xyXG5pbXBvcnQgYXBwVXBkYXRlIGZyb20gJy4vdXBkYXRlLmpzJztcclxuXHJcbmNvbnN0IGdldEFwcE5vID0gKGNhbGxiYWNrKT0+e1xyXG5cdHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsIGZ1bmN0aW9uKGluZikge1xyXG5cdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soe1xyXG5cdFx0XHR2ZXJzaW9uQ29kZTogaW5mLnZlcnNpb25Db2RlLFxyXG5cdFx0XHR2ZXJzaW9uTmFtZTogaW5mLnZlcnNpb25cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdGNhbGNMb2NhbENhY2hlLFxyXG5cdGNsZWFyTG9jYWxDYWNoZSxcclxuXHRjbGVhckNhY2hlRmlsZSxcclxuXHRhcHBVcGRhdGUsXHJcblx0Z2V0QXBwTm9cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!****************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/utils/app-plus/cache.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.clearCacheFile = exports.clearLocalCache = exports.calcLocalCache = void 0;\nvar calcLocalCache = function calcLocalCache() {\n  // 计算缓存\n  return new Promise(function (resolve, reject) {\n    uni.getSavedFileList({\n      success: function success(res) {\n        var size = 0;\n        var fileSizeString = \"0B\";\n        res.fileList.forEach(function (item) {\n          size += item.size;\n        });\n        if (size == 0) {\n          fileSizeString = \"0B\";\n        } else if (size < 1024) {\n          fileSizeString = size + \"B\";\n        } else if (size < 1048576) {\n          fileSizeString = (size / 1024).toFixed(2) + \"KB\";\n        } else if (size < 1073741824) {\n          fileSizeString = (size / 1048576).toFixed(2) + \"MB\";\n        } else {\n          fileSizeString = (size / 1073741824).toFixed(2) + \"GB\";\n        }\n        __f__(\"log\", fileSizeString, \" at utils/app-plus/cache.js:23\");\n        resolve(fileSizeString);\n      } });\n\n  });\n};exports.calcLocalCache = calcLocalCache;\n\nvar clearLocalCache = function clearLocalCache() {\n  return new Promise(function (resolve, reject) {\n    uni.showLoading({\n      title: '开始清理' });\n\n    var os = plus.os.name;\n    if (os == 'Android') {\n      var main = plus.android.runtimeMainActivity();\n      var sdRoot = main.getCacheDir();\n      var files = plus.android.invoke(sdRoot, \"listFiles\");\n      var len = files.length;\n      for (var i = 0; i < len; i++) {\n        var filePath = '' + files[i]; // 没有找到合适的方法获取路径，这样写可以转成文件路径\n        plus.io.resolveLocalFileSystemURL(filePath, function (entry) {\n          if (entry.isDirectory) {\n            entry.removeRecursively(function (entry) {//递归删除其下的所有文件及子目录\n              uni.hideLoading();\n              uni.showToast({\n                title: '缓存清理完成',\n                duration: 2000 });\n\n              resolve();\n            }, function (e) {\n              __f__(\"log\", e.message, \" at utils/app-plus/cache.js:53\");\n            });\n          } else {\n            entry.remove();\n          }\n        }, function (e) {\n          uni.hideLoading();\n          uni.showToast({\n            title: '清理失败，稍后再试',\n            duration: 2000 });\n\n          reject(e);\n          __f__(\"log\", '文件路径读取失败', \" at utils/app-plus/cache.js:65\");\n        });\n      }\n    } else {// ios\n      plus.cache.clear(function () {\n        uni.hideLoading();\n        uni.showToast({\n          title: '缓存清理完成',\n          duration: 2000 });\n\n        resolve();\n      });\n    }\n  });\n};exports.clearLocalCache = clearLocalCache;\n\nvar clearCacheFile = function clearCacheFile() {\n  return new Promise(function (resolve, reject) {\n    uni.getSavedFileList({\n      success: function success(res) {\n        var proList = [];\n        __f__(\"log\", res.fileList, \" at utils/app-plus/cache.js:86\");\n        res.fileList.forEach(function (item) {\n          var promise = new Promise(function (resolve1, reject1) {\n            uni.removeSavedFile({\n              filePath: item.filePath,\n              complete: function complete() {\n                resolve1();\n              } });\n\n          });\n          proList.push(promise);\n        });\n        Promise.all(proList).then(function (res) {\n          resolve();\n        });\n      } });\n\n  });\n};exports.clearCacheFile = clearCacheFile;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYXBwLXBsdXMvY2FjaGUuanMiXSwibmFtZXMiOlsiY2FsY0xvY2FsQ2FjaGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVuaSIsImdldFNhdmVkRmlsZUxpc3QiLCJzdWNjZXNzIiwicmVzIiwic2l6ZSIsImZpbGVTaXplU3RyaW5nIiwiZmlsZUxpc3QiLCJmb3JFYWNoIiwiaXRlbSIsInRvRml4ZWQiLCJjbGVhckxvY2FsQ2FjaGUiLCJzaG93TG9hZGluZyIsInRpdGxlIiwib3MiLCJwbHVzIiwibmFtZSIsIm1haW4iLCJhbmRyb2lkIiwicnVudGltZU1haW5BY3Rpdml0eSIsInNkUm9vdCIsImdldENhY2hlRGlyIiwiZmlsZXMiLCJpbnZva2UiLCJsZW4iLCJsZW5ndGgiLCJpIiwiZmlsZVBhdGgiLCJpbyIsInJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwiLCJlbnRyeSIsImlzRGlyZWN0b3J5IiwicmVtb3ZlUmVjdXJzaXZlbHkiLCJoaWRlTG9hZGluZyIsInNob3dUb2FzdCIsImR1cmF0aW9uIiwiZSIsIm1lc3NhZ2UiLCJyZW1vdmUiLCJjYWNoZSIsImNsZWFyIiwiY2xlYXJDYWNoZUZpbGUiLCJwcm9MaXN0IiwicHJvbWlzZSIsInJlc29sdmUxIiwicmVqZWN0MSIsInJlbW92ZVNhdmVkRmlsZSIsImNvbXBsZXRlIiwicHVzaCIsImFsbCIsInRoZW4iXSwibWFwcGluZ3MiOiI7QUFDTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDbkM7QUFDQSxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkNDLE9BQUcsQ0FBQ0MsZ0JBQUosQ0FBcUI7QUFDcEJDLGFBQU8sRUFBRSxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2pCLFlBQUlDLElBQUksR0FBRyxDQUFYO0FBQ0EsWUFBSUMsY0FBYyxHQUFHLElBQXJCO0FBQ0FGLFdBQUcsQ0FBQ0csUUFBSixD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UDtBQXNCQSxDQXZCTSxDIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjb25zdCBjYWxjTG9jYWxDYWNoZSA9ICgpID0+IHtcclxuXHQvLyDorqHnrpfnvJPlrZhcclxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0dW5pLmdldFNhdmVkRmlsZUxpc3Qoe1xyXG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0bGV0IHNpemUgPSAwXHJcblx0XHRcdFx0bGV0IGZpbGVTaXplU3RyaW5nID0gXCIwQlwiO1xyXG5cdFx0XHRcdHJlcy5maWxlTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0c2l6ZSArPSBpdGVtLnNpemVcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGlmIChzaXplID09IDApIHtcclxuXHRcdFx0XHRcdGZpbGVTaXplU3RyaW5nID0gXCIwQlwiO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc2l6ZSA8IDEwMjQpIHtcclxuXHRcdFx0XHRcdGZpbGVTaXplU3RyaW5nID0gc2l6ZSArIFwiQlwiO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc2l6ZSA8IDEwNDg1NzYpIHtcclxuXHRcdFx0XHRcdGZpbGVTaXplU3RyaW5nID0gKHNpemUgLyAxMDI0KS50b0ZpeGVkKDIpICsgXCJLQlwiO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc2l6ZSA8IDEwNzM3NDE4MjQpIHtcclxuXHRcdFx0XHRcdGZpbGVTaXplU3RyaW5nID0gKHNpemUgLyAxMDQ4NTc2KS50b0ZpeGVkKDIpICsgXCJNQlwiO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRmaWxlU2l6ZVN0cmluZyA9IChzaXplIC8gMTA3Mzc0MTgyNCkudG9GaXhlZCgyKSArIFwiR0JcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZmlsZVNpemVTdHJpbmcpXHJcblx0XHRcdFx0cmVzb2x2ZShmaWxlU2l6ZVN0cmluZylcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJMb2NhbENhY2hlID0gKCkgPT4ge1xyXG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHR0aXRsZTogJ+W8gOWni+a4heeQhidcclxuXHRcdH0pXHJcblx0XHRsZXQgb3MgPSBwbHVzLm9zLm5hbWU7XHJcblx0XHRpZiAob3MgPT0gJ0FuZHJvaWQnKSB7XHJcblx0XHRcdGxldCBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcclxuXHRcdFx0bGV0IHNkUm9vdCA9IG1haW4uZ2V0Q2FjaGVEaXIoKTtcclxuXHRcdFx0bGV0IGZpbGVzID0gcGx1cy5hbmRyb2lkLmludm9rZShzZFJvb3QsIFwibGlzdEZpbGVzXCIpO1xyXG5cdFx0XHRsZXQgbGVuID0gZmlsZXMubGVuZ3RoO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IGZpbGVQYXRoID0gJycgKyBmaWxlc1tpXTsgLy8g5rKh5pyJ5om+5Yiw5ZCI6YCC55qE5pa55rOV6I635Y+W6Lev5b6E77yM6L+Z5qC35YaZ5Y+v5Lul6L2s5oiQ5paH5Lu26Lev5b6EXHJcblx0XHRcdFx0cGx1cy5pby5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKGZpbGVQYXRoLCBmdW5jdGlvbihlbnRyeSkge1xyXG5cdFx0XHRcdFx0aWYgKGVudHJ5LmlzRGlyZWN0b3J5KSB7XHJcblx0XHRcdFx0XHRcdGVudHJ5LnJlbW92ZVJlY3Vyc2l2ZWx5KGZ1bmN0aW9uKGVudHJ5KSB7IC8v6YCS5b2S5Yig6Zmk5YW25LiL55qE5omA5pyJ5paH5Lu25Y+K5a2Q55uu5b2VXHJcblx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+e8k+WtmOa4heeQhuWujOaIkCcsXHJcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0XHR9LCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZS5tZXNzYWdlKVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGVudHJ5LnJlbW92ZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5riF55CG5aSx6LSl77yM56iN5ZCO5YaN6K+VJyxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDBcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmVqZWN0KGUpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5paH5Lu26Lev5b6E6K+75Y+W5aSx6LSlJylcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHsgLy8gaW9zXHJcblx0XHRcdHBsdXMuY2FjaGUuY2xlYXIoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+e8k+WtmOa4heeQhuWujOaIkCcsXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJDYWNoZUZpbGUgPSAoKSA9PiB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHVuaS5nZXRTYXZlZEZpbGVMaXN0KHtcclxuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHByb0xpc3QgPSBbXVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5maWxlTGlzdClcclxuXHRcdFx0XHRyZXMuZmlsZUxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZTEsIHJlamVjdDEpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLnJlbW92ZVNhdmVkRmlsZSh7XHJcblx0XHRcdFx0XHRcdFx0ZmlsZVBhdGg6IGl0ZW0uZmlsZVBhdGgsXHJcblx0XHRcdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUxKClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cHJvTGlzdC5wdXNoKHByb21pc2UpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRQcm9taXNlLmFsbChwcm9MaXN0KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*****************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/utils/app-plus/update.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = _default;\nvar _request = __webpack_require__(/*! ./request.js */ 25);\nvar platform = uni.getSystemInfoSync().platform;\n// 主颜色\nvar $mainColor = _request.appUpdateColor || \"FF5B78\";\n// 弹窗图标url\nvar $iconUrl = _request.appUpdateIcon;\n\n// 获取当前应用的版本号\nvar getCurrentNo = function getCurrentNo(callback) {\n  // 获取本地应用资源版本号\n  plus.runtime.getProperty(plus.runtime.appid, function (inf) {\n    callback && callback({\n      versionCode: inf.versionCode,\n      versionName: inf.version });\n\n  });\n};\n// 从服务器下载应用资源包（wgt文件）\nvar getDownload = function getDownload(data) {\n  var dtask;\n  if (data.updateType == 'forcibly' || data.updateType == 'solicit') {\n    var popupData = {\n      progress: true,\n      buttonNum: 2 };\n\n    if (data.updateType == 'forcibly') {\n      popupData.buttonNum = 0;\n    }\n    var lastProgressValue = 0;\n    var popupObj = downloadPopup(popupData);\n    dtask = plus.downloader.createDownload(data.downloadUrl, {\n      filename: \"_doc/update/\" },\n    function (download, status) {\n      if (status == 200) {\n        popupObj.change({\n          progressValue: 100,\n          progressTip: \"正在安装文件...\",\n          progress: true,\n          buttonNum: 0 });\n\n        plus.runtime.install(download.filename, { force: data.isForce }, function () {\n          popupObj.change({\n            contentText: \"应用资源更新完成！\",\n            buttonNum: 1,\n            progress: false });\n\n        }, function (e) {\n          popupObj.cancel();\n          plus.nativeUI.alert(\"安装文件失败[\" + e.code + \"]：\" + e.message);\n        });\n      } else {\n        popupObj.change({\n          contentText: \"文件下载失败...\",\n          buttonNum: 1,\n          progress: false });\n\n      }\n    });\n    dtask.start();\n    dtask.addEventListener(\"statechanged\", function (task, status) {\n      switch (task.state) {\n        case 1: // 开始\n          popupObj.change({\n            progressValue: 0,\n            progressTip: \"准备下载...\",\n            progress: true });\n\n          break;\n        case 2: // 已连接到服务器  \n          popupObj.change({\n            progressValue: 0,\n            progressTip: \"开始下载...\",\n            progress: true });\n\n          break;\n        case 3:\n          var progress = parseInt(task.downloadedSize / task.totalSize * 100);\n          if (progress - lastProgressValue >= 2) {\n            lastProgressValue = progress;\n            popupObj.change({\n              progressValue: progress,\n              progressTip: \"已下载\" + progress + \"%\",\n              progress: true });\n\n          }\n          break;}\n\n    });\n    // 取消下载\n    popupObj.cancelDownload = function () {\n      dtask && dtask.abort();\n      uni.showToast({\n        title: \"已取消下载\",\n        icon: \"none\" });\n\n    };\n    // 重启APP\n    popupObj.reboot = function () {\n      plus.runtime.restart();\n    };\n  } else if (data.updateType == \"silent\") {\n    dtask = plus.downloader.createDownload(data.downloadUrl, {\n      filename: \"_doc/update/\" },\n    function (download, status) {\n      if (status == 200) {\n        plus.runtime.install(download.filename, { force: data.isForce }, function () {\n          __f__(\"log\", \"应用资源更新完成\", \" at utils/app-plus/update.js:108\");\n        }, function (e) {\n          plus.nativeUI.alert(\"安装文件失败[\" + e.code + \"]：\" + e.message);\n        });\n      } else {\n        plus.nativeUI.alert(\"文件下载失败...\");\n      }\n    });\n    dtask.start();\n  }\n};\n// 文字换行\nfunction drawtext(text, maxWidth) {\n  var textArr = text.split(\"\");\n  var len = textArr.length;\n  // 上个节点\n  var previousNode = 0;\n  // 记录节点宽度\n  var nodeWidth = 0;\n  // 文本换行数组\n  var rowText = [];\n  // 如果是字母，侧保存长度\n  var letterWidth = 0;\n  // 汉字宽度\n  var chineseWidth = 14;\n  // otherFont宽度\n  var otherWidth = 7;\n  for (var i = 0; i < len; i++) {\n    if (/[\\u4e00-\\u9fa5]|[\\uFE30-\\uFFA0]/g.test(textArr[i])) {\n      if (letterWidth > 0) {\n        if (nodeWidth + chineseWidth + letterWidth * otherWidth > maxWidth) {\n          rowText.push({\n            type: \"text\",\n            content: text.substring(previousNode, i) });\n\n          previousNode = i;\n          nodeWidth = chineseWidth;\n          letterWidth = 0;\n        } else {\n          nodeWidth += chineseWidth + letterWidth * otherWidth;\n          letterWidth = 0;\n        }\n      } else {\n        if (nodeWidth + chineseWidth > maxWidth) {\n          rowText.push({\n            type: \"text\",\n            content: text.substring(previousNode, i) });\n\n          previousNode = i;\n          nodeWidth = chineseWidth;\n        } else {\n          nodeWidth += chineseWidth;\n        }\n      }\n    } else {\n      if (/\\n/g.test(textArr[i])) {\n        rowText.push({\n          type: \"break\",\n          content: text.substring(previousNode, i) });\n\n        previousNode = i + 1;\n        nodeWidth = 0;\n        letterWidth = 0;\n      } else if (textArr[i] == \"\\\\\" && textArr[i + 1] == \"n\") {\n        rowText.push({\n          type: \"break\",\n          content: text.substring(previousNode, i) });\n\n        previousNode = i + 2;\n        nodeWidth = 0;\n        letterWidth = 0;\n      } else if (/[a-zA-Z0-9]/g.test(textArr[i])) {\n        letterWidth += 1;\n        if (nodeWidth + letterWidth * otherWidth > maxWidth) {\n          rowText.push({\n            type: \"text\",\n            content: text.substring(previousNode, i + 1 - letterWidth) });\n\n          previousNode = i + 1 - letterWidth;\n          nodeWidth = letterWidth * otherWidth;\n          letterWidth = 0;\n        }\n      } else {\n        if (nodeWidth + otherWidth > maxWidth) {\n          rowText.push({\n            type: \"text\",\n            content: text.substring(previousNode, i) });\n\n          previousNode = i;\n          nodeWidth = otherWidth;\n        } else {\n          nodeWidth += otherWidth;\n        }\n      }\n    }\n  }\n  if (previousNode < len) {\n    rowText.push({\n      type: \"text\",\n      content: text.substring(previousNode, len) });\n\n  }\n  return rowText;\n}\n// 是否更新弹窗\nfunction updatePopup(data, callback) {\n  // 弹窗遮罩层\n  var maskLayer = new plus.nativeObj.View(\"maskLayer\", { //先创建遮罩层\n    top: '0px',\n    left: '0px',\n    height: '100%',\n    width: '100%',\n    backgroundColor: 'rgba(0,0,0,0.5)' });\n\n\n  // 以下为计算菜单的nview绘制布局，为固定算法，使用者无关关心\n  var screenWidth = plus.screen.resolutionWidth;\n  var screenHeight = plus.screen.resolutionHeight;\n  //弹窗容器宽度\n  var popupViewWidth = screenWidth * 0.7;\n  // 弹窗容器的Padding\n  var viewContentPadding = 20;\n  // 弹窗容器的宽度\n  var viewContentWidth = parseInt(popupViewWidth - viewContentPadding * 2);\n  // 描述的列表\n  var descriptionList = drawtext(data.versionInfo, viewContentWidth);\n  // 弹窗容器高度\n  var popupViewHeight = 80 + 20 + 20 + 90 + 10;\n\n  var popupViewContentList = [{\n    src: $iconUrl,\n    id: \"logo\",\n    tag: \"img\",\n    position: {\n      top: \"0px\",\n      left: (popupViewWidth - 124) / 2 + \"px\",\n      width: \"124px\",\n      height: \"80px\" } },\n\n\n  {\n    tag: 'font',\n    id: 'title',\n    text: \"发现新版本\" + data.versionName,\n    textStyles: {\n      size: '18px',\n      color: \"#333\",\n      weight: \"bold\",\n      whiteSpace: \"normal\" },\n\n    position: {\n      top: '90px',\n      left: viewContentPadding + \"px\",\n      width: viewContentWidth + \"px\",\n      height: \"30px\" } }];\n\n\n  var textHeight = 18;\n  var contentTop = 130;\n  descriptionList.forEach(function (item, index) {\n    if (index > 0) {\n      popupViewHeight += textHeight;\n      contentTop += textHeight;\n    }\n    popupViewContentList.push({\n      tag: 'font',\n      id: 'content' + index + 1,\n      text: item.content,\n      textStyles: {\n        size: '14px',\n        color: \"#666\",\n        lineSpacing: \"50%\",\n        align: \"left\" },\n\n      position: {\n        top: contentTop + \"px\",\n        left: viewContentPadding + \"px\",\n        width: viewContentWidth + \"px\",\n        height: textHeight + \"px\" } });\n\n\n    if (item.type == \"break\") {\n      contentTop += 10;\n      popupViewHeight += 10;\n    }\n  });\n\n  if (data.updateType == \"forcibly\") {\n    popupViewContentList.push({\n      tag: 'rect', //绘制底边按钮\n      rectStyles: {\n        radius: \"6px\",\n        color: $mainColor },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: viewContentWidth + \"px\",\n        height: \"30px\" } });\n\n\n    popupViewContentList.push({\n      tag: 'font',\n      id: 'confirmText',\n      text: \"立即升级\",\n      textStyles: {\n        size: '14px',\n        color: \"#FFF\",\n        lineSpacing: \"0%\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: viewContentWidth + \"px\",\n        height: \"30px\" } });\n\n\n  } else {\n    // 绘制底边按钮\n    popupViewContentList.push({\n      tag: 'rect',\n      id: 'cancelBox',\n      rectStyles: {\n        radius: \"3px\",\n        borderColor: \"#f1f1f1\",\n        borderWidth: \"1px\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } });\n\n\n    popupViewContentList.push({\n      tag: 'rect',\n      id: 'confirmBox',\n      rectStyles: {\n        radius: \"3px\",\n        color: $mainColor },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } });\n\n\n    popupViewContentList.push({\n      tag: 'font',\n      id: 'cancelText',\n      text: \"暂不升级\",\n      textStyles: {\n        size: '14px',\n        color: \"#666\",\n        lineSpacing: \"0%\",\n        whiteSpace: \"normal\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } });\n\n\n    popupViewContentList.push({\n      tag: 'font',\n      id: 'confirmText',\n      text: \"立即升级\",\n      textStyles: {\n        size: '14px',\n        color: \"#FFF\",\n        lineSpacing: \"0%\",\n        whiteSpace: \"normal\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } });\n\n\n  }\n  // 弹窗内容\n  var popupView = new plus.nativeObj.View(\"popupView\", { //创建底部图标菜单\n    tag: \"rect\",\n    top: (screenHeight - popupViewHeight) / 2 + \"px\",\n    left: '15%',\n    height: popupViewHeight + \"px\",\n    width: \"70%\" });\n\n  // 绘制白色背景\n  popupView.drawRect({\n    color: \"#FFFFFF\",\n    radius: \"8px\" },\n  {\n    top: \"40px\",\n    height: popupViewHeight - 40 + \"px\" });\n\n\n  popupView.draw(popupViewContentList);\n  popupView.addEventListener(\"click\", function (e) {\n    var maxTop = popupViewHeight - viewContentPadding;\n    var maxLeft = popupViewWidth - viewContentPadding;\n    var buttonWidth = (viewContentWidth - viewContentPadding) / 2;\n    if (e.clientY > maxTop - 30 && e.clientY < maxTop) {\n      if (data.updateType == \"forcibly\") {\n        if (e.clientX > viewContentPadding && e.clientX < maxLeft) {\n          // 立即升级\n          maskLayer.hide();\n          popupView.hide();\n          callback && callback();\n        }\n      } else {\n        // 暂不升级\n        if (e.clientX > viewContentPadding && e.clientX < maxLeft - buttonWidth - viewContentPadding) {\n          maskLayer.hide();\n          popupView.hide();\n        } else if (e.clientX > maxLeft - buttonWidth && e.clientX < maxLeft) {\n          // 立即升级\n          maskLayer.hide();\n          popupView.hide();\n          callback && callback();\n        }\n      }\n\n    }\n  });\n  if (data.updateType == \"solicit\") {\n    // 点击遮罩层\n    maskLayer.addEventListener(\"click\", function () {//处理遮罩层点击\n      maskLayer.hide();\n      popupView.hide();\n    });\n  }\n  // 显示弹窗\n  maskLayer.show();\n  popupView.show();\n}\n// 文件下载的弹窗绘图\nfunction downloadPopupDrawing(data) {\n  // 以下为计算菜单的nview绘制布局，为固定算法，使用者无关关心\n  var screenWidth = plus.screen.resolutionWidth;\n  var screenHeight = plus.screen.resolutionHeight;\n  //弹窗容器宽度\n  var popupViewWidth = screenWidth * 0.7;\n  // 弹窗容器的Padding\n  var viewContentPadding = 20;\n  // 弹窗容器的宽度\n  var viewContentWidth = popupViewWidth - viewContentPadding * 2;\n  // 弹窗容器高度\n  var popupViewHeight = viewContentPadding * 3 + 60;\n  var progressTip = data.progressTip || \"准备下载...\";\n  var contentText = data.contentText || \"正在为您更新，请耐心等待\";\n  var elementList = [\n  {\n    tag: 'rect', //背景色\n    color: '#FFFFFF',\n    rectStyles: {\n      radius: \"8px\" } },\n\n\n  {\n    tag: 'font',\n    id: 'title',\n    text: \"升级APP\",\n    textStyles: {\n      size: '16px',\n      color: \"#333\",\n      weight: \"bold\",\n      verticalAlign: \"middle\",\n      whiteSpace: \"normal\" },\n\n    position: {\n      top: viewContentPadding + 'px',\n      height: \"30px\" } },\n\n\n  {\n    tag: 'font',\n    id: 'content',\n    text: contentText,\n    textStyles: {\n      size: '14px',\n      color: \"#333\",\n      verticalAlign: \"middle\",\n      whiteSpace: \"normal\" },\n\n    position: {\n      top: viewContentPadding * 2 + 30 + 'px',\n      height: \"20px\" } }];\n\n\n\n  // 是否有进度条\n  if (data.progress) {\n    popupViewHeight += viewContentPadding + 40;\n    elementList = elementList.concat([\n    {\n      tag: 'font',\n      id: 'progressValue',\n      text: progressTip,\n      textStyles: {\n        size: '14px',\n        color: $mainColor,\n        whiteSpace: \"normal\" },\n\n      position: {\n        top: viewContentPadding * 4 + 20 + 'px',\n        height: \"30px\" } },\n\n\n    {\n      tag: 'rect', //绘制进度条背景\n      id: 'progressBg',\n      rectStyles: {\n        radius: \"4px\",\n        borderColor: \"#f1f1f1\",\n        borderWidth: \"1px\" },\n\n      position: {\n        top: viewContentPadding * 4 + 60 + 'px',\n        left: viewContentPadding + \"px\",\n        width: viewContentWidth + \"px\",\n        height: \"8px\" } }]);\n\n\n\n  }\n  if (data.buttonNum == 2) {\n    popupViewHeight += viewContentPadding + 30;\n    elementList = elementList.concat([\n    {\n      tag: 'rect', //绘制底边按钮\n      rectStyles: {\n        radius: \"3px\",\n        borderColor: \"#f1f1f1\",\n        borderWidth: \"1px\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } },\n\n\n    {\n      tag: 'rect', //绘制底边按钮\n      rectStyles: {\n        radius: \"3px\",\n        color: $mainColor },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } },\n\n\n    {\n      tag: 'font',\n      id: 'cancelText',\n      text: \"取消下载\",\n      textStyles: {\n        size: '14px',\n        color: \"#666\",\n        lineSpacing: \"0%\",\n        whiteSpace: \"normal\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } },\n\n\n    {\n      tag: 'font',\n      id: 'confirmText',\n      text: \"后台下载\",\n      textStyles: {\n        size: '14px',\n        color: \"#FFF\",\n        lineSpacing: \"0%\",\n        whiteSpace: \"normal\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: (viewContentWidth - viewContentPadding) / 2 + viewContentPadding * 2 + \"px\",\n        width: (viewContentWidth - viewContentPadding) / 2 + \"px\",\n        height: \"30px\" } }]);\n\n\n\n  }\n  if (data.buttonNum == 1) {\n    popupViewHeight += viewContentPadding + 40;\n    elementList = elementList.concat([\n    {\n      tag: 'rect', //绘制底边按钮\n      rectStyles: {\n        radius: \"6px\",\n        color: $mainColor },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: viewContentWidth + \"px\",\n        height: \"40px\" } },\n\n\n    {\n      tag: 'font',\n      id: 'confirmText',\n      text: \"关闭\",\n      textStyles: {\n        size: '14px',\n        color: \"#FFF\",\n        lineSpacing: \"0%\" },\n\n      position: {\n        bottom: viewContentPadding + 'px',\n        left: viewContentPadding + \"px\",\n        width: viewContentWidth + \"px\",\n        height: \"40px\" } }]);\n\n\n\n  }\n  return {\n    popupViewHeight: popupViewHeight,\n    popupViewWidth: popupViewWidth,\n    screenHeight: screenHeight,\n    viewContentWidth: viewContentWidth,\n    viewContentPadding: viewContentPadding,\n    elementList: elementList };\n\n}\n// 文件下载的弹窗\nfunction downloadPopup(data) {\n  // 弹窗遮罩层\n  var maskLayer = new plus.nativeObj.View(\"maskLayer\", { //先创建遮罩层\n    top: '0px',\n    left: '0px',\n    height: '100%',\n    width: '100%',\n    backgroundColor: 'rgba(0,0,0,0.5)' });\n\n  var popupViewData = downloadPopupDrawing(data);\n  // 弹窗内容\n  var popupView = new plus.nativeObj.View(\"popupView\", { //创建底部图标菜单\n    tag: \"rect\",\n    top: (popupViewData.screenHeight - popupViewData.popupViewHeight) / 2 + \"px\",\n    left: '15%',\n    height: popupViewData.popupViewHeight + \"px\",\n    width: \"70%\" });\n\n  var progressValue = 0;\n  var progressTip = 0;\n  var contentText = 0;\n  var buttonNum = 2;\n  if (data.buttonNum >= 0) {\n    buttonNum = data.buttonNum;\n  }\n  popupView.draw(popupViewData.elementList);\n  var callbackData = {\n    change: function change(res) {\n      var progressElement = [];\n      if (res.progressValue) {\n        progressValue = res.progressValue;\n        // 绘制进度条\n        progressElement.push({\n          tag: 'rect', //绘制进度条背景\n          id: 'progressValueBg',\n          rectStyles: {\n            radius: \"4px\",\n            color: $mainColor },\n\n          position: {\n            top: popupViewData.viewContentPadding * 4 + 60 + 'px',\n            left: popupViewData.viewContentPadding + \"px\",\n            width: popupViewData.viewContentWidth * (res.progressValue / 100) + \"px\",\n            height: \"8px\" } });\n\n\n      }\n      if (res.progressTip) {\n        progressTip = res.progressTip;\n        progressElement.push({\n          tag: 'font',\n          id: 'progressValue',\n          text: res.progressTip,\n          textStyles: {\n            size: '14px',\n            color: $mainColor,\n            whiteSpace: \"normal\" },\n\n          position: {\n            top: popupViewData.viewContentPadding * 4 + 20 + 'px',\n            height: \"30px\" } });\n\n\n      }\n      if (res.contentText) {\n        contentText = res.contentText;\n        progressElement.push({\n          tag: 'font',\n          id: 'content',\n          text: res.contentText,\n          textStyles: {\n            size: '16px',\n            color: \"#333\",\n            whiteSpace: \"normal\" },\n\n          position: {\n            top: popupViewData.viewContentPadding * 2 + 30 + 'px',\n            height: \"30px\" } });\n\n\n      }\n      if (res.buttonNum >= 0 && buttonNum != res.buttonNum) {\n        buttonNum = res.buttonNum;\n        popupView.reset();\n        popupViewData = downloadPopupDrawing(Object.assign({\n          progressValue: progressValue,\n          progressTip: progressTip,\n          contentText: contentText },\n        res));\n        var newElement = [];\n        popupViewData.elementList.map(function (item, index) {\n          var have = false;\n          progressElement.forEach(function (childItem, childIndex) {\n            if (item.id == childItem.id) {\n              have = true;\n            }\n          });\n          if (!have) {\n            newElement.push(item);\n          }\n        });\n        progressElement = newElement.concat(progressElement);\n        popupView.setStyle({\n          tag: \"rect\",\n          top: (popupViewData.screenHeight - popupViewData.popupViewHeight) / 2 + \"px\",\n          left: '15%',\n          height: popupViewData.popupViewHeight + \"px\",\n          width: \"70%\" });\n\n        popupView.draw(progressElement);\n      } else {\n        popupView.draw(progressElement);\n      }\n    },\n    cancel: function cancel() {\n      maskLayer.hide();\n      popupView.hide();\n    } };\n\n  popupView.addEventListener(\"click\", function (e) {\n    var maxTop = popupViewData.popupViewHeight - popupViewData.viewContentPadding;\n    var maxLeft = popupViewData.popupViewWidth - popupViewData.viewContentPadding;\n    if (e.clientY > maxTop - 40 && e.clientY < maxTop) {\n      if (buttonNum == 1) {\n        // 单按钮\n        if (e.clientX > popupViewData.viewContentPadding && e.clientX < maxLeft) {\n          maskLayer.hide();\n          popupView.hide();\n          callbackData.reboot();\n        }\n      } else if (buttonNum == 2) {\n        // 双按钮\n        var buttonWidth = (popupViewData.viewContentWidth - popupViewData.viewContentPadding) / 2;\n        if (e.clientX > popupViewData.viewContentPadding && e.clientX < maxLeft - buttonWidth - popupViewData.viewContentPadding) {\n          maskLayer.hide();\n          popupView.hide();\n          callbackData.cancelDownload();\n        } else if (e.clientX > maxLeft - buttonWidth && e.clientX < maxLeft) {\n          maskLayer.hide();\n          popupView.hide();\n        }\n      }\n    }\n  });\n  // 显示弹窗\n  maskLayer.show();\n  popupView.show();\n  // 改变进度条\n  return callbackData;\n}\nfunction _default() {var isPrompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  getCurrentNo(function (info) {\n    (0, _request.getAppUpdateNo)(info, isPrompt, function (res) {\n      if (res.updateType == \"forcibly\" || res.updateType == \"silent\") {\n        if (/\\.wgt$/i.test(res.downloadUrl)) {\n          getDownload(res);\n        } else if (/\\.html$/i.test(res.downloadUrl)) {\n          plus.runtime.openURL(res.downloadUrl);\n        } else {\n          if (platform == \"android\") {\n            getDownload(res);\n          } else {\n            plus.runtime.openURL(res.downloadUrl);\n          }\n        }\n      } else if (res.updateType == \"solicit\") {\n        updatePopup(res, function () {\n          if (/\\.wgt$/i.test(res.downloadUrl)) {\n            getDownload(res);\n          } else if (/\\.html$/i.test(res.downloadUrl)) {\n            plus.runtime.openURL(res.downloadUrl);\n          } else {\n            if (platform == \"android\") {\n              getDownload(res);\n            } else {\n              plus.runtime.openURL(res.downloadUrl);\n            }\n          }\n        });\n      }\n    });\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 21)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYXBwLXBsdXMvdXBkYXRlLmpzIl0sIm5hbWVzIjpbInBsYXRmb3JtIiwidW5pIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCIkbWFpbkNvbG9yIiwiYXBwVXBkYXRlQ29sb3IiLCIkaWNvblVybCIsImFwcFVwZGF0ZUljb24iLCJnZXRDdXJyZW50Tm8iLCJjYWxsYmFjayIsInBsdXMiLCJydW50aW1lIiwiZ2V0UHJvcGVydHkiLCJhcHBpZCIsImluZiIsInZlcnNpb25Db2RlIiwidmVyc2lvbk5hbWUiLCJ2ZXJzaW9uIiwiZ2V0RG93bmxvYWQiLCJkYXRhIiwiZHRhc2siLCJ1cGRhdGVUeXBlIiwicG9wdXBEYXRhIiwicHJvZ3Jlc3MiLCJidXR0b25OdW0iLCJsYXN0UHJvZ3Jlc3NWYWx1ZSIsInBvcHVwT2JqIiwiZG93bmxvYWRQb3B1cCIsImRvd25sb2FkZXIiLCJjcmVhdGVEb3dubG9hZCIsImRvd25sb2FkVXJsIiwiZmlsZW5hbWUiLCJkb3dubG9hZCIsInN0YXR1cyIsImNoYW5nZSIsInByb2dyZXNzVmFsdWUiLCJwcm9ncmVzc1RpcCIsImluc3RhbGwiLCJmb3JjZSIsImlzRm9yY2UiLCJjb250ZW50VGV4dCIsImUiLCJjYW5jZWwiLCJuYXRpdmVVSSIsImFsZXJ0IiwiY29kZSIsIm1lc3NhZ2UiLCJzdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YXNrIiwic3RhdGUiLCJwYXJzZUludCIsImRvd25sb2FkZWRTaXplIiwidG90YWxTaXplIiwiY2FuY2VsRG93bmxvYWQiLCJhYm9ydCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInJlYm9vdCIsInJlc3RhcnQiLCJkcmF3dGV4dCIsInRleHQiLCJtYXhXaWR0aCIsInRleHRBcnIiLCJzcGxpdCIsImxlbiIsImxlbmd0aCIsInByZXZpb3VzTm9kZSIsIm5vZGVXaWR0aCIsInJvd1RleHQiLCJsZXR0ZXJXaWR0aCIsImNoaW5lc2VXaWR0aCIsIm90aGVyV2lkdGgiLCJpIiwidGVzdCIsInB1c2giLCJ0eXBlIiwiY29udGVudCIsInN1YnN0cmluZyIsInVwZGF0ZVBvcHVwIiwibWFza0xheWVyIiwibmF0aXZlT2JqIiwiVmlldyIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsInNjcmVlbldpZHRoIiwic2NyZWVuIiwicmVzb2x1dGlvbldpZHRoIiwic2NyZWVuSGVpZ2h0IiwicmVzb2x1dGlvbkhlaWdodCIsInBvcHVwVmlld1dpZHRoIiwidmlld0NvbnRlbnRQYWRkaW5nIiwidmlld0NvbnRlbnRXaWR0aCIsImRlc2NyaXB0aW9uTGlzdCIsInZlcnNpb25JbmZvIiwicG9wdXBWaWV3SGVpZ2h0IiwicG9wdXBWaWV3Q29udGVudExpc3QiLCJzcmMiLCJpZCIsInRhZyIsInBvc2l0aW9uIiwidGV4dFN0eWxlcyIsInNpemUiLCJjb2xvciIsIndlaWdodCIsIndoaXRlU3BhY2UiLCJ0ZXh0SGVpZ2h0IiwiY29udGVudFRvcCIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJsaW5lU3BhY2luZyIsImFsaWduIiwicmVjdFN0eWxlcyIsInJhZGl1cyIsImJvdHRvbSIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJwb3B1cFZpZXciLCJkcmF3UmVjdCIsImRyYXciLCJtYXhUb3AiLCJtYXhMZWZ0IiwiYnV0dG9uV2lkdGgiLCJjbGllbnRZIiwiY2xpZW50WCIsImhpZGUiLCJzaG93IiwiZG93bmxvYWRQb3B1cERyYXdpbmciLCJlbGVtZW50TGlzdCIsInZlcnRpY2FsQWxpZ24iLCJjb25jYXQiLCJwb3B1cFZpZXdEYXRhIiwiY2FsbGJhY2tEYXRhIiwicmVzIiwicHJvZ3Jlc3NFbGVtZW50IiwicmVzZXQiLCJPYmplY3QiLCJhc3NpZ24iLCJuZXdFbGVtZW50IiwibWFwIiwiaGF2ZSIsImNoaWxkSXRlbSIsImNoaWxkSW5kZXgiLCJzZXRTdHlsZSIsImlzUHJvbXB0IiwiaW5mbyIsIm9wZW5VUkwiXSwibWFwcGluZ3MiOiI7QUFD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Q3dILEdBQUQsQ0FBWDtBQUNBLGFBRkQsTUFFTztBQUNOaEksa0JBQUksQ0FBQ0MsT0FBTCxDQUFhNEksT0FBYixDQUFxQmIsR0FBRyxDQUFDNUcsV0FBekI7QUFDQTtBQUNEO0FBQ0QsU0FaVSxDQUFYO0FBYUE7QUFDRCxLQTVCRDtBQTZCQSxHQTlCVyxDQUFaO0FBK0JBLEMiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtnZXRBcHBVcGRhdGVObyxhcHBVcGRhdGVDb2xvcixhcHBVcGRhdGVJY29ufSBmcm9tIFwiLi9yZXF1ZXN0LmpzXCJcclxuY29uc3QgcGxhdGZvcm0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybTtcclxuLy8g5Li76aKc6ImyXHJcbmNvbnN0ICRtYWluQ29sb3IgPSBhcHBVcGRhdGVDb2xvciB8fCBcIkZGNUI3OFwiO1xyXG4vLyDlvLnnqpflm77moId1cmxcclxuY29uc3QgJGljb25VcmwgPSBhcHBVcGRhdGVJY29uO1xyXG5cclxuLy8g6I635Y+W5b2T5YmN5bqU55So55qE54mI5pys5Y+3XHJcbmNvbnN0IGdldEN1cnJlbnRObyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0Ly8g6I635Y+W5pys5Zyw5bqU55So6LWE5rqQ54mI5pys5Y+3XHJcblx0cGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgZnVuY3Rpb24oaW5mKSB7XHJcblx0XHRjYWxsYmFjayAmJiBjYWxsYmFjayh7XHJcblx0XHRcdHZlcnNpb25Db2RlOiBpbmYudmVyc2lvbkNvZGUsXHJcblx0XHRcdHZlcnNpb25OYW1lOiBpbmYudmVyc2lvblxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuLy8g5LuO5pyN5Yqh5Zmo5LiL6L295bqU55So6LWE5rqQ5YyF77yId2d05paH5Lu277yJXHJcbmNvbnN0IGdldERvd25sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xyXG5cdGxldCBkdGFzaztcclxuXHRpZihkYXRhLnVwZGF0ZVR5cGUgPT0gJ2ZvcmNpYmx5JyB8fCBkYXRhLnVwZGF0ZVR5cGUgPT0gJ3NvbGljaXQnKXtcclxuXHRcdGxldCBwb3B1cERhdGEgPSB7XHJcblx0XHRcdHByb2dyZXNzOiB0cnVlLFxyXG5cdFx0XHRidXR0b25OdW06IDJcclxuXHRcdH07XHJcblx0XHRpZihkYXRhLnVwZGF0ZVR5cGUgPT0gJ2ZvcmNpYmx5Jyl7XHJcblx0XHRcdHBvcHVwRGF0YS5idXR0b25OdW0gPSAwO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGxhc3RQcm9ncmVzc1ZhbHVlID0gMDtcclxuXHRcdGxldCBwb3B1cE9iaiA9IGRvd25sb2FkUG9wdXAocG9wdXBEYXRhKTtcclxuXHRcdGR0YXNrID0gcGx1cy5kb3dubG9hZGVyLmNyZWF0ZURvd25sb2FkKGRhdGEuZG93bmxvYWRVcmwsIHtcclxuXHRcdFx0ZmlsZW5hbWU6IFwiX2RvYy91cGRhdGUvXCJcclxuXHRcdH0sIGZ1bmN0aW9uKGRvd25sb2FkLCBzdGF0dXMpIHtcclxuXHRcdFx0aWYgKHN0YXR1cyA9PSAyMDApIHtcclxuXHRcdFx0XHRwb3B1cE9iai5jaGFuZ2Uoe1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NWYWx1ZTogMTAwLFxyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NUaXA6XCLmraPlnKjlronoo4Xmlofku7YuLi5cIixcclxuXHRcdFx0XHRcdHByb2dyZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0YnV0dG9uTnVtOiAwXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cGx1cy5ydW50aW1lLmluc3RhbGwoZG93bmxvYWQuZmlsZW5hbWUsIHtmb3JjZTpkYXRhLmlzRm9yY2V9LCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHBvcHVwT2JqLmNoYW5nZSh7XHJcblx0XHRcdFx0XHRcdGNvbnRlbnRUZXh0OiBcIuW6lOeUqOi1hOa6kOabtOaWsOWujOaIkO+8gVwiLFxyXG5cdFx0XHRcdFx0XHRidXR0b25OdW06IDEsXHJcblx0XHRcdFx0XHRcdHByb2dyZXNzOiBmYWxzZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSwgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0cG9wdXBPYmouY2FuY2VsKCk7XHJcblx0XHRcdFx0XHRwbHVzLm5hdGl2ZVVJLmFsZXJ0KFwi5a6J6KOF5paH5Lu25aSx6LSlW1wiICsgZS5jb2RlICsgXCJd77yaXCIgKyBlLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBvcHVwT2JqLmNoYW5nZSh7XHJcblx0XHRcdFx0XHRjb250ZW50VGV4dDogXCLmlofku7bkuIvovb3lpLHotKUuLi5cIixcclxuXHRcdFx0XHRcdGJ1dHRvbk51bTogMSxcclxuXHRcdFx0XHRcdHByb2dyZXNzOiBmYWxzZVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGR0YXNrLnN0YXJ0KCk7XHJcblx0XHRkdGFzay5hZGRFdmVudExpc3RlbmVyKFwic3RhdGVjaGFuZ2VkXCIsIGZ1bmN0aW9uKHRhc2ssIHN0YXR1cykge1xyXG5cdFx0XHRzd2l0Y2ggKHRhc2suc3RhdGUpIHtcclxuXHRcdFx0XHRjYXNlIDE6IC8vIOW8gOWni1xyXG5cdFx0XHRcdFx0cG9wdXBPYmouY2hhbmdlKHtcclxuXHRcdFx0XHRcdFx0cHJvZ3Jlc3NWYWx1ZTowLFxyXG5cdFx0XHRcdFx0XHRwcm9ncmVzc1RpcDpcIuWHhuWkh+S4i+i9vS4uLlwiLFxyXG5cdFx0XHRcdFx0XHRwcm9ncmVzczogdHJ1ZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDI6IC8vIOW3sui/nuaOpeWIsOacjeWKoeWZqCAgXHJcblx0XHRcdFx0XHRwb3B1cE9iai5jaGFuZ2Uoe1xyXG5cdFx0XHRcdFx0XHRwcm9ncmVzc1ZhbHVlOjAsXHJcblx0XHRcdFx0XHRcdHByb2dyZXNzVGlwOlwi5byA5aeL5LiL6L29Li4uXCIsXHJcblx0XHRcdFx0XHRcdHByb2dyZXNzOiB0cnVlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRcdGNvbnN0IHByb2dyZXNzID0gcGFyc2VJbnQodGFzay5kb3dubG9hZGVkU2l6ZSAvIHRhc2sudG90YWxTaXplICogMTAwKTtcclxuXHRcdFx0XHRcdGlmKHByb2dyZXNzIC0gbGFzdFByb2dyZXNzVmFsdWUgPj0gMil7XHJcblx0XHRcdFx0XHRcdGxhc3RQcm9ncmVzc1ZhbHVlID0gcHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHRcdHBvcHVwT2JqLmNoYW5nZSh7XHJcblx0XHRcdFx0XHRcdFx0cHJvZ3Jlc3NWYWx1ZTpwcm9ncmVzcyxcclxuXHRcdFx0XHRcdFx0XHRwcm9ncmVzc1RpcDogXCLlt7LkuIvovb1cIiArIHByb2dyZXNzICsgXCIlXCIsXHJcblx0XHRcdFx0XHRcdFx0cHJvZ3Jlc3M6IHRydWVcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvLyDlj5bmtojkuIvovb1cclxuXHRcdHBvcHVwT2JqLmNhbmNlbERvd25sb2FkID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0ZHRhc2sgJiYgZHRhc2suYWJvcnQoKTtcclxuXHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0dGl0bGU6IFwi5bey5Y+W5raI5LiL6L29XCIsXHJcblx0XHRcdFx0aWNvbjpcIm5vbmVcIlxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdC8vIOmHjeWQr0FQUFxyXG5cdFx0cG9wdXBPYmoucmVib290ID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0cGx1cy5ydW50aW1lLnJlc3RhcnQoKTtcclxuXHRcdH1cclxuXHR9IGVsc2UgaWYoZGF0YS51cGRhdGVUeXBlID09IFwic2lsZW50XCIpe1xyXG5cdFx0ZHRhc2sgPSBwbHVzLmRvd25sb2FkZXIuY3JlYXRlRG93bmxvYWQoZGF0YS5kb3dubG9hZFVybCwge1xyXG5cdFx0XHRmaWxlbmFtZTogXCJfZG9jL3VwZGF0ZS9cIlxyXG5cdFx0fSwgZnVuY3Rpb24oZG93bmxvYWQsIHN0YXR1cykge1xyXG5cdFx0XHRpZiAoc3RhdHVzID09IDIwMCkge1xyXG5cdFx0XHRcdHBsdXMucnVudGltZS5pbnN0YWxsKGRvd25sb2FkLmZpbGVuYW1lLCB7Zm9yY2U6ZGF0YS5pc0ZvcmNlfSwgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIuW6lOeUqOi1hOa6kOabtOaWsOWujOaIkFwiKTtcclxuXHRcdFx0XHR9LCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRwbHVzLm5hdGl2ZVVJLmFsZXJ0KFwi5a6J6KOF5paH5Lu25aSx6LSlW1wiICsgZS5jb2RlICsgXCJd77yaXCIgKyBlLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBsdXMubmF0aXZlVUkuYWxlcnQoXCLmlofku7bkuIvovb3lpLHotKUuLi5cIik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0ZHRhc2suc3RhcnQoKTtcclxuXHR9XHJcbn1cclxuLy8g5paH5a2X5o2i6KGMXHJcbmZ1bmN0aW9uIGRyYXd0ZXh0KHRleHQsIG1heFdpZHRoKSB7XHJcblx0bGV0IHRleHRBcnIgPSB0ZXh0LnNwbGl0KFwiXCIpO1xyXG5cdGxldCBsZW4gPSB0ZXh0QXJyLmxlbmd0aDtcclxuXHQvLyDkuIrkuKroioLngrlcclxuXHRsZXQgcHJldmlvdXNOb2RlID0gMDtcclxuXHQvLyDorrDlvZXoioLngrnlrr3luqZcclxuXHRsZXQgbm9kZVdpZHRoID0gMDtcclxuXHQvLyDmlofmnKzmjaLooYzmlbDnu4RcclxuXHRsZXQgcm93VGV4dCA9IFtdO1xyXG5cdC8vIOWmguaenOaYr+Wtl+avje+8jOS+p+S/neWtmOmVv+W6plxyXG5cdGxldCBsZXR0ZXJXaWR0aCA9IDA7XHJcblx0Ly8g5rGJ5a2X5a695bqmXHJcblx0bGV0IGNoaW5lc2VXaWR0aCA9IDE0O1xyXG5cdC8vIG90aGVyRm9udOWuveW6plxyXG5cdGxldCBvdGhlcldpZHRoID0gNztcclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRpZiAoL1tcXHU0ZTAwLVxcdTlmYTVdfFtcXHVGRTMwLVxcdUZGQTBdL2cudGVzdCh0ZXh0QXJyW2ldKSkge1xyXG5cdFx0XHRpZihsZXR0ZXJXaWR0aCA+IDApe1xyXG5cdFx0XHRcdGlmKG5vZGVXaWR0aCArIGNoaW5lc2VXaWR0aCArIGxldHRlcldpZHRoICogb3RoZXJXaWR0aCA+IG1heFdpZHRoKXtcclxuXHRcdFx0XHRcdHJvd1RleHQucHVzaCh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiB0ZXh0LnN1YnN0cmluZyhwcmV2aW91c05vZGUsIGkpXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHByZXZpb3VzTm9kZSA9IGk7XHJcblx0XHRcdFx0XHRub2RlV2lkdGggPSBjaGluZXNlV2lkdGg7XHJcblx0XHRcdFx0XHRsZXR0ZXJXaWR0aCA9IDA7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG5vZGVXaWR0aCArPSBjaGluZXNlV2lkdGggKyBsZXR0ZXJXaWR0aCAqIG90aGVyV2lkdGg7XHJcblx0XHRcdFx0XHRsZXR0ZXJXaWR0aCA9IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmKG5vZGVXaWR0aCArIGNoaW5lc2VXaWR0aCA+IG1heFdpZHRoKXtcclxuXHRcdFx0XHRcdHJvd1RleHQucHVzaCh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IFwidGV4dFwiLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiB0ZXh0LnN1YnN0cmluZyhwcmV2aW91c05vZGUsIGkpXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHByZXZpb3VzTm9kZSA9IGk7XHJcblx0XHRcdFx0XHRub2RlV2lkdGggPSBjaGluZXNlV2lkdGg7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRub2RlV2lkdGggKz0gY2hpbmVzZVdpZHRoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYoL1xcbi9nLnRlc3QodGV4dEFycltpXSkpe1xyXG5cdFx0XHRcdHJvd1RleHQucHVzaCh7XHJcblx0XHRcdFx0XHR0eXBlOiBcImJyZWFrXCIsXHJcblx0XHRcdFx0XHRjb250ZW50OiB0ZXh0LnN1YnN0cmluZyhwcmV2aW91c05vZGUsIGkpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cHJldmlvdXNOb2RlID0gaSArIDE7XHJcblx0XHRcdFx0bm9kZVdpZHRoID0gMDtcclxuXHRcdFx0XHRsZXR0ZXJXaWR0aCA9IDA7XHJcblx0XHRcdH1lbHNlIGlmKHRleHRBcnJbaV0gPT0gXCJcXFxcXCIgJiYgdGV4dEFycltpICsgMV0gPT0gXCJuXCIpe1xyXG5cdFx0XHRcdHJvd1RleHQucHVzaCh7XHJcblx0XHRcdFx0XHR0eXBlOiBcImJyZWFrXCIsXHJcblx0XHRcdFx0XHRjb250ZW50OiB0ZXh0LnN1YnN0cmluZyhwcmV2aW91c05vZGUsIGkpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cHJldmlvdXNOb2RlID0gaSArIDI7XHJcblx0XHRcdFx0bm9kZVdpZHRoID0gMDtcclxuXHRcdFx0XHRsZXR0ZXJXaWR0aCA9IDA7XHJcblx0XHRcdH1lbHNlIGlmKC9bYS16QS1aMC05XS9nLnRlc3QodGV4dEFycltpXSkpe1xyXG5cdFx0XHRcdGxldHRlcldpZHRoICs9IDE7XHJcblx0XHRcdFx0aWYobm9kZVdpZHRoICsgbGV0dGVyV2lkdGggKiBvdGhlcldpZHRoID4gbWF4V2lkdGgpe1xyXG5cdFx0XHRcdFx0cm93VGV4dC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IHRleHQuc3Vic3RyaW5nKHByZXZpb3VzTm9kZSwgaSArIDEgLSBsZXR0ZXJXaWR0aClcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cHJldmlvdXNOb2RlID0gaSArIDEgLSBsZXR0ZXJXaWR0aDtcclxuXHRcdFx0XHRcdG5vZGVXaWR0aCA9IGxldHRlcldpZHRoICogb3RoZXJXaWR0aDtcclxuXHRcdFx0XHRcdGxldHRlcldpZHRoID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZXtcclxuXHRcdFx0XHRpZihub2RlV2lkdGggKyBvdGhlcldpZHRoID4gbWF4V2lkdGgpe1xyXG5cdFx0XHRcdFx0cm93VGV4dC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJ0ZXh0XCIsXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ6IHRleHQuc3Vic3RyaW5nKHByZXZpb3VzTm9kZSwgaSlcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cHJldmlvdXNOb2RlID0gaTtcclxuXHRcdFx0XHRcdG5vZGVXaWR0aCA9IG90aGVyV2lkdGg7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRub2RlV2lkdGggKz0gb3RoZXJXaWR0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0aWYgKHByZXZpb3VzTm9kZSA8IGxlbikge1xyXG5cdFx0cm93VGV4dC5wdXNoKHtcclxuXHRcdFx0dHlwZTogXCJ0ZXh0XCIsXHJcblx0XHRcdGNvbnRlbnQ6IHRleHQuc3Vic3RyaW5nKHByZXZpb3VzTm9kZSwgbGVuKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJldHVybiByb3dUZXh0O1xyXG59XHJcbi8vIOaYr+WQpuabtOaWsOW8ueeql1xyXG5mdW5jdGlvbiB1cGRhdGVQb3B1cChkYXRhLCBjYWxsYmFjaykge1xyXG5cdC8vIOW8ueeql+mBrue9qeWxglxyXG5cdGxldCBtYXNrTGF5ZXIgPSBuZXcgcGx1cy5uYXRpdmVPYmouVmlldyhcIm1hc2tMYXllclwiLCB7IC8v5YWI5Yib5bu66YGu572p5bGCXHJcblx0XHR0b3A6ICcwcHgnLFxyXG5cdFx0bGVmdDogJzBweCcsXHJcblx0XHRoZWlnaHQ6ICcxMDAlJyxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNSknXHJcblx0fSk7XHJcblxyXG5cdC8vIOS7peS4i+S4uuiuoeeul+iPnOWNleeahG52aWV357uY5Yi25biD5bGA77yM5Li65Zu65a6a566X5rOV77yM5L2/55So6ICF5peg5YWz5YWz5b+DXHJcblx0Y29uc3Qgc2NyZWVuV2lkdGggPSBwbHVzLnNjcmVlbi5yZXNvbHV0aW9uV2lkdGg7XHJcblx0Y29uc3Qgc2NyZWVuSGVpZ2h0ID0gcGx1cy5zY3JlZW4ucmVzb2x1dGlvbkhlaWdodDtcclxuXHQvL+W8ueeql+WuueWZqOWuveW6plxyXG5cdGNvbnN0IHBvcHVwVmlld1dpZHRoID0gc2NyZWVuV2lkdGggKiAwLjc7XHJcblx0Ly8g5by556qX5a655Zmo55qEUGFkZGluZ1xyXG5cdGNvbnN0IHZpZXdDb250ZW50UGFkZGluZyA9IDIwO1xyXG5cdC8vIOW8ueeql+WuueWZqOeahOWuveW6plxyXG5cdGNvbnN0IHZpZXdDb250ZW50V2lkdGggPSBwYXJzZUludChwb3B1cFZpZXdXaWR0aCAtICh2aWV3Q29udGVudFBhZGRpbmcgKiAyKSk7XHJcblx0Ly8g5o+P6L+w55qE5YiX6KGoXHJcblx0Y29uc3QgZGVzY3JpcHRpb25MaXN0ID0gZHJhd3RleHQoZGF0YS52ZXJzaW9uSW5mbywgdmlld0NvbnRlbnRXaWR0aCk7XHJcblx0Ly8g5by556qX5a655Zmo6auY5bqmXHJcblx0bGV0IHBvcHVwVmlld0hlaWdodCA9IDgwICsgMjAgKyAyMCArIDkwICsgMTA7XHJcblx0XHJcblx0bGV0IHBvcHVwVmlld0NvbnRlbnRMaXN0ID0gW3tcclxuXHRcdFx0c3JjOiAkaWNvblVybCxcclxuXHRcdFx0aWQ6IFwibG9nb1wiLCBcclxuXHRcdFx0dGFnOiBcImltZ1wiLFxyXG5cdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdHRvcDogXCIwcHhcIixcclxuXHRcdFx0XHRsZWZ0OiAocG9wdXBWaWV3V2lkdGggLSAxMjQpIC8gMiArIFwicHhcIixcclxuXHRcdFx0XHR3aWR0aDogXCIxMjRweFwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCI4MHB4XCIsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHRhZzogJ2ZvbnQnLFxyXG5cdFx0XHRpZDogJ3RpdGxlJyxcclxuXHRcdFx0dGV4dDogXCLlj5HnjrDmlrDniYjmnKxcIiArIGRhdGEudmVyc2lvbk5hbWUsXHJcblx0XHRcdHRleHRTdHlsZXM6IHtcclxuXHRcdFx0XHRzaXplOiAnMThweCcsXHJcblx0XHRcdFx0Y29sb3I6IFwiIzMzM1wiLFxyXG5cdFx0XHRcdHdlaWdodDogXCJib2xkXCIsXHJcblx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdHRvcDogJzkwcHgnLFxyXG5cdFx0XHRcdGxlZnQ6IHZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHR3aWR0aDogdmlld0NvbnRlbnRXaWR0aCArIFwicHhcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMzBweFwiLFxyXG5cdFx0XHR9XHJcblx0XHR9XTtcclxuXHRjb25zdCB0ZXh0SGVpZ2h0ID0gMTg7XHJcblx0bGV0IGNvbnRlbnRUb3AgPSAxMzA7XHJcblx0ZGVzY3JpcHRpb25MaXN0LmZvckVhY2goKGl0ZW0saW5kZXgpID0+IHtcclxuXHRcdGlmKGluZGV4ID4gMCl7XHJcblx0XHRcdHBvcHVwVmlld0hlaWdodCArPSB0ZXh0SGVpZ2h0O1xyXG5cdFx0XHRjb250ZW50VG9wICs9IHRleHRIZWlnaHQ7XHJcblx0XHR9XHJcblx0XHRwb3B1cFZpZXdDb250ZW50TGlzdC5wdXNoKHtcclxuXHRcdFx0dGFnOiAnZm9udCcsXHJcblx0XHRcdGlkOiAnY29udGVudCcgKyBpbmRleCArIDEsXHJcblx0XHRcdHRleHQ6IGl0ZW0uY29udGVudCxcclxuXHRcdFx0dGV4dFN0eWxlczoge1xyXG5cdFx0XHRcdHNpemU6ICcxNHB4JyxcclxuXHRcdFx0XHRjb2xvcjogXCIjNjY2XCIsXHJcblx0XHRcdFx0bGluZVNwYWNpbmc6IFwiNTAlXCIsXHJcblx0XHRcdFx0YWxpZ246IFwibGVmdFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHBvc2l0aW9uOiB7XHJcblx0XHRcdFx0dG9wOiBjb250ZW50VG9wICsgXCJweFwiLFxyXG5cdFx0XHRcdGxlZnQ6IHZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHR3aWR0aDogdmlld0NvbnRlbnRXaWR0aCArIFwicHhcIixcclxuXHRcdFx0XHRoZWlnaHQ6IHRleHRIZWlnaHQgKyBcInB4XCIsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0aWYoaXRlbS50eXBlID09IFwiYnJlYWtcIil7XHJcblx0XHRcdGNvbnRlbnRUb3AgKz0gMTA7XHJcblx0XHRcdHBvcHVwVmlld0hlaWdodCArPSAxMDtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRpZihkYXRhLnVwZGF0ZVR5cGUgPT0gXCJmb3JjaWJseVwiKXtcclxuXHRcdHBvcHVwVmlld0NvbnRlbnRMaXN0LnB1c2goe1xyXG5cdFx0XHR0YWc6ICdyZWN0JywgLy/nu5jliLblupXovrnmjInpkq5cclxuXHRcdFx0cmVjdFN0eWxlczp7XHJcblx0XHRcdFx0cmFkaXVzOiBcIjZweFwiLFxyXG5cdFx0XHRcdGNvbG9yOiAkbWFpbkNvbG9yXHJcblx0XHRcdH0sXHJcblx0XHRcdHBvc2l0aW9uOntcclxuXHRcdFx0XHRib3R0b206IHZpZXdDb250ZW50UGFkZGluZyArICdweCcsXHJcblx0XHRcdFx0bGVmdDogdmlld0NvbnRlbnRQYWRkaW5nICsgXCJweFwiLFxyXG5cdFx0XHRcdHdpZHRoOiB2aWV3Q29udGVudFdpZHRoICsgXCJweFwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCIzMHB4XCJcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRwb3B1cFZpZXdDb250ZW50TGlzdC5wdXNoKHtcclxuXHRcdFx0dGFnOiAnZm9udCcsXHJcblx0XHRcdGlkOiAnY29uZmlybVRleHQnLFxyXG5cdFx0XHR0ZXh0OiBcIueri+WNs+WNh+e6p1wiLFxyXG5cdFx0XHR0ZXh0U3R5bGVzOiB7XHJcblx0XHRcdFx0c2l6ZTogJzE0cHgnLFxyXG5cdFx0XHRcdGNvbG9yOiBcIiNGRkZcIixcclxuXHRcdFx0XHRsaW5lU3BhY2luZzogXCIwJVwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdGJvdHRvbTogdmlld0NvbnRlbnRQYWRkaW5nICsgJ3B4JyxcclxuXHRcdFx0XHRsZWZ0OiB2aWV3Q29udGVudFBhZGRpbmcgKyBcInB4XCIsXHJcblx0XHRcdFx0d2lkdGg6IHZpZXdDb250ZW50V2lkdGggKyBcInB4XCIsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjMwcHhcIlxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8g57uY5Yi25bqV6L655oyJ6ZKuXHJcblx0XHRwb3B1cFZpZXdDb250ZW50TGlzdC5wdXNoKHtcclxuXHRcdFx0dGFnOiAncmVjdCcsXHJcblx0XHRcdGlkOiAnY2FuY2VsQm94JyxcclxuXHRcdFx0cmVjdFN0eWxlczoge1xyXG5cdFx0XHRcdHJhZGl1czogXCIzcHhcIixcclxuXHRcdFx0XHRib3JkZXJDb2xvcjogXCIjZjFmMWYxXCIsXHJcblx0XHRcdFx0Ym9yZGVyV2lkdGg6IFwiMXB4XCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdHBvc2l0aW9uOiB7XHJcblx0XHRcdFx0Ym90dG9tOiB2aWV3Q29udGVudFBhZGRpbmcgKyAncHgnLFxyXG5cdFx0XHRcdGxlZnQ6IHZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHR3aWR0aDogKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMiArIFwicHhcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMzBweFwiLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHBvcHVwVmlld0NvbnRlbnRMaXN0LnB1c2goe1xyXG5cdFx0XHR0YWc6ICdyZWN0JyxcclxuXHRcdFx0aWQ6ICdjb25maXJtQm94JyxcclxuXHRcdFx0cmVjdFN0eWxlczoge1xyXG5cdFx0XHRcdHJhZGl1czogXCIzcHhcIixcclxuXHRcdFx0XHRjb2xvcjogJG1haW5Db2xvcixcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRib3R0b206IHZpZXdDb250ZW50UGFkZGluZyArICdweCcsXHJcblx0XHRcdFx0bGVmdDogKCh2aWV3Q29udGVudFdpZHRoIC0gdmlld0NvbnRlbnRQYWRkaW5nKSAvIDIgKyB2aWV3Q29udGVudFBhZGRpbmcgKiAyKSArIFwicHhcIixcclxuXHRcdFx0XHR3aWR0aDogKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMiArIFwicHhcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMzBweFwiLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHBvcHVwVmlld0NvbnRlbnRMaXN0LnB1c2goe1xyXG5cdFx0XHR0YWc6ICdmb250JyxcclxuXHRcdFx0aWQ6ICdjYW5jZWxUZXh0JyxcclxuXHRcdFx0dGV4dDogXCLmmoLkuI3ljYfnuqdcIixcclxuXHRcdFx0dGV4dFN0eWxlczoge1xyXG5cdFx0XHRcdHNpemU6ICcxNHB4JyxcclxuXHRcdFx0XHRjb2xvcjogXCIjNjY2XCIsXHJcblx0XHRcdFx0bGluZVNwYWNpbmc6IFwiMCVcIixcclxuXHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHBvc2l0aW9uOiB7XHJcblx0XHRcdFx0Ym90dG9tOiB2aWV3Q29udGVudFBhZGRpbmcgKyAncHgnLFxyXG5cdFx0XHRcdGxlZnQ6IHZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHR3aWR0aDogKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMiArIFwicHhcIixcclxuXHRcdFx0XHRoZWlnaHQ6IFwiMzBweFwiLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHBvcHVwVmlld0NvbnRlbnRMaXN0LnB1c2goe1xyXG5cdFx0XHR0YWc6ICdmb250JyxcclxuXHRcdFx0aWQ6ICdjb25maXJtVGV4dCcsXHJcblx0XHRcdHRleHQ6IFwi56uL5Y2z5Y2H57qnXCIsXHJcblx0XHRcdHRleHRTdHlsZXM6IHtcclxuXHRcdFx0XHRzaXplOiAnMTRweCcsXHJcblx0XHRcdFx0Y29sb3I6IFwiI0ZGRlwiLFxyXG5cdFx0XHRcdGxpbmVTcGFjaW5nOiBcIjAlXCIsXHJcblx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwb3NpdGlvbjoge1xyXG5cdFx0XHRcdGJvdHRvbTogdmlld0NvbnRlbnRQYWRkaW5nICsgJ3B4JyxcclxuXHRcdFx0XHRsZWZ0OiAoKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMiArIHZpZXdDb250ZW50UGFkZGluZyAqIDIpICsgXCJweFwiLFxyXG5cdFx0XHRcdHdpZHRoOiAodmlld0NvbnRlbnRXaWR0aCAtIHZpZXdDb250ZW50UGFkZGluZykgLyAyICsgXCJweFwiLFxyXG5cdFx0XHRcdGhlaWdodDogXCIzMHB4XCIsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHQvLyDlvLnnqpflhoXlrrlcclxuXHRsZXQgcG9wdXBWaWV3ID0gbmV3IHBsdXMubmF0aXZlT2JqLlZpZXcoXCJwb3B1cFZpZXdcIiwgeyAvL+WIm+W7uuW6lemDqOWbvuagh+iPnOWNlVxyXG5cdFx0dGFnOiBcInJlY3RcIixcclxuXHRcdHRvcDogKHNjcmVlbkhlaWdodCAtIHBvcHVwVmlld0hlaWdodCkgLyAyICsgXCJweFwiLFxyXG5cdFx0bGVmdDogJzE1JScsXHJcblx0XHRoZWlnaHQ6IHBvcHVwVmlld0hlaWdodCArIFwicHhcIixcclxuXHRcdHdpZHRoOiBcIjcwJVwiXHJcblx0fSk7XHJcblx0Ly8g57uY5Yi255m96Imy6IOM5pmvXHJcblx0cG9wdXBWaWV3LmRyYXdSZWN0KHtcclxuXHRcdGNvbG9yOiBcIiNGRkZGRkZcIixcclxuXHRcdHJhZGl1czogXCI4cHhcIlxyXG5cdH0sIHtcclxuXHRcdHRvcDogXCI0MHB4XCIsXHJcblx0XHRoZWlnaHQ6IHBvcHVwVmlld0hlaWdodCAtIDQwICsgXCJweFwiLFxyXG5cdH0pO1xyXG5cdFxyXG5cdHBvcHVwVmlldy5kcmF3KHBvcHVwVmlld0NvbnRlbnRMaXN0KTtcclxuXHRwb3B1cFZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGxldCBtYXhUb3AgPSBwb3B1cFZpZXdIZWlnaHQgLSB2aWV3Q29udGVudFBhZGRpbmc7XHJcblx0XHRsZXQgbWF4TGVmdCA9IHBvcHVwVmlld1dpZHRoIC0gdmlld0NvbnRlbnRQYWRkaW5nO1xyXG5cdFx0bGV0IGJ1dHRvbldpZHRoID0gKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMjtcclxuXHRcdGlmIChlLmNsaWVudFkgPiBtYXhUb3AgLSAzMCAmJiBlLmNsaWVudFkgPCBtYXhUb3ApIHtcclxuXHRcdFx0aWYoZGF0YS51cGRhdGVUeXBlID09IFwiZm9yY2libHlcIil7XHJcblx0XHRcdFx0aWYoZS5jbGllbnRYID4gdmlld0NvbnRlbnRQYWRkaW5nICYmIGUuY2xpZW50WCA8IG1heExlZnQpe1xyXG5cdFx0XHRcdFx0Ly8g56uL5Y2z5Y2H57qnXHJcblx0XHRcdFx0XHRtYXNrTGF5ZXIuaGlkZSgpO1xyXG5cdFx0XHRcdFx0cG9wdXBWaWV3LmhpZGUoKTtcclxuXHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIOaaguS4jeWNh+e6p1xyXG5cdFx0XHRcdGlmIChlLmNsaWVudFggPiB2aWV3Q29udGVudFBhZGRpbmcgJiYgZS5jbGllbnRYIDwgbWF4TGVmdCAtIGJ1dHRvbldpZHRoIC0gdmlld0NvbnRlbnRQYWRkaW5nKSB7XHJcblx0XHRcdFx0XHRtYXNrTGF5ZXIuaGlkZSgpO1xyXG5cdFx0XHRcdFx0cG9wdXBWaWV3LmhpZGUoKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGUuY2xpZW50WCA+IG1heExlZnQgLSBidXR0b25XaWR0aCAmJiBlLmNsaWVudFggPCBtYXhMZWZ0KSB7XHJcblx0XHRcdFx0XHQvLyDnq4vljbPljYfnuqdcclxuXHRcdFx0XHRcdG1hc2tMYXllci5oaWRlKCk7XHJcblx0XHRcdFx0XHRwb3B1cFZpZXcuaGlkZSgpO1xyXG5cdFx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fSk7XHJcblx0aWYoZGF0YS51cGRhdGVUeXBlID09IFwic29saWNpdFwiKXtcclxuXHRcdC8vIOeCueWHu+mBrue9qeWxglxyXG5cdFx0bWFza0xheWVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHsgLy/lpITnkIbpga7nvanlsYLngrnlh7tcclxuXHRcdFx0bWFza0xheWVyLmhpZGUoKTtcclxuXHRcdFx0cG9wdXBWaWV3LmhpZGUoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHQvLyDmmL7npLrlvLnnqpdcclxuXHRtYXNrTGF5ZXIuc2hvdygpO1xyXG5cdHBvcHVwVmlldy5zaG93KCk7XHJcbn1cclxuLy8g5paH5Lu25LiL6L2955qE5by556qX57uY5Zu+XHJcbmZ1bmN0aW9uIGRvd25sb2FkUG9wdXBEcmF3aW5nKGRhdGEpe1xyXG5cdC8vIOS7peS4i+S4uuiuoeeul+iPnOWNleeahG52aWV357uY5Yi25biD5bGA77yM5Li65Zu65a6a566X5rOV77yM5L2/55So6ICF5peg5YWz5YWz5b+DXHJcblx0Y29uc3Qgc2NyZWVuV2lkdGggPSBwbHVzLnNjcmVlbi5yZXNvbHV0aW9uV2lkdGg7XHJcblx0Y29uc3Qgc2NyZWVuSGVpZ2h0ID0gcGx1cy5zY3JlZW4ucmVzb2x1dGlvbkhlaWdodDtcclxuXHQvL+W8ueeql+WuueWZqOWuveW6plxyXG5cdGNvbnN0IHBvcHVwVmlld1dpZHRoID0gc2NyZWVuV2lkdGggKiAwLjc7XHJcblx0Ly8g5by556qX5a655Zmo55qEUGFkZGluZ1xyXG5cdGNvbnN0IHZpZXdDb250ZW50UGFkZGluZyA9IDIwO1xyXG5cdC8vIOW8ueeql+WuueWZqOeahOWuveW6plxyXG5cdGNvbnN0IHZpZXdDb250ZW50V2lkdGggPSBwb3B1cFZpZXdXaWR0aCAtICh2aWV3Q29udGVudFBhZGRpbmcgKiAyKTtcclxuXHQvLyDlvLnnqpflrrnlmajpq5jluqZcclxuXHRsZXQgcG9wdXBWaWV3SGVpZ2h0ID0gdmlld0NvbnRlbnRQYWRkaW5nICogMyArIDYwO1xyXG5cdGxldCBwcm9ncmVzc1RpcCA9IGRhdGEucHJvZ3Jlc3NUaXAgfHwgXCLlh4blpIfkuIvovb0uLi5cIjtcclxuXHRsZXQgY29udGVudFRleHQgPSBkYXRhLmNvbnRlbnRUZXh0IHx8IFwi5q2j5Zyo5Li65oKo5pu05paw77yM6K+36ICQ5b+D562J5b6FXCI7XHJcblx0bGV0IGVsZW1lbnRMaXN0ID0gW1xyXG5cdFx0e1xyXG5cdFx0XHR0YWc6ICdyZWN0JywgLy/og4zmma/oibJcclxuXHRcdFx0Y29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdFx0cmVjdFN0eWxlczp7XHJcblx0XHRcdFx0cmFkaXVzOiBcIjhweFwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdHRhZzogJ2ZvbnQnLFxyXG5cdFx0XHRpZDogJ3RpdGxlJyxcclxuXHRcdFx0dGV4dDogXCLljYfnuqdBUFBcIixcclxuXHRcdFx0dGV4dFN0eWxlczoge1xyXG5cdFx0XHRcdHNpemU6ICcxNnB4JyxcclxuXHRcdFx0XHRjb2xvcjogXCIjMzMzXCIsXHJcblx0XHRcdFx0d2VpZ2h0OiBcImJvbGRcIixcclxuXHRcdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG5cdFx0XHRcdHdoaXRlU3BhY2U6IFwibm9ybWFsXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHR0b3A6IHZpZXdDb250ZW50UGFkZGluZyArICdweCcsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjMwcHhcIixcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dGFnOiAnZm9udCcsXHJcblx0XHRcdGlkOiAnY29udGVudCcsXHJcblx0XHRcdHRleHQ6IGNvbnRlbnRUZXh0LFxyXG5cdFx0XHR0ZXh0U3R5bGVzOiB7XHJcblx0XHRcdFx0c2l6ZTogJzE0cHgnLFxyXG5cdFx0XHRcdGNvbG9yOiBcIiMzMzNcIixcclxuXHRcdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiLFxyXG5cdFx0XHRcdHdoaXRlU3BhY2U6IFwibm9ybWFsXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHR0b3A6IHZpZXdDb250ZW50UGFkZGluZyAqIDIgKyAzMCArICdweCcsXHJcblx0XHRcdFx0aGVpZ2h0OiBcIjIwcHhcIixcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdF07XHJcblx0Ly8g5piv5ZCm5pyJ6L+b5bqm5p2hXHJcblx0aWYoZGF0YS5wcm9ncmVzcyl7XHJcblx0XHRwb3B1cFZpZXdIZWlnaHQgKz0gdmlld0NvbnRlbnRQYWRkaW5nICsgNDA7XHJcblx0XHRlbGVtZW50TGlzdCA9IGVsZW1lbnRMaXN0LmNvbmNhdChbXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0YWc6ICdmb250JyxcclxuXHRcdFx0XHRpZDogJ3Byb2dyZXNzVmFsdWUnLFxyXG5cdFx0XHRcdHRleHQ6IHByb2dyZXNzVGlwLFxyXG5cdFx0XHRcdHRleHRTdHlsZXM6IHtcclxuXHRcdFx0XHRcdHNpemU6ICcxNHB4JyxcclxuXHRcdFx0XHRcdGNvbG9yOiAkbWFpbkNvbG9yLFxyXG5cdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRcdHRvcDogdmlld0NvbnRlbnRQYWRkaW5nICogNCArIDIwICsgJ3B4JyxcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzMHB4XCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0YWc6ICdyZWN0JywgLy/nu5jliLbov5vluqbmnaHog4zmma9cclxuXHRcdFx0XHRpZDogJ3Byb2dyZXNzQmcnLFxyXG5cdFx0XHRcdHJlY3RTdHlsZXM6e1xyXG5cdFx0XHRcdFx0cmFkaXVzOiBcIjRweFwiLFxyXG5cdFx0XHRcdFx0Ym9yZGVyQ29sb3I6IFwiI2YxZjFmMVwiLFxyXG5cdFx0XHRcdFx0Ym9yZGVyV2lkdGg6IFwiMXB4XCIsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwb3NpdGlvbjp7XHJcblx0XHRcdFx0XHR0b3A6IHZpZXdDb250ZW50UGFkZGluZyAqIDQgKyA2MCArICdweCcsXHJcblx0XHRcdFx0XHRsZWZ0OiB2aWV3Q29udGVudFBhZGRpbmcgKyBcInB4XCIsXHJcblx0XHRcdFx0XHR3aWR0aDogdmlld0NvbnRlbnRXaWR0aCArIFwicHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCI4cHhcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdF0pO1xyXG5cdH1cclxuXHRpZiAoZGF0YS5idXR0b25OdW0gPT0gMikge1xyXG5cdFx0cG9wdXBWaWV3SGVpZ2h0ICs9IHZpZXdDb250ZW50UGFkZGluZyArIDMwO1xyXG5cdFx0ZWxlbWVudExpc3QgPSBlbGVtZW50TGlzdC5jb25jYXQoW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGFnOiAncmVjdCcsIC8v57uY5Yi25bqV6L655oyJ6ZKuXHJcblx0XHRcdFx0cmVjdFN0eWxlczp7XHJcblx0XHRcdFx0XHRyYWRpdXM6IFwiM3B4XCIsXHJcblx0XHRcdFx0XHRib3JkZXJDb2xvcjogXCIjZjFmMWYxXCIsXHJcblx0XHRcdFx0XHRib3JkZXJXaWR0aDogXCIxcHhcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBvc2l0aW9uOntcclxuXHRcdFx0XHRcdGJvdHRvbTogdmlld0NvbnRlbnRQYWRkaW5nICsgJ3B4JyxcclxuXHRcdFx0XHRcdGxlZnQ6IHZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHRcdHdpZHRoOiAodmlld0NvbnRlbnRXaWR0aCAtIHZpZXdDb250ZW50UGFkZGluZykgLyAyICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjMwcHhcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRhZzogJ3JlY3QnLCAvL+e7mOWItuW6lei+ueaMiemSrlxyXG5cdFx0XHRcdHJlY3RTdHlsZXM6e1xyXG5cdFx0XHRcdFx0cmFkaXVzOiBcIjNweFwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICRtYWluQ29sb3JcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBvc2l0aW9uOntcclxuXHRcdFx0XHRcdGJvdHRvbTogdmlld0NvbnRlbnRQYWRkaW5nICsgJ3B4JyxcclxuXHRcdFx0XHRcdGxlZnQ6ICgodmlld0NvbnRlbnRXaWR0aCAtIHZpZXdDb250ZW50UGFkZGluZykgLyAyICsgdmlld0NvbnRlbnRQYWRkaW5nICogMikgKyBcInB4XCIsXHJcblx0XHRcdFx0XHR3aWR0aDogKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMiArIFwicHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzMHB4XCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0YWc6ICdmb250JyxcclxuXHRcdFx0XHRpZDogJ2NhbmNlbFRleHQnLFxyXG5cdFx0XHRcdHRleHQ6IFwi5Y+W5raI5LiL6L29XCIsXHJcblx0XHRcdFx0dGV4dFN0eWxlczoge1xyXG5cdFx0XHRcdFx0c2l6ZTogJzE0cHgnLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwiIzY2NlwiLFxyXG5cdFx0XHRcdFx0bGluZVNwYWNpbmc6IFwiMCVcIixcclxuXHRcdFx0XHRcdHdoaXRlU3BhY2U6IFwibm9ybWFsXCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBvc2l0aW9uOiB7XHJcblx0XHRcdFx0XHRib3R0b206IHZpZXdDb250ZW50UGFkZGluZyArICdweCcsXHJcblx0XHRcdFx0XHRsZWZ0OiB2aWV3Q29udGVudFBhZGRpbmcgKyBcInB4XCIsXHJcblx0XHRcdFx0XHR3aWR0aDogKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMiArIFwicHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzMHB4XCIsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGFnOiAnZm9udCcsXHJcblx0XHRcdFx0aWQ6ICdjb25maXJtVGV4dCcsXHJcblx0XHRcdFx0dGV4dDogXCLlkI7lj7DkuIvovb1cIixcclxuXHRcdFx0XHR0ZXh0U3R5bGVzOiB7XHJcblx0XHRcdFx0XHRzaXplOiAnMTRweCcsXHJcblx0XHRcdFx0XHRjb2xvcjogXCIjRkZGXCIsXHJcblx0XHRcdFx0XHRsaW5lU3BhY2luZzogXCIwJVwiLFxyXG5cdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRcdGJvdHRvbTogdmlld0NvbnRlbnRQYWRkaW5nICsgJ3B4JyxcclxuXHRcdFx0XHRcdGxlZnQ6ICgodmlld0NvbnRlbnRXaWR0aCAtIHZpZXdDb250ZW50UGFkZGluZykgLyAyICsgdmlld0NvbnRlbnRQYWRkaW5nICogMikgKyBcInB4XCIsXHJcblx0XHRcdFx0XHR3aWR0aDogKHZpZXdDb250ZW50V2lkdGggLSB2aWV3Q29udGVudFBhZGRpbmcpIC8gMiArIFwicHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCIzMHB4XCIsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRdKTtcclxuXHR9XHJcblx0aWYgKGRhdGEuYnV0dG9uTnVtID09IDEpIHtcclxuXHRcdHBvcHVwVmlld0hlaWdodCArPSB2aWV3Q29udGVudFBhZGRpbmcgKyA0MDtcclxuXHRcdGVsZW1lbnRMaXN0ID0gZWxlbWVudExpc3QuY29uY2F0KFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRhZzogJ3JlY3QnLCAvL+e7mOWItuW6lei+ueaMiemSrlxyXG5cdFx0XHRcdHJlY3RTdHlsZXM6e1xyXG5cdFx0XHRcdFx0cmFkaXVzOiBcIjZweFwiLFxyXG5cdFx0XHRcdFx0Y29sb3I6ICRtYWluQ29sb3JcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBvc2l0aW9uOntcclxuXHRcdFx0XHRcdGJvdHRvbTogdmlld0NvbnRlbnRQYWRkaW5nICsgJ3B4JyxcclxuXHRcdFx0XHRcdGxlZnQ6IHZpZXdDb250ZW50UGFkZGluZyArIFwicHhcIixcclxuXHRcdFx0XHRcdHdpZHRoOiB2aWV3Q29udGVudFdpZHRoICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBcIjQwcHhcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRhZzogJ2ZvbnQnLFxyXG5cdFx0XHRcdGlkOiAnY29uZmlybVRleHQnLFxyXG5cdFx0XHRcdHRleHQ6IFwi5YWz6ZetXCIsXHJcblx0XHRcdFx0dGV4dFN0eWxlczoge1xyXG5cdFx0XHRcdFx0c2l6ZTogJzE0cHgnLFxyXG5cdFx0XHRcdFx0Y29sb3I6IFwiI0ZGRlwiLFxyXG5cdFx0XHRcdFx0bGluZVNwYWNpbmc6IFwiMCVcIixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHBvc2l0aW9uOiB7XHJcblx0XHRcdFx0XHRib3R0b206IHZpZXdDb250ZW50UGFkZGluZyArICdweCcsXHJcblx0XHRcdFx0XHRsZWZ0OiB2aWV3Q29udGVudFBhZGRpbmcgKyBcInB4XCIsXHJcblx0XHRcdFx0XHR3aWR0aDogdmlld0NvbnRlbnRXaWR0aCArIFwicHhcIixcclxuXHRcdFx0XHRcdGhlaWdodDogXCI0MHB4XCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdF0pO1xyXG5cdH1cclxuXHRyZXR1cm4ge1xyXG5cdFx0cG9wdXBWaWV3SGVpZ2h0OnBvcHVwVmlld0hlaWdodCxcclxuXHRcdHBvcHVwVmlld1dpZHRoOnBvcHVwVmlld1dpZHRoLFxyXG5cdFx0c2NyZWVuSGVpZ2h0OnNjcmVlbkhlaWdodCxcclxuXHRcdHZpZXdDb250ZW50V2lkdGg6dmlld0NvbnRlbnRXaWR0aCxcclxuXHRcdHZpZXdDb250ZW50UGFkZGluZzp2aWV3Q29udGVudFBhZGRpbmcsXHJcblx0XHRlbGVtZW50TGlzdDogZWxlbWVudExpc3RcclxuXHR9O1xyXG59XHJcbi8vIOaWh+S7tuS4i+i9veeahOW8ueeql1xyXG5mdW5jdGlvbiBkb3dubG9hZFBvcHVwKGRhdGEpIHtcclxuXHQvLyDlvLnnqpfpga7nvanlsYJcclxuXHRsZXQgbWFza0xheWVyID0gbmV3IHBsdXMubmF0aXZlT2JqLlZpZXcoXCJtYXNrTGF5ZXJcIiwgeyAvL+WFiOWIm+W7uumBrue9qeWxglxyXG5cdFx0dG9wOiAnMHB4JyxcclxuXHRcdGxlZnQ6ICcwcHgnLFxyXG5cdFx0aGVpZ2h0OiAnMTAwJScsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjUpJ1xyXG5cdH0pO1xyXG5cdGxldCBwb3B1cFZpZXdEYXRhID0gZG93bmxvYWRQb3B1cERyYXdpbmcoZGF0YSk7XHJcblx0Ly8g5by556qX5YaF5a65XHJcblx0bGV0IHBvcHVwVmlldyA9IG5ldyBwbHVzLm5hdGl2ZU9iai5WaWV3KFwicG9wdXBWaWV3XCIsIHsgLy/liJvlu7rlupXpg6jlm77moIfoj5zljZVcclxuXHRcdHRhZzogXCJyZWN0XCIsXHJcblx0XHR0b3A6IChwb3B1cFZpZXdEYXRhLnNjcmVlbkhlaWdodCAtIHBvcHVwVmlld0RhdGEucG9wdXBWaWV3SGVpZ2h0KSAvIDIgKyBcInB4XCIsXHJcblx0XHRsZWZ0OiAnMTUlJyxcclxuXHRcdGhlaWdodDogcG9wdXBWaWV3RGF0YS5wb3B1cFZpZXdIZWlnaHQgKyBcInB4XCIsXHJcblx0XHR3aWR0aDogXCI3MCVcIixcclxuXHR9KTtcclxuXHRsZXQgcHJvZ3Jlc3NWYWx1ZSA9IDA7XHJcblx0bGV0IHByb2dyZXNzVGlwID0gMDtcclxuXHRsZXQgY29udGVudFRleHQgPSAwO1xyXG5cdGxldCBidXR0b25OdW0gPSAyO1xyXG5cdGlmKGRhdGEuYnV0dG9uTnVtID49IDApe1xyXG5cdFx0YnV0dG9uTnVtID0gZGF0YS5idXR0b25OdW07XHJcblx0fVxyXG5cdHBvcHVwVmlldy5kcmF3KHBvcHVwVmlld0RhdGEuZWxlbWVudExpc3QpO1xyXG4gICAgbGV0IGNhbGxiYWNrRGF0YSA9IHtcclxuXHRcdGNoYW5nZTogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdGxldCBwcm9ncmVzc0VsZW1lbnQgPSBbXTtcclxuXHRcdFx0aWYocmVzLnByb2dyZXNzVmFsdWUpe1xyXG5cdFx0XHRcdHByb2dyZXNzVmFsdWUgPSByZXMucHJvZ3Jlc3NWYWx1ZTtcclxuXHRcdFx0XHQvLyDnu5jliLbov5vluqbmnaFcclxuXHRcdFx0XHRwcm9ncmVzc0VsZW1lbnQucHVzaCh7XHJcblx0XHRcdFx0XHR0YWc6ICdyZWN0JywgLy/nu5jliLbov5vluqbmnaHog4zmma9cclxuXHRcdFx0XHRcdGlkOiAncHJvZ3Jlc3NWYWx1ZUJnJyxcclxuXHRcdFx0XHRcdHJlY3RTdHlsZXM6e1xyXG5cdFx0XHRcdFx0XHRyYWRpdXM6IFwiNHB4XCIsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAkbWFpbkNvbG9yXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cG9zaXRpb246e1xyXG5cdFx0XHRcdFx0XHR0b3A6IHBvcHVwVmlld0RhdGEudmlld0NvbnRlbnRQYWRkaW5nICogNCArIDYwICsgJ3B4JyxcclxuXHRcdFx0XHRcdFx0bGVmdDogcG9wdXBWaWV3RGF0YS52aWV3Q29udGVudFBhZGRpbmcgKyBcInB4XCIsXHJcblx0XHRcdFx0XHRcdHdpZHRoOiBwb3B1cFZpZXdEYXRhLnZpZXdDb250ZW50V2lkdGggKiAocmVzLnByb2dyZXNzVmFsdWUgLyAxMDApICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IFwiOHB4XCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihyZXMucHJvZ3Jlc3NUaXApe1xyXG5cdFx0XHRcdHByb2dyZXNzVGlwID0gcmVzLnByb2dyZXNzVGlwO1xyXG5cdFx0XHRcdHByb2dyZXNzRWxlbWVudC5wdXNoKHtcclxuXHRcdFx0XHRcdHRhZzogJ2ZvbnQnLFxyXG5cdFx0XHRcdFx0aWQ6ICdwcm9ncmVzc1ZhbHVlJyxcclxuXHRcdFx0XHRcdHRleHQ6IHJlcy5wcm9ncmVzc1RpcCxcclxuXHRcdFx0XHRcdHRleHRTdHlsZXM6IHtcclxuXHRcdFx0XHRcdFx0c2l6ZTogJzE0cHgnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJG1haW5Db2xvcixcclxuXHRcdFx0XHRcdFx0d2hpdGVTcGFjZTogXCJub3JtYWxcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7XHJcblx0XHRcdFx0XHRcdHRvcDogcG9wdXBWaWV3RGF0YS52aWV3Q29udGVudFBhZGRpbmcgKiA0ICsgMjAgKyAncHgnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IFwiMzBweFwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYocmVzLmNvbnRlbnRUZXh0KXtcclxuXHRcdFx0XHRjb250ZW50VGV4dCA9IHJlcy5jb250ZW50VGV4dDtcclxuXHRcdFx0XHRwcm9ncmVzc0VsZW1lbnQucHVzaCh7XHJcblx0XHRcdFx0XHR0YWc6ICdmb250JyxcclxuXHRcdFx0XHRcdGlkOiAnY29udGVudCcsXHJcblx0XHRcdFx0XHR0ZXh0OiByZXMuY29udGVudFRleHQsXHJcblx0XHRcdFx0XHR0ZXh0U3R5bGVzOiB7XHJcblx0XHRcdFx0XHRcdHNpemU6ICcxNnB4JyxcclxuXHRcdFx0XHRcdFx0Y29sb3I6IFwiIzMzM1wiLFxyXG5cdFx0XHRcdFx0XHR3aGl0ZVNwYWNlOiBcIm5vcm1hbFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0cG9zaXRpb246IHtcclxuXHRcdFx0XHRcdFx0dG9wOiBwb3B1cFZpZXdEYXRhLnZpZXdDb250ZW50UGFkZGluZyAqIDIgKyAzMCArICdweCcsXHJcblx0XHRcdFx0XHRcdGhlaWdodDogXCIzMHB4XCIsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYocmVzLmJ1dHRvbk51bSA+PSAwICYmIGJ1dHRvbk51bSAhPSByZXMuYnV0dG9uTnVtKXtcclxuXHRcdFx0XHRidXR0b25OdW0gPSByZXMuYnV0dG9uTnVtO1xyXG5cdFx0XHRcdHBvcHVwVmlldy5yZXNldCgpO1xyXG5cdFx0XHRcdHBvcHVwVmlld0RhdGEgPSBkb3dubG9hZFBvcHVwRHJhd2luZyhPYmplY3QuYXNzaWduKHtcclxuXHRcdFx0XHRcdHByb2dyZXNzVmFsdWU6cHJvZ3Jlc3NWYWx1ZSxcclxuXHRcdFx0XHRcdHByb2dyZXNzVGlwOnByb2dyZXNzVGlwLFxyXG5cdFx0XHRcdFx0Y29udGVudFRleHQ6Y29udGVudFRleHQsXHJcblx0XHRcdFx0fSxyZXMpKTtcclxuXHRcdFx0XHRsZXQgbmV3RWxlbWVudCA9IFtdO1xyXG5cdFx0XHRcdHBvcHVwVmlld0RhdGEuZWxlbWVudExpc3QubWFwKChpdGVtLGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgaGF2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0cHJvZ3Jlc3NFbGVtZW50LmZvckVhY2goKGNoaWxkSXRlbSxjaGlsZEluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmKGl0ZW0uaWQgPT0gY2hpbGRJdGVtLmlkKXtcclxuXHRcdFx0XHRcdFx0XHRoYXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRpZighaGF2ZSl7XHJcblx0XHRcdFx0XHRcdG5ld0VsZW1lbnQucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRwcm9ncmVzc0VsZW1lbnQgPSBuZXdFbGVtZW50LmNvbmNhdChwcm9ncmVzc0VsZW1lbnQpO1xyXG5cdFx0XHRcdHBvcHVwVmlldy5zZXRTdHlsZSh7XHJcblx0XHRcdFx0XHR0YWc6IFwicmVjdFwiLFxyXG5cdFx0XHRcdFx0dG9wOiAocG9wdXBWaWV3RGF0YS5zY3JlZW5IZWlnaHQgLSBwb3B1cFZpZXdEYXRhLnBvcHVwVmlld0hlaWdodCkgLyAyICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0bGVmdDogJzE1JScsXHJcblx0XHRcdFx0XHRoZWlnaHQ6IHBvcHVwVmlld0RhdGEucG9wdXBWaWV3SGVpZ2h0ICsgXCJweFwiLFxyXG5cdFx0XHRcdFx0d2lkdGg6IFwiNzAlXCIsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cG9wdXBWaWV3LmRyYXcocHJvZ3Jlc3NFbGVtZW50KTsgXHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHBvcHVwVmlldy5kcmF3KHByb2dyZXNzRWxlbWVudCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjYW5jZWw6IGZ1bmN0aW9uKCkgeyBcclxuXHRcdFx0bWFza0xheWVyLmhpZGUoKTtcclxuXHRcdFx0cG9wdXBWaWV3LmhpZGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cG9wdXBWaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRsZXQgbWF4VG9wID0gcG9wdXBWaWV3RGF0YS5wb3B1cFZpZXdIZWlnaHQgLSBwb3B1cFZpZXdEYXRhLnZpZXdDb250ZW50UGFkZGluZztcclxuXHRcdGxldCBtYXhMZWZ0ID0gcG9wdXBWaWV3RGF0YS5wb3B1cFZpZXdXaWR0aCAtIHBvcHVwVmlld0RhdGEudmlld0NvbnRlbnRQYWRkaW5nO1xyXG5cdFx0aWYgKGUuY2xpZW50WSA+IG1heFRvcCAtIDQwICYmIGUuY2xpZW50WSA8IG1heFRvcCkge1xyXG5cdFx0XHRpZihidXR0b25OdW0gPT0gMSl7XHJcblx0XHRcdFx0Ly8g5Y2V5oyJ6ZKuXHJcblx0XHRcdFx0aWYgKGUuY2xpZW50WCA+IHBvcHVwVmlld0RhdGEudmlld0NvbnRlbnRQYWRkaW5nICYmIGUuY2xpZW50WCA8IG1heExlZnQpIHtcclxuXHRcdFx0XHRcdG1hc2tMYXllci5oaWRlKCk7XHJcblx0XHRcdFx0XHRwb3B1cFZpZXcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrRGF0YS5yZWJvb3QoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNlIGlmKGJ1dHRvbk51bSA9PSAyKXtcclxuXHRcdFx0XHQvLyDlj4zmjInpkq5cclxuXHRcdFx0XHRsZXQgYnV0dG9uV2lkdGggPSAocG9wdXBWaWV3RGF0YS52aWV3Q29udGVudFdpZHRoIC0gcG9wdXBWaWV3RGF0YS52aWV3Q29udGVudFBhZGRpbmcpIC8gMjtcclxuXHRcdFx0XHRpZiAoZS5jbGllbnRYID4gcG9wdXBWaWV3RGF0YS52aWV3Q29udGVudFBhZGRpbmcgJiYgZS5jbGllbnRYIDwgbWF4TGVmdCAtIGJ1dHRvbldpZHRoIC0gcG9wdXBWaWV3RGF0YS52aWV3Q29udGVudFBhZGRpbmcpIHtcclxuXHRcdFx0XHRcdG1hc2tMYXllci5oaWRlKCk7XHJcblx0XHRcdFx0XHRwb3B1cFZpZXcuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrRGF0YS5jYW5jZWxEb3dubG9hZCgpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZS5jbGllbnRYID4gbWF4TGVmdCAtIGJ1dHRvbldpZHRoICYmIGUuY2xpZW50WCA8IG1heExlZnQpIHtcclxuXHRcdFx0XHRcdG1hc2tMYXllci5oaWRlKCk7XHJcblx0XHRcdFx0XHRwb3B1cFZpZXcuaGlkZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdC8vIOaYvuekuuW8ueeql1xyXG5cdG1hc2tMYXllci5zaG93KCk7XHJcblx0cG9wdXBWaWV3LnNob3coKTtcclxuXHQvLyDmlLnlj5jov5vluqbmnaFcclxuXHRyZXR1cm4gY2FsbGJhY2tEYXRhO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGlzUHJvbXB0ID0gZmFsc2UpIHtcclxuXHRnZXRDdXJyZW50Tm8oaW5mbyA9PiB7XHJcblx0XHRnZXRBcHBVcGRhdGVObyhpbmZvLCBpc1Byb21wdCwgcmVzID0+IHtcclxuXHRcdFx0aWYgKHJlcy51cGRhdGVUeXBlID09IFwiZm9yY2libHlcIiB8fCByZXMudXBkYXRlVHlwZSA9PSBcInNpbGVudFwiKSB7XHJcblx0XHRcdFx0aWYgKC9cXC53Z3QkL2kudGVzdChyZXMuZG93bmxvYWRVcmwpKSB7XHJcblx0XHRcdFx0XHRnZXREb3dubG9hZChyZXMpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZigvXFwuaHRtbCQvaS50ZXN0KHJlcy5kb3dubG9hZFVybCkpe1xyXG5cdFx0XHRcdFx0cGx1cy5ydW50aW1lLm9wZW5VUkwocmVzLmRvd25sb2FkVXJsKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKHBsYXRmb3JtID09IFwiYW5kcm9pZFwiKSB7XHJcblx0XHRcdFx0XHRcdGdldERvd25sb2FkKHJlcyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRwbHVzLnJ1bnRpbWUub3BlblVSTChyZXMuZG93bmxvYWRVcmwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmKHJlcy51cGRhdGVUeXBlID09IFwic29saWNpdFwiKXtcclxuXHRcdFx0XHR1cGRhdGVQb3B1cChyZXMsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKC9cXC53Z3QkL2kudGVzdChyZXMuZG93bmxvYWRVcmwpKSB7XHJcblx0XHRcdFx0XHRcdGdldERvd25sb2FkKHJlcyk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoL1xcLmh0bWwkL2kudGVzdChyZXMuZG93bmxvYWRVcmwpKXtcclxuXHRcdFx0XHRcdFx0cGx1cy5ydW50aW1lLm9wZW5VUkwocmVzLmRvd25sb2FkVXJsKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChwbGF0Zm9ybSA9PSBcImFuZHJvaWRcIikge1xyXG5cdFx0XHRcdFx0XHRcdGdldERvd25sb2FkKHJlcyk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cGx1cy5ydW50aW1lLm9wZW5VUkwocmVzLmRvd25sb2FkVXJsKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!******************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/utils/app-plus/request.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.appUpdateIcon = exports.appUpdateColor = exports.getAppUpdateNo = void 0;\nvar _config = __webpack_require__(/*! @/config.js */ 26); // 获取版本号信息\n\n\nvar getAppUpdateNo = function getAppUpdateNo(versionInfo) {var isPrompt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var callback = arguments.length > 2 ? arguments[2] : undefined;\n  var platform = uni.getSystemInfoSync().platform;\n  uni.request({\n    url: \"\".concat(_config.VUE_APP_CONFIG.baseUrl, \"/versionLast\"),\n    success: function success(res) {\n      var data = res.data;\n      if (_config.VUE_APP_CONFIG.mode === \"release\") {\n        if (data.data) {\n          var str = AesDecrypt(data.data);\n          data = JSON.parse(str);\n        }\n      }var _data =\n\n\n\n\n\n\n\n      data,ios_path = _data.ios_path,path = _data.path,wgt = _data.wgt,version = _data.version,version_tag = _data.version_tag,compatible = _data.compatible;\n      var downloadUrl = wgt ? wgt : platform == \"android\" ? path : ios_path;\n      if (version > versionInfo.versionCode) {\n        callback && callback({\n          updateType: compatible == false ? 'forcibly' :\n          'solicit', //forcibly = 强制更新, solicit = 弹窗确认更新, silent = 静默更新\n          downloadUrl: downloadUrl,\n          versionCode: version,\n          setupPage: isPrompt,\n          versionInfo: '发现新的版本',\n          versionName: version_tag,\n          type: platform == \"android\" ? 1101 : 1102 });\n\n      }\n    } });\n\n};exports.getAppUpdateNo = getAppUpdateNo;\n\nvar appUpdateColor = 'f00';exports.appUpdateColor = appUpdateColor;\nvar appUpdateIcon = '';exports.appUpdateIcon = appUpdateIcon;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYXBwLXBsdXMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJnZXRBcHBVcGRhdGVObyIsInZlcnNpb25JbmZvIiwiaXNQcm9tcHQiLCJjYWxsYmFjayIsInBsYXRmb3JtIiwidW5pIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJyZXF1ZXN0IiwidXJsIiwiVlVFX0FQUF9DT05GSUciLCJiYXNlVXJsIiwic3VjY2VzcyIsInJlcyIsImRhdGEiLCJtb2RlIiwic3RyIiwiQWVzRGVjcnlwdCIsIkpTT04iLCJwYXJzZSIsImlvc19wYXRoIiwicGF0aCIsIndndCIsInZlcnNpb24iLCJ2ZXJzaW9uX3RhZyIsImNvbXBhdGlibGUiLCJkb3dubG9hZFVybCIsInZlcnNpb25Db2RlIiwidXBkYXRlVHlwZSIsInNldHVwUGFnZSIsInZlcnNpb25OYW1lIiwidHlwZSIsImFwcFVwZGF0ZUNvbG9yIiwiYXBwVXBkYXRlSWNvbiJdLCJtYXBwaW5ncyI6IjtBQUNBLHlELENBREE7OztBQUlPLElBQU1BLGNBQWMsR0FBQyxTQUFmQSxjQUFlLENBQUNDLFdBQUQsRUFBMkMsS0FBN0JDLFFBQTZCLHVFQUFsQixLQUFrQixLQUFYQyxRQUFXO0FBQ3RFLE1BQU1DLFFBQVEsR0FBR0MsR0FBRyxDQUFDQyxpQkFBSixHQUF3QkYsUUFBekM7QUFDQUMsS0FBRyxDQUFDRSxPQUFKLENBQVk7QUFDWEMsT0FBRyxZQUFLQyx1QkFBZUMsT0FBcEIsaUJBRFE7QUFFWEMsV0FGVyxtQkFFSEMsR0FGRyxFQUVFO0FBQ1osVUFBSUMsSUFBSSxHQUFHRCxHQUFHLENBQUNDLElBQWY7QUFDQSxVQUFJSix1QkFBZUssSUFBZixLQUF3QixTQUE1QixFQUF1QztBQUN0QyxZQUFJRCxJQUFJLENBQUNBLElBQVQsRUFBZTtBQUNkLGNBQU1FLEdBQUcsR0FBR0MsVUFBVSxDQUFDSCxJQUFJLENBQUNBLElBQU4sQ0FBdEI7QUFDQUEsY0FBSSxHQUFHSSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBWCxDQUFQO0FBQ0E7QUFDRCxPQVBXOzs7Ozs7OztBQWVSRixVQWZRLENBU1hNLFFBVFcsU0FTWEEsUUFUVyxDQVVYQyxJQVZXLFNBVVhBLElBVlcsQ0FXWEMsR0FYVyxTQVdYQSxHQVhXLENBWVhDLE9BWlcsU0FZWEEsT0FaVyxDQWFYQyxXQWJXLFNBYVhBLFdBYlcsQ0FjWEMsVUFkVyxTQWNYQSxVQWRXO0FBZ0JaLFVBQUlDLFdBQVcsR0FBR0osR0FBRyxHQUFHQSxHQUFILEdBQVVqQixRQUFRLElBQUksU0FBWixHQUF3QmdCLElBQXhCLEdBQStCRCxRQUE5RDtBQUNBLFVBQUlHLE9BQU8sR0FBR3JCLFdBQVcsQ0FBQ3lCLFdBQTFCLEVBQXVDO0FBQ3RDdkIsZ0JBQVEsSUFBSUEsUUFBUSxDQUFDO0FBQ3BCd0Isb0JBQVUsRUFBRUgsVUFBVSxJQUFJLEtBQWQsR0FBc0IsVUFBdEI7QUFDWixtQkFGb0IsRUFFVDtBQUNYQyxxQkFBVyxFQUFFQSxXQUhPO0FBSXBCQyxxQkFBVyxFQUFFSixPQUpPO0FBS3BCTSxtQkFBUyxFQUFFMUIsUUFMUztBQU1wQkQscUJBQVcsRUFBRSxRQU5PO0FBT3BCNEIscUJBQVcsRUFBRU4sV0FQTztBQVFwQk8sY0FBSSxFQUFFMUIsUUFBUSxJQUFJLFNBQVosR0FBd0IsSUFBeEIsR0FBK0IsSUFSakIsRUFBRCxDQUFwQjs7QUFVQTtBQUNELEtBL0JVLEVBQVo7O0FBaUNBLENBbkNNLEM7O0FBcUNBLElBQU0yQixjQUFjLEdBQUcsS0FBdkIsQztBQUNBLElBQU1DLGFBQWEsR0FBRyxFQUF0QixDIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g6I635Y+W54mI5pys5Y+35L+h5oGvXHJcbmltcG9ydCB7XHJcblx0VlVFX0FQUF9DT05GSUdcclxufSBmcm9tICdAL2NvbmZpZy5qcydcclxuZXhwb3J0IGNvbnN0IGdldEFwcFVwZGF0ZU5vPSh2ZXJzaW9uSW5mbywgaXNQcm9tcHQgPSBmYWxzZSwgY2FsbGJhY2spPT57XHJcblx0Y29uc3QgcGxhdGZvcm0gPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybTtcclxuXHR1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IGAke1ZVRV9BUFBfQ09ORklHLmJhc2VVcmx9L3ZlcnNpb25MYXN0YCxcclxuXHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdGxldCBkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRcdGlmIChWVUVfQVBQX0NPTkZJRy5tb2RlID09PSBcInJlbGVhc2VcIikge1xyXG5cdFx0XHRcdGlmIChkYXRhLmRhdGEpIHtcclxuXHRcdFx0XHRcdGNvbnN0IHN0ciA9IEFlc0RlY3J5cHQoZGF0YS5kYXRhKVxyXG5cdFx0XHRcdFx0ZGF0YSA9IEpTT04ucGFyc2Uoc3RyKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0aW9zX3BhdGgsXHJcblx0XHRcdFx0cGF0aCxcclxuXHRcdFx0XHR3Z3QsXHJcblx0XHRcdFx0dmVyc2lvbixcclxuXHRcdFx0XHR2ZXJzaW9uX3RhZyxcclxuXHRcdFx0XHRjb21wYXRpYmxlXHJcblx0XHRcdH0gPSBkYXRhO1xyXG5cdFx0XHRsZXQgZG93bmxvYWRVcmwgPSB3Z3QgPyB3Z3QgOiAocGxhdGZvcm0gPT0gXCJhbmRyb2lkXCIgPyBwYXRoIDogaW9zX3BhdGgpO1xyXG5cdFx0XHRpZiAodmVyc2lvbiA+IHZlcnNpb25JbmZvLnZlcnNpb25Db2RlKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2soe1xyXG5cdFx0XHRcdFx0dXBkYXRlVHlwZTogY29tcGF0aWJsZSA9PSBmYWxzZSA/ICdmb3JjaWJseScgOlxyXG5cdFx0XHRcdFx0J3NvbGljaXQnLCAvL2ZvcmNpYmx5ID0g5by65Yi25pu05pawLCBzb2xpY2l0ID0g5by556qX56Gu6K6k5pu05pawLCBzaWxlbnQgPSDpnZnpu5jmm7TmlrBcclxuXHRcdFx0XHRcdGRvd25sb2FkVXJsOiBkb3dubG9hZFVybCxcclxuXHRcdFx0XHRcdHZlcnNpb25Db2RlOiB2ZXJzaW9uLFxyXG5cdFx0XHRcdFx0c2V0dXBQYWdlOiBpc1Byb21wdCxcclxuXHRcdFx0XHRcdHZlcnNpb25JbmZvOiAn5Y+R546w5paw55qE54mI5pysJyxcclxuXHRcdFx0XHRcdHZlcnNpb25OYW1lOiB2ZXJzaW9uX3RhZyxcclxuXHRcdFx0XHRcdHR5cGU6IHBsYXRmb3JtID09IFwiYW5kcm9pZFwiID8gMTEwMSA6IDExMDJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcHBVcGRhdGVDb2xvciA9ICdmMDAnXHJcbmV4cG9ydCBjb25zdCBhcHBVcGRhdGVJY29uID0gJyciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/config.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.VUE_APP_CONFIG = void 0;var _configGlobal = __webpack_require__(/*! @/config-global.js */ 27);\n\n\n\n\nvar VUE_APP_CONFIG = _configGlobal.CONFIG.dev;exports.VUE_APP_CONFIG = VUE_APP_CONFIG;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnLmpzIl0sIm5hbWVzIjpbIlZVRV9BUFBfQ09ORklHIiwiQ09ORklHIiwiZGV2Il0sIm1hcHBpbmdzIjoiOEZBQUE7Ozs7O0FBS08sSUFBTUEsY0FBYyxHQUFHQyxxQkFBT0MsR0FBOUIsQyIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFQUF9VUERBVEVfQ09ORklHIGFzIGFwcFVwZGF0ZUNvbmZpZyxcblx0Q09ORklHXG59IGZyb20gJ0AvY29uZmlnLWdsb2JhbC5qcydcblxuZXhwb3J0IGNvbnN0IFZVRV9BUFBfQ09ORklHID0gQ09ORklHLmRldjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!*********************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/config-global.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.REQUEST_TIMEOUT = exports.REQUEST_REPEAT_CANCEL = exports.CONFIG = void 0;var CONFIG = {\n  dev: {\n    baseUrl: \"https://cloud.xyzgy.xyz\",\n    webUrl: \"\" },\n\n  test: {},\n  production: {} };exports.CONFIG = CONFIG;\n\n\nvar REQUEST_REPEAT_CANCEL = true; // 同一请求，请求未结束时，重复请求取消\nexports.REQUEST_REPEAT_CANCEL = REQUEST_REPEAT_CANCEL;var REQUEST_TIMEOUT = 60000;exports.REQUEST_TIMEOUT = REQUEST_TIMEOUT;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29uZmlnLWdsb2JhbC5qcyJdLCJuYW1lcyI6WyJDT05GSUciLCJkZXYiLCJiYXNlVXJsIiwid2ViVXJsIiwidGVzdCIsInByb2R1Y3Rpb24iLCJSRVFVRVNUX1JFUEVBVF9DQU5DRUwiLCJSRVFVRVNUX1RJTUVPVVQiXSwibWFwcGluZ3MiOiJnSkFBTyxJQUFNQSxNQUFNLEdBQUc7QUFDckJDLEtBQUcsRUFBRTtBQUNKQyxXQUFPLEVBQUUseUJBREw7QUFFSkMsVUFBTSxFQUFFLEVBRkosRUFEZ0I7O0FBS3JCQyxNQUFJLEVBQUUsRUFMZTtBQU1yQkMsWUFBVSxFQUFFLEVBTlMsRUFBZixDOzs7QUFTQSxJQUFNQyxxQkFBcUIsR0FBRyxJQUE5QixDLENBQW9DO3NEQUNwQyxJQUFNQyxlQUFlLEdBQUcsS0FBeEIsQyIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBDT05GSUcgPSB7XG5cdGRldjoge1xuXHRcdGJhc2VVcmw6IFwiaHR0cHM6Ly9jbG91ZC54eXpneS54eXpcIixcblx0XHR3ZWJVcmw6IFwiXCIsXG5cdH0sXG5cdHRlc3Q6IHt9LFxuXHRwcm9kdWN0aW9uOiB7fVxufVxuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9SRVBFQVRfQ0FOQ0VMID0gdHJ1ZTsgLy8g5ZCM5LiA6K+35rGC77yM6K+35rGC5pyq57uT5p2f5pe277yM6YeN5aSN6K+35rGC5Y+W5raIXG5leHBvcnQgY29uc3QgUkVRVUVTVF9USU1FT1VUID0gNjAwMDA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 29 */
/*!***********************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 30));

var _mpMixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mpMixin.js */ 31));

var _luchRequest = _interopRequireDefault(__webpack_require__(/*! ./libs/luch-request */ 32));


var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/util/route.js */ 51));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 55));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 56));

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 57));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 58));

var _index = _interopRequireDefault(__webpack_require__(/*! ./libs/function/index.js */ 59));


var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 61));

var _props = _interopRequireDefault(__webpack_require__(/*! ./libs/config/props.js */ 62));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 152));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/config/color.js */ 110));

var _platform = _interopRequireDefault(__webpack_require__(/*! ./libs/function/platform */ 153));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // 看到此报错，是因为没有配置vue.config.js的【transpileDependencies】，详见：https://www.uviewui.com/components/npmSetting.html#_5-cli模式额外配置
var pleaseSetTranspileDependencies = {},babelTest = pleaseSetTranspileDependencies === null || pleaseSetTranspileDependencies === void 0 ? void 0 : pleaseSetTranspileDependencies.test; // 引入全局mixin
var $u = _objectSpread(_objectSpread({
  route: _route.default,
  date: _index.default.timeFormat, // 另名date
  colorGradient: _colorGradient.default.colorGradient,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  colorToRgba: _colorGradient.default.colorToRgba,
  test: _test.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: new _luchRequest.default(),
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default,
  mixin: _mixin.default,
  mpMixin: _mpMixin.default,
  props: _props.default },
_index.default), {}, {
  color: _color.default,
  platform: _platform.default });


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {return uni.$u.timeFormat(timestamp, format);});
  Vue.filter('date', function (timestamp, format) {return uni.$u.timeFormat(timestamp, format);});
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {return uni.$u.timeFrom(timestamp, format);});
  // 同时挂载到uni和Vue.prototype中

  // 只有vue，挂载到Vue.prototype才有意义，因为nvue中全局Vue.prototype和Vue.mixin是无效的
  Vue.prototype.$u = $u;
  Vue.mixin(_mixin.default);

};var _default =

{
  install: install };exports.default = _default;

/***/ }),
/* 30 */
/*!**********************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/mixin/mixin.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // 定义每个组件都可能需要用到的外部样式以及类名
  props: {
    // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
    customStyle: {
      type: [Object, String],
      default: function _default() {return {};} },

    customClass: {
      type: String,
      default: '' },

    // 跳转的页面路径
    url: {
      type: String,
      default: '' },

    // 页面跳转的类型
    linkType: {
      type: String,
      default: 'navigateTo' } },


  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  created: function created() {
    // 组件当中，只有created声明周期，为了能在组件使用，故也在created中将方法挂载到$u
    this.$u.getRect = this.$uGetRect;
  },
  computed: {
    // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
    // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
    // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
    $u: function $u() {

      // 在非nvue端，移除props，http，mixin等对象，避免在小程序setData时数据过大影响性能
      return uni.$u.deepMerge(uni.$u, {
        props: undefined,
        http: undefined,
        mixin: undefined });





    },
    /**
        * 生成bem规则类名
        * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
        * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
        * @param {String} name 组件名称
        * @param {Array} fixed 一直会存在的类名
        * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
        * @returns {Array|string}
        */
    bem: function bem() {
      return function (name, fixed, change) {var _this = this;
        // 类名前缀
        var prefix = "u-".concat(name, "--");
        var classes = {};
        if (fixed) {
          fixed.map(function (item) {
            // 这里的类名，会一直存在
            classes[prefix + _this[item]] = true;
          });
        }
        if (change) {
          change.map(function (item) {
            // 这里的类名，会根据this[item]的值为true或者false，而进行添加或者移除某一个类
            _this[item] ? classes[prefix + item] = _this[item] : delete classes[prefix + item];
          });
        }
        return Object.keys(classes);
        // 支付宝，头条小程序无法动态绑定一个数组类名，否则解析出来的结果会带有","，而导致失效



      };
    } },

  methods: {
    // 跳转某一个页面
    openPage: function openPage() {var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'url';
      var url = this[urlKey];
      if (url) {
        // 执行类似uni.navigateTo的方法
        uni[this.linkType]({
          url: url });

      }
    },
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this2 = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this2)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this3 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = {};
      // 这里的本质原理是，通过获取父组件实例(也即类似u-radio的父组件u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      // 此处并不会自动更新子组件的数据，而是依赖父组件u-radio-group去监听data的变化，手动调用更新子组件的方法去重新获取
      this.parent = uni.$u.$parent.call(this, parentName);
      if (this.parent.children) {
        // 如果父组件的children不存在本组件的实例，才将本实例添加到父组件的children中
        this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
      }
      if (this.parent && this.parentData) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this3.parentData[key] = _this3.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && typeof e.stopPropagation === 'function' && e.stopPropagation();
    },
    // 空操作
    noop: function noop(e) {
      this.preventEvent(e);
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this4 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this4) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };

/***/ }),
/* 31 */
/*!************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/mixin/mpMixin.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {};exports.default = _default;

/***/ }),
/* 32 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _Request = _interopRequireDefault(__webpack_require__(/*! ./core/Request */ 33));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

_Request.default;exports.default = _default;

/***/ }),
/* 33 */
/*!************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/core/Request.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;












var _dispatchRequest = _interopRequireDefault(__webpack_require__(/*! ./dispatchRequest */ 34));
var _InterceptorManager = _interopRequireDefault(__webpack_require__(/*! ./InterceptorManager */ 42));
var _mergeConfig = _interopRequireDefault(__webpack_require__(/*! ./mergeConfig */ 43));
var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ 44));
var _utils = __webpack_require__(/*! ../utils */ 37);
var _clone = _interopRequireDefault(__webpack_require__(/*! ../utils/clone */ 45));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Request = /*#__PURE__*/function () {
  /**
                                    * @param {Object} arg - 全局配置
                                    * @param {String} arg.baseURL - 全局根路径
                                    * @param {Object} arg.header - 全局header
                                    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
                                    * @param {String} arg.dataType = [json] - 全局默认的dataType
                                    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
                                    * @param {Object} arg.custom - 全局默认的自定义参数
                                    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
                                    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
                                    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
                                    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
                                    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
                                    */
  function Request() {var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, Request);
    if (!(0, _utils.isPlainObject)(arg)) {
      arg = {};
      __f__("warn", '设置全局参数必须接收一个Object', " at node_modules/uview-ui/libs/luch-request/core/Request.js:39");
    }
    this.config = (0, _clone.default)(_objectSpread(_objectSpread({}, _defaults.default), arg));
    this.interceptors = {
      request: new _InterceptorManager.default(),
      response: new _InterceptorManager.default() };

  }

  /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */_createClass(Request, [{ key: "setConfig", value: function setConfig(
    f) {
      this.config = f(this.config);
    } }, { key: "middleware", value: function middleware(

    config) {
      config = (0, _mergeConfig.default)(this.config, config);
      var chain = [_dispatchRequest.default, undefined];
      var promise = Promise.resolve(config);

      this.interceptors.request.forEach(function (interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      this.interceptors.response.forEach(function (interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });

      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    }

    /**
      * @Function
      * @param {Object} config - 请求配置项
      * @prop {String} options.url - 请求路径
      * @prop {Object} options.data - 请求参数
      * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
      * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
      * @prop {Object} [options.header = config.header] - 请求header
      * @prop {Object} [options.method = config.method] - 请求方法
      * @returns {Promise<unknown>}
      */ }, { key: "request", value: function request()
    {var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.middleware(config);
    } }, { key: "get", value: function get(

    url) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.middleware(_objectSpread({
        url: url,
        method: 'GET' },
      options));

    } }, { key: "post", value: function post(

    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'POST' },
      options));

    } }, { key: "put", value: function put(


    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'PUT' },
      options));

    } }, { key: "delete", value: function _delete(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'DELETE' },
      options));

    } }, { key: "options", value: function options(




























    url, data) {var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'OPTIONS' },
      _options));

    } }, { key: "upload", value: function upload(















    url) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'UPLOAD';
      return this.middleware(config);
    } }, { key: "download", value: function download(

    url) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'DOWNLOAD';
      return this.middleware(config);
    } }]);return Request;}();


/**
                               * setConfig回调
                               * @return {Object} - 返回操作后的config
                               * @callback Request~setConfigCallback
                               * @param {Object} config - 全局默认config
                               */exports.default = Request;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 21)["default"]))

/***/ }),
/* 34 */
/*!********************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/core/dispatchRequest.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _index = _interopRequireDefault(__webpack_require__(/*! ../adapters/index */ 35));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

function _default(config) {return (0, _index.default)(config);};exports.default = _default;

/***/ }),
/* 35 */
/*!**************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/adapters/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _buildURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/buildURL */ 36));
var _buildFullPath = _interopRequireDefault(__webpack_require__(/*! ../core/buildFullPath */ 38));
var _settle = _interopRequireDefault(__webpack_require__(/*! ../core/settle */ 41));
var _utils = __webpack_require__(/*! ../utils */ 37);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * 返回可选值存在的配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {Array} keys - 可选值数组
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {Object} config2 - 配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @return {{}} - 存在的配置项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
var mergeKeys = function mergeKeys(keys, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    }
  });
  return config;
};var _default =
function _default(config) {return new Promise(function (resolve, reject) {
    var fullPath = (0, _buildURL.default)((0, _buildFullPath.default)(config.baseURL, config.url), config.params);
    var _config = {
      url: fullPath,
      header: config.header,
      complete: function complete(response) {
        config.fullPath = fullPath;
        response.config = config;
        try {
          // 对可能字符串不是json 的情况容错
          if (typeof response.data === 'string') {
            response.data = JSON.parse(response.data);
          }
          // eslint-disable-next-line no-empty
        } catch (e) {
        }
        (0, _settle.default)(resolve, reject, response);
      } };

    var requestTask;
    if (config.method === 'UPLOAD') {
      delete _config.header['content-type'];
      delete _config.header['Content-Type'];
      var otherConfig = {



        filePath: config.filePath,
        name: config.name };

      var optionalKeys = [

      'files',





      'timeout',

      'formData'];

      requestTask = uni.uploadFile(_objectSpread(_objectSpread(_objectSpread({}, _config), otherConfig), mergeKeys(optionalKeys, config)));
    } else if (config.method === 'DOWNLOAD') {

      if (!(0, _utils.isUndefined)(config.timeout)) {
        _config.timeout = config.timeout;
      }

      requestTask = uni.downloadFile(_config);
    } else {
      var _optionalKeys = [
      'data',
      'method',

      'timeout',

      'dataType',

      'responseType',


      'sslVerify',





      'firstIpv4'];


      requestTask = uni.request(_objectSpread(_objectSpread({}, _config), mergeKeys(_optionalKeys, config)));
    }
    if (config.getTask) {
      config.getTask(requestTask, config);
    }
  });};exports.default = _default;

/***/ }),
/* 36 */
/*!****************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/helpers/buildURL.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildURL;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ 37));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}

function encode(val) {
  return encodeURIComponent(val).
  replace(/%40/gi, '@').
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
function buildURL(url, params) {
  /* eslint no-param-reassign:0 */
  if (!params) {
    return url;
  }

  var serializedParams;
  if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function (val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = "".concat(key, "[]");
      } else {
        val = [val];
      }

      utils.forEach(val, function (v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push("".concat(encode(key), "=").concat(encode(v)));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

/***/ }),
/* 37 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/utils.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// utils is a library of generic helper functions non-specific to axios
Object.defineProperty(exports, "__esModule", { value: true });exports.isArray = isArray;exports.isObject = isObject;exports.isDate = isDate;exports.isURLSearchParams = isURLSearchParams;exports.forEach = forEach;exports.isBoolean = isBoolean;exports.isPlainObject = isPlainObject;exports.deepMerge = deepMerge;exports.isUndefined = isUndefined;var
toString = Object.prototype.toString;

/**
                                       * Determine if a value is an Array
                                       *
                                       * @param {Object} val The value to test
                                       * @returns {boolean} True if value is an Array, otherwise false
                                       */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /* eslint no-param-reassign:0 */
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
   * 是否为boolean 值
   * @param val
   * @returns {boolean}
   */
function isBoolean(val) {
  return typeof val === 'boolean';
}

/**
   * 是否为真正的对象{} new Object
   * @param {any} obj - 检测的对象
   * @returns {boolean}
   */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
   * Function equal to merge with the difference being that no reference
   * to original objects is kept.
   *
   * @see merge
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function deepMerge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

function isUndefined(val) {
  return typeof val === 'undefined';
}

/***/ }),
/* 38 */
/*!******************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/core/buildFullPath.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildFullPath;

var _isAbsoluteURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/isAbsoluteURL */ 39));
var _combineURLs = _interopRequireDefault(__webpack_require__(/*! ../helpers/combineURLs */ 40));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                            * Creates a new URL by combining the baseURL with the requestedURL,
                                                                                                                                                                            * only when the requestedURL is not already an absolute URL.
                                                                                                                                                                            * If the requestURL is absolute, this function returns the requestedURL untouched.
                                                                                                                                                                            *
                                                                                                                                                                            * @param {string} baseURL The base URL
                                                                                                                                                                            * @param {string} requestedURL Absolute or relative URL to combine
                                                                                                                                                                            * @returns {string} The combined full path
                                                                                                                                                                            */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0, _isAbsoluteURL.default)(requestedURL)) {
    return (0, _combineURLs.default)(baseURL, requestedURL);
  }
  return requestedURL;
}

/***/ }),
/* 39 */
/*!*********************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/helpers/isAbsoluteURL.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */Object.defineProperty(exports, "__esModule", { value: true });exports.default = isAbsoluteURL;
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/***/ }),
/* 40 */
/*!*******************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/helpers/combineURLs.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */Object.defineProperty(exports, "__esModule", { value: true });exports.default = combineURLs;
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? "".concat(
  baseURL.replace(/\/+$/, ''), "/").concat(relativeURL.replace(/^\/+/, '')) :
  baseURL;
}

/***/ }),
/* 41 */
/*!***********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/core/settle.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = settle; /**
                                                                                                      * Resolve or reject a Promise based on response status.
                                                                                                      *
                                                                                                      * @param {Function} resolve A function that resolves the promise.
                                                                                                      * @param {Function} reject A function that rejects the promise.
                                                                                                      * @param {object} response The response.
                                                                                                      */
function settle(resolve, reject, response) {var
  validateStatus = response.config.validateStatus;
  var status = response.statusCode;
  if (status && (!validateStatus || validateStatus(status))) {
    resolve(response);
  } else {
    reject(response);
  }
}

/***/ }),
/* 42 */
/*!***********************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/core/InterceptorManager.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

function InterceptorManager() {
  this.handlers = [];
}

/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected });

  return this.handlers.length - 1;
};

/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
InterceptorManager.prototype.forEach = function forEach(fn) {
  this.handlers.forEach(function (h) {
    if (h !== null) {
      fn(h);
    }
  });
};var _default =

InterceptorManager;exports.default = _default;

/***/ }),
/* 43 */
/*!****************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/core/mergeConfig.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 37);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 合并局部配置优先的配置，如果局部有该配置项则用局部，如果全局有该配置项则用全局
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Array} keys - 配置项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Object} globalsConfig - 当前的全局配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Object} config2 - 局部配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @return {{}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */
var mergeKeys = function mergeKeys(keys, globalsConfig, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    } else if (!(0, _utils.isUndefined)(globalsConfig[prop])) {
      config[prop] = globalsConfig[prop];
    }
  });
  return config;
};
/**
    *
    * @param globalsConfig - 当前实例的全局配置
    * @param config2 - 当前的局部配置
    * @return - 合并后的配置
    */var _default =
function _default(globalsConfig) {var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = config2.method || globalsConfig.method || 'GET';
  var config = {
    baseURL: globalsConfig.baseURL || '',
    method: method,
    url: config2.url || '',
    params: config2.params || {},
    custom: _objectSpread(_objectSpread({}, globalsConfig.custom || {}), config2.custom || {}),
    header: (0, _utils.deepMerge)(globalsConfig.header || {}, config2.header || {}) };

  var defaultToConfig2Keys = ['getTask', 'validateStatus'];
  config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));

  // eslint-disable-next-line no-empty
  if (method === 'DOWNLOAD') {

    if (!(0, _utils.isUndefined)(config2.timeout)) {
      config.timeout = config2.timeout;
    } else if (!(0, _utils.isUndefined)(globalsConfig.timeout)) {
      config.timeout = globalsConfig.timeout;
    }

  } else if (method === 'UPLOAD') {
    delete config.header['content-type'];
    delete config.header['Content-Type'];
    var uploadKeys = [

    'files',







    'filePath',
    'name',

    'timeout',

    'formData'];

    uploadKeys.forEach(function (prop) {
      if (!(0, _utils.isUndefined)(config2[prop])) {
        config[prop] = config2[prop];
      }
    });

    if ((0, _utils.isUndefined)(config.timeout) && !(0, _utils.isUndefined)(globalsConfig.timeout)) {
      config.timeout = globalsConfig.timeout;
    }

  } else {
    var defaultsKeys = [
    'data',

    'timeout',

    'dataType',

    'responseType',


    'sslVerify',





    'firstIpv4'];


    config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultsKeys, globalsConfig, config2));
  }

  return config;
};exports.default = _default;

/***/ }),
/* 44 */
/*!*************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/core/defaults.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 默认的全局配置
                                                                                                      */var _default =

{
  baseURL: '',
  header: {},
  method: 'GET',
  dataType: 'json',

  responseType: 'text',

  custom: {},

  timeout: 60000,


  sslVerify: true,





  firstIpv4: false,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  } };exports.default = _default;

/***/ }),
/* 45 */
/*!***********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/luch-request/utils/clone.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var clone = function () {
  'use strict';

  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }

  var nativeMap;
  try {
    nativeMap = Map;
  } catch (_) {
    // maybe a reference error because no `Map`. Give it a dummy value that no
    // value will ever be an instanceof.
    nativeMap = function nativeMap() {};
  }

  var nativeSet;
  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function nativeSet() {};
  }

  var nativePromise;
  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function nativePromise() {};
  }

  /**
     * Clones (copies) an Object using deep copying.
     *
     * This function supports circular references by default, but if you are certain
     * there are no circular references in your object, you can save some CPU time
     * by calling clone(obj, false).
     *
     * Caution: if `circular` is false and `parent` contains circular references,
     * your program may enter an infinite loop and crash.
     *
     * @param `parent` - the object to be cloned
     * @param `circular` - set to true if the object to be cloned may contain
     *    circular references. (optional - true by default)
     * @param `depth` - set to a number if the object is only to be cloned to
     *    a particular depth. (optional - defaults to Infinity)
     * @param `prototype` - sets the prototype to be used when cloning an object.
     *    (optional - defaults to parent prototype).
     * @param `includeNonEnumerable` - set to true if the non-enumerable properties
     *    should be cloned as well. Non-enumerable properties on the prototype
     *    chain will be ignored. (optional - false by default)
     */
  function clone(parent, circular, depth, prototype, includeNonEnumerable) {
    if (typeof circular === 'object') {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    }
    // maintain two arrays for circular references, where corresponding parents
    // and children have the same index
    var allParents = [];
    var allChildren = [];

    var useBuffer = typeof Buffer != 'undefined';

    if (typeof circular == 'undefined')
    circular = true;

    if (typeof depth == 'undefined')
    depth = Infinity;

    // recurse this function so we don't reset allParents and allChildren
    function _clone(parent, depth) {
      // cloning null always returns null
      if (parent === null)
      return null;

      if (depth === 0)
      return parent;

      var child;
      var proto;
      if (typeof parent != 'object') {
        return parent;
      }

      if (_instanceof(parent, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent, nativePromise)) {
        child = new nativePromise(function (resolve, reject) {
          parent.then(function (value) {
            resolve(_clone(value, depth - 1));
          }, function (err) {
            reject(_clone(err, depth - 1));
          });
        });
      } else if (clone.__isArray(parent)) {
        child = [];
      } else if (clone.__isRegExp(parent)) {
        child = new RegExp(parent.source, __getRegExpFlags(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (clone.__isDate(parent)) {
        child = new Date(parent.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent)) {
        if (Buffer.from) {
          // Node.js >= 5.10.0
          child = Buffer.from(parent);
        } else {
          // Older Node.js versions
          child = new Buffer(parent.length);
          parent.copy(child);
        }
        return child;
      } else if (_instanceof(parent, Error)) {
        child = Object.create(parent);
      } else {
        if (typeof prototype == 'undefined') {
          proto = Object.getPrototypeOf(parent);
          child = Object.create(proto);
        } else
        {
          child = Object.create(prototype);
          proto = prototype;
        }
      }

      if (circular) {
        var index = allParents.indexOf(parent);

        if (index != -1) {
          return allChildren[index];
        }
        allParents.push(parent);
        allChildren.push(child);
      }

      if (_instanceof(parent, nativeMap)) {
        parent.forEach(function (value, key) {
          var keyChild = _clone(key, depth - 1);
          var valueChild = _clone(value, depth - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent, nativeSet)) {
        parent.forEach(function (value) {
          var entryChild = _clone(value, depth - 1);
          child.add(entryChild);
        });
      }

      for (var i in parent) {
        var attrs = Object.getOwnPropertyDescriptor(parent, i);
        if (attrs) {
          child[i] = _clone(parent[i], depth - 1);
        }

        try {
          var objProperty = Object.getOwnPropertyDescriptor(parent, i);
          if (objProperty.set === 'undefined') {
            // no setter defined. Skip cloning this property
            continue;
          }
          child[i] = _clone(parent[i], depth - 1);
        } catch (e) {
          if (e instanceof TypeError) {
            // when in strict mode, TypeError will be thrown if child[i] property only has a getter
            // we can't do anything about this, other than inform the user that this property cannot be set.
            continue;
          } else if (e instanceof ReferenceError) {
            //this may happen in non strict mode
            continue;
          }
        }

      }

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent);
        for (var i = 0; i < symbols.length; i++) {
          // Don't need to worry about cloning a symbol because it is a primitive,
          // like a number or string.
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent[symbol], depth - 1);
          Object.defineProperty(child, symbol, descriptor);
        }
      }

      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent[propertyName], depth - 1);
          Object.defineProperty(child, propertyName, descriptor);
        }
      }

      return child;
    }

    return _clone(parent, depth);
  }

  /**
     * Simple flat clone using prototype, accepts only objects, usefull for property
     * override on FLAT configuration object (no nested props).
     *
     * USE WITH CAUTION! This may not behave as you wish if you do not know how this
     * works.
     */
  clone.clonePrototype = function clonePrototype(parent) {
    if (parent === null)
    return null;

    var c = function c() {};
    c.prototype = parent;
    return new c();
  };

  // private utility functions

  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  }
  clone.__objToStr = __objToStr;

  function __isDate(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Date]';
  }
  clone.__isDate = __isDate;

  function __isArray(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Array]';
  }
  clone.__isArray = __isArray;

  function __isRegExp(o) {
    return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
  }
  clone.__isRegExp = __isRegExp;

  function __getRegExpFlags(re) {
    var flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
  }
  clone.__getRegExpFlags = __getRegExpFlags;

  return clone;
}();var _default =

clone;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/buffer/index.js */ 46).Buffer))

/***/ }),
/* 46 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 48)
var ieee754 = __webpack_require__(/*! ieee754 */ 49)
var isArray = __webpack_require__(/*! isarray */ 50)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 47)))

/***/ }),
/* 47 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 48 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 49 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 50 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 51 */
/*!*********************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/util/route.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 52));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&".concat(query);
      }
      // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
      query = uni.$u.queryParams(params);
      return url += query;
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                // 如果本次跳转的路径和本页面路径一致，不执行跳转，防止用户快速点击跳转按钮，造成多次跳转同一个页面的问题
                if (!(mergeConfig.url === uni.$u.page())) {_context.next = 6;break;}return _context.abrupt("return");case 6:

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 16;break;}_context.next = 12;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 12:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 17;break;case 16:

                this.openPage(mergeConfig);case 17:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;

/***/ }),
/* 52 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 53);

/***/ }),
/* 53 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 54);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 54 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 55 */
/*!*********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/function/colorGradient.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); // 转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; // 总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    // 计算每一步的hex值
    var hex = rgbToHex("rgb(".concat(Math.round(sR * i + startR), ",").concat(Math.round(sG * i + startG), ",").concat(Math.round(sB *
    i + startB), ")"));
    // 确保第一个颜色值为startColor的值
    if (i === 0) hex = rgbToHex(startColor);
    // 确保最后一个颜色值为endColor的值
    if (i === step - 1) hex = rgbToHex(endColor);
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = String(sColor).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i, _i + 2))));
    }
    if (!str) {
      return sColorChange;
    }
    return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
  }if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    return arr.map(function (val) {return Number(val);});
  }
  return sColor;
}

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    var strHex = '#';
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? "".concat(0, hex) : hex; // 保证每个rgb的值为2位
      if (hex === '0') {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  }if (reg.test(_this)) {
    var aNum = _this.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return _this;
    }if (aNum.length === 3) {
      var numHex = '#';
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color, alpha) {
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = String(color).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i3, _i3 + 2))));
    }
    // return sColorChange.join(',')
    return "rgba(".concat(sColorChange.join(','), ",").concat(alpha, ")");
  }

  return sColor;
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 56 */
/*!************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/function/test.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.
  test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  if (!value) return false;
  // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
  if (number(value)) value = +value;
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}

/**
   * 验证字符串
   */
function string(value) {
  return typeof value === 'string';
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);

}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  }if (value.length === 8) {
    return xreg.test(value);
  }
  return false;
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  // 金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  // 英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (value === 0 || isNaN(value)) return true;
      break;
    case 'object':
      if (value === null || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value === 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value);
  }
  return Object.prototype.toString.call(value) === '[object Array]';
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}

/**
   * 是否函数方法
   * @param {Object} value
   */
function func(value) {
  return typeof value === 'function';
}

/**
   * 是否promise对象
   * @param {Object} value
   */
function promise(value) {
  return object(value) && func(value.then) && func(value.catch);
}

/** 是否图片格式
   * @param {Object} value
   */
function image(value) {
  var newValue = value.split('?')[0];
  var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  return IMAGE_REGEXP.test(newValue);
}

/**
   * 是否视频格式
   * @param {Object} value
   */
function video(value) {
  var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
  return VIDEO_REGEXP.test(value);
}

/**
   * 是否为正则对象
   * @param {Object}
   * @return {Boolean}
   */
function regExp(o) {
  return o && Object.prototype.toString.call(o) === '[object RegExp]';
}var _default =

{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code,
  func: func,
  promise: promise,
  video: video,
  image: image,
  regExp: regExp,
  string: string };exports.default = _default;

/***/ }),
/* 57 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/function/debounce.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         *
                                                                                                                         * @param {Function} func 要执行的回调函数
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 58 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/function/throttle.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer;var
flag;
/**
       * 节流原理：在一定时间内，只能触发一次
       *
       * @param {Function} func 要执行的回调函数
       * @param {Number} wait 延时的时间
       * @param {Boolean} immediate 是否立即执行
       * @return null
       */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else if (!flag) {
    flag = true;
    // 如果是非立即执行，则在wait毫秒内的结束处执行
    timer = setTimeout(function () {
      flag = false;
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =
throttle;exports.default = _default;

/***/ }),
/* 59 */
/*!*************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/function/index.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 56));
var _digit = __webpack_require__(/*! ./digit.js */ 60);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @description 如果value小于min，取min；如果value大于max，取max
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} min 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} max 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */
function range() {var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return Math.max(min, Math.min(max, Number(value)));
}

/**
   * @description 用于获取用户传递值的px值  如果用户传递了"xxpx"或者"xxrpx"，取出其数值部分，如果是"xxxrpx"还需要用过uni.upx2px进行转换
   * @param {number|string} value 用户传递值的px值
   * @param {boolean} unit 
   * @returns {number|string}
   */
function getPx(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (_test.default.number(value)) {
    return unit ? "".concat(value, "px") : Number(value);
  }
  // 如果带有rpx，先取出其数值部分，再转为px值
  if (/(rpx|upx)$/.test(value)) {
    return unit ? "".concat(uni.upx2px(parseInt(value)), "px") : Number(uni.upx2px(parseInt(value)));
  }
  return unit ? "".concat(parseInt(value), "px") : parseInt(value);
}

/**
   * @description 进行延时，以达到可以简写代码的目的 比如: await uni.$u.sleep(20)将会阻塞20ms
   * @param {number} value 堵塞时间 单位ms 毫秒
   * @returns {Promise} 返回promise
   */
function sleep() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, value);
  });
}
/**
   * @description 运行期判断平台
   * @returns {string} 返回所在平台(小写) 
   * @link 运行期判断平台 https://uniapp.dcloud.io/frame?id=判断平台
   */
function os() {
  return uni.getSystemInfoSync().platform.toLowerCase();
}
/**
   * @description 获取系统信息同步接口
   * @link 获取系统信息同步接口 https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync 
   */
function sys() {
  return uni.getSystemInfoSync();
}

/**
   * @description 取一个区间数
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   */
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  }
  return 0;
}

/**
   * @param {Number} len uuid的长度
   * @param {Boolean} firstU 将返回的首字母置为"u"
   * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
   */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return "u".concat(uuid.join(''));
  }
  return uuid.join('');
}

/**
  * @description 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
     this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
     这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
     值(默认为undefined)，就是查找最顶层的$parent
  *  @param {string|undefined} name 父组件的参数名
  */
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/**
   * @description 样式转换
   * 对象转字符串，或者字符串转对象
   * @param {object | string} customStyle 需要转换的目标
   * @param {String} target 转换的目的，object-转为对象，string-转为字符串
   * @returns {object|string}
   */
function addStyle(customStyle) {var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'object';
  // 字符串转字符串，对象转对象情形，直接返回
  if (_test.default.empty(customStyle) || typeof customStyle === 'object' && target === 'object' || target === 'string' &&
  typeof customStyle === 'string') {
    return customStyle;
  }
  // 字符串转对象
  if (target === 'object') {
    // 去除字符串样式中的两端空格(中间的空格不能去掉，比如padding: 20px 0如果去掉了就错了)，空格是无用的
    customStyle = trim(customStyle);
    // 根据";"将字符串转为数组形式
    var styleArray = customStyle.split(';');
    var style = {};
    // 历遍数组，拼接成对象
    for (var i = 0; i < styleArray.length; i++) {
      // 'font-size:20px;color:red;'，如此最后字符串有";"的话，会导致styleArray最后一个元素为空字符串，这里需要过滤
      if (styleArray[i]) {
        var item = styleArray[i].split(':');
        style[trim(item[0])] = trim(item[1]);
      }
    }
    return style;
  }
  // 这里为对象转字符串形式
  var string = '';
  for (var _i2 in customStyle) {
    // 驼峰转为中划线的形式，否则css内联样式，无法识别驼峰样式属性名
    var key = _i2.replace(/([A-Z])/g, '-$1').toLowerCase();
    string += "".concat(key, ":").concat(customStyle[_i2], ";");
  }
  // 去除两端空格
  return trim(string);
}

/**
   * @description 添加单位，如果有rpx，upx，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾
   * @param {string|number} value 需要添加单位的值
   * @param {string} unit 添加的单位名 比如px
   */
function addUnit() {var _uni$$u$config$unit, _uni, _uni$$u, _uni$$u$config;var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (_uni$$u$config$unit = (_uni = uni) === null || _uni === void 0 ? void 0 : (_uni$$u = _uni.$u) === null || _uni$$u === void 0 ? void 0 : (_uni$$u$config = _uni$$u.config) === null || _uni$$u$config === void 0 ? void 0 : _uni$$u$config.unit) !== null && _uni$$u$config$unit !== void 0 ? _uni$$u$config$unit : 'px';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/**
   * @description 深度克隆
   * @param {object} obj 需要深度克隆的对象
   * @returns {*} 克隆后的对象或者原值（不是对象）
   */
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj;
  }
  var o = _test.default.array(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}

/**
   * @description JS对象深度合并
   * @param {object} target 需要拷贝的对象
   * @param {object} source 拷贝的来源对象
   * @returns {object|boolean} 深度合并后的对象或者false（入参有不是对象）
   */
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = deepClone(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else if (typeof source[prop] !== 'object') {
        target[prop] = source[prop];
      } else if (target[prop].concat && source[prop].concat) {
        target[prop] = target[prop].concat(source[prop]);
      } else {
        target[prop] = deepMerge(target[prop], source[prop]);
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}

/**
   * @description error提示
   * @param {*} err 错误内容
   */
function error(err) {
  // 开发环境才提示，生产环境不会提示
  if (true) {
    __f__("error", "uView\u63D0\u793A\uFF1A".concat(err), " at node_modules/uview-ui/libs/function/index.js:235");
  }
}

/**
   * @description 打乱数组
   * @param {array} array 需要打乱的数组
   * @returns {array} 打乱后的数组
   */
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}

// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== '[object String]') {
      throw new TypeError(
      'fillString must be String');

    }
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length;
    var times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

/**
   * @description 格式化时间
   * @param {String|Number} dateTime 需要格式化的时间戳
   * @param {String} fmt 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd
   * @returns {string} 返回格式化后的字符串
   */
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var formatStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  var date;
  // 若传入时间为假值，则取当前时间
  if (!dateTime) {
    date = new Date();
  }
  // 若为unix秒时间戳，则转为毫秒时间戳（逻辑有点奇怪，但不敢改，以保证历史兼容）
  else if (/^\d{10}$/.test(dateTime === null || dateTime === void 0 ? void 0 : dateTime.toString().trim())) {
      date = new Date(dateTime * 1000);
    }
    // 若用户传入字符串格式时间戳，new Date无法解析，需做兼容
    else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
        date = new Date(Number(dateTime));
      }
      // 其他都认为符合 RFC 2822 规范
      else {
          // 处理平台性差异，在Safari/Webkit中，new Date仅支持/作为分割符的字符串时间
          date = new Date(
          typeof dateTime === 'string' ?
          dateTime.replace(/-/g, '/') :
          dateTime);

        }

  var timeSource = {
    'y': date.getFullYear().toString(), // 年
    'm': (date.getMonth() + 1).toString().padStart(2, '0'), // 月
    'd': date.getDate().toString().padStart(2, '0'), // 日
    'h': date.getHours().toString().padStart(2, '0'), // 时
    'M': date.getMinutes().toString().padStart(2, '0'), // 分
    's': date.getSeconds().toString().padStart(2, '0') // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var key in timeSource) {var _ref =
    new RegExp("".concat(key, "+")).exec(formatStr) || [],_ref2 = _slicedToArray(_ref, 1),ret = _ref2[0];
    if (ret) {
      // 年可能只需展示两位
      var beginIndex = key === 'y' && ret.length === 2 ? 2 : 0;
      formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
    }
  }

  return formatStr;
}

/**
   * @description 时间戳转为多久之前
   * @param {String|Number} timestamp 时间戳
   * @param {String|Boolean} format 
   * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
   * 如果为布尔值false，无论什么时间，都返回多久以前的格式
   * @returns {string} 转化后的内容
   */
function timeFrom() {var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  if (timestamp == null) timestamp = Number(new Date());
  timestamp = parseInt(timestamp);
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var timer = new Date().getTime() - timestamp;
  timer = parseInt(timer / 1000);
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = "".concat(parseInt(timer / 60), "\u5206\u949F\u524D");
      break;
    case timer >= 3600 && timer < 86400:
      tips = "".concat(parseInt(timer / 3600), "\u5C0F\u65F6\u524D");
      break;
    case timer >= 86400 && timer < 2592000:
      tips = "".concat(parseInt(timer / 86400), "\u5929\u524D");
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = "".concat(parseInt(timer / (86400 * 30)), "\u4E2A\u6708\u524D");
        } else {
          tips = "".concat(parseInt(timer / (86400 * 365)), "\u5E74\u524D");
        }
      } else {
        tips = timeFormat(timestamp, format);
      }}

  return tips;
}

/**
   * @description 去除空格
   * @param String str 需要去除空格的字符串
   * @param String pos both(左右)|left|right|all 默认both
   */
function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  str = String(str);
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, '');
  }
  if (pos == 'left') {
    return str.replace(/^\s*/, '');
  }
  if (pos == 'right') {
    return str.replace(/(\s*$)/g, '');
  }
  if (pos == 'all') {
    return str.replace(/\s+/g, '');
  }
  return str;
}

/**
   * @description 对象转url参数
   * @param {object} data,对象
   * @param {Boolean} isPrefix,是否自动加上"?"
   * @param {string} arrayFormat 规则 indices|brackets|repeat|comma
   */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push("".concat(key, "[").concat(i, "]=").concat(value[i]));
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "=").concat(_value));
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = '';
          value.forEach(function (_value) {
            commaStr += (commaStr ? ',' : '') + _value;
          });
          _result.push("".concat(key, "=").concat(commaStr));
          break;
        default:
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });}

    } else {
      _result.push("".concat(key, "=").concat(value));
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}

/**
   * 显示消息提示框
   * @param {String} title 提示的内容，长度与 icon 取值有关。
   * @param {Number} duration 提示的延迟时间，单位毫秒，默认：2000
   */
function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  uni.showToast({
    title: String(title),
    icon: 'none',
    duration: duration });

}

/**
   * @description 根据主题type值,获取对应的图标
   * @param {String} type 主题名称,primary|info|error|warning|success
   * @param {boolean} fill 是否使用fill填充实体的图标
   */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}

/**
   * @description 数字格式化
   * @param {number|string} number 要格式化的数字
   * @param {number} decimals 保留几位小数
   * @param {string} decimalPoint 小数点符号
   * @param {string} thousandsSeparator 千分位符号
   * @returns {string} 格式化后的数字
   */
function priceFormat(number) {var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var decimalPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';var thousandsSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';
  number = "".concat(number).replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number;
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  var sep = typeof thousandsSeparator === 'undefined' ? ',' : thousandsSeparator;
  var dec = typeof decimalPoint === 'undefined' ? '.' : decimalPoint;
  var s = '';

  s = (prec ? (0, _digit.round)(n, prec) + '' : "".concat(Math.round(n))).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1".concat(sep, "$2"));
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

/**
   * @description 获取duration值
   * 如果带有ms或者s直接返回，如果大于一定值，认为是ms单位，小于一定值，认为是s单位
   * 比如以30位阈值，那么300大于30，可以理解为用户想要的是300ms，而不是想花300s去执行一个动画
   * @param {String|number} value 比如: "1s"|"100ms"|1|100
   * @param {boolean} unit  提示: 如果是false 默认返回number
   * @return {string|number} 
   */
function getDuration(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var valueNum = parseInt(value);
  if (unit) {
    if (/s$/.test(value)) return value;
    return value > 30 ? "".concat(value, "ms") : "".concat(value, "s");
  }
  if (/ms$/.test(value)) return valueNum;
  if (/s$/.test(value)) return valueNum > 30 ? valueNum : valueNum * 1000;
  return valueNum;
}

/**
   * @description 日期的月或日补零操作
   * @param {String} value 需要补零的值
   */
function padZero(value) {
  return "00".concat(value).slice(-2);
}

/**
   * @description 在u-form的子组件内容发生变化，或者失去焦点时，尝试通知u-form执行校验方法
   * @param {*} instance
   * @param {*} event
   */
function formValidate(instance, event) {
  var formItem = uni.$u.$parent.call(instance, 'u-form-item');
  var form = uni.$u.$parent.call(instance, 'u-form');
  // 如果发生变化的input或者textarea等，其父组件中有u-form-item或者u-form等，就执行form的validate方法
  // 同时将form-item的pros传递给form，让其进行精确对象验证
  if (formItem && form) {
    form.validateField(formItem.prop, function () {}, event);
  }
}

/**
   * @description 获取某个对象下的属性，用于通过类似'a.b.c'的形式去获取一个对象的的属性的形式
   * @param {object} obj 对象
   * @param {string} key 需要获取的属性字段
   * @returns {*}
   */
function getProperty(obj, key) {
  if (!obj) {
    return;
  }
  if (typeof key !== 'string' || key === '') {
    return '';
  }
  if (key.indexOf('.') !== -1) {
    var keys = key.split('.');
    var firstObj = obj[keys[0]] || {};

    for (var i = 1; i < keys.length; i++) {
      if (firstObj) {
        firstObj = firstObj[keys[i]];
      }
    }
    return firstObj;
  }
  return obj[key];
}

/**
   * @description 设置对象的属性值，如果'a.b.c'的形式进行设置
   * @param {object} obj 对象
   * @param {string} key 需要设置的属性
   * @param {string} value 设置的值
   */
function setProperty(obj, key, value) {
  if (!obj) {
    return;
  }
  // 递归赋值
  var inFn = function inFn(_obj, keys, v) {
    // 最后一个属性key
    if (keys.length === 1) {
      _obj[keys[0]] = v;
      return;
    }
    // 0~length-1个key
    while (keys.length > 1) {
      var k = keys[0];
      if (!_obj[k] || typeof _obj[k] !== 'object') {
        _obj[k] = {};
      }
      var _key = keys.shift();
      // 自调用判断是否存在属性，不存在则自动创建对象
      inFn(_obj[k], keys, v);
    }
  };

  if (typeof key !== 'string' || key === '') {

  } else if (key.indexOf('.') !== -1) {// 支持多层级赋值操作
    var keys = key.split('.');
    inFn(obj, keys, value);
  } else {
    obj[key] = value;
  }
}

/**
   * @description 获取当前页面路径
   */
function page() {var _pages$route, _pages;
  var pages = getCurrentPages();
  // 某些特殊情况下(比如页面进行redirectTo时的一些时机)，pages可能为空数组
  return "/".concat((_pages$route = (_pages = pages[pages.length - 1]) === null || _pages === void 0 ? void 0 : _pages.route) !== null && _pages$route !== void 0 ? _pages$route : '');
}

/**
   * @description 获取当前路由栈实例数组
   */
function pages() {
  var pages = getCurrentPages();
  return pages;
}

/**
   * @description 修改uView内置属性值
   * @param {object} props 修改内置props属性
   * @param {object} config 修改内置config属性
   * @param {object} color 修改内置color属性
   * @param {object} zIndex 修改内置zIndex属性
   */
function setConfig(_ref3)




{var _ref3$props = _ref3.props,props = _ref3$props === void 0 ? {} : _ref3$props,_ref3$config = _ref3.config,config = _ref3$config === void 0 ? {} : _ref3$config,_ref3$color = _ref3.color,color = _ref3$color === void 0 ? {} : _ref3$color,_ref3$zIndex = _ref3.zIndex,zIndex = _ref3$zIndex === void 0 ? {} : _ref3$zIndex;var

  deepMerge =
  uni.$u.deepMerge;
  uni.$u.config = deepMerge(uni.$u.config, config);
  uni.$u.props = deepMerge(uni.$u.props, props);
  uni.$u.color = deepMerge(uni.$u.color, color);
  uni.$u.zIndex = deepMerge(uni.$u.zIndex, zIndex);
}var _default =

{
  range: range,
  getPx: getPx,
  sleep: sleep,
  os: os,
  sys: sys,
  random: random,
  guid: guid,
  $parent: $parent,
  addStyle: addStyle,
  addUnit: addUnit,
  deepClone: deepClone,
  deepMerge: deepMerge,
  error: error,
  randomArray: randomArray,
  timeFormat: timeFormat,
  timeFrom: timeFrom,
  trim: trim,
  queryParams: queryParams,
  toast: toast,
  type2icon: type2icon,
  priceFormat: priceFormat,
  getDuration: getDuration,
  padZero: padZero,
  formValidate: formValidate,
  getProperty: getProperty,
  setProperty: setProperty,
  page: page,
  pages: pages,
  setConfig: setConfig };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 21)["default"]))

/***/ }),
/* 60 */
/*!*************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/function/digit.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.times = times;exports.plus = plus;exports.minus = minus;exports.divide = divide;exports.round = round;exports.enableBoundaryChecking = enableBoundaryChecking;exports.default = void 0;function _toArray(arr) {return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}var _boundaryCheckingState = true; // 是否进行越界检查的全局开关

/**
 * 把错误的数据转正
 * @private
 * @example strip(0.09999999999999998)=0.1
 */
function strip(num) {var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  return +parseFloat(Number(num).toPrecision(precision));
}

/**
   * Return digits length of a number
   * @private
   * @param {*number} num Input number
   */
function digitLength(num) {
  // Get digit length of e
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}

/**
   * 把小数转成整数,如果是小数则放大成整数
   * @private
   * @param {*number} num 输入数
   */
function float2Fixed(num) {
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''));
  }
  var dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}

/**
   * 检测数字是否越界，如果越界给出提示
   * @private
   * @param {*number} num 输入数
   */
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      __f__("warn", "".concat(num, " \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E"), " at node_modules/uview-ui/libs/function/digit.js:45");
    }
  }
}

/**
   * 把递归操作扁平迭代化
   * @param {number[]} arr 要操作的数字数组
   * @param {function} operation 迭代操作
   * @private
   */
function iteratorOperation(arr, operation) {var _arr = _toArray(
  arr),num1 = _arr[0],num2 = _arr[1],others = _arr.slice(2);
  var res = operation(num1, num2);

  others.forEach(function (num) {
    res = operation(res, num);
  });

  return res;
}

/**
   * 高精度乘法
   * @export
   */
function times() {for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {nums[_key] = arguments[_key];}
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }var

  num1 = nums[0],num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  var baseNum = digitLength(num1) + digitLength(num2);
  var leftValue = num1Changed * num2Changed;

  checkBoundary(leftValue);

  return leftValue / Math.pow(10, baseNum);
}

/**
   * 高精度加法
   * @export
   */
function plus() {for (var _len2 = arguments.length, nums = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {nums[_key2] = arguments[_key2];}
  if (nums.length > 2) {
    return iteratorOperation(nums, plus);
  }var

  num1 = nums[0],num2 = nums[1];
  // 取最大的小数位
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  // 把小数都转为整数然后再计算
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}

/**
   * 高精度减法
   * @export
   */
function minus() {for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {nums[_key3] = arguments[_key3];}
  if (nums.length > 2) {
    return iteratorOperation(nums, minus);
  }var

  num1 = nums[0],num2 = nums[1];
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}

/**
   * 高精度除法
   * @export
   */
function divide() {for (var _len4 = arguments.length, nums = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {nums[_key4] = arguments[_key4];}
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }var

  num1 = nums[0],num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  // 重要，这里必须用strip进行修正
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}

/**
   * 四舍五入
   * @export
   */
function round(num, ratio) {
  var base = Math.pow(10, ratio);
  var result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  // 位数不足则补0
  return result;
}

/**
   * 是否进行边界检查，默认开启
   * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
   * @export
   */
function enableBoundaryChecking() {var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  _boundaryCheckingState = flag;
}var _default =


{
  times: times,
  plus: plus,
  minus: minus,
  divide: divide,
  round: round,
  enableBoundaryChecking: enableBoundaryChecking };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 21)["default"]))

/***/ }),
/* 61 */
/*!************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/config.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2022-06-17
var version = '2.0.33';

// 开发环境才提示，生产环境不会提示
if (true) {
  __f__("log", "\n %c uView V".concat(version, " %c https://www.uviewui.com/ \n\n"), 'color: #ffffff; background: #3c9cff; padding:5px 0;', 'color: #3c9cff;background: #ffffff; padding:5px 0;', " at node_modules/uview-ui/libs/config/config.js:6");
}var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'],

  // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
  color: {
    'u-primary': '#2979ff',
    'u-warning': '#ff9900',
    'u-success': '#19be6b',
    'u-error': '#fa3534',
    'u-info': '#909399',
    'u-main-color': '#303133',
    'u-content-color': '#606266',
    'u-tips-color': '#909399',
    'u-light-color': '#c0c4cc' },

  // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
  unit: 'px' };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 21)["default"]))

/***/ }),
/* 62 */
/*!***********************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ 61));

var _actionSheet = _interopRequireDefault(__webpack_require__(/*! ./props/actionSheet.js */ 63));
var _album = _interopRequireDefault(__webpack_require__(/*! ./props/album.js */ 64));
var _alert = _interopRequireDefault(__webpack_require__(/*! ./props/alert.js */ 65));
var _avatar = _interopRequireDefault(__webpack_require__(/*! ./props/avatar */ 66));
var _avatarGroup = _interopRequireDefault(__webpack_require__(/*! ./props/avatarGroup */ 67));
var _backtop = _interopRequireDefault(__webpack_require__(/*! ./props/backtop */ 68));
var _badge = _interopRequireDefault(__webpack_require__(/*! ./props/badge */ 69));
var _button = _interopRequireDefault(__webpack_require__(/*! ./props/button */ 70));
var _calendar = _interopRequireDefault(__webpack_require__(/*! ./props/calendar */ 71));
var _carKeyboard = _interopRequireDefault(__webpack_require__(/*! ./props/carKeyboard */ 72));
var _cell = _interopRequireDefault(__webpack_require__(/*! ./props/cell */ 73));
var _cellGroup = _interopRequireDefault(__webpack_require__(/*! ./props/cellGroup */ 74));
var _checkbox = _interopRequireDefault(__webpack_require__(/*! ./props/checkbox */ 75));
var _checkboxGroup = _interopRequireDefault(__webpack_require__(/*! ./props/checkboxGroup */ 76));
var _circleProgress = _interopRequireDefault(__webpack_require__(/*! ./props/circleProgress */ 77));
var _code = _interopRequireDefault(__webpack_require__(/*! ./props/code */ 78));
var _codeInput = _interopRequireDefault(__webpack_require__(/*! ./props/codeInput */ 79));
var _col = _interopRequireDefault(__webpack_require__(/*! ./props/col */ 80));
var _collapse = _interopRequireDefault(__webpack_require__(/*! ./props/collapse */ 81));
var _collapseItem = _interopRequireDefault(__webpack_require__(/*! ./props/collapseItem */ 82));
var _columnNotice = _interopRequireDefault(__webpack_require__(/*! ./props/columnNotice */ 83));
var _countDown = _interopRequireDefault(__webpack_require__(/*! ./props/countDown */ 84));
var _countTo = _interopRequireDefault(__webpack_require__(/*! ./props/countTo */ 85));
var _datetimePicker = _interopRequireDefault(__webpack_require__(/*! ./props/datetimePicker */ 86));
var _divider = _interopRequireDefault(__webpack_require__(/*! ./props/divider */ 87));
var _empty = _interopRequireDefault(__webpack_require__(/*! ./props/empty */ 88));
var _form = _interopRequireDefault(__webpack_require__(/*! ./props/form */ 89));
var _formItem = _interopRequireDefault(__webpack_require__(/*! ./props/formItem */ 90));
var _gap = _interopRequireDefault(__webpack_require__(/*! ./props/gap */ 91));
var _grid = _interopRequireDefault(__webpack_require__(/*! ./props/grid */ 92));
var _gridItem = _interopRequireDefault(__webpack_require__(/*! ./props/gridItem */ 93));
var _icon = _interopRequireDefault(__webpack_require__(/*! ./props/icon */ 94));
var _image = _interopRequireDefault(__webpack_require__(/*! ./props/image */ 95));
var _indexAnchor = _interopRequireDefault(__webpack_require__(/*! ./props/indexAnchor */ 96));
var _indexList = _interopRequireDefault(__webpack_require__(/*! ./props/indexList */ 97));
var _input = _interopRequireDefault(__webpack_require__(/*! ./props/input */ 98));
var _keyboard = _interopRequireDefault(__webpack_require__(/*! ./props/keyboard */ 99));
var _line = _interopRequireDefault(__webpack_require__(/*! ./props/line */ 100));
var _lineProgress = _interopRequireDefault(__webpack_require__(/*! ./props/lineProgress */ 101));
var _link = _interopRequireDefault(__webpack_require__(/*! ./props/link */ 102));
var _list = _interopRequireDefault(__webpack_require__(/*! ./props/list */ 103));
var _listItem = _interopRequireDefault(__webpack_require__(/*! ./props/listItem */ 104));
var _loadingIcon = _interopRequireDefault(__webpack_require__(/*! ./props/loadingIcon */ 105));
var _loadingPage = _interopRequireDefault(__webpack_require__(/*! ./props/loadingPage */ 106));
var _loadmore = _interopRequireDefault(__webpack_require__(/*! ./props/loadmore */ 107));
var _modal = _interopRequireDefault(__webpack_require__(/*! ./props/modal */ 108));
var _navbar = _interopRequireDefault(__webpack_require__(/*! ./props/navbar */ 109));
var _noNetwork = _interopRequireDefault(__webpack_require__(/*! ./props/noNetwork */ 111));
var _noticeBar = _interopRequireDefault(__webpack_require__(/*! ./props/noticeBar */ 112));
var _notify = _interopRequireDefault(__webpack_require__(/*! ./props/notify */ 113));
var _numberBox = _interopRequireDefault(__webpack_require__(/*! ./props/numberBox */ 114));
var _numberKeyboard = _interopRequireDefault(__webpack_require__(/*! ./props/numberKeyboard */ 115));
var _overlay = _interopRequireDefault(__webpack_require__(/*! ./props/overlay */ 116));
var _parse = _interopRequireDefault(__webpack_require__(/*! ./props/parse */ 117));
var _picker = _interopRequireDefault(__webpack_require__(/*! ./props/picker */ 118));
var _popup = _interopRequireDefault(__webpack_require__(/*! ./props/popup */ 119));
var _radio = _interopRequireDefault(__webpack_require__(/*! ./props/radio */ 120));
var _radioGroup = _interopRequireDefault(__webpack_require__(/*! ./props/radioGroup */ 121));
var _rate = _interopRequireDefault(__webpack_require__(/*! ./props/rate */ 122));
var _readMore = _interopRequireDefault(__webpack_require__(/*! ./props/readMore */ 123));
var _row = _interopRequireDefault(__webpack_require__(/*! ./props/row */ 124));
var _rowNotice = _interopRequireDefault(__webpack_require__(/*! ./props/rowNotice */ 125));
var _scrollList = _interopRequireDefault(__webpack_require__(/*! ./props/scrollList */ 126));
var _search = _interopRequireDefault(__webpack_require__(/*! ./props/search */ 127));
var _section = _interopRequireDefault(__webpack_require__(/*! ./props/section */ 128));
var _skeleton = _interopRequireDefault(__webpack_require__(/*! ./props/skeleton */ 129));
var _slider = _interopRequireDefault(__webpack_require__(/*! ./props/slider */ 130));
var _statusBar = _interopRequireDefault(__webpack_require__(/*! ./props/statusBar */ 131));
var _steps = _interopRequireDefault(__webpack_require__(/*! ./props/steps */ 132));
var _stepsItem = _interopRequireDefault(__webpack_require__(/*! ./props/stepsItem */ 133));
var _sticky = _interopRequireDefault(__webpack_require__(/*! ./props/sticky */ 134));
var _subsection = _interopRequireDefault(__webpack_require__(/*! ./props/subsection */ 135));
var _swipeAction = _interopRequireDefault(__webpack_require__(/*! ./props/swipeAction */ 136));
var _swipeActionItem = _interopRequireDefault(__webpack_require__(/*! ./props/swipeActionItem */ 137));
var _swiper = _interopRequireDefault(__webpack_require__(/*! ./props/swiper */ 138));
var _swipterIndicator = _interopRequireDefault(__webpack_require__(/*! ./props/swipterIndicator */ 139));
var _switch2 = _interopRequireDefault(__webpack_require__(/*! ./props/switch */ 140));
var _tabbar = _interopRequireDefault(__webpack_require__(/*! ./props/tabbar */ 141));
var _tabbarItem = _interopRequireDefault(__webpack_require__(/*! ./props/tabbarItem */ 142));
var _tabs = _interopRequireDefault(__webpack_require__(/*! ./props/tabs */ 143));
var _tag = _interopRequireDefault(__webpack_require__(/*! ./props/tag */ 144));
var _text = _interopRequireDefault(__webpack_require__(/*! ./props/text */ 145));
var _textarea = _interopRequireDefault(__webpack_require__(/*! ./props/textarea */ 146));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./props/toast */ 147));
var _toolbar = _interopRequireDefault(__webpack_require__(/*! ./props/toolbar */ 148));
var _tooltip = _interopRequireDefault(__webpack_require__(/*! ./props/tooltip */ 149));
var _transition = _interopRequireDefault(__webpack_require__(/*! ./props/transition */ 150));
var _upload = _interopRequireDefault(__webpack_require__(/*! ./props/upload */ 151));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var


color =
_config.default.color;var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},


_actionSheet.default),
_album.default),
_alert.default),
_avatar.default),
_avatarGroup.default),
_backtop.default),
_badge.default),
_button.default),
_calendar.default),
_carKeyboard.default),
_cell.default),
_cellGroup.default),
_checkbox.default),
_checkboxGroup.default),
_circleProgress.default),
_code.default),
_codeInput.default),
_col.default),
_collapse.default),
_collapseItem.default),
_columnNotice.default),
_countDown.default),
_countTo.default),
_datetimePicker.default),
_divider.default),
_empty.default),
_form.default),
_formItem.default),
_gap.default),
_grid.default),
_gridItem.default),
_icon.default),
_image.default),
_indexAnchor.default),
_indexList.default),
_input.default),
_keyboard.default),
_line.default),
_lineProgress.default),
_link.default),
_list.default),
_listItem.default),
_loadingIcon.default),
_loadingPage.default),
_loadmore.default),
_modal.default),
_navbar.default),
_noNetwork.default),
_noticeBar.default),
_notify.default),
_numberBox.default),
_numberKeyboard.default),
_overlay.default),
_parse.default),
_picker.default),
_popup.default),
_radio.default),
_radioGroup.default),
_rate.default),
_readMore.default),
_row.default),
_rowNotice.default),
_scrollList.default),
_search.default),
_section.default),
_skeleton.default),
_slider.default),
_statusBar.default),
_steps.default),
_stepsItem.default),
_sticky.default),
_subsection.default),
_swipeAction.default),
_swipeActionItem.default),
_swiper.default),
_swipterIndicator.default),
_switch2.default),
_tabbar.default),
_tabbarItem.default),
_tabs.default),
_tag.default),
_text.default),
_textarea.default),
_toast.default),
_toolbar.default),
_tooltip.default),
_transition.default),
_upload.default);exports.default = _default;

/***/ }),
/* 63 */
/*!***********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/actionSheet.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:44:35
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/actionSheet.js
                                                                                                      */var _default =
{
  // action-sheet组件
  actionSheet: {
    show: false,
    title: '',
    description: '',
    actions: function actions() {return [];},
    index: '',
    cancelText: '',
    closeOnClickAction: true,
    safeAreaInsetBottom: true,
    openType: '',
    closeOnClickOverlay: true,
    round: 0 } };exports.default = _default;

/***/ }),
/* 64 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/album.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:47:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/album.js
                                                                                                      */var _default =
{
  // album 组件
  album: {
    urls: function urls() {return [];},
    keyName: '',
    singleSize: 180,
    multipleSize: 70,
    space: 6,
    singleMode: 'scaleToFill',
    multipleMode: 'aspectFill',
    maxCount: 9,
    previewFullImage: true,
    rowCount: 3,
    showMore: true } };exports.default = _default;

/***/ }),
/* 65 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/alert.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:48:53
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/alert.js
                                                                                                      */var _default =
{
  // alert警告组件
  alert: {
    title: '',
    type: 'warning',
    description: '',
    closable: false,
    showIcon: false,
    effect: 'light',
    center: false,
    fontSize: 14 } };exports.default = _default;

/***/ }),
/* 66 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/avatar.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:49:22
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/avatar.js
                                                                                                      */var _default =
{
  // avatar 组件
  avatar: {
    src: '',
    shape: 'circle',
    size: 40,
    mode: 'scaleToFill',
    text: '',
    bgColor: '#c0c4cc',
    color: '#ffffff',
    fontSize: 18,
    icon: '',
    mpAvatar: false,
    randomBgColor: false,
    defaultUrl: '',
    colorIndex: '',
    name: '' } };exports.default = _default;

/***/ }),
/* 67 */
/*!***********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/avatarGroup.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:49:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/avatarGroup.js
                                                                                                      */var _default =
{
  // avatarGroup 组件
  avatarGroup: {
    urls: function urls() {return [];},
    maxCount: 5,
    shape: 'circle',
    mode: 'scaleToFill',
    showMore: true,
    size: 40,
    keyName: '',
    gap: 0.5,
    extraValue: 0 } };exports.default = _default;

/***/ }),
/* 68 */
/*!*******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/backtop.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:50:18
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/backtop.js
                                                                                                      */var _default =
{
  // backtop组件
  backtop: {
    mode: 'circle',
    icon: 'arrow-upward',
    text: '',
    duration: 100,
    scrollTop: 0,
    top: 400,
    bottom: 100,
    right: 20,
    zIndex: 9,
    iconStyle: function iconStyle() {return {
        color: '#909399',
        fontSize: '19px' };} } };exports.default = _default;

/***/ }),
/* 69 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/badge.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 19:51:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/badge.js
                                                                                                      */var _default =
{
  // 徽标数组件
  badge: {
    isDot: false,
    value: '',
    show: true,
    max: 999,
    type: 'error',
    showZero: false,
    bgColor: null,
    color: null,
    shape: 'circle',
    numberType: 'overflow',
    offset: function offset() {return [];},
    inverted: false,
    absolute: false } };exports.default = _default;

/***/ }),
/* 70 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/button.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:51:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/button.js
                                                                                                      */var _default =
{
  // button组件
  button: {
    hairline: false,
    type: 'info',
    size: 'normal',
    shape: 'square',
    plain: false,
    disabled: false,
    loading: false,
    loadingText: '',
    loadingMode: 'spinner',
    loadingSize: 15,
    openType: '',
    formType: '',
    appParameter: '',
    hoverStopPropagation: true,
    lang: 'en',
    sessionFrom: '',
    sendMessageTitle: '',
    sendMessagePath: '',
    sendMessageImg: '',
    showMessageCard: false,
    dataName: '',
    throttleTime: 0,
    hoverStartTime: 0,
    hoverStayTime: 200,
    text: '',
    icon: '',
    iconColor: '',
    color: '' } };exports.default = _default;

/***/ }),
/* 71 */
/*!********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/calendar.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:52:43
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/calendar.js
                                                                                                      */var _default =
{
  // calendar 组件
  calendar: {
    title: '日期选择',
    showTitle: true,
    showSubtitle: true,
    mode: 'single',
    startText: '开始',
    endText: '结束',
    customList: function customList() {return [];},
    color: '#3c9cff',
    minDate: 0,
    maxDate: 0,
    defaultDate: null,
    maxCount: Number.MAX_SAFE_INTEGER, // Infinity
    rowHeight: 56,
    formatter: null,
    showLunar: false,
    showMark: true,
    confirmText: '确定',
    confirmDisabledText: '确定',
    show: false,
    closeOnClickOverlay: false,
    readonly: false,
    showConfirm: true,
    maxRange: Number.MAX_SAFE_INTEGER, // Infinity
    rangePrompt: '',
    showRangePrompt: true,
    allowSameDay: false,
    round: 0,
    monthNum: 3 } };exports.default = _default;

/***/ }),
/* 72 */
/*!***********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/carKeyboard.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:53:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/carKeyboard.js
                                                                                                      */var _default =
{
  // 车牌号键盘
  carKeyboard: {
    random: false } };exports.default = _default;

/***/ }),
/* 73 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/cell.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 20:53:09
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/cell.js
                                                                                                      */var _default =
{
  // cell组件的props
  cell: {
    customClass: '',
    title: '',
    label: '',
    value: '',
    icon: '',
    disabled: false,
    border: true,
    center: false,
    url: '',
    linkType: 'navigateTo',
    clickable: false,
    isLink: false,
    required: false,
    arrowDirection: '',
    iconStyle: {},
    rightIconStyle: {},
    rightIcon: 'arrow-right',
    titleStyle: {},
    size: '',
    stop: true,
    name: '' } };exports.default = _default;

/***/ }),
/* 74 */
/*!*********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/cellGroup.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:54:16
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/cellGroup.js
                                                                                                      */var _default =
{
  // cell-group组件的props
  cellGroup: {
    title: '',
    border: true,
    customStyle: {} } };exports.default = _default;

/***/ }),
/* 75 */
/*!********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/checkbox.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 21:06:59
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/checkbox.js
                                                                                                      */var _default =
{
  // checkbox组件
  checkbox: {
    name: '',
    shape: '',
    size: '',
    checkbox: false,
    disabled: '',
    activeColor: '',
    inactiveColor: '',
    iconSize: '',
    iconColor: '',
    label: '',
    labelSize: '',
    labelColor: '',
    labelDisabled: '' } };exports.default = _default;

/***/ }),
/* 76 */
/*!*************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/checkboxGroup.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:54:47
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/checkboxGroup.js
                                                                                                      */var _default =
{
  // checkbox-group组件
  checkboxGroup: {
    name: '',
    value: function value() {return [];},
    shape: 'square',
    disabled: false,
    activeColor: '#2979ff',
    inactiveColor: '#c8c9cc',
    size: 18,
    placement: 'row',
    labelSize: 14,
    labelColor: '#303133',
    labelDisabled: false,
    iconColor: '#ffffff',
    iconSize: 12,
    iconPlacement: 'left',
    borderBottom: false } };exports.default = _default;

/***/ }),
/* 77 */
/*!**************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/circleProgress.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:02
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/circleProgress.js
                                                                                                      */var _default =
{
  // circleProgress 组件
  circleProgress: {
    percentage: 30 } };exports.default = _default;

/***/ }),
/* 78 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/code.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/code.js
                                                                                                      */var _default =

{
  // code 组件
  code: {
    seconds: 60,
    startText: '获取验证码',
    changeText: 'X秒重新获取',
    endText: '重新获取',
    keepRunning: false,
    uniqueKey: '' } };exports.default = _default;

/***/ }),
/* 79 */
/*!*********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/codeInput.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/codeInput.js
                                                                                                      */var _default =
{
  // codeInput 组件
  codeInput: {
    adjustPosition: true,
    maxlength: 6,
    dot: false,
    mode: 'box',
    hairline: false,
    space: 10,
    value: '',
    focus: false,
    bold: false,
    color: '#606266',
    fontSize: 18,
    size: 35,
    disabledKeyboard: false,
    borderColor: '#c9cacc',
    disabledDot: true } };exports.default = _default;

/***/ }),
/* 80 */
/*!***************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/col.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:12
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/col.js
                                                                                                      */var _default =
{
  // col 组件
  col: {
    span: 12,
    offset: 0,
    justify: 'start',
    align: 'stretch',
    textAlign: 'left' } };exports.default = _default;

/***/ }),
/* 81 */
/*!********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/collapse.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:30
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/collapse.js
                                                                                                      */var _default =
{
  // collapse 组件
  collapse: {
    value: null,
    accordion: false,
    border: true } };exports.default = _default;

/***/ }),
/* 82 */
/*!************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/collapseItem.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:42
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/collapseItem.js
                                                                                                      */var _default =
{
  // collapseItem 组件
  collapseItem: {
    title: '',
    value: '',
    label: '',
    disabled: false,
    isLink: true,
    clickable: true,
    border: true,
    align: 'left',
    name: '',
    icon: '',
    duration: 300 } };exports.default = _default;

/***/ }),
/* 83 */
/*!************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/columnNotice.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:16
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/columnNotice.js
                                                                                                      */var _default =
{
  // columnNotice 组件
  columnNotice: {
    text: '',
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    fontSize: 14,
    speed: 80,
    step: false,
    duration: 1500,
    disableTouch: true } };exports.default = _default;

/***/ }),
/* 84 */
/*!*********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/countDown.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:11:29
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/countDown.js
                                                                                                      */var _default =
{
  // u-count-down 计时器组件
  countDown: {
    time: 0,
    format: 'HH:mm:ss',
    autoStart: true,
    millisecond: false } };exports.default = _default;

/***/ }),
/* 85 */
/*!*******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/countTo.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/countTo.js
                                                                                                      */var _default =
{
  // countTo 组件
  countTo: {
    startVal: 0,
    endVal: 0,
    duration: 2000,
    autoplay: true,
    decimals: 0,
    useEasing: true,
    decimal: '.',
    color: '#606266',
    fontSize: 22,
    bold: false,
    separator: '' } };exports.default = _default;

/***/ }),
/* 86 */
/*!**************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/datetimePicker.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:48
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/datetimePicker.js
                                                                                                      */var _default =
{
  // datetimePicker 组件
  datetimePicker: {
    show: false,
    showToolbar: true,
    value: '',
    title: '',
    mode: 'datetime',
    maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
    minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
    minHour: 0,
    maxHour: 23,
    minMinute: 0,
    maxMinute: 59,
    filter: null,
    formatter: null,
    loading: false,
    itemHeight: 44,
    cancelText: '取消',
    confirmText: '确认',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    visibleItemCount: 5,
    closeOnClickOverlay: false,
    defaultIndex: function defaultIndex() {return [];} } };exports.default = _default;

/***/ }),
/* 87 */
/*!*******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/divider.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:58:03
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/divider.js
                                                                                                      */var _default =
{
  // divider组件
  divider: {
    dashed: false,
    hairline: true,
    dot: false,
    textPosition: 'center',
    text: '',
    textSize: 14,
    textColor: '#909399',
    lineColor: '#dcdfe6' } };exports.default = _default;

/***/ }),
/* 88 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/empty.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/empty.js
                                                                                                      */var _default =
{
  // empty组件
  empty: {
    icon: '',
    text: '',
    textColor: '#c0c4cc',
    textSize: 14,
    iconColor: '#c0c4cc',
    iconSize: 90,
    mode: 'data',
    width: 160,
    height: 160,
    show: true,
    marginTop: 0 } };exports.default = _default;

/***/ }),
/* 89 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/form.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/form.js
                                                                                                      */var _default =
{
  // form 组件
  form: {
    model: function model() {return {};},
    rules: function rules() {return {};},
    errorType: 'message',
    borderBottom: true,
    labelPosition: 'left',
    labelWidth: 45,
    labelAlign: 'left',
    labelStyle: function labelStyle() {return {};} } };exports.default = _default;

/***/ }),
/* 90 */
/*!********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/formItem.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:04:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/formItem.js
                                                                                                      */var _default =
{
  // formItem 组件
  formItem: {
    label: '',
    prop: '',
    borderBottom: '',
    labelWidth: '',
    rightIcon: '',
    leftIcon: '',
    required: false,
    leftIconStyle: '' } };exports.default = _default;

/***/ }),
/* 91 */
/*!***************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/gap.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:25
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/gap.js
                                                                                                      */var _default =
{
  // gap组件
  gap: {
    bgColor: 'transparent',
    height: 20,
    marginTop: 0,
    marginBottom: 0,
    customStyle: {} } };exports.default = _default;

/***/ }),
/* 92 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/grid.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:57
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/grid.js
                                                                                                      */var _default =
{
  // grid组件
  grid: {
    col: 3,
    border: false,
    align: 'left' } };exports.default = _default;

/***/ }),
/* 93 */
/*!********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/gridItem.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/gridItem.js
                                                                                                      */var _default =
{
  // grid-item组件
  gridItem: {
    name: null,
    bgColor: 'transparent' } };exports.default = _default;

/***/ }),
/* 94 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/icon.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 61));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 18:00:14
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/icon.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // icon组件
  icon: { name: '', color: color['u-content-color'],
    size: '16px',
    bold: false,
    index: '',
    hoverClass: '',
    customPrefix: 'uicon',
    label: '',
    labelPos: 'right',
    labelSize: '15px',
    labelColor: color['u-content-color'],
    space: '3px',
    imgMode: '',
    width: '',
    height: '',
    top: 0,
    stop: false } };exports.default = _default;

/***/ }),
/* 95 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/image.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:51
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/image.js
                                                                                                      */var _default =
{
  // image组件
  image: {
    src: '',
    mode: 'aspectFill',
    width: '300',
    height: '225',
    shape: 'square',
    radius: 0,
    lazyLoad: true,
    showMenuByLongpress: true,
    loadingIcon: 'photo',
    errorIcon: 'error-circle',
    showLoading: true,
    showError: true,
    fade: true,
    webp: false,
    duration: 500,
    bgColor: '#f3f4f6' } };exports.default = _default;

/***/ }),
/* 96 */
/*!***********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/indexAnchor.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:15
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/indexAnchor.js
                                                                                                      */var _default =
{
  // indexAnchor 组件
  indexAnchor: {
    text: '',
    color: '#606266',
    size: 14,
    bgColor: '#dedede',
    height: 32 } };exports.default = _default;

/***/ }),
/* 97 */
/*!*********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/indexList.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:35
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/indexList.js
                                                                                                      */var _default =
{
  // indexList 组件
  indexList: {
    inactiveColor: '#606266',
    activeColor: '#5677fc',
    indexList: function indexList() {return [];},
    sticky: true,
    customNavHeight: 0 } };exports.default = _default;

/***/ }),
/* 98 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/input.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/input.js
                                                                                                      */var _default =
{
  // index 组件
  input: {
    value: '',
    type: 'text',
    fixed: false,
    disabled: false,
    disabledColor: '#f5f7fa',
    clearable: false,
    password: false,
    maxlength: -1,
    placeholder: null,
    placeholderClass: 'input-placeholder',
    placeholderStyle: 'color: #c0c4cc',
    showWordLimit: false,
    confirmType: 'done',
    confirmHold: false,
    holdKeyboard: false,
    focus: false,
    autoBlur: false,
    disableDefaultPadding: false,
    cursor: -1,
    cursorSpacing: 30,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    inputAlign: 'left',
    fontSize: '15px',
    color: '#303133',
    prefixIcon: '',
    prefixIconStyle: '',
    suffixIcon: '',
    suffixIconStyle: '',
    border: 'surround',
    readonly: false,
    shape: 'square',
    formatter: null } };exports.default = _default;

/***/ }),
/* 99 */
/*!********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/keyboard.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/keyboard.js
                                                                                                      */var _default =
{
  // 键盘组件
  keyboard: {
    mode: 'number',
    dotDisabled: false,
    tooltip: true,
    showTips: true,
    tips: '',
    showCancel: true,
    showConfirm: true,
    random: false,
    safeAreaInsetBottom: true,
    closeOnClickOverlay: true,
    show: false,
    overlay: true,
    zIndex: 10075,
    cancelText: '取消',
    confirmText: '确定',
    autoChange: false } };exports.default = _default;

/***/ }),
/* 100 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/line.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:04:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/line.js
                                                                                                      */var _default =
{
  // line组件
  line: {
    color: '#d6d7d9',
    length: '100%',
    direction: 'row',
    hairline: true,
    margin: 0,
    dashed: false } };exports.default = _default;

/***/ }),
/* 101 */
/*!************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/lineProgress.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:14:11
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/lineProgress.js
                                                                                                      */var _default =
{
  // lineProgress 组件
  lineProgress: {
    activeColor: '#19be6b',
    inactiveColor: '#ececec',
    percentage: 0,
    showText: true,
    height: 12 } };exports.default = _default;

/***/ }),
/* 102 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/link.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 61));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 17:45:36
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/link.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // link超链接组件props参数
  link: { color: color['u-primary'], fontSize: 15,
    underLine: false,
    href: '',
    mpTips: '链接已复制，请在浏览器打开',
    lineColor: '',
    text: '' } };exports.default = _default;

/***/ }),
/* 103 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/list.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:14:53
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/list.js
                                                                                                      */var _default =
{
  // list 组件
  list: {
    showScrollbar: false,
    lowerThreshold: 50,
    upperThreshold: 0,
    scrollTop: 0,
    offsetAccuracy: 10,
    enableFlex: false,
    pagingEnabled: false,
    scrollable: true,
    scrollIntoView: '',
    scrollWithAnimation: false,
    enableBackToTop: false,
    height: 0,
    width: 0,
    preLoadScreen: 1 } };exports.default = _default;

/***/ }),
/* 104 */
/*!********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/listItem.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:40
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/listItem.js
                                                                                                      */var _default =
{
  // listItem 组件
  listItem: {
    anchor: '' } };exports.default = _default;

/***/ }),
/* 105 */
/*!***********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/loadingIcon.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 61));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 17:45:47
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadingIcon.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // loading-icon加载中图标组件
  loadingIcon: { show: true, color: color['u-tips-color'],
    textColor: color['u-tips-color'],
    vertical: false,
    mode: 'spinner',
    size: 24,
    textSize: 15,
    text: '',
    timingFunction: 'ease-in-out',
    duration: 1200,
    inactiveColor: '' } };exports.default = _default;

/***/ }),
/* 106 */
/*!***********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/loadingPage.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:00:23
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadingPage.js
                                                                                                      */var _default =
{
  // loading-page组件
  loadingPage: {
    loadingText: '正在加载',
    image: '',
    loadingMode: 'circle',
    loading: false,
    bgColor: '#ffffff',
    color: '#C8C8C8',
    fontSize: 19,
    iconSize: 28,
    loadingColor: '#C8C8C8' } };exports.default = _default;

/***/ }),
/* 107 */
/*!********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/loadmore.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:26
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadmore.js
                                                                                                      */var _default =
{
  // loadmore 组件
  loadmore: {
    status: 'loadmore',
    bgColor: 'transparent',
    icon: true,
    fontSize: 14,
    iconSize: 17,
    color: '#606266',
    loadingIcon: 'spinner',
    loadmoreText: '加载更多',
    loadingText: '正在加载...',
    nomoreText: '没有更多了',
    isDot: false,
    iconColor: '#b7b7b7',
    marginTop: 10,
    marginBottom: 10,
    height: 'auto',
    line: false,
    lineColor: '#E6E8EB',
    dashed: false } };exports.default = _default;

/***/ }),
/* 108 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/modal.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:59
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/modal.js
                                                                                                      */var _default =
{
  // modal 组件
  modal: {
    show: false,
    title: '',
    content: '',
    confirmText: '确认',
    cancelText: '取消',
    showConfirmButton: true,
    showCancelButton: false,
    confirmColor: '#2979ff',
    cancelColor: '#606266',
    buttonReverse: false,
    zoom: true,
    asyncClose: false,
    closeOnClickOverlay: false,
    negativeTop: 0,
    width: '650rpx',
    confirmButtonShape: '' } };exports.default = _default;

/***/ }),
/* 109 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/navbar.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _color = _interopRequireDefault(__webpack_require__(/*! ../color */ 110));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                        * @Author       : LQ
                                                                                                                                                        * @Description  :
                                                                                                                                                        * @version      : 1.0
                                                                                                                                                        * @Date         : 2021-08-20 16:44:21
                                                                                                                                                        * @LastAuthor   : LQ
                                                                                                                                                        * @lastTime     : 2021-08-20 17:16:18
                                                                                                                                                        * @FilePath     : /u-view2.0/uview-ui/libs/config/props/navbar.js
                                                                                                                                                        */var _default = { // navbar 组件
  navbar: { safeAreaInsetTop: true, placeholder: false, fixed: true, border: false, leftIcon: 'arrow-left', leftText: '',
    rightText: '',
    rightIcon: '',
    title: '',
    bgColor: '#ffffff',
    titleWidth: '400rpx',
    height: '44px',
    leftIconSize: 20,
    leftIconColor: _color.default.mainColor,
    autoBack: false,
    titleStyle: '' } };exports.default = _default;

/***/ }),
/* 110 */
/*!***********************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/color.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: '#3c9cff',
  info: '#909399',
  default: '#909399',
  warning: '#f9ae3d',
  error: '#f56c6c',
  success: '#5ac725',
  mainColor: '#303133',
  contentColor: '#606266',
  tipsColor: '#909399',
  lightColor: '#c0c4cc',
  borderColor: '#e4e7ed' };var _default =


color;exports.default = _default;

/***/ }),
/* 111 */
/*!*********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/noNetwork.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:16:39
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/noNetwork.js
                                                                                                      */var _default =
{
  // noNetwork
  noNetwork: {
    tips: '哎呀，网络信号丢失',
    zIndex: '',
    image: 'data:image/png;base64,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' } };exports.default = _default;

/***/ }),
/* 112 */
/*!*********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/noticeBar.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:17:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/noticeBar.js
                                                                                                      */var _default =
{
  // noticeBar
  noticeBar: {
    text: function text() {return [];},
    direction: 'row',
    step: false,
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    speed: 80,
    fontSize: 14,
    duration: 2000,
    disableTouch: true,
    url: '',
    linkType: 'navigateTo' } };exports.default = _default;

/***/ }),
/* 113 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/notify.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:10:21
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/notify.js
                                                                                                      */var _default =
{
  // notify组件
  notify: {
    top: 0,
    type: 'primary',
    color: '#ffffff',
    bgColor: '',
    message: '',
    duration: 3000,
    fontSize: 15,
    safeAreaInsetTop: false } };exports.default = _default;

/***/ }),
/* 114 */
/*!*********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/numberBox.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:11:46
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/numberBox.js
                                                                                                      */var _default =
{
  // 步进器组件
  numberBox: {
    name: '',
    value: 0,
    min: 1,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    integer: false,
    disabled: false,
    disabledInput: false,
    asyncChange: false,
    inputWidth: 35,
    showMinus: true,
    showPlus: true,
    decimalLength: null,
    longPress: true,
    color: '#323233',
    buttonSize: 30,
    bgColor: '#EBECEE',
    cursorSpacing: 100,
    disableMinus: false,
    disablePlus: false,
    iconStyle: '' } };exports.default = _default;

/***/ }),
/* 115 */
/*!**************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/numberKeyboard.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:08:05
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/numberKeyboard.js
                                                                                                      */var _default =
{
  // 数字键盘
  numberKeyboard: {
    mode: 'number',
    dotDisabled: false,
    random: false } };exports.default = _default;

/***/ }),
/* 116 */
/*!*******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/overlay.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/overlay.js
                                                                                                      */var _default =
{
  // overlay组件
  overlay: {
    show: false,
    zIndex: 10070,
    duration: 300,
    opacity: 0.5 } };exports.default = _default;

/***/ }),
/* 117 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/parse.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:17:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/parse.js
                                                                                                      */var _default =
{
  // parse
  parse: {
    copyLink: true,
    errorImg: '',
    lazyLoad: false,
    loadingImg: '',
    pauseVideo: true,
    previewImg: true,
    setTitle: true,
    showImgMenu: true } };exports.default = _default;

/***/ }),
/* 118 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/picker.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/picker.js
                                                                                                      */var _default =
{
  // picker
  picker: {
    show: false,
    showToolbar: true,
    title: '',
    columns: function columns() {return [];},
    loading: false,
    itemHeight: 44,
    cancelText: '取消',
    confirmText: '确定',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    visibleItemCount: 5,
    keyName: 'text',
    closeOnClickOverlay: false,
    defaultIndex: function defaultIndex() {return [];},
    immediateChange: false } };exports.default = _default;

/***/ }),
/* 119 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/popup.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/popup.js
                                                                                                      */var _default =
{
  // popup组件
  popup: {
    show: false,
    overlay: true,
    mode: 'bottom',
    duration: 300,
    closeable: false,
    overlayStyle: function overlayStyle() {},
    closeOnClickOverlay: true,
    zIndex: 10075,
    safeAreaInsetBottom: true,
    safeAreaInsetTop: false,
    closeIconPos: 'top-right',
    round: 0,
    zoom: true,
    bgColor: '',
    overlayOpacity: 0.5 } };exports.default = _default;

/***/ }),
/* 120 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/radio.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:02:34
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/radio.js
                                                                                                      */var _default =
{
  // radio组件
  radio: {
    name: '',
    shape: '',
    disabled: '',
    labelDisabled: '',
    activeColor: '',
    inactiveColor: '',
    iconSize: '',
    labelSize: '',
    label: '',
    labelColor: '',
    size: '',
    iconColor: '',
    placement: '' } };exports.default = _default;

/***/ }),
/* 121 */
/*!**********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/radioGroup.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:12
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/radioGroup.js
                                                                                                      */var _default =
{
  // radio-group组件
  radioGroup: {
    value: '',
    disabled: false,
    shape: 'circle',
    activeColor: '#2979ff',
    inactiveColor: '#c8c9cc',
    name: '',
    size: 18,
    placement: 'row',
    label: '',
    labelColor: '#303133',
    labelSize: 14,
    labelDisabled: false,
    iconColor: '#ffffff',
    iconSize: 12,
    borderBottom: false,
    iconPlacement: 'left' } };exports.default = _default;

/***/ }),
/* 122 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/rate.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:09
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/rate.js
                                                                                                      */var _default =
{
  // rate组件
  rate: {
    value: 1,
    count: 5,
    disabled: false,
    size: 18,
    inactiveColor: '#b2b2b2',
    activeColor: '#FA3534',
    gutter: 4,
    minCount: 1,
    allowHalf: false,
    activeIcon: 'star-fill',
    inactiveIcon: 'star',
    touchable: true } };exports.default = _default;

/***/ }),
/* 123 */
/*!********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/readMore.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:41
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/readMore.js
                                                                                                      */var _default =
{
  // readMore
  readMore: {
    showHeight: 400,
    toggle: false,
    closeText: '展开阅读全文',
    openText: '收起',
    color: '#2979ff',
    fontSize: 14,
    textIndent: '2em',
    name: '' } };exports.default = _default;

/***/ }),
/* 124 */
/*!***************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/row.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/row.js
                                                                                                      */var _default =
{
  // row
  row: {
    gutter: 0,
    justify: 'start',
    align: 'center' } };exports.default = _default;

/***/ }),
/* 125 */
/*!*********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/rowNotice.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/rowNotice.js
                                                                                                      */var _default =
{
  // rowNotice
  rowNotice: {
    text: '',
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    fontSize: 14,
    speed: 80 } };exports.default = _default;

/***/ }),
/* 126 */
/*!**********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/scrollList.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:28
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/scrollList.js
                                                                                                      */var _default =
{
  // scrollList
  scrollList: {
    indicatorWidth: 50,
    indicatorBarWidth: 20,
    indicator: true,
    indicatorColor: '#f2f2f2',
    indicatorActiveColor: '#3c9cff',
    indicatorStyle: '' } };exports.default = _default;

/***/ }),
/* 127 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/search.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:45
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/search.js
                                                                                                      */var _default =
{
  // search
  search: {
    shape: 'round',
    bgColor: '#f2f2f2',
    placeholder: '请输入关键字',
    clearabled: true,
    focus: false,
    showAction: true,
    actionStyle: function actionStyle() {return {};},
    actionText: '搜索',
    inputAlign: 'left',
    inputStyle: function inputStyle() {return {};},
    disabled: false,
    borderColor: 'transparent',
    searchIconColor: '#909399',
    searchIconSize: 22,
    color: '#606266',
    placeholderColor: '#909399',
    searchIcon: 'search',
    margin: '0',
    animation: false,
    value: '',
    maxlength: '-1',
    height: 32,
    label: null } };exports.default = _default;

/***/ }),
/* 128 */
/*!*******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/section.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/section.js
                                                                                                      */var _default =
{
  // u-section组件
  section: {
    title: '',
    subTitle: '更多',
    right: true,
    fontSize: 15,
    bold: true,
    color: '#303133',
    subColor: '#909399',
    showLine: true,
    lineColor: '',
    arrow: true } };exports.default = _default;

/***/ }),
/* 129 */
/*!********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/skeleton.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:20:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/skeleton.js
                                                                                                      */var _default =
{
  // skeleton
  skeleton: {
    loading: true,
    animate: true,
    rows: 0,
    rowsWidth: '100%',
    rowsHeight: 18,
    title: true,
    titleWidth: '50%',
    titleHeight: 18,
    avatar: false,
    avatarSize: 32,
    avatarShape: 'circle' } };exports.default = _default;

/***/ }),
/* 130 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/slider.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:08:25
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/slider.js
                                                                                                      */var _default =
{
  // slider组件
  slider: {
    value: 0,
    blockSize: 18,
    min: 0,
    max: 100,
    step: 1,
    activeColor: '#2979ff',
    inactiveColor: '#c0c4cc',
    blockColor: '#ffffff',
    showValue: false,
    disabled: false,
    blockStyle: function blockStyle() {} } };exports.default = _default;

/***/ }),
/* 131 */
/*!*********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/statusBar.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:20:39
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/statusBar.js
                                                                                                      */var _default =
{
  // statusBar
  statusBar: {
    bgColor: 'transparent' } };exports.default = _default;

/***/ }),
/* 132 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/steps.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:37
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/steps.js
                                                                                                      */var _default =
{
  // steps组件
  steps: {
    direction: 'row',
    current: 0,
    activeColor: '#3c9cff',
    inactiveColor: '#969799',
    activeIcon: '',
    inactiveIcon: '',
    dot: false } };exports.default = _default;

/***/ }),
/* 133 */
/*!*********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/stepsItem.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/stepsItem.js
                                                                                                      */var _default =
{
  // steps-item组件
  stepsItem: {
    title: '',
    desc: '',
    iconSize: 17,
    error: false } };exports.default = _default;

/***/ }),
/* 134 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/sticky.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:30
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/sticky.js
                                                                                                      */var _default =
{
  // sticky组件
  sticky: {
    offsetTop: 0,
    customNavHeight: 0,
    disabled: false,
    bgColor: 'transparent',
    zIndex: '',
    index: '' } };exports.default = _default;

/***/ }),
/* 135 */
/*!**********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/subsection.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/subsection.js
                                                                                                      */var _default =
{
  // subsection组件
  subsection: {
    list: [],
    current: 0,
    activeColor: '#3c9cff',
    inactiveColor: '#303133',
    mode: 'button',
    fontSize: 12,
    bold: true,
    bgColor: '#eeeeef',
    keyName: 'name' } };exports.default = _default;

/***/ }),
/* 136 */
/*!***********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/swipeAction.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:00:42
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swipeAction.js
                                                                                                      */var _default =
{
  // swipe-action组件
  swipeAction: {
    autoClose: true } };exports.default = _default;

/***/ }),
/* 137 */
/*!***************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/swipeActionItem.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swipeActionItem.js
                                                                                                      */var _default =
{
  // swipeActionItem 组件
  swipeActionItem: {
    show: false,
    name: '',
    disabled: false,
    threshold: 20,
    autoClose: true,
    options: [],
    duration: 300 } };exports.default = _default;

/***/ }),
/* 138 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/swiper.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:21:38
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swiper.js
                                                                                                      */var _default =
{
  // swiper 组件
  swiper: {
    list: function list() {return [];},
    indicator: false,
    indicatorActiveColor: '#FFFFFF',
    indicatorInactiveColor: 'rgba(255, 255, 255, 0.35)',
    indicatorStyle: '',
    indicatorMode: 'line',
    autoplay: true,
    current: 0,
    currentItemId: '',
    interval: 3000,
    duration: 300,
    circular: false,
    previousMargin: 0,
    nextMargin: 0,
    acceleration: false,
    displayMultipleItems: 1,
    easingFunction: 'default',
    keyName: 'url',
    imgMode: 'aspectFill',
    height: 130,
    bgColor: '#f3f4f6',
    radius: 4,
    loading: false,
    showTitle: false } };exports.default = _default;

/***/ }),
/* 139 */
/*!****************************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/swipterIndicator.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:07
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swiperIndicator.js
                                                                                                      */var _default =
{
  // swiperIndicator 组件
  swiperIndicator: {
    length: 0,
    current: 0,
    indicatorActiveColor: '',
    indicatorInactiveColor: '',
    indicatorMode: 'line' } };exports.default = _default;

/***/ }),
/* 140 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/switch.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/switch.js
                                                                                                      */var _default =
{
  // switch
  switch: {
    loading: false,
    disabled: false,
    size: 25,
    activeColor: '#2979ff',
    inactiveColor: '#ffffff',
    value: false,
    activeValue: true,
    inactiveValue: false,
    asyncChange: false,
    space: 0 } };exports.default = _default;

/***/ }),
/* 141 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/tabbar.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:40
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabbar.js
                                                                                                      */var _default =
{
  // tabbar
  tabbar: {
    value: null,
    safeAreaInsetBottom: true,
    border: true,
    zIndex: 1,
    activeColor: '#1989fa',
    inactiveColor: '#7d7e80',
    fixed: true,
    placeholder: true } };exports.default = _default;

/***/ }),
/* 142 */
/*!**********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/tabbarItem.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabbarItem.js
                                                                                                      */var _default =
{
  //
  tabbarItem: {
    name: null,
    icon: '',
    badge: null,
    dot: false,
    text: '',
    badgeStyle: 'top: 6px;right:2px;' } };exports.default = _default;

/***/ }),
/* 143 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/tabs.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabs.js
                                                                                                      */var _default =
{
  //
  tabs: {
    duration: 300,
    list: function list() {return [];},
    lineColor: '#3c9cff',
    activeStyle: function activeStyle() {return {
        color: '#303133' };},

    inactiveStyle: function inactiveStyle() {return {
        color: '#606266' };},

    lineWidth: 20,
    lineHeight: 3,
    lineBgSize: 'cover',
    itemStyle: function itemStyle() {return {
        height: '44px' };},

    scrollable: true,
    current: 0,
    keyName: 'name' } };exports.default = _default;

/***/ }),
/* 144 */
/*!***************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/tag.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:37
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tag.js
                                                                                                      */var _default =
{
  // tag 组件
  tag: {
    type: 'primary',
    disabled: false,
    size: 'medium',
    shape: 'square',
    text: '',
    bgColor: '',
    color: '',
    borderColor: '',
    closeColor: '#C6C7CB',
    name: '',
    plainFill: false,
    plain: false,
    closable: false,
    show: true,
    icon: '' } };exports.default = _default;

/***/ }),
/* 145 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/text.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/text.js
                                                                                                      */var _default =
{
  // text 组件
  text: {
    type: '',
    show: true,
    text: '',
    prefixIcon: '',
    suffixIcon: '',
    mode: '',
    href: '',
    format: '',
    call: false,
    openType: '',
    bold: false,
    block: false,
    lines: '',
    color: '#303133',
    size: 15,
    iconStyle: function iconStyle() {return {
        fontSize: '15px' };},

    decoration: 'none',
    margin: 0,
    lineHeight: '',
    align: 'left',
    wordWrap: 'normal' } };exports.default = _default;

/***/ }),
/* 146 */
/*!********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/textarea.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:24:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/textarea.js
                                                                                                      */var _default =
{
  // textarea 组件
  textarea: {
    value: '',
    placeholder: '',
    placeholderClass: 'textarea-placeholder',
    placeholderStyle: 'color: #c0c4cc',
    height: 70,
    confirmType: '',
    disabled: false,
    count: false,
    focus: false,
    autoHeight: false,
    fixed: false,
    cursorSpacing: 0,
    cursor: '',
    showConfirmBar: true,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    disableDefaultPadding: false,
    holdKeyboard: false,
    maxlength: 140,
    border: 'surround',
    formatter: null } };exports.default = _default;

/***/ }),
/* 147 */
/*!*****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/toast.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:07
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/toast.js
                                                                                                      */var _default =
{
  // toast组件
  toast: {
    zIndex: 10090,
    loading: false,
    text: '',
    icon: '',
    type: '',
    loadingMode: '',
    show: '',
    overlay: false,
    position: 'center',
    params: function params() {},
    duration: 2000,
    isTab: false,
    url: '',
    callback: null,
    back: false } };exports.default = _default;

/***/ }),
/* 148 */
/*!*******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/toolbar.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:24:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/toolbar.js
                                                                                                      */var _default =
{
  // toolbar 组件
  toolbar: {
    show: true,
    cancelText: '取消',
    confirmText: '确认',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    title: '' } };exports.default = _default;

/***/ }),
/* 149 */
/*!*******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/tooltip.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:25:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tooltip.js
                                                                                                      */var _default =
{
  // tooltip 组件
  tooltip: {
    text: '',
    copyText: '',
    size: 14,
    color: '#606266',
    bgColor: 'transparent',
    direction: 'top',
    zIndex: 10071,
    showCopy: true,
    buttons: function buttons() {return [];},
    overlay: true,
    showToast: true } };exports.default = _default;

/***/ }),
/* 150 */
/*!**********************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/transition.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:59:00
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/transition.js
                                                                                                      */var _default =
{
  // transition动画组件的props
  transition: {
    show: false,
    mode: 'fade',
    duration: '300',
    timingFunction: 'ease-out' } };exports.default = _default;

/***/ }),
/* 151 */
/*!******************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/props/upload.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:09:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/upload.js
                                                                                                      */var _default =
{
  // upload组件
  upload: {
    accept: 'image',
    capture: function capture() {return ['album', 'camera'];},
    compressed: true,
    camera: 'back',
    maxDuration: 60,
    uploadIcon: 'camera-fill',
    uploadIconColor: '#D3D4D6',
    useBeforeRead: false,
    previewFullImage: true,
    maxCount: 52,
    disabled: false,
    imageMode: 'aspectFill',
    name: '',
    sizeType: function sizeType() {return ['original', 'compressed'];},
    multiple: false,
    deletable: true,
    maxSize: Number.MAX_VALUE,
    fileList: function fileList() {return [];},
    uploadText: '',
    width: 80,
    height: 80,
    previewImage: true } };exports.default = _default;

/***/ }),
/* 152 */
/*!************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/config/zIndex.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 153 */
/*!****************************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/uview-ui/libs/function/platform.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 注意：
                                                                                                      * 此部分内容，在vue-cli模式下，需要在vue.config.js加入如下内容才有效：
                                                                                                      * module.exports = {
                                                                                                      *     transpileDependencies: ['uview-v2']
                                                                                                      * }
                                                                                                      */

var platform = 'none';






platform = 'vue2';



platform = 'plus';var _default =






















































platform;exports.default = _default;

/***/ }),
/* 154 */
/*!*******************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/store/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 28));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 155));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n_vue.default.use(_vuex.default);\nvar store = new _vuex.default.Store({\n  state: {\n    theme: 'light', // light dark\n    themeStatus: false },\n\n  mutations: {\n    UPDATE_THEME: function UPDATE_THEME(state) {\n      var key = state.theme === 'light' ? 'dark' : 'light';\n      state.theme = key;\n      state.themeStatus = false;\n      uni.setStorageSync('CURRENT_APP_THEME', key);\n    },\n    UPDATE_THEME_STATUS: function UPDATE_THEME_STATUS(state) {var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      state.themeStatus = key;\n    } },\n\n  getters: {\n    theme: function theme(state) {return state.theme;},\n    themeStatus: function themeStatus(state) {return state.themeStatus;} } });var _default =\n\n\n\nstore;exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsInRoZW1lIiwidGhlbWVTdGF0dXMiLCJtdXRhdGlvbnMiLCJVUERBVEVfVEhFTUUiLCJrZXkiLCJ1bmkiLCJzZXRTdG9yYWdlU3luYyIsIlVQREFURV9USEVNRV9TVEFUVVMiLCJnZXR0ZXJzIl0sIm1hcHBpbmdzIjoidUZBQUE7QUFDQSx5RTtBQUNBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUQsY0FBS0UsS0FBVCxDQUFlO0FBQzVCQyxPQUFLLEVBQUU7QUFDTkMsU0FBSyxFQUFFLE9BREQsRUFDVTtBQUNoQkMsZUFBVyxFQUFFLEtBRlAsRUFEcUI7O0FBSzVCQyxXQUFTLEVBQUU7QUFDVkMsZ0JBRFUsd0JBQ0dKLEtBREgsRUFDVTtBQUNuQixVQUFNSyxHQUFHLEdBQUdMLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixPQUFoQixHQUEwQixNQUExQixHQUFtQyxPQUEvQztBQUNBRCxXQUFLLENBQUNDLEtBQU4sR0FBY0ksR0FBZDtBQUNBTCxXQUFLLENBQUNFLFdBQU4sR0FBb0IsS0FBcEI7QUFDQUksU0FBRyxDQUFDQyxjQUFKLENBQW1CLG1CQUFuQixFQUF3Q0YsR0FBeEM7QUFDQSxLQU5TO0FBT1ZHLHVCQVBVLCtCQU9VUixLQVBWLEVBTzZCLEtBQVpLLEdBQVksdUVBQU4sSUFBTTtBQUN0Q0wsV0FBSyxDQUFDRSxXQUFOLEdBQW9CRyxHQUFwQjtBQUNBLEtBVFMsRUFMaUI7O0FBZ0I1QkksU0FBTyxFQUFFO0FBQ1JSLFNBQUssRUFBRSxlQUFBRCxLQUFLLFVBQUlBLEtBQUssQ0FBQ0MsS0FBVixFQURKO0FBRVJDLGVBQVcsRUFBRSxxQkFBQUYsS0FBSyxVQUFJQSxLQUFLLENBQUNFLFdBQVYsRUFGVixFQWhCbUIsRUFBZixDQUFkLEM7Ozs7QUFzQmVKLEsiLCJmaWxlIjoiMTU0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXHJcblZ1ZS51c2UoVnVleClcclxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XHJcblx0c3RhdGU6IHtcclxuXHRcdHRoZW1lOiAnbGlnaHQnLCAvLyBsaWdodCBkYXJrXHJcblx0XHR0aGVtZVN0YXR1czogZmFsc2UsXHJcblx0fSxcclxuXHRtdXRhdGlvbnM6IHtcclxuXHRcdFVQREFURV9USEVNRShzdGF0ZSkge1xyXG5cdFx0XHRjb25zdCBrZXkgPSBzdGF0ZS50aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCc7XHJcblx0XHRcdHN0YXRlLnRoZW1lID0ga2V5O1xyXG5cdFx0XHRzdGF0ZS50aGVtZVN0YXR1cyA9IGZhbHNlO1xyXG5cdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ0NVUlJFTlRfQVBQX1RIRU1FJywga2V5KTtcclxuXHRcdH0sXHJcblx0XHRVUERBVEVfVEhFTUVfU1RBVFVTKHN0YXRlLCBrZXkgPSB0cnVlKSB7XHJcblx0XHRcdHN0YXRlLnRoZW1lU3RhdHVzID0ga2V5O1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Z2V0dGVyczoge1xyXG5cdFx0dGhlbWU6IHN0YXRlID0+IHN0YXRlLnRoZW1lLFxyXG5cdFx0dGhlbWVTdGF0dXM6IHN0YXRlID0+IHN0YXRlLnRoZW1lU3RhdHVzXHJcblx0fVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///154\n");

/***/ }),
/* 155 */
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 47)))

/***/ }),
/* 156 */
/*!*******************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/utils/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.copyClick = copyClick;Object.defineProperty(exports, \"dateFormat\", { enumerable: true, get: function get() {return _date.dateFormat;} });exports.queryParams = exports.checkUpdate = void 0;\nvar _index = __webpack_require__(/*! ./app-plus/index.js */ 22);\n\n\n\nvar _date = __webpack_require__(/*! @/utils/date.js */ 157);\n\n\n\n\n\n\n\n// 检测更新\nvar checkUpdate = function checkUpdate() {\n\n  (0, _index.appUpdate)();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n};\n\n// 对象转URL参数 https://www.uviewui.com/js/queryParams.html\nexports.checkUpdate = checkUpdate;var queryParams = function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';\n  var prefix = isPrefix ? '?' : '';\n  var _result = [];\n  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(\n  key) {\n    var value = data[key];\n    // 去掉为空的参数\n    if (['', undefined, null].indexOf(value) >= 0) {\n      return \"continue\";\n    }\n    // 如果值为数组，另行处理\n    if (value.constructor === Array) {\n      // e.g. {ids: [1, 2, 3]}\n      switch (arrayFormat) {\n        case 'indices':\n          // 结果: ids[0]=1&ids[1]=2&ids[2]=3\n          for (var i = 0; i < value.length; i++) {\n            _result.push(\"\".concat(key, \"[\").concat(i, \"]=\").concat(value[i]));\n          }\n          break;\n        case 'brackets':\n          // 结果: ids[]=1&ids[]=2&ids[]=3\n          value.forEach(function (_value) {\n            _result.push(\"\".concat(key, \"[]=\").concat(_value));\n          });\n          break;\n        case 'repeat':\n          // 结果: ids=1&ids=2&ids=3\n          value.forEach(function (_value) {\n            _result.push(\"\".concat(key, \"=\").concat(_value));\n          });\n          break;\n        case 'comma':\n          // 结果: ids=1,2,3\n          var commaStr = '';\n          value.forEach(function (_value) {\n            commaStr += (commaStr ? ',' : '') + _value;\n          });\n          _result.push(\"\".concat(key, \"=\").concat(commaStr));\n          break;\n        default:\n          value.forEach(function (_value) {\n            _result.push(\"\".concat(key, \"[]=\").concat(_value));\n          });}\n\n    } else {\n      _result.push(\"\".concat(key, \"=\").concat(value));\n    }};for (var key in data) {var _ret = _loop(key);if (_ret === \"continue\") continue;\n  }\n  return _result.length ? prefix + _result.join('&') : '';\n};exports.queryParams = queryParams;\n\n\nfunction copyClick(data) {\n  uni.setClipboardData({\n    data: data,\n    success: function success(res) {\n      uni.getClipboardData({\n        success: function success(res) {\n          uni.showToast({\n            title: \"复制成功\",\n            icon: 'none' });\n\n        } });\n\n    } });\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOlsiY2hlY2tVcGRhdGUiLCJxdWVyeVBhcmFtcyIsImRhdGEiLCJpc1ByZWZpeCIsImFycmF5Rm9ybWF0IiwicHJlZml4IiwiX3Jlc3VsdCIsImluZGV4T2YiLCJrZXkiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImNvbnN0cnVjdG9yIiwiQXJyYXkiLCJpIiwibGVuZ3RoIiwicHVzaCIsImZvckVhY2giLCJfdmFsdWUiLCJjb21tYVN0ciIsImpvaW4iLCJjb3B5Q2xpY2siLCJ1bmkiLCJzZXRDbGlwYm9hcmREYXRhIiwic3VjY2VzcyIsInJlcyIsImdldENsaXBib2FyZERhdGEiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iXSwibWFwcGluZ3MiOiI7QUFDQTs7OztBQUlBOzs7Ozs7OztBQVFBO0FBQ08sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTs7QUFFaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSxDQTdCTTs7QUErQlA7a0NBQ08sSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBMEQsS0FBekRDLElBQXlELHVFQUFsRCxFQUFrRCxLQUE5Q0MsUUFBOEMsdUVBQW5DLElBQW1DLEtBQTdCQyxXQUE2Qix1RUFBZixVQUFlO0FBQ3BGLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxHQUFHLEdBQUgsR0FBUyxFQUFoQztBQUNBLE1BQU1HLE9BQU8sR0FBRyxFQUFoQjtBQUNBLE1BQUksQ0FBQyxTQUFELEVBQVksVUFBWixFQUF3QixRQUF4QixFQUFrQyxPQUFsQyxFQUEyQ0MsT0FBM0MsQ0FBbURILFdBQW5ELEtBQW1FLENBQUMsQ0FBeEUsRUFBMkVBLFdBQVcsR0FBRyxVQUFkLENBSFM7QUFJekVJLEtBSnlFO0FBS25GLFFBQU1DLEtBQUssR0FBR1AsSUFBSSxDQUFDTSxHQUFELENBQWxCO0FBQ0E7QUFDQSxRQUFJLENBQUMsRUFBRCxFQUFLRSxTQUFMLEVBQWdCLElBQWhCLEVBQXNCSCxPQUF0QixDQUE4QkUsS0FBOUIsS0FBd0MsQ0FBNUMsRUFBK0M7QUFDOUM7QUFDQTtBQUNEO0FBQ0EsUUFBSUEsS0FBSyxDQUFDRSxXQUFOLEtBQXNCQyxLQUExQixFQUFpQztBQUNoQztBQUNBLGNBQVFSLFdBQVI7QUFDQyxhQUFLLFNBQUw7QUFDQztBQUNBLGVBQUssSUFBSVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osS0FBSyxDQUFDSyxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUN0Q1AsbUJBQU8sQ0FBQ1MsSUFBUixXQUFnQlAsR0FBaEIsY0FBdUJLLENBQXZCLGVBQTZCSixLQUFLLENBQUNJLENBQUQsQ0FBbEM7QUFDQTtBQUNEO0FBQ0QsYUFBSyxVQUFMO0FBQ0M7QUFDQUosZUFBSyxDQUFDTyxPQUFOLENBQWMsVUFBQ0MsTUFBRCxFQUFZO0FBQ3pCWCxtQkFBTyxDQUFDUyxJQUFSLFdBQWdCUCxHQUFoQixnQkFBeUJTLE1BQXpCO0FBQ0EsV0FGRDtBQUdBO0FBQ0QsYUFBSyxRQUFMO0FBQ0M7QUFDQVIsZUFBSyxDQUFDTyxPQUFOLENBQWMsVUFBQ0MsTUFBRCxFQUFZO0FBQ3pCWCxtQkFBTyxDQUFDUyxJQUFSLFdBQWdCUCxHQUFoQixjQUF1QlMsTUFBdkI7QUFDQSxXQUZEO0FBR0E7QUFDRCxhQUFLLE9BQUw7QUFDQztBQUNBLGNBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0FULGVBQUssQ0FBQ08sT0FBTixDQUFjLFVBQUNDLE1BQUQsRUFBWTtBQUN6QkMsb0JBQVEsSUFBSSxDQUFDQSxRQUFRLEdBQUcsR0FBSCxHQUFTLEVBQWxCLElBQXdCRCxNQUFwQztBQUNBLFdBRkQ7QUFHQVgsaUJBQU8sQ0FBQ1MsSUFBUixXQUFnQlAsR0FBaEIsY0FBdUJVLFFBQXZCO0FBQ0E7QUFDRDtBQUNDVCxlQUFLLENBQUNPLE9BQU4sQ0FBYyxVQUFDQyxNQUFELEVBQVk7QUFDekJYLG1CQUFPLENBQUNTLElBQVIsV0FBZ0JQLEdBQWhCLGdCQUF5QlMsTUFBekI7QUFDQSxXQUZELEVBNUJGOztBQWdDQSxLQWxDRCxNQWtDTztBQUNOWCxhQUFPLENBQUNTLElBQVIsV0FBZ0JQLEdBQWhCLGNBQXVCQyxLQUF2QjtBQUNBLEtBL0NrRixFQUlwRixLQUFLLElBQU1ELEdBQVgsSUFBa0JOLElBQWxCLEVBQXdCLGtCQUFiTSxHQUFhLDJCQUl0QjtBQXdDRDtBQUNELFNBQU9GLE9BQU8sQ0FBQ1EsTUFBUixHQUFpQlQsTUFBTSxHQUFHQyxPQUFPLENBQUNhLElBQVIsQ0FBYSxHQUFiLENBQTFCLEdBQThDLEVBQXJEO0FBQ0EsQ0FsRE0sQzs7O0FBcURBLFNBQVNDLFNBQVQsQ0FBbUJsQixJQUFuQixFQUF5QjtBQUMvQm1CLEtBQUcsQ0FBQ0MsZ0JBQUosQ0FBcUI7QUFDcEJwQixRQUFJLEVBQUVBLElBRGM7QUFFcEJxQixXQUFPLEVBQUUsaUJBQVNDLEdBQVQsRUFBYztBQUN0QkgsU0FBRyxDQUFDSSxnQkFBSixDQUFxQjtBQUNwQkYsZUFBTyxFQUFFLGlCQUFTQyxHQUFULEVBQWM7QUFDdEJILGFBQUcsQ0FBQ0ssU0FBSixDQUFjO0FBQ2JDLGlCQUFLLEVBQUUsTUFETTtBQUViQyxnQkFBSSxFQUFFLE1BRk8sRUFBZDs7QUFJQSxTQU5tQixFQUFyQjs7QUFRQSxLQVhtQixFQUFyQjs7QUFhQSIsImZpbGUiOiIxNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuXHRhcHBVcGRhdGVcclxufSBmcm9tICcuL2FwcC1wbHVzL2luZGV4LmpzJ1xyXG5cclxuaW1wb3J0IHtcclxuXHRkYXRlRm9ybWF0XHJcbn0gZnJvbSAnQC91dGlscy9kYXRlLmpzJztcclxuXHJcbmV4cG9ydCB7XHJcblx0ZGF0ZUZvcm1hdFxyXG59O1xyXG5cclxuLy8g5qOA5rWL5pu05pawXHJcbmV4cG9ydCBjb25zdCBjaGVja1VwZGF0ZSA9ICgpID0+IHtcclxuXHJcblx0YXBwVXBkYXRlKClcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG4vLyDlr7nosaHovaxVUkzlj4LmlbAgaHR0cHM6Ly93d3cudXZpZXd1aS5jb20vanMvcXVlcnlQYXJhbXMuaHRtbFxyXG5leHBvcnQgY29uc3QgcXVlcnlQYXJhbXMgPSAoZGF0YSA9IHt9LCBpc1ByZWZpeCA9IHRydWUsIGFycmF5Rm9ybWF0ID0gJ2JyYWNrZXRzJykgPT4ge1xyXG5cdGNvbnN0IHByZWZpeCA9IGlzUHJlZml4ID8gJz8nIDogJydcclxuXHRjb25zdCBfcmVzdWx0ID0gW11cclxuXHRpZiAoWydpbmRpY2VzJywgJ2JyYWNrZXRzJywgJ3JlcGVhdCcsICdjb21tYSddLmluZGV4T2YoYXJyYXlGb3JtYXQpID09IC0xKSBhcnJheUZvcm1hdCA9ICdicmFja2V0cydcclxuXHRmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGRhdGFba2V5XVxyXG5cdFx0Ly8g5Y675o6J5Li656m655qE5Y+C5pWwXHJcblx0XHRpZiAoWycnLCB1bmRlZmluZWQsIG51bGxdLmluZGV4T2YodmFsdWUpID49IDApIHtcclxuXHRcdFx0Y29udGludWVcclxuXHRcdH1cclxuXHRcdC8vIOWmguaenOWAvOS4uuaVsOe7hO+8jOWPpuihjOWkhOeQhlxyXG5cdFx0aWYgKHZhbHVlLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xyXG5cdFx0XHQvLyBlLmcuIHtpZHM6IFsxLCAyLCAzXX1cclxuXHRcdFx0c3dpdGNoIChhcnJheUZvcm1hdCkge1xyXG5cdFx0XHRcdGNhc2UgJ2luZGljZXMnOlxyXG5cdFx0XHRcdFx0Ly8g57uT5p6cOiBpZHNbMF09MSZpZHNbMV09MiZpZHNbMl09M1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRfcmVzdWx0LnB1c2goYCR7a2V5fVske2l9XT0ke3ZhbHVlW2ldfWApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdGNhc2UgJ2JyYWNrZXRzJzpcclxuXHRcdFx0XHRcdC8vIOe7k+aenDogaWRzW109MSZpZHNbXT0yJmlkc1tdPTNcclxuXHRcdFx0XHRcdHZhbHVlLmZvckVhY2goKF92YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRfcmVzdWx0LnB1c2goYCR7a2V5fVtdPSR7X3ZhbHVlfWApXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRjYXNlICdyZXBlYXQnOlxyXG5cdFx0XHRcdFx0Ly8g57uT5p6cOiBpZHM9MSZpZHM9MiZpZHM9M1xyXG5cdFx0XHRcdFx0dmFsdWUuZm9yRWFjaCgoX3ZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRcdF9yZXN1bHQucHVzaChgJHtrZXl9PSR7X3ZhbHVlfWApXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0YnJlYWtcclxuXHRcdFx0XHRjYXNlICdjb21tYSc6XHJcblx0XHRcdFx0XHQvLyDnu5Pmnpw6IGlkcz0xLDIsM1xyXG5cdFx0XHRcdFx0bGV0IGNvbW1hU3RyID0gJydcclxuXHRcdFx0XHRcdHZhbHVlLmZvckVhY2goKF92YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb21tYVN0ciArPSAoY29tbWFTdHIgPyAnLCcgOiAnJykgKyBfdmFsdWVcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRfcmVzdWx0LnB1c2goYCR7a2V5fT0ke2NvbW1hU3RyfWApXHJcblx0XHRcdFx0XHRicmVha1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHR2YWx1ZS5mb3JFYWNoKChfdmFsdWUpID0+IHtcclxuXHRcdFx0XHRcdFx0X3Jlc3VsdC5wdXNoKGAke2tleX1bXT0ke192YWx1ZX1gKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0X3Jlc3VsdC5wdXNoKGAke2tleX09JHt2YWx1ZX1gKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gX3Jlc3VsdC5sZW5ndGggPyBwcmVmaXggKyBfcmVzdWx0LmpvaW4oJyYnKSA6ICcnXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29weUNsaWNrKGRhdGEpIHtcclxuXHR1bmkuc2V0Q2xpcGJvYXJkRGF0YSh7XHJcblx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdHVuaS5nZXRDbGlwYm9hcmREYXRhKHtcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogXCLlpI3liLbmiJDlip9cIixcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///156\n");

/***/ }),
/* 157 */
/*!******************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/utils/date.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.dateFormat = void 0;var _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ 158));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar dateFormat = function dateFormat(date) {var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD hh:mm:ss';\n  if (typeof date === 'number' && date.toString().length === 10) {\n    date = date * 1000;\n  }\n  return (0, _dayjs.default)(date).format(type);\n};exports.dateFormat = dateFormat;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvZGF0ZS5qcyJdLCJuYW1lcyI6WyJkYXRlRm9ybWF0IiwiZGF0ZSIsInR5cGUiLCJ0b1N0cmluZyIsImxlbmd0aCIsImZvcm1hdCJdLCJtYXBwaW5ncyI6IjBGQUFBLDJFO0FBQ08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUF1QyxLQUFoQ0MsSUFBZ0MsdUVBQXpCLHFCQUF5QjtBQUNoRSxNQUFJLE9BQU9ELElBQVAsS0FBZ0IsUUFBaEIsSUFBNEJBLElBQUksQ0FBQ0UsUUFBTCxHQUFnQkMsTUFBaEIsS0FBMkIsRUFBM0QsRUFBK0Q7QUFDOURILFFBQUksR0FBR0EsSUFBSSxHQUFHLElBQWQ7QUFDQTtBQUNELFNBQU8sb0JBQU1BLElBQU4sRUFBWUksTUFBWixDQUFtQkgsSUFBbkIsQ0FBUDtBQUNBLENBTE0sQyIsImZpbGUiOiIxNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcbmV4cG9ydCBjb25zdCBkYXRlRm9ybWF0ID0gKGRhdGUsIHR5cGUgPSAnWVlZWS1NTS1ERCBoaDptbTpzcycpID0+e1xyXG5cdGlmICh0eXBlb2YgZGF0ZSA9PT0gJ251bWJlcicgJiYgZGF0ZS50b1N0cmluZygpLmxlbmd0aCA9PT0gMTApIHtcclxuXHRcdGRhdGUgPSBkYXRlICogMTAwMFxyXG5cdH1cclxuXHRyZXR1cm4gZGF5anMoZGF0ZSkuZm9ybWF0KHR5cGUpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///157\n");

/***/ }),
/* 158 */
/*!************************************************************************************!*\
  !*** D:/DEMO/myTemplate/uniapp-template-vue3-vue2/node_modules/dayjs/dayjs.min.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) { true ? module.exports = e() : undefined;}(this, function () {"use strict";var t = 1e3,e = 6e4,n = 36e5,r = "millisecond",i = "second",s = "minute",u = "hour",a = "day",o = "week",f = "month",h = "quarter",c = "year",d = "date",$ = "Invalid Date",l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },m = function m(t, e, n) {var r = String(t);return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;},g = { s: m, z: function z(t) {var e = -t.utcOffset(),n = Math.abs(e),r = Math.floor(n / 60),i = n % 60;return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");}, m: function t(e, n) {if (e.date() < n.date()) return -t(n, e);var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),i = e.clone().add(r, f),s = n - i < 0,u = e.clone().add(r + (s ? -1 : 1), f);return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);}, a: function a(t) {return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);}, p: function p(t) {return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t] || String(t || "").toLowerCase().replace(/s$/, "");}, u: function u(t) {return void 0 === t;} },v = "en",D = {};D[v] = M;var p = function p(t) {return t instanceof _;},S = function t(e, n, r) {var i;if (!e) return v;if ("string" == typeof e) {var s = e.toLowerCase();D[s] && (i = s), n && (D[s] = n, i = s);var u = e.split("-");if (!i && u.length > 1) return t(u[0]);} else {var a = e.name;D[a] = e, i = a;}return !r && i && (v = i), i || !r && v;},w = function w(t, e) {if (p(t)) return t.clone();var n = "object" == typeof e ? e : {};return n.date = t, n.args = arguments, new _(n);},O = g;O.l = S, O.i = p, O.w = function (t, e) {return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });};var _ = function () {function M(t) {this.$L = S(t.locale, null, !0), this.parse(t);}var m = M.prototype;return m.parse = function (t) {this.$d = function (t) {var e = t.date,n = t.utc;if (null === e) return new Date(NaN);if (O.u(e)) return new Date();if (e instanceof Date) return new Date(e);if ("string" == typeof e && !/Z$/i.test(e)) {var r = e.match(l);if (r) {var i = r[2] - 1 || 0,s = (r[7] || "0").substring(0, 3);return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);}}return new Date(e);}(t), this.$x = t.x || {}, this.init();}, m.init = function () {var t = this.$d;this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();}, m.$utils = function () {return O;}, m.isValid = function () {return !(this.$d.toString() === $);}, m.isSame = function (t, e) {var n = w(t);return this.startOf(e) <= n && n <= this.endOf(e);}, m.isAfter = function (t, e) {return w(t) < this.startOf(e);}, m.isBefore = function (t, e) {return this.endOf(e) < w(t);}, m.$g = function (t, e, n) {return O.u(t) ? this[e] : this.set(n, t);}, m.unix = function () {return Math.floor(this.valueOf() / 1e3);}, m.valueOf = function () {return this.$d.getTime();}, m.startOf = function (t, e) {var n = this,r = !!O.u(e) || e,h = O.p(t),$ = function $(t, e) {var i = O.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);return r ? i : i.endOf(a);},l = function l(t, e) {return O.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);},y = this.$W,M = this.$M,m = this.$D,g = "set" + (this.$u ? "UTC" : "");switch (h) {case c:return r ? $(1, 0) : $(31, 11);case f:return r ? $(1, M) : $(0, M + 1);case o:var v = this.$locale().weekStart || 0,D = (y < v ? y + 7 : y) - v;return $(r ? m - D : m + (6 - D), M);case a:case d:return l(g + "Hours", 0);case u:return l(g + "Minutes", 1);case s:return l(g + "Seconds", 2);case i:return l(g + "Milliseconds", 3);default:return this.clone();}}, m.endOf = function (t) {return this.startOf(t, !1);}, m.$set = function (t, e) {var n,o = O.p(t),h = "set" + (this.$u ? "UTC" : ""),$ = (n = {}, n[a] = h + "Date", n[d] = h + "Date", n[f] = h + "Month", n[c] = h + "FullYear", n[u] = h + "Hours", n[s] = h + "Minutes", n[i] = h + "Seconds", n[r] = h + "Milliseconds", n)[o],l = o === a ? this.$D + (e - this.$W) : e;if (o === f || o === c) {var y = this.clone().set(d, 1);y.$d[$](l), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;} else $ && this.$d[$](l);return this.init(), this;}, m.set = function (t, e) {return this.clone().$set(t, e);}, m.get = function (t) {return this[O.p(t)]();}, m.add = function (r, h) {var d,$ = this;r = Number(r);var l = O.p(h),y = function y(t) {var e = w($);return O.w(e.date(e.date() + Math.round(t * r)), $);};if (l === f) return this.set(f, this.$M + r);if (l === c) return this.set(c, this.$y + r);if (l === a) return y(1);if (l === o) return y(7);var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[l] || 1,m = this.$d.getTime() + r * M;return O.w(m, this);}, m.subtract = function (t, e) {return this.add(-1 * t, e);}, m.format = function (t) {var e = this,n = this.$locale();if (!this.isValid()) return n.invalidDate || $;var r = t || "YYYY-MM-DDTHH:mm:ssZ",i = O.z(this),s = this.$H,u = this.$m,a = this.$M,o = n.weekdays,f = n.months,h = function h(t, n, i, s) {return t && (t[n] || t(e, r)) || i[n].slice(0, s);},c = function c(t) {return O.s(s % 12 || 12, t, "0");},d = n.meridiem || function (t, e, n) {var r = t < 12 ? "AM" : "PM";return n ? r.toLowerCase() : r;},l = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a + 1, MM: O.s(a + 1, 2, "0"), MMM: h(n.monthsShort, a, f, 3), MMMM: h(f, a), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h(n.weekdaysMin, this.$W, o, 2), ddd: h(n.weekdaysShort, this.$W, o, 3), dddd: o[this.$W], H: String(s), HH: O.s(s, 2, "0"), h: c(1), hh: c(2), a: d(s, u, !0), A: d(s, u, !1), m: String(u), mm: O.s(u, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i };return r.replace(y, function (t, e) {return e || l[t] || i.replace(":", "");});}, m.utcOffset = function () {return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);}, m.diff = function (r, d, $) {var l,y = O.p(d),M = w(r),m = (M.utcOffset() - this.utcOffset()) * e,g = this - M,v = O.m(this, M);return v = (l = {}, l[c] = v / 12, l[f] = v, l[h] = v / 3, l[o] = (g - m) / 6048e5, l[a] = (g - m) / 864e5, l[u] = g / n, l[s] = g / e, l[i] = g / t, l)[y] || g, $ ? v : O.a(v);}, m.daysInMonth = function () {return this.endOf(f).$D;}, m.$locale = function () {return D[this.$L];}, m.locale = function (t, e) {if (!t) return this.$L;var n = this.clone(),r = S(t, e, !0);return r && (n.$L = r), n;}, m.clone = function () {return O.w(this.$d, this);}, m.toDate = function () {return new Date(this.valueOf());}, m.toJSON = function () {return this.isValid() ? this.toISOString() : null;}, m.toISOString = function () {return this.$d.toISOString();}, m.toString = function () {return this.$d.toUTCString();}, M;}(),T = _.prototype;return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function (t) {T[t[1]] = function (e) {return this.$g(e, t[0], t[1]);};}), w.extend = function (t, e) {return t.$i || (t(e, _, w), t.$i = !0), w;}, w.locale = S, w.isDayjs = p, w.unix = function (t) {return w(1e3 * t);}, w.en = D[v], w.Ls = D, w.p = {}, w;});

/***/ })
],[[0,"app-config"]]]);