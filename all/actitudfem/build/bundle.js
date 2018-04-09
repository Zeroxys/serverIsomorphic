/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.js":
/*!***********************!*\
  !*** ./client/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _header = __webpack_require__(/*! ./components/header/header */ \"./client/components/header/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _footer = __webpack_require__(/*! ./components/footer/footer */ \"./client/components/footer/footer.js\");\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar imgs = [{\n\thref: 'http://www.imagen.com.mx/',\n\tposition: '2px 63.6%',\n\theight: '32px',\n\twidth: '87px'\n}, {\n\tposition: '40% 63.6%',\n\theight: '30px',\n\twidth: '100px'\n}];\n\nvar App = function App(_ref) {\n\tvar route = _ref.route;\n\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t_react2.default.createElement(_header2.default, null),\n\t\t(0, _reactRouterConfig.renderRoutes)(route.routes),\n\t\t_react2.default.createElement(_footer2.default, { imgs: imgs })\n\t);\n};\n\nexports.default = {\n\tcomponent: App\n};\n\n//# sourceURL=webpack:///./client/App.js?");

/***/ }),

/***/ "./client/Routes/Routes.js":
/*!*********************************!*\
  !*** ./client/Routes/Routes.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Se definiran las Routas que se montaran sobre el Ruteo en el cliente\n\n//import admins, {listpage} from '../pages/HomePage'\n\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HomePage = __webpack_require__(/*! ../pages/HomePage */ \"./client/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _PostPage = __webpack_require__(/*! ../pages/PostPage */ \"./client/pages/PostPage.js\");\n\nvar _PostPage2 = _interopRequireDefault(_PostPage);\n\nvar _MoreView = __webpack_require__(/*! ../pages/MoreView */ \"./client/pages/MoreView.js\");\n\nvar _MoreView2 = _interopRequireDefault(_MoreView);\n\nvar _NotFoundPage = __webpack_require__(/*! ../pages/NotFoundPage */ \"./client/pages/NotFoundPage.js\");\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nvar _App = __webpack_require__(/*! ../App */ \"./client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Routes = [_extends({}, _App2.default, {\n  routes: [_extends({}, _HomePage2.default, {\n    path: '/',\n    exact: true\n  }), _extends({}, _PostPage2.default, {\n    path: '/:taxonomy/:id/:name/:thing',\n    exact: true\n  }), _extends({}, _PostPage2.default, {\n    path: '/:taxonomy/:id/:name',\n    exact: true\n  }), _extends({}, _PostPage2.default, {\n    path: '/:taxonomy/:id/',\n    exact: true\n  }), _extends({}, _MoreView2.default, {\n    path: '/lo-mas-visto',\n    exact: true\n  })]\n})];\n\n/*{\n  ...NotFoundPage\n}*/\n\nexports.default = Routes;\n\n//# sourceURL=webpack:///./client/Routes/Routes.js?");

/***/ }),

