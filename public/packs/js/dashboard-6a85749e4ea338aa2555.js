(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["dashboard"],{

/***/ "./app/javascript/components/dashboard/Main.jsx":
/*!******************************************************!*\
  !*** ./app/javascript/components/dashboard/Main.jsx ***!
  \******************************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/@rails/webpacker/node_modules/babel-loader/lib/index.js):\nSyntaxError: /ontrack/app/javascript/components/dashboard/Main.jsx: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (153:7)\n\n  151 |       </div>\n  152 |\n> 153 |        <div className=\"bg-art mt-150\">\n      |        ^\n  154 |         <div className=\"bg-art-2 top-border\">\n  155 |           <div className=\"container\">\n  156 |             <button className=\"btn btn-round btn-dark pos-abs mt-neg-20 z-5\" onClick={this.openRevenueCreate}>+ add an revenue</button>\n    at Object._raise (/ontrack/node_modules/@babel/parser/lib/index.js:775:17)\n    at Object.raiseWithData (/ontrack/node_modules/@babel/parser/lib/index.js:768:17)\n    at Object.raise (/ontrack/node_modules/@babel/parser/lib/index.js:736:17)\n    at Object.jsxParseElementAt (/ontrack/node_modules/@babel/parser/lib/index.js:5151:18)\n    at Object.jsxParseElement (/ontrack/node_modules/@babel/parser/lib/index.js:5161:17)\n    at Object.parseExprAtom (/ontrack/node_modules/@babel/parser/lib/index.js:5168:19)\n    at Object.parseExprSubscripts (/ontrack/node_modules/@babel/parser/lib/index.js:10668:23)\n    at Object.parseUpdate (/ontrack/node_modules/@babel/parser/lib/index.js:10648:21)\n    at Object.parseMaybeUnary (/ontrack/node_modules/@babel/parser/lib/index.js:10626:23)\n    at Object.parseExprOps (/ontrack/node_modules/@babel/parser/lib/index.js:10487:23)");

/***/ }),

/***/ "./app/javascript/packs/dashboard.jsx":
/*!********************************************!*\
  !*** ./app/javascript/packs/dashboard.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_dashboard_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboard/Main */ "./app/javascript/components/dashboard/Main.jsx");
/* harmony import */ var _components_dashboard_Main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_dashboard_Main__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/ontrack/app/javascript/packs/dashboard.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/packs/dashboard.jsx",
    _this = undefined;




document.addEventListener('DOMContentLoaded', function () {
  var _Object$assign;

  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_components_dashboard_Main__WEBPACK_IMPORTED_MODULE_2___default()), Object.assign({}, window.InitialProps, (_Object$assign = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, _Object$assign["__self"] = _this, _Object$assign["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 7,
    columnNumber: 5
  }, _Object$assign))), document.getElementById('dashboard'));
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_index_js"], function() { return __webpack_exec__("./app/javascript/packs/dashboard.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=dashboard-6a85749e4ea338aa2555.js.map