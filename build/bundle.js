/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/container/About.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/container/About.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "._23oxpawoFSQdYw5Hq5hrwc{\n    color: red;\n}", ""]);
// Exports
exports.locals = {
	"title": "_23oxpawoFSQdYw5Hq5hrwc"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/container/Index.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/container/Index.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".aAiUyk9qcIP7eNHyurrvu{\n    color: blue;\n}\n._3vyhR7weaY-SmwPjI0Hoy7{\n    background: yellow;\n}", ""]);
// Exports
exports.locals = {
	"title": "aAiUyk9qcIP7eNHyurrvu",
	"container": "_3vyhR7weaY-SmwPjI0Hoy7"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */



var inserted = {};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode("0x" + p1);
  }));
}

function removeCss(ids) {
  ids.forEach(function (id) {
    if (--inserted[id] <= 0) {
      var elem = document.getElementById(id);

      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }
  });
}

function insertCss(styles, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$replace = _ref.replace,
      replace = _ref$replace === void 0 ? false : _ref$replace,
      _ref$prepend = _ref.prepend,
      prepend = _ref$prepend === void 0 ? false : _ref$prepend,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;

  var ids = [];

  for (var i = 0; i < styles.length; i++) {
    var _styles$i = styles[i],
        moduleId = _styles$i[0],
        css = _styles$i[1],
        media = _styles$i[2],
        sourceMap = _styles$i[3];
    var id = "" + prefix + moduleId + "-" + i;
    ids.push(id);

    if (inserted[id]) {
      if (!replace) {
        inserted[id]++;
        continue;
      }
    }

    inserted[id] = 1;
    var elem = document.getElementById(id);
    var create = false;

    if (!elem) {
      create = true;
      elem = document.createElement('style');
      elem.setAttribute('type', 'text/css');
      elem.id = id;

      if (media) {
        elem.setAttribute('media', media);
      }
    }

    var cssText = css;

    if (sourceMap && typeof btoa === 'function') {
      cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode(JSON.stringify(sourceMap)) + "*/";
      cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/";
    }

    if ('textContent' in elem) {
      elem.textContent = cssText;
    } else {
      elem.styleSheet.cssText = cssText;
    }

    if (create) {
      if (prepend) {
        document.head.insertBefore(elem, document.head.childNodes[0]);
      } else {
        document.head.appendChild(elem);
      }
    }
  }

  return removeCss.bind(null, ids);
}

module.exports = insertCss;
//# sourceMappingURL=insertCss.js.map


/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/store/store */ "./src/store/store.js");
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/App */ "./src/App.js");
/* harmony import */ var _src_component_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/component/Header */ "./src/component/Header.js");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! http-proxy-middleware */ "http-proxy-middleware");
/* harmony import */ var http_proxy_middleware__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(http_proxy_middleware__WEBPACK_IMPORTED_MODULE_10__);
// 这里的node代码，会用babel处理











var store = Object(_src_store_store__WEBPACK_IMPORTED_MODULE_7__["getServerStore"])();
var app = express__WEBPACK_IMPORTED_MODULE_4___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_4___default.a["static"]('public')); //客户端api开头

app.use('/api', http_proxy_middleware__WEBPACK_IMPORTED_MODULE_10___default()({
  target: 'http://localhost:9090',
  changeOrigin: true
}));

function csrRender(res) {
  // 读取csr文件 返回
  var filename = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(process.cwd(), 'public/index.csr.html');
  var html = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(filename, 'utf-8');
  return res.send(html);
}