/***/ "./client/actions/index.js":
/*!*********************************!*\
  !*** ./client/actions/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getPost = exports.GET_POST = exports.getMoreViews = exports.More_View = exports.fetchPosts = exports.FETCH_POSTS = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _dateAndTime = __webpack_require__(/*! date-and-time */ \"date-and-time\");\n\nvar _dateAndTime2 = _interopRequireDefault(_dateAndTime);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nvar baseUrl = 'http://api.invent.mx/v1/actitudfem';\nvar apiKey = '22360f3a2e03f847acf5339695e42e5b';\n\nvar FETCH_POSTS = exports.FETCH_POSTS = 'fetch_posts';\nvar fetchPosts = exports.fetchPosts = function fetchPosts() {\n  return function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n      var res;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return api.get('/v1/actitudfem/node.json/' + apiKey + '?limit=15');\n\n            case 2:\n              res = _context.sent;\n\n              dispatch({\n                type: FETCH_POSTS,\n                payload: res\n              });\n\n            case 4:\n            case 'end':\n              return _context.stop();\n          }\n        }\n      }, _callee, undefined);\n    }));\n\n    return function (_x, _x2, _x3) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\nvar More_View = exports.More_View = 'more_view';\nvar getMoreViews = exports.getMoreViews = function getMoreViews() {\n  return function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n      var now, dateNow, limitDay, dateYesterday, res;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              now = new Date();\n              dateNow = _dateAndTime2.default.format(now, 'DD-MM-YYYY');\n              limitDay = _dateAndTime2.default.format(_dateAndTime2.default.addDays(now, -6), 'DD-MM-YYYY');\n              dateYesterday = _dateAndTime2.default.format(_dateAndTime2.default.addDays(now, -1), 'DD-MM-YYYY');\n              _context2.next = 6;\n              return api.get('/v1/actitudfem/node.json/' + apiKey + '?limit=15&created_start=' + limitDay + '&created_finish=' + dateYesterday + '&sort=visits.daycount:DESC&fields=id|title|summary|url|images|type');\n\n            case 6:\n              res = _context2.sent;\n\n              dispatch({\n                type: More_View,\n                payload: res\n              });\n\n            case 8:\n            case 'end':\n              return _context2.stop();\n          }\n        }\n      }, _callee2, undefined);\n    }));\n\n    return function (_x4, _x5, _x6) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\nvar GET_POST = exports.GET_POST = 'get_post';\nvar getPost = exports.getPost = function getPost(path) {\n  return function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {\n      var url, res;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              url = path;\n\n              console.log('/v1/actitudfem/node.json/' + apiKey + '?url=' + url);\n              //const res = await api.get(`/v1/actitudfem/node.json/${apiKey}?url=/amor-y-pareja/comunicacion/relaciones/mujeres-prefieren-estar-con-sus-amigas-que-con-sus-esposos-estudio`)\n              //const res = await api.get(`/v1/actitudfem/node.json/${apiKey}?url=${url}`)\n              _context3.next = 4;\n              return _axios2.default.get(baseUrl + '/node.json/' + apiKey + '?url=' + url);\n\n            case 4:\n              res = _context3.sent;\n\n              dispatch({\n                type: GET_POST,\n                payload: res\n              });\n\n            case 6:\n            case 'end':\n              return _context3.stop();\n          }\n        }\n      }, _callee3, undefined);\n    }));\n\n    return function (_x7, _x8, _x9) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./client/actions/index.js?");

/***/ }),

/***/ "./client/components/DFP/DFP.js":
/*!**************************************!*\
  !*** ./client/components/DFP/DFP.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDfp = __webpack_require__(/*! react-dfp */ \"react-dfp\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar DFP = function DFP() {\n  return _react2.default.createElement(\n    _reactDfp.DFPSlotsProvider,\n    { dfpNetworkId: '35139216', adUnit: \"Actitudfem\" },\n    _react2.default.createElement(_reactDfp.AdSlot, { sizes: [[900, 90], [320, 100]] })\n  );\n};\n\nexports.default = DFP;\n\n//# sourceURL=webpack:///./client/components/DFP/DFP.js?");

/***/ }),

/***/ "./client/components/body/Articles/Articles.js":
/*!*****************************************************!*\
  !*** ./client/components/body/Articles/Articles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactLazyload = __webpack_require__(/*! react-lazyload */ \"react-lazyload\");\n\nvar _reactLazyload2 = _interopRequireDefault(_reactLazyload);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  article: {\n    header: {\n      padding: '10px 3% 10px 3%',\n      boxSizing: 'border-box',\n      fontSize: '25px',\n      fontFamily: ['Playfair Display', 'serif']\n    },\n    body: {\n      fontFamily: 'Arial',\n      color: '#666',\n      margin: 'margin',\n      padding: '10px 3% 10px 3%'\n    },\n    seeMore: {\n      border: '1px solid black',\n      padding: '6px 14px',\n      marginTop: '18px',\n      background: 'transparent',\n      borderRadius: '5px',\n      fontFamily: 'Helvetica',\n      fontSize: '100%'\n    },\n    blur: {\n      backgroundImage: 'url(\"http://cdn2.webapps.imagendigital.com/soyactitud/images/bg_notas.png\")',\n      position: 'relative',\n      zIndex: '1',\n      textAlign: 'center',\n      marginTop: '-110px',\n      height: '95px',\n      paddingTop: '40px',\n      backgroundRepeat: 'repeat-x'\n    },\n    img: {\n      width: '100%'\n    }\n  }\n};\n\nvar Article = function Article(props) {\n  return _react2.default.createElement(\n    'article',\n    null,\n    _react2.default.createElement(\n      _reactLazyload2.default,\n      { throttle: 200, height: 300 },\n      _react2.default.createElement('img', { alt: props.title, src: props.img })\n    ),\n    _react2.default.createElement(\n      'div',\n      { className: \"article-content\" },\n      _react2.default.createElement(\n        'h3',\n        { style: styles.article.header },\n        props.title\n      ),\n      _react2.default.createElement(\n        'p',\n        { style: styles.article.body },\n        props.summary\n      )\n    ),\n    _react2.default.createElement(\n      'div',\n      { style: styles.article.blur },\n      _react2.default.createElement(\n        'button',\n        { onClick: props.getPost, style: styles.article.seeMore },\n        'VER M\\xC1S'\n      )\n    )\n  );\n};\n\nexports.default = Article;\n\n//# sourceURL=webpack:///./client/components/body/Articles/Articles.js?");

