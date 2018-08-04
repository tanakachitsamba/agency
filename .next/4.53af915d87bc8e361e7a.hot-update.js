webpackHotUpdate(4,{

/***/ "./pages/home/approach/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("./node_modules/preact/dist/preact.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
var _jsxFileName = "/Users/tanakasamuel/Factory/personal/preact/pages/home/approach/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n    height: 40em;\n    background-color: white;\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    width: 50%;\n    margin: auto;\n    padding-top: 20em;\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral([""]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    flex: ", ";\n"]);



function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Approach = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].section(_templateObject);
var Container = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div(_templateObject2);
var Parent = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div(_templateObject3);
var Child = __WEBPACK_IMPORTED_MODULE_2_styled_components__["b" /* default */].div(_templateObject4, function (_ref) {
  var flex = _ref.flex;
  return flex;
});
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Approach, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(Parent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home/approach")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.53af915d87bc8e361e7a.hot-update.js.map