app.get('*', function (req, res) {
  if (req.query._mode == 'csr') {
    console.log('url参数开启csr降级');
    return csrRender(res);
  } // 配置开关开启csr
  // 服务器负载过高 开启全csr
  // 获取根据路由渲染出的组件，并且拿到loadData方法，获取数据
  // if(req.url.startsWith('/api/')){
  //     //不渲染页面 使用axios转发
  // }
  // 存储网络请求


  var promises = []; // 路由匹配

  _src_App__WEBPACK_IMPORTED_MODULE_8__["default"].some(function (route) {
    var match = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["matchPath"])(req.path, route);

    if (match) {
      var loadData = route.component.loadData;

      if (loadData) {
        // 包装后
        var promise = new Promise(function (resolve, reject) {
          loadData(store).then(resolve)["catch"](resolve);
        });
        promises.push(promise); // promises.push(loadData(promise))
      }
    }
  }); // 等待所有网络请求结束再渲染

  Promise.all(promises).then(function () {
    var context = {
      css: []
    }; // 把react组件解析成html

    var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["StaticRouter"], {
      location: req.url,
      context: context
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_component_Header__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], null, _src_App__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (route) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], route);
    }))))); // console.log('context',context)

    if (context.statuscode) {
      // 状态切换和页面跳转
      res.status(context.statuscode);
    }

    if (context.action == "REPLACE") {
      res.redirect(301, context.url);
    }

    var css = context.css.join('\n');
    res.send("\n        <html>\n        <head>\n            <meta charset=\"utf-8\"/>\n            <title>react ssr</title>\n            <style>\n             ".concat(css, "\n            </style>\n        </head>\n        <body>\n            <div id=\"root\">").concat(content, "</div>\n            <script>\n                window._context=").concat(JSON.stringify(store.getState()), "\n            </script>\n            <script src=\"/bundle.js\"></script>\n        </body>\n        </html>\n        "));
  })["catch"](function (error) {
    console.log(error);
    res.send('报错页面500');
  });
});
app.listen(9093, function () {
  console.log('监听完毕 http://localhost:9093/');
});

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/Index */ "./src/container/Index.js");
/* harmony import */ var _container_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/About */ "./src/container/About.js");
/* harmony import */ var _container_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container/User */ "./src/container/User.js");
/* harmony import */ var _container_Notfound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container/Notfound */ "./src/container/Notfound.js");





 // import './App.css'
// export default (
//     <div>
//         <Route path="/" exact component={Index}></Route>
//         <Route path="/about" exact component={About}></Route>
//     </div>
// )
// 改造成js的配置，才能获取组件

/* harmony default export */ __webpack_exports__["default"] = ([{
  path: "/",
  component: _container_Index__WEBPACK_IMPORTED_MODULE_2__["default"],
  // loadData:Index.loadData,
  exact: true,
  key: 'index'
}, {
  path: "/about",
  component: _container_About__WEBPACK_IMPORTED_MODULE_3__["default"],
  exact: true,
  key: 'about'
}, {
  path: "/user",
  component: _container_User__WEBPACK_IMPORTED_MODULE_4__["default"],
  exact: true,
  key: 'user'
}, {
  component: _container_Notfound__WEBPACK_IMPORTED_MODULE_5__["default"],
  key: 'notfound'
}]);

/***/ }),

/***/ "./src/component/Header.js":
/*!*********************************!*\
  !*** ./src/component/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/"
  }, "\u9996\u9875"), "|", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about"
  }, "\u5173\u4E8E"), "|", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/user"
  }, "user"), "|", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/sad"
  }, "404"), "|");
});

/***/ }),

/***/ "./src/container/About.css":
/*!*********************************!*\
  !*** ./src/container/About.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./About.css */ "./node_modules/css-loader/dist/cjs.js?!./src/container/About.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/container/About.js":
/*!********************************!*\
  !*** ./src/container/About.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.css */ "./src/container/About.css");
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_css__WEBPACK_IMPORTED_MODULE_1__);



function About(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _About_css__WEBPACK_IMPORTED_MODULE_1___default.a.title
  }, "\u5173\u4E8E"));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/container/Index.css":
/*!*********************************!*\
  !*** ./src/container/Index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./Index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/container/Index.css");
    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/container/Index.js":
/*!********************************!*\
  !*** ./src/container/Index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _Index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Index.css */ "./src/container/Index.css");
/* harmony import */ var _Index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withStyle */ "./src/withStyle.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Index(props) {
  if (props.staticContext) {
    props.staticContext.css.push(_Index_css__WEBPACK_IMPORTED_MODULE_3___default.a._getCss());
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.list.length) {
      props.getIndexList();
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Index_css__WEBPACK_IMPORTED_MODULE_3___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _Index_css__WEBPACK_IMPORTED_MODULE_3___default.a.title
  }, "hello ", props.title, "! ", count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      setCount(count + 1);
    }
  }, "add"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, props.list.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item.id
    }, item.name);
  })));
}