/***/ }),

/***/ "./client/components/footer/footer.js":
/*!********************************************!*\
  !*** ./client/components/footer/footer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _listImgFooter = __webpack_require__(/*! ./listImgFooter/listImgFooter */ \"./client/components/footer/listImgFooter/listImgFooter.js\");\n\nvar _listImgFooter2 = _interopRequireDefault(_listImgFooter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  footer: {\n    display: 'block',\n    background: '#222222'\n  },\n  ul: {\n    display: 'flex'\n  },\n  nav: {\n    height: '46px'\n  },\n  li: {\n    width: '100px',\n    height: '30px',\n    margin: '4px'\n  },\n  a: {\n    height: '100%'\n  },\n  img: {\n    width: 'inherit',\n    height: 'inherit'\n  }\n};\n\nvar imgSrc = 'http://cdn.imagendigital.com/resources/bottom/images/sello_victoria.png';\n\nvar Footer = function Footer(props) {\n  var imgs = props.imgs.map(function (img, i) {\n    return _react2.default.createElement(_listImgFooter2.default, { href: img.href, position: img.position, height: img.height, width: img.width, key: i });\n  });\n\n  return _react2.default.createElement(\n    'footer',\n    { style: styles.footer },\n    _react2.default.createElement(\n      'nav',\n      { style: styles.nav },\n      _react2.default.createElement(\n        'ul',\n        { style: styles.ul },\n        imgs,\n        _react2.default.createElement(\n          'li',\n          { style: styles.li },\n          _react2.default.createElement(\n            'a',\n            { style: styles.a, href: 'https://www.victoria147.com/' },\n            _react2.default.createElement('img', { style: styles.img, src: imgSrc })\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = Footer;\n\n//# sourceURL=webpack:///./client/components/footer/footer.js?");

/***/ }),

/***/ "./client/components/footer/listImgFooter/listImgFooter.js":
/*!*****************************************************************!*\
  !*** ./client/components/footer/listImgFooter/listImgFooter.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ListImgFooter = function ListImgFooter(props) {\n  var styles = {\n    li: {\n      padding: '2px',\n      margin: '4px'\n    },\n    span: {\n      backgroundPosition: '' + props.position,\n      display: 'block',\n      height: '' + props.height,\n      width: '' + props.width,\n      padding: '2px 6px',\n      boxSizing: 'border-box'\n    }\n  };\n\n  return _react2.default.createElement(\n    'li',\n    { style: styles.li },\n    _react2.default.createElement(\n      'a',\n      { href: props.href },\n      _react2.default.createElement('span', { className: 'spites', style: styles.span })\n    )\n  );\n};\n\nexports.default = ListImgFooter;\n\n//# sourceURL=webpack:///./client/components/footer/listImgFooter/listImgFooter.js?");

/***/ }),

