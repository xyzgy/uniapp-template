// #ifdef APP-PLUS
import {
	calcLocalCache,
	clearLocalCache,
	clearCacheFile
} from './cache.js';
import appUpdate from './update.js';

const getAppNo = (callback)=>{
	plus.runtime.getProperty(plus.runtime.appid, function(inf) {
		callback && callback({
			versionCode: inf.versionCode,
			versionName: inf.version
		});
	});  
}

export {
	calcLocalCache,
	clearLocalCache,
	clearCacheFile,
	appUpdate,
	getAppNo
}
// #endif
