import {
  __spreadValues,
  init_define_process_env_UNI_STAT_TITLE_JSON,
  init_define_process_env_UNI_STAT_UNI_CLOUD
} from "./chunk-UKHDPS3Z.js";

// dep:luch-request
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/luch-request.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/core/Request.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/core/dispatchRequest.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/adapters/index.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/helpers/buildURL.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/utils.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();
var toString = Object.prototype.toString;
function isArray(val) {
  return toString.call(val) === "[object Array]";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function deepMerge() {
  let result = {};
  function assignValue(val, key) {
    if (typeof result[key] === "object" && typeof val === "object") {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === "object") {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }
  for (let i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function isUndefined(val) {
  return typeof val === "undefined";
}

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/helpers/buildURL.js
function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      forEach(val, function parseValue(v) {
        if (isDate(v)) {
          v = v.toISOString();
        } else if (isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/core/buildFullPath.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/helpers/isAbsoluteURL.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/helpers/combineURLs.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/core/settle.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  const status = response.statusCode;
  if (status && (!validateStatus2 || validateStatus2(status))) {
    resolve(response);
  } else {
    reject(response);
  }
}

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/adapters/index.js
var mergeKeys = (keys, config2) => {
  let config = {};
  keys.forEach((prop) => {
    if (!isUndefined(config2[prop])) {
      config[prop] = config2[prop];
    }
  });
  return config;
};
var adapters_default = (config) => {
  return new Promise((resolve, reject) => {
    let fullPath = buildURL(buildFullPath(config.baseURL, config.url), config.params);
    const _config = {
      url: fullPath,
      header: config.header,
      complete: (response) => {
        config.fullPath = fullPath;
        response.config = config;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      let otherConfig = {
        filePath: config.filePath,
        name: config.name
      };
      const optionalKeys = [
        "files",
        "file",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile(__spreadValues(__spreadValues(__spreadValues({}, _config), otherConfig), mergeKeys(optionalKeys, config)));
    } else if (config.method === "DOWNLOAD") {
      if (!isUndefined(config["timeout"])) {
        _config["timeout"] = config["timeout"];
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "withCredentials"
      ];
      requestTask = uni.request(__spreadValues(__spreadValues({}, _config), mergeKeys(optionalKeys, config)));
    }
    if (config.getTask) {
      config.getTask(requestTask, config);
    }
  });
};

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/core/dispatchRequest.js
var dispatchRequest_default = (config) => {
  return adapters_default(config);
};

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/core/InterceptorManager.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();
function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled,
    rejected
  });
  return this.handlers.length - 1;
};
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager.prototype.forEach = function forEach2(fn) {
  this.handlers.forEach((h) => {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_default = InterceptorManager;

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/core/mergeConfig.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();
var mergeKeys2 = (keys, globalsConfig, config2) => {
  let config = {};
  keys.forEach((prop) => {
    if (!isUndefined(config2[prop])) {
      config[prop] = config2[prop];
    } else if (!isUndefined(globalsConfig[prop])) {
      config[prop] = globalsConfig[prop];
    }
  });
  return config;
};
var mergeConfig_default = (globalsConfig, config2 = {}) => {
  const method = config2.method || globalsConfig.method || "GET";
  let config = {
    baseURL: globalsConfig.baseURL || "",
    method,
    url: config2.url || "",
    params: config2.params || {},
    custom: __spreadValues(__spreadValues({}, globalsConfig.custom || {}), config2.custom || {}),
    header: deepMerge(globalsConfig.header || {}, config2.header || {})
  };
  const defaultToConfig2Keys = ["getTask", "validateStatus"];
  config = __spreadValues(__spreadValues({}, config), mergeKeys2(defaultToConfig2Keys, globalsConfig, config2));
  if (method === "DOWNLOAD") {
    if (!isUndefined(config2.timeout)) {
      config["timeout"] = config2["timeout"];
    } else if (!isUndefined(globalsConfig.timeout)) {
      config["timeout"] = globalsConfig["timeout"];
    }
  } else if (method === "UPLOAD") {
    delete config.header["content-type"];
    delete config.header["Content-Type"];
    const uploadKeys = [
      "files",
      "file",
      "filePath",
      "name",
      "timeout",
      "formData"
    ];
    uploadKeys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config[prop] = config2[prop];
      }
    });
    if (isUndefined(config.timeout) && !isUndefined(globalsConfig.timeout)) {
      config["timeout"] = globalsConfig["timeout"];
    }
  } else {
    const defaultsKeys = [
      "data",
      "timeout",
      "dataType",
      "responseType",
      "withCredentials"
    ];
    config = __spreadValues(__spreadValues({}, config), mergeKeys2(defaultsKeys, globalsConfig, config2));
  }
  return config;
};

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/core/defaults.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();
var defaults_default = {
  baseURL: "",
  header: {},
  method: "GET",
  dataType: "json",
  responseType: "text",
  custom: {},
  timeout: 6e4,
  withCredentials: false,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/utils/clone.js
init_define_process_env_UNI_STAT_TITLE_JSON();
init_define_process_env_UNI_STAT_UNI_CLOUD();
var clone = function() {
  "use strict";
  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }
  var nativeMap;
  try {
    nativeMap = Map;
  } catch (_) {
    nativeMap = function() {
    };
  }
  var nativeSet;
  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function() {
    };
  }
  var nativePromise;
  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function() {
    };
  }
  function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
    if (typeof circular === "object") {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    }
    var allParents = [];
    var allChildren = [];
    var useBuffer = typeof Buffer != "undefined";
    if (typeof circular == "undefined")
      circular = true;
    if (typeof depth == "undefined")
      depth = Infinity;
    function _clone(parent2, depth2) {
      if (parent2 === null)
        return null;
      if (depth2 === 0)
        return parent2;
      var child;
      var proto;
      if (typeof parent2 != "object") {
        return parent2;
      }
      if (_instanceof(parent2, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent2, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent2, nativePromise)) {
        child = new nativePromise(function(resolve, reject) {
          parent2.then(function(value) {
            resolve(_clone(value, depth2 - 1));
          }, function(err) {
            reject(_clone(err, depth2 - 1));
          });
        });
      } else if (clone2.__isArray(parent2)) {
        child = [];
      } else if (clone2.__isRegExp(parent2)) {
        child = new RegExp(parent2.source, __getRegExpFlags(parent2));
        if (parent2.lastIndex)
          child.lastIndex = parent2.lastIndex;
      } else if (clone2.__isDate(parent2)) {
        child = new Date(parent2.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent2)) {
        if (Buffer.from) {
          child = Buffer.from(parent2);
        } else {
          child = new Buffer(parent2.length);
          parent2.copy(child);
        }
        return child;
      } else if (_instanceof(parent2, Error)) {
        child = Object.create(parent2);
      } else {
        if (typeof prototype == "undefined") {
          proto = Object.getPrototypeOf(parent2);
          child = Object.create(proto);
        } else {
          child = Object.create(prototype);
          proto = prototype;
        }
      }
      if (circular) {
        var index = allParents.indexOf(parent2);
        if (index != -1) {
          return allChildren[index];
        }
        allParents.push(parent2);
        allChildren.push(child);
      }
      if (_instanceof(parent2, nativeMap)) {
        parent2.forEach(function(value, key) {
          var keyChild = _clone(key, depth2 - 1);
          var valueChild = _clone(value, depth2 - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent2, nativeSet)) {
        parent2.forEach(function(value) {
          var entryChild = _clone(value, depth2 - 1);
          child.add(entryChild);
        });
      }
      for (var i in parent2) {
        var attrs = Object.getOwnPropertyDescriptor(parent2, i);
        if (attrs) {
          child[i] = _clone(parent2[i], depth2 - 1);
        }
        try {
          var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
          if (objProperty.set === "undefined") {
            continue;
          }
          child[i] = _clone(parent2[i], depth2 - 1);
        } catch (e) {
          if (e instanceof TypeError) {
            continue;
          } else if (e instanceof ReferenceError) {
            continue;
          }
        }
      }
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent2);
        for (var i = 0; i < symbols.length; i++) {
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent2[symbol], depth2 - 1);
          Object.defineProperty(child, symbol, descriptor);
        }
      }
      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent2);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
          Object.defineProperty(child, propertyName, descriptor);
        }
      }
      return child;
    }
    return _clone(parent, depth);
  }
  clone2.clonePrototype = function clonePrototype(parent) {
    if (parent === null)
      return null;
    var c = function() {
    };
    c.prototype = parent;
    return new c();
  };
  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  }
  clone2.__objToStr = __objToStr;
  function __isDate(o) {
    return typeof o === "object" && __objToStr(o) === "[object Date]";
  }
  clone2.__isDate = __isDate;
  function __isArray(o) {
    return typeof o === "object" && __objToStr(o) === "[object Array]";
  }
  clone2.__isArray = __isArray;
  function __isRegExp(o) {
    return typeof o === "object" && __objToStr(o) === "[object RegExp]";
  }
  clone2.__isRegExp = __isRegExp;
  function __getRegExpFlags(re) {
    var flags = "";
    if (re.global)
      flags += "g";
    if (re.ignoreCase)
      flags += "i";
    if (re.multiline)
      flags += "m";
    return flags;
  }
  clone2.__getRegExpFlags = __getRegExpFlags;
  return clone2;
}();
var clone_default = clone;

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/core/Request.js
var Request = class {
  constructor(arg = {}) {
    if (!isPlainObject(arg)) {
      arg = {};
      console.warn("\u8BBE\u7F6E\u5168\u5C40\u53C2\u6570\u5FC5\u987B\u63A5\u6536\u4E00\u4E2AObject");
    }
    this.config = clone_default(__spreadValues(__spreadValues({}, defaults_default), arg));
    this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  setConfig(f) {
    this.config = f(this.config);
  }
  middleware(config) {
    config = mergeConfig_default(this.config, config);
    let chain = [dispatchRequest_default, void 0];
    let promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  request(config = {}) {
    return this.middleware(config);
  }
  get(url, options = {}) {
    return this.middleware(__spreadValues({
      url,
      method: "GET"
    }, options));
  }
  post(url, data, options = {}) {
    return this.middleware(__spreadValues({
      url,
      data,
      method: "POST"
    }, options));
  }
  put(url, data, options = {}) {
    return this.middleware(__spreadValues({
      url,
      data,
      method: "PUT"
    }, options));
  }
  delete(url, data, options = {}) {
    return this.middleware(__spreadValues({
      url,
      data,
      method: "DELETE"
    }, options));
  }
  connect(url, data, options = {}) {
    return this.middleware(__spreadValues({
      url,
      data,
      method: "CONNECT"
    }, options));
  }
  head(url, data, options = {}) {
    return this.middleware(__spreadValues({
      url,
      data,
      method: "HEAD"
    }, options));
  }
  options(url, data, options = {}) {
    return this.middleware(__spreadValues({
      url,
      data,
      method: "OPTIONS"
    }, options));
  }
  trace(url, data, options = {}) {
    return this.middleware(__spreadValues({
      url,
      data,
      method: "TRACE"
    }, options));
  }
  upload(url, config = {}) {
    config.url = url;
    config.method = "UPLOAD";
    return this.middleware(config);
  }
  download(url, config = {}) {
    config.url = url;
    config.method = "DOWNLOAD";
    return this.middleware(config);
  }
};

// ../../../../DEMO/myTemplate/uniapp-vue3-template/node_modules/luch-request/src/lib/luch-request.js
var luch_request_default = Request;

// dep:luch-request
var luch_request_default2 = luch_request_default;
export {
  luch_request_default2 as default
};
//# sourceMappingURL=luch-request.js.map
