webpackHotUpdate(4,{

/***/ "./pages/home/approach/index.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/tanakasamuel/Factory/personal/preact/pages/home/approach/index.js: Unexpected token (52:0)\n\n  50 | const \n  51 | \n> 52 | export default () => (\n     | ^\n  53 |     <Approach>\n  54 |         <Container>\n  55 |             <Parent>\n    at _class.raise (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:2063:16)\n    at _class.parseBindingAtom (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:2323:20)\n    at _class.parseVarHead (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:4560:20)\n    at _class.parseVar (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:4536:12)\n    at _class.parseVarStatement (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:4369:10)\n    at _class.parseStatementContent (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:3976:21)\n    at _class.parseStatement (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseTopLevel (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:3902:10)\n    at _class.parse (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:5250:17)\n    at parse (/Users/tanakasamuel/Factory/personal/preact/node_modules/babylon/lib/index.js:9972:38)\n    at parser (/Users/tanakasamuel/Factory/personal/preact/node_modules/@babel/core/lib/transformation/normalize-file.js:106:33)\n    at normalizeFile (/Users/tanakasamuel/Factory/personal/preact/node_modules/@babel/core/lib/transformation/normalize-file.js:53:11)\n    at runSync (/Users/tanakasamuel/Factory/personal/preact/node_modules/@babel/core/lib/transformation/index.js:34:41)");

/***/ }),

/***/ "./pages/home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("./node_modules/preact/dist/preact.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing__ = __webpack_require__("./pages/home/landing/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approach__ = __webpack_require__("./pages/home/approach/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approach___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__approach__);
var _jsxFileName = "/Users/tanakasamuel/Factory/personal/preact/pages/home/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    background-attachment: fixed;\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Home = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div(_templateObject);
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Home, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3__landing__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4__approach__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.8884c0ede85c8bb0c6a4.hot-update.js.map