Index.loadData = function (sotre) {
  return sotre.dispatch(Object(_store_index__WEBPACK_IMPORTED_MODULE_2__["getIndexList"])());
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    list: state.index.list
  };
}, {
  getIndexList: _store_index__WEBPACK_IMPORTED_MODULE_2__["getIndexList"]
})(Object(_withStyle__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Index_css__WEBPACK_IMPORTED_MODULE_3___default.a)));

/***/ }),

/***/ "./src/container/Notfound.js":
/*!***********************************!*\
  !*** ./src/container/Notfound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);



function Status(_ref) {
  var code = _ref.code,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    render: function render(_ref2) {
      var staticContext = _ref2.staticContext;

      if (staticContext) {
        staticContext.statuscode = code; //404
      }

      return children;
    }
  });
}

function Notfound(props) {
  // console.log('Notfound',props)
  // 渲染这个组件，给statuscode赋值
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Status, {
    code: 404
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404\u4E86"));
}

/* harmony default export */ __webpack_exports__["default"] = (Notfound);

/***/ }),

/***/ "./src/container/User.js":
/*!*******************************!*\
  !*** ./src/container/User.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _store_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/user */ "./src/store/user.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);






function User(props) {
  //没登录跳转到登录
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
    to: "/"
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u4F60\u597D ", props.userinfo.name, ",\u4F60\u4EEC\u6700\u68D2\u7684\u4EBA\u662F", props.userinfo.best));
}

User.loadData = function (sotre) {
  return sotre.dispatch(Object(_store_user__WEBPACK_IMPORTED_MODULE_3__["getUserInfo"])());
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return {
    userinfo: state.user.userinfo
  };
} // {getUserInfo}
)(User));

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getIndexList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexList", function() { return getIndexList; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // 首页的逻辑
//actionType

var GET_LIST = 'INDEX/GET_LIST'; // actionCreator

var changeList = function changeList(list) {
  return {
    type: GET_LIST,
    list: list
  };
};

var getIndexList = function getIndexList(server) {
  return function (dispatch, getState, $axios) {
    return $axios.get('/api/course/list').then(function (res) {
      var list = res.data.list;
      dispatch(changeList(list));
    });
  };
};
var defaultState = {
  list: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_LIST:
      var newState = _objectSpread({}, state, {
        list: action.list
      });

      return newState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: getServerStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerStore", function() { return getServerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientStore", function() { return getClientStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/store/index.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/store/user.js");
// 存储的入口





var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  index: _index__WEBPACK_IMPORTED_MODULE_3__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_4__["default"]
});
var clientAxios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: '/'
});
var serverAxios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: 'http://localhost:9090/'
}); // export default store

var getServerStore = function getServerStore() {
  // 服务端通过server的dispatch获取和填充
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(serverAxios)));
};
var getClientStore = function getClientStore() {
  // 浏览器端
  var defaultState = window._context ? window._context : {};
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(clientAxios)));
};

/***/ }),

/***/ "./src/store/user.js":
/*!***************************!*\
  !*** ./src/store/user.js ***!
  \***************************/
/*! exports provided: getUserInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // 首页的逻辑
//actionType

var GET_LIST = 'INDEX/USER_INFO'; // actionCreator

var changeUserInfo = function changeUserInfo(data) {
  return {
    type: GET_LIST,
    data: data
  };
};

var getUserInfo = function getUserInfo(server) {
  return function (dispatch, getState, $axios) {
    return $axios.get('api/user/info').then(function (res) {
      var data = res.data.data;
      console.log('用户信息', data);
      dispatch(changeUserInfo(data));
    });
  };
};
var defaultState = {
  userinfo: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case GET_LIST:
      var newState = _objectSpread({}, state, {
        userinfo: action.data
      });

      return newState;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/withStyle.js":
/*!**************************!*\
  !*** ./src/withStyle.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function withStyle(Comp, styles) {
  return function (props) {
    if (props.staticContext) {
      props.staticContext.css.push(styles._getCss());
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, props);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (withStyle);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http-proxy-middleware":
/*!****************************************!*\
  !*** external "http-proxy-middleware" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map