/***/ "./client/components/header/HeadNav/HeadNav.js":
/*!*****************************************************!*\
  !*** ./client/components/header/HeadNav/HeadNav.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _menu = __webpack_require__(/*! ./menu/menu */ \"./client/components/header/HeadNav/menu/menu.js\");\n\nvar _menu2 = _interopRequireDefault(_menu);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  header: {\n    width: '100%',\n    height: '38px',\n    content: {\n      textAlign: 'center',\n      position: 'relative'\n    },\n    img: {\n      backgroundImage: 'url(http://cdn2.webapps.imagendigital.com/soyactitud/images/sprite.v1.png)',\n      width: '140px',\n      height: '34px',\n      display: 'inline-block'\n    },\n    btnMenu: {\n      width: '38px',\n      height: '31px',\n      border: '0',\n      background: 'transparent',\n      margin: '3px 12px 0 0'\n    },\n    contentManu: {\n      position: 'absolute',\n      top: '0',\n      right: '0',\n      backgroundImage: 'url(http://cdn2.webapps.imagendigital.com/soyactitud/images/sprite.v1.png)',\n      backgroundPosition: '1% 4.4%',\n      transform: 'scale(.9)'\n    },\n    btnSearch: {\n      backgroundImage: 'url(http://cdn2.webapps.imagendigital.com/soyactitud/images/sprite.v1.png)',\n      backgroundPosition: '-1px -559px',\n      height: '30px',\n      width: '32px',\n      border: '0',\n      transform: 'scale(.9)'\n    },\n    input: {\n      width: '90%',\n      height: '30px',\n      color: 'white',\n      backgroundColor: 'transparent',\n      border: '1px solid #7d7d7d'\n    },\n    formMenu: {\n      padding: '6px 0',\n      display: 'flex'\n    }\n  }\n};\n\nvar HeadNav = function HeadNav(props) {\n  var toogleMenu = function toogleMenu() {\n    if (props.isToogle) {\n      return _react2.default.createElement(\n        'div',\n        { className: 'menu' },\n        _react2.default.createElement(\n          'form',\n          { style: styles.header.formMenu },\n          _react2.default.createElement('input', { style: styles.header.input, type: 'search', placeholder: 'Buscar' }),\n          _react2.default.createElement('input', { style: styles.header.btnSearch, type: 'submit', value: '' })\n        ),\n        _react2.default.createElement(_menu2.default, null)\n      );\n    } else return '';\n  };\n\n  return _react2.default.createElement(\n    'header',\n    { style: styles.header },\n    _react2.default.createElement(\n      'div',\n      { style: styles.header.content },\n      _react2.default.createElement('div', { style: styles.header.img }),\n      _react2.default.createElement(\n        'div',\n        { style: styles.header.contentManu },\n        _react2.default.createElement('button', { onClick: props.menuEnable, style: styles.header.btnMenu })\n      )\n    ),\n    toogleMenu()\n  );\n};\n\nexports.default = HeadNav;\n\n//# sourceURL=webpack:///./client/components/header/HeadNav/HeadNav.js?");

/***/ }),

/***/ "./client/components/header/HeadNav/menu/menu.js":
/*!*******************************************************!*\
  !*** ./client/components/header/HeadNav/menu/menu.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactTransitionGroup = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar duration = 300;\n\nvar defaultStyle = {\n  transition: 'opacity ' + duration + 'ms ease-in-out',\n  opacity: 0,\n  padding: 20,\n  display: 'inline-block',\n  backgroundColor: '#8787d8'\n};\n\nvar transitionStyles = {\n  entering: { opacity: 0 },\n  entered: { opacity: 1 }\n};\n\nvar Menu = function Menu() {\n  var styles = {\n    linkActive: {\n      backgroundColor: 'black'\n    }\n  };\n\n  return _react2.default.createElement(\n    'nav',\n    { className: 'navMenu' },\n    _react2.default.createElement(\n      'ul',\n      null,\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { style: styles.linkActive, href: '' },\n          _react2.default.createElement('span', { className: 'a-inicio' }),\n          ' INICIO'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: '' },\n          _react2.default.createElement('span', { className: 'a-tv' }),\n          ' TV'\n        )\n      ),\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { href: '' },\n          ' ',\n          _react2.default.createElement('span', { className: 'a-obsesiones' }),\n          ' OBSESIONES'\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'ul',\n      { className: 'dropdown-menu' },\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { className: 'title-menu' },\n          'Belleza'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { className: 'dropdown-submenu' },\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Maquillaje'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Peinados y cabello'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Piel'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Relajaci\\xF3n'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Nutrici\\xF3n y ejercicio'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'ul',\n      { className: 'dropdown-menu' },\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { className: 'title-menu' },\n          'Celebridades'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { className: 'dropdown-submenu' },\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Famosos'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'ul',\n      { className: 'dropdown-menu' },\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { className: 'title-menu' },\n          'Moda'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { className: 'dropdown-submenu' },\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Pasarelas'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Tendencias'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Obsesiones'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Fashion Shows'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Colecciones'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'ul',\n      { className: 'dropdown-menu' },\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { className: 'title-menu' },\n          'Novias'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { className: 'dropdown-submenu' },\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Banquete'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Decoraci\\xF3n'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Vestidos y accesorios'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'ul',\n      { className: 'dropdown-menu' },\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { className: 'title-menu' },\n          'Amor y pareja'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { className: 'dropdown-submenu' },\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Comunicaci\\xF3n'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Sexo'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Solteras'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Tu cuerpo'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'ul',\n      { className: 'dropdown-menu' },\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { className: 'title-menu' },\n          'Geek'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { className: 'dropdown-submenu' },\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Viral'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Nuevo'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'ul',\n      { className: 'dropdown-menu' },\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { className: 'title-menu' },\n          'Gu\\xEDa'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { className: 'dropdown-submenu' },\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'M\\xFAsica'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Libros'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Vida y estilo'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Cine y televisi\\xF3n'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'ul',\n      { className: 'dropdown-menu' },\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { className: 'title-menu' },\n          'Entorno'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { className: 'dropdown-submenu' },\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'El personaje'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'LGBT'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Mujeres'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Pol\\xEDtica'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'ul',\n      { className: 'dropdown-menu' },\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { className: 'title-menu' },\n          'Hogar'\n        ),\n        _react2.default.createElement(\n          'ul',\n          { className: 'dropdown-submenu' },\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Dise\\xF1o y decoraci\\xF3n'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Finanzas personales'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Recetas'\n            )\n          ),\n          _react2.default.createElement(\n            'li',\n            null,\n            _react2.default.createElement(\n              'a',\n              null,\n              'Mam\\xE1s'\n            )\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'ul',\n      { className: 'dropdown-menu' },\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { className: 'title-menu' },\n          'T\\xF3picos'\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'ul',\n      { className: 'dropdown-menu' },\n      _react2.default.createElement(\n        'li',\n        null,\n        _react2.default.createElement(\n          'a',\n          { className: 'title-menu' },\n          'S\\xCDGUENOS Y DESCARGANOS'\n        )\n      )\n    )\n  );\n};\nexports.default = Menu;\n\n//# sourceURL=webpack:///./client/components/header/HeadNav/menu/menu.js?");

/***/ }),

