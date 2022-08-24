import http from '@/utils/request.js';

export function login(data) {
	// #ifdef H5
	return http.post("/login", data, {});
	// #endif
	// #ifdef MP-WEIXIN
	return http.post("/wechat/mp_auth", data, {});
	// #endif
}

export function getUserInfo() {
	return http.get("/user");
	// return request.get("/userinfo");
}

export const getHotCollection = (data) => http.get('artInfo/hotList', data)