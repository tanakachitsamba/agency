module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/nav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("preact");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles__ = __webpack_require__("./components/nav/styles.js");
var _jsxFileName = "/Users/tanakasamuel/Factory/personal/preact/components/nav/index.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__styles__["c" /* Nav */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__styles__["d" /* NavContainer */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__styles__["a" /* Logo */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Working Title."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__styles__["b" /* Menu */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })));
});

/***/ }),

/***/ "./components/nav/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NavContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_feather__ = __webpack_require__("react-feather");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_feather___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_feather__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral([""]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    float: right;\n    color: white;\n    width: 30px;\n    height: 30px;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    font-family: 'GFS Didot', serif;\n    float: left;\n    font-weight: 600\n    font-size: 1.8em;\n    letter-spacing: 0.4em;\n    color: white;\n    font-style: italic;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    * {\n        padding: 30px;\n    }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Nav = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.nav(_templateObject);
var Menu = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(__WEBPACK_IMPORTED_MODULE_1_react_feather__["Menu"])(_templateObject2);
var Logo = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject3);
var NavContainer = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject4);

/***/ }),

/***/ "./pages/home/approach/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Heading */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("preact");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
var _jsxFileName = "/Users/tanakasamuel/Factory/personal/preact/pages/home/approach/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n        @media (max-width: 400px) {\n            ", ";\n        }\n    "]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    height: 40em;\n    background-color: white;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    width: 70%;\n    margin: auto;\n    padding-top: 6em;\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    display: flex;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    ", ";\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    font-family: 'GFS Didot', serif;\n    color: black;\n    font-size: 1.7em;\n    text-align: center;\n    letter-spacing: 0.15em;\n    width: 80%;\n    margin: auto;\n    font-weight: 500;\n    text-align: left;\n    line-height: 2em;\n    font-style: italic;\n\n    ", ";\n"]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n      padding-top: 6em; \n      font-size: 1.4em;\n      width: 70%;\n    "]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    font-weight: 500;\n    line-height: 2.5em;\n    font-family: 'GFS Didot', serif;\n    letter-spacing: 0.2em;\n    padding-top: 0.8em;\n"]),
    _templateObject9 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    font-size: 2em;\n    letter-spacing: 0.3em;\n"]),
    _templateObject10 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    list-style-type: none;\n    > * {\n        font-size: 1.2em;\n        font-style: italic;\n        letter-spacing: 0.3em;\n        line-height: 3.3em;\n    }\n"]),
    _templateObject11 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    margin: auto;\n    width: 88%;\n\n    padding-top: 1em;\n    font-size: 1.8em;\n    letter-spacing: 0.2em;\n    font-family: 'GFS Didot', serif;\n    font-style: italic;\n    text-decoration: underline;\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var media = {
  mobile: function mobile() {
    return Object(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(_templateObject, __WEBPACK_IMPORTED_MODULE_2_styled_components__["css"].apply(void 0, arguments));
  }
};
var Approach = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.section(_templateObject2);
var Container = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject3);
var Parent = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject4);
var FlexChild = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject5, function (_ref) {
  var flex = _ref.flex;
  return flex && "flex: ".concat(flex, ";");
});
var Heading = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.h1(_templateObject6, media.mobile(_templateObject7));
var ServiceContainer = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject8);
var ServiceTitle = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject9);
var ServiceList = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.ul(_templateObject10);
var OurApproach = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject11);
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Approach, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Parent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlexChild, {
    flex: "2 0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Heading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, "We are a full-service agency that is passionate about digital products.\xA0We provide elegant solutions to difficult technical problems, whilst building\xA0engaging customer experiences and helping businesses reach their goals.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(FlexChild, {
    flex: "1 0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServiceContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServiceTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, "Our Services"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ServiceList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, "Development"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, "Design"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  }, "Branding"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, "Marketing"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, "Consultancy"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(OurApproach, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, "Our Approach")));
});

/***/ }),

/***/ "./pages/home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("preact");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing__ = __webpack_require__("./pages/home/landing/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approach__ = __webpack_require__("./pages/home/approach/index.js");
var _jsxFileName = "/Users/tanakasamuel/Factory/personal/preact/pages/home/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    background-attachment: fixed;\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Home = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Home, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__landing__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__approach__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
});

/***/ }),

/***/ "./pages/home/landing/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("preact");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__("./pages/home/landing/styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_nav__ = __webpack_require__("./components/nav/index.js");
var _jsxFileName = "/Users/tanakasamuel/Factory/personal/preact/pages/home/landing/index.js";





/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles__["b" /* Landing */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_nav__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles__["c" /* LandingContent */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* Heading */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "We make apps, websites and consult on strategy."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__styles__["d" /* LetsWorkLink */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "learn more")));
});

/***/ }),

/***/ "./pages/home/landing/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Landing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LandingContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LetsWorkLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_feather__ = __webpack_require__("react-feather");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_feather___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_feather__);
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n        @media (max-width: 400px) {\n            ", ";\n        }\n    "]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    height: 50em;\n    background-color: #1f41f2;\n\n    ", ";\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n      height: 35em;\n    "]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    padding-top: 10em;\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    color: white;\n    font-size: 3.5em;\n    text-align: center;\n    letter-spacing: 0.15em;\n    width: 50%;\n    margin: auto;\n    font-weight: 600;\n    text-align: left;\n    line-height: 1.8em;\n    font-style: italic;\n\n    ", ";\n"]),
    _templateObject6 = /*#__PURE__*/ _taggedTemplateLiteral(["\n      padding-top: 6em; \n      font-size: 1.4em;\n      width: 70%;\n    "]),
    _templateObject7 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    font-family: 'GFS Didot', serif;\n    text-decoration: underline;\n    font-size: 1.5em;\n    font-weight: 300;\n    padding-top: 0.5em;\n\n    ", ";\n"]),
    _templateObject8 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    font-size: 1.4em\n      padding-top: 0.5em;\n    "]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var media = {
  mobile: function mobile() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_styled_components__["css"])(_templateObject, __WEBPACK_IMPORTED_MODULE_0_styled_components__["css"].apply(void 0, arguments));
  }
};
var Landing = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.section(_templateObject2, media.mobile(_templateObject3));
var LandingContent = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div(_templateObject4);
var Heading = __WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.h1(_templateObject5, media.mobile(_templateObject6));
var LetsWorkLink = __WEBPACK_IMPORTED_MODULE_0_styled_components___default()(Heading)(_templateObject7, media.mobile(_templateObject8));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__("./pages/home/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
var _jsxFileName = "/Users/tanakasamuel/Factory/personal/preact/pages/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  @font-face {\n    font-family: 'Work Sans';\n    src: url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,300i,400,400i,600,600i,700,700i');\n  }\n\n    @font-face {\n    font-family: 'GFS Didot';\n    src: url('https://fonts.googleapis.com/css?family=GFS+Didot');\n  }\n\n  hmtl, body {\n    height: 100%;\n  }\n\n  body {\n    margin: 0;\n    font-family: 'Josefin Sans', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background: #333333;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n   font-family: 'Josefin Sans', sans-serif;\n  }\n"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





Object(__WEBPACK_IMPORTED_MODULE_3_styled_components__["injectGlobal"])(_templateObject);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  });
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "preact":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-feather":
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map