/***/ "./client/components/header/header.js":
/*!********************************************!*\
  !*** ./client/components/header/header.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _HeadNav = __webpack_require__(/*! ./HeadNav/HeadNav */ \"./client/components/header/HeadNav/HeadNav.js\");\n\nvar _HeadNav2 = _interopRequireDefault(_HeadNav);\n\nvar _navButton = __webpack_require__(/*! ./navButton/navButton */ \"./client/components/header/navButton/navButton.js\");\n\nvar _navButton2 = _interopRequireDefault(_navButton);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_Component) {\n  _inherits(Header, _Component);\n\n  function Header(props) {\n    _classCallCheck(this, Header);\n\n    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));\n\n    _this.state = {\n      isActive: false,\n      data: [],\n      toogleMenu: false\n    };\n\n    _this.menuEnable = _this.menuEnable.bind(_this);\n    return _this;\n  }\n\n  _createClass(Header, [{\n    key: 'menuEnable',\n    value: function menuEnable() {\n      this.setState(function (prevState) {\n        return {\n          toogleMenu: !prevState.toogleMenu\n        };\n      });\n    }\n  }, {\n    key: 'onClick',\n    value: function onClick() {\n      this.setState(function (prevState) {\n        return {\n          isActive: !prevState.isActive\n        };\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'header' },\n        _react2.default.createElement(_HeadNav2.default, { isToogle: this.state.toogleMenu, menuEnable: this.menuEnable }),\n        _react2.default.createElement(_navButton2.default, { click: this.onClick, isActive: this.state.isActive, listas: [{ name: 'LO ÚLTIMO', path: '/' }, { name: 'LO MAS VISTO', path: 'lo-mas-visto' }] })\n      );\n    }\n  }]);\n\n  return Header;\n}(_react.Component);\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./client/components/header/header.js?");

/***/ }),

/***/ "./client/components/header/navButton/items.js":
/*!*****************************************************!*\
  !*** ./client/components/header/navButton/items.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Items = function Items(props) {\n  var styles = {\n    li: {\n      width: '50%',\n      textAlign: 'center'\n    },\n    a: {\n      width: '100%',\n      display: 'block',\n      padding: '10px 0px',\n      fontSize: '15px',\n      fontFamily: ['Oswald', 'sans-serif'],\n      fontWeight: '300'\n    }\n  };\n\n  return _react2.default.createElement(\n    'li',\n    { onClick: props.click, style: styles.li },\n    _react2.default.createElement(\n      'a',\n      { href: '/lo-mas-visto', style: styles.a },\n      props.name\n    )\n  );\n};\n\nexports.default = Items;\n\n//# sourceURL=webpack:///./client/components/header/navButton/items.js?");

/***/ }),

/***/ "./client/components/header/navButton/navButton.js":
/*!*********************************************************!*\
  !*** ./client/components/header/navButton/navButton.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _items = __webpack_require__(/*! ./items */ \"./client/components/header/navButton/items.js\");\n\nvar _items2 = _interopRequireDefault(_items);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NavButton = function NavButton(props) {\n\n  var styles = {\n    nav: {\n      borderTop: '1px solid #909090',\n      marginBottom: '20px'\n    },\n    ul: {\n      display: 'flex'\n    }\n  };\n\n  var items = props.listas.map(function (lista, i) {\n    return _react2.default.createElement(_items2.default, { key: i, name: lista.name, click: props.click, isActive: props.isActive });\n  });\n\n  return _react2.default.createElement(\n    'nav',\n    { style: styles.nav },\n    _react2.default.createElement(\n      'ul',\n      { className: 'listMenu', style: styles.ul },\n      items\n    )\n  );\n};\nexports.default = NavButton;\n\n//# sourceURL=webpack:///./client/components/header/navButton/navButton.js?");

/***/ }),

/***/ "./client/helpers/createStore.js":
/*!***************************************!*\
  !*** ./client/helpers/createStore.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reducers = __webpack_require__(/*! ../reducers */ \"./client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar apiKey = '22360f3a2e03f847acf5339695e42e5b';\n\nexports.default = function (req) {\n  var axiosInstance = _axios2.default.create({\n    baseURL: 'http://api.invent.mx/v1/actitudfem/node.json/' + apiKey + '?limit=1',\n    headers: { cookie: req.get('cookie') || '' }\n  });\n\n  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n  return store;\n};\n\n//# sourceURL=webpack:///./client/helpers/createStore.js?");

/***/ }),

/***/ "./client/helpers/template.js":
/*!************************************!*\
  !*** ./client/helpers/template.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Routes = __webpack_require__(/*! ../Routes/Routes */ \"./client/Routes/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _HomePage = __webpack_require__(/*! ../pages/HomePage */ \"./client/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// ===XSS===//\n\n// ===== Importamos Redux para usarlo en el server ===== /\nexports.default = function (req, store, context) {\n\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { location: req.path, context: context },\n      _react2.default.createElement(\n        'div',\n        null,\n        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n      )\n    )\n  ));\n\n  return '\\n  <!DOCTYPE html>\\n  <html lang=\"es\">\\n    <head>\\n      <meta charset=\"UTF-8\">\\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\\n      <meta name=\"description\" content=\"Una comunidad vers\\xE1til para mujeres contempor\\xE1neas, celebridades, moda, belleza, sexualidad, hogar, actitud\" />\\n      <meta name=\"abstract\" content=\"Tips de belleza, tendencias de moda, sexualidad, familia y todos esos temas que le preocupan a la mujer de hoy.\" />\\n      <meta name=\"keywords\" content=\"celebridades,moda,belleza,sexualidad,hogar,actitud,entorno,novias\" />\\n      <meta name=\"author\" content=\"\">\\n      <title>Actitudfem.com</title>\\n      <link rel=\"stylesheet\" type=\"text/css\" href=\"/main.css\">\\n    </head>\\n  <body>\\n    <div id=\"root\">' + content + '</div>\\n    <script>\\n      window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + ' \\n    </script>\\n    <script src=\"/main.js\"></script>\\n  </body>\\n  </html>\\n';\n};\n\n// === Rutas del server side render === //\n\n//# sourceURL=webpack:///./client/helpers/template.js?");

/***/ }),

/***/ "./client/pages/HomePage.js":
/*!**********************************!*\
  !*** ./client/pages/HomePage.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Articles = __webpack_require__(/*! ../components/body/Articles/Articles */ \"./client/components/body/Articles/Articles.js\");\n\nvar _Articles2 = _interopRequireDefault(_Articles);\n\nvar _DFP = __webpack_require__(/*! ../components/DFP/DFP */ \"./client/components/DFP/DFP.js\");\n\nvar _DFP2 = _interopRequireDefault(_DFP);\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./client/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar imgs = [{\n  href: 'http://www.imagen.com.mx/',\n  position: '2px 63.6%',\n  height: '32px',\n  width: '87px'\n}, {\n  position: '40% 63.6%',\n  height: '30px',\n  width: '100px'\n}];\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));\n\n    _this._getPost = _this._getPost.bind(_this);\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: '_getPost',\n    value: function _getPost(el) {\n      //console.log({url : el.url, canonical : el.url_canonical})\n      var string = el.url;\n      var r = /(http[s]?:\\/\\/)?([^\\/\\s]+\\/)(.*)/;\n      var url = string.match(r)[3];\n      console.log(url);\n      location.href = url;\n    }\n  }, {\n    key: '_renderPosts',\n    value: function _renderPosts() {\n      var _this2 = this;\n\n      return this.props.posts.data.map(function (el) {\n        return _react2.default.createElement(_Articles2.default, {\n          key: el.id,\n          title: el.title,\n          summary: el.summary,\n          img: el.images.principal[0].url,\n          getPost: function getPost() {\n            return _this2._getPost(el);\n          } });\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.fetchPosts();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '26px 0' } },\n          _react2.default.createElement(_DFP2.default, null)\n        ),\n        this._renderPosts()\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n  return { posts: state.posts };\n}\n\nfunction loadData(store) {\n  return store.dispatch((0, _actions.fetchPosts)());\n}\n\nexports.default = {\n  loadData: loadData,\n  component: (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _actions.fetchPosts })(Home)\n};\n\n//# sourceURL=webpack:///./client/pages/HomePage.js?");

/***/ }),

/***/ "./client/pages/MoreView.js":
/*!**********************************!*\
  !*** ./client/pages/MoreView.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./client/actions/index.js\");\n\nvar _Articles = __webpack_require__(/*! ../components/body/Articles/Articles */ \"./client/components/body/Articles/Articles.js\");\n\nvar _Articles2 = _interopRequireDefault(_Articles);\n\nvar _footer = __webpack_require__(/*! ../components/footer/footer */ \"./client/components/footer/footer.js\");\n\nvar _footer2 = _interopRequireDefault(_footer);\n\nvar _header = __webpack_require__(/*! ../components/header/header */ \"./client/components/header/header.js\");\n\nvar _header2 = _interopRequireDefault(_header);\n\nvar _DFP = __webpack_require__(/*! ../components/DFP/DFP */ \"./client/components/DFP/DFP.js\");\n\nvar _DFP2 = _interopRequireDefault(_DFP);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar imgs = [{\n  href: 'http://www.imagen.com.mx/',\n  position: '2px 63.6%',\n  height: '32px',\n  width: '87px'\n}, {\n  position: '40% 63.6%',\n  height: '30px',\n  width: '100px'\n}];\n\nvar MoreView = function (_Component) {\n  _inherits(MoreView, _Component);\n\n  function MoreView() {\n    _classCallCheck(this, MoreView);\n\n    return _possibleConstructorReturn(this, (MoreView.__proto__ || Object.getPrototypeOf(MoreView)).apply(this, arguments));\n  }\n\n  _createClass(MoreView, [{\n    key: '_renderPosts',\n    value: function _renderPosts() {\n      var _this2 = this;\n\n      return this.props.views.data.map(function (el) {\n        return _react2.default.createElement(_Articles2.default, {\n          key: el.id,\n          title: el.title,\n          summary: el.summary,\n          img: el.images.principal[0].url,\n          getPost: function getPost() {\n            return _this2._getPost(el);\n          } });\n      });\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.getMoreViews();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '26px 0' } },\n          _react2.default.createElement(_DFP2.default, null)\n        ),\n        this._renderPosts()\n      );\n    }\n  }]);\n\n  return MoreView;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return { views: state.views };\n};\n\nvar loadData = function loadData(store) {\n  return store.dispatch((0, _actions.getMoreViews)());\n};\n\nexports.default = {\n  loadData: loadData,\n  component: (0, _reactRedux.connect)(mapStateToProps, { getMoreViews: _actions.getMoreViews })(MoreView)\n};\n\n//# sourceURL=webpack:///./client/pages/MoreView.js?");

/***/ }),

/***/ "./client/pages/NotFoundPage.js":
/*!**************************************!*\
  !*** ./client/pages/NotFoundPage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n\n  staticContext.notFound = true;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      'h1',\n      null,\n      'Not found...'\n    )\n  );\n};\n\nexports.default = {\n  component: NotFoundPage\n};\n\n//# sourceURL=webpack:///./client/pages/NotFoundPage.js?");

/***/ }),

/***/ "./client/pages/PostPage.js":
/*!**********************************!*\
  !*** ./client/pages/PostPage.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../actions/ */ \"./client/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Article = function (_Component) {\n  _inherits(Article, _Component);\n\n  function Article() {\n    _classCallCheck(this, Article);\n\n    return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));\n  }\n\n  _createClass(Article, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.props.getPost();\n    }\n  }, {\n    key: '_someArticle',\n    value: function _someArticle() {}\n  }, {\n    key: 'render',\n    value: function render() {\n      console.log(this.props.post.data[0]);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          this.props.post.data[0].title\n        )\n      );\n    }\n  }]);\n\n  return Article;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  //console.log(state.post)\n  return { post: state.post };\n};\n\nvar loadData = function loadData(store, path) {\n  return store.dispatch((0, _actions.getPost)(path));\n};\n\nexports.default = {\n  loadData: loadData,\n  component: (0, _reactRedux.connect)(mapStateToProps, { getPost: _actions.getPost })(Article)\n};\n\n//# sourceURL=webpack:///./client/pages/PostPage.js?");

/***/ }),

/***/ "./client/reducers/getMoreView.js":
/*!****************************************!*\
  !*** ./client/reducers/getMoreView.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./client/actions/index.js\");\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.More_View:\n      return action.payload.data;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./client/reducers/getMoreView.js?");

/***/ }),

/***/ "./client/reducers/getPostReducer.js":
/*!*******************************************!*\
  !*** ./client/reducers/getPostReducer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(/*! ../actions/index */ \"./client/actions/index.js\");\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _index.GET_POST:\n      return action.payload.data;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./client/reducers/getPostReducer.js?");

/***/ }),

/***/ "./client/reducers/index.js":
/*!**********************************!*\
  !*** ./client/reducers/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _postReducers = __webpack_require__(/*! ./postReducers */ \"./client/reducers/postReducers.js\");\n\nvar _postReducers2 = _interopRequireDefault(_postReducers);\n\nvar _getPostReducer = __webpack_require__(/*! ./getPostReducer */ \"./client/reducers/getPostReducer.js\");\n\nvar _getPostReducer2 = _interopRequireDefault(_getPostReducer);\n\nvar _getMoreView = __webpack_require__(/*! ./getMoreView */ \"./client/reducers/getMoreView.js\");\n\nvar _getMoreView2 = _interopRequireDefault(_getMoreView);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = (0, _redux.combineReducers)({\n  posts: _postReducers2.default,\n  post: _getPostReducer2.default,\n  views: _getMoreView2.default\n});\n\n//# sourceURL=webpack:///./client/reducers/index.js?");

/***/ }),

/***/ "./client/reducers/postReducers.js":
/*!*****************************************!*\
  !*** ./client/reducers/postReducers.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./client/actions/index.js\");\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _actions.FETCH_POSTS:\n      return action.payload.data;\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./client/reducers/postReducers.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ./client/Routes/Routes */ \"./client/Routes/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _createStore = __webpack_require__(/*! ./client/helpers/createStore */ \"./client/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nvar _template = __webpack_require__(/*! ./client/helpers/template */ \"./client/helpers/template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar apiKey = '22360f3a2e03f847acf5339695e42e5b';\n\nvar app = (0, _express2.default)();\nvar port = process.env.PORT || 3000;\n\napp.use((0, _cors2.default)({\n  origin: '*'\n}));\n\n// Set proxy\napp.use('/api', (0, _expressHttpProxy2.default)('http://api.invent.mx/', {\n  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n    opts.headers['x-forwarded-host'] = 'localhost:3000';\n    return opts;\n  }\n}));\n\nfunction ignoreFavicon(req, res, next) {\n  if (req.originalUrl === '/favicon.ico') {\n    res.status(204).json({ nope: true });\n  } else {\n    next();\n  }\n}\n\napp.use(ignoreFavicon);\n\napp.use((0, _compression2.default)());\napp.use(_express2.default.static(_path2.default.resolve('all/actitudfem/public')));\n\napp.get('*', function (req, res) {\n  var store = (0, _createStore2.default)(req);\n\n  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    return route.loadData ? route.loadData(store, req.path) : null;\n  }).map(function (promise) {\n    if (promise) {\n      return new Promise(function (resolve, reject) {\n        promise.then(resolve).catch(resolve);\n      });\n    }\n  });\n\n  Promise.all(promises).then(function () {\n    var context = {};\n    res.status(200).send((0, _template2.default)(req, store, context));\n\n    if (context.notFound) {\n      return res.status(404).send({ name: 'show 404' });\n    }\n  });\n});\n\napp.listen(port, function (err) {\n  if (err) return console.log('Ha ocurrido un problema en el puerto : ' + port);\n  console.log('Servidor escuchando en puerto: ' + port);\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "date-and-time":
/*!********************************!*\
  !*** external "date-and-time" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-and-time\");\n\n//# sourceURL=webpack:///external_%22date-and-time%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dfp":
/*!****************************!*\
  !*** external "react-dfp" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dfp\");\n\n//# sourceURL=webpack:///external_%22react-dfp%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-lazyload":
/*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-lazyload\");\n\n//# sourceURL=webpack:///external_%22react-lazyload%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-transition-group\");\n\n//# sourceURL=webpack:///external_%22react-transition-group%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });