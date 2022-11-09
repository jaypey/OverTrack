(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["projections"],{

/***/ "./app/javascript/components/projections/Main.jsx":
/*!********************************************************!*\
  !*** ./app/javascript/components/projections/Main.jsx ***!
  \********************************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/@rails/webpacker/node_modules/babel-loader/lib/index.js):\nSyntaxError: /ontrack/app/javascript/components/projections/Main.jsx: Identifier 'ProjectionsChart' has already been declared (10:7)\n\n   8 | import { Categories, Revenues, Expenses, Goals, Reports } from '../../api/main';\n   9 | import { Alerts } from '../../helpers/main';\n> 10 | import ProjectionsChart from './ProjectionsChart';\n     |        ^\n  11 |\n  12 | class Main extends React.Component {\n  13 |   constructor(props) {\n    at Object._raise (/ontrack/node_modules/@babel/parser/lib/index.js:775:17)\n    at Object.raiseWithData (/ontrack/node_modules/@babel/parser/lib/index.js:768:17)\n    at Object.raise (/ontrack/node_modules/@babel/parser/lib/index.js:736:17)\n    at ScopeHandler.checkRedeclarationInScope (/ontrack/node_modules/@babel/parser/lib/index.js:1452:12)\n    at ScopeHandler.declareName (/ontrack/node_modules/@babel/parser/lib/index.js:1418:12)\n    at Object.checkLVal (/ontrack/node_modules/@babel/parser/lib/index.js:10224:24)\n    at Object.parseImportSpecifierLocal (/ontrack/node_modules/@babel/parser/lib/index.js:13656:10)\n    at Object.maybeParseDefaultImportSpecifier (/ontrack/node_modules/@babel/parser/lib/index.js:13758:12)\n    at Object.parseImport (/ontrack/node_modules/@babel/parser/lib/index.js:13621:31)\n    at Object.parseStatementContent (/ontrack/node_modules/@babel/parser/lib/index.js:12315:27)");

/***/ }),

/***/ "./app/javascript/packs/projections.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/projections.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_projections_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/projections/Main */ "./app/javascript/components/projections/Main.jsx");
/* harmony import */ var _components_projections_Main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_projections_Main__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/ontrack/app/javascript/packs/projections.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/packs/projections.jsx",
    _this = undefined;




document.addEventListener('DOMContentLoaded', function () {
  var _Object$assign;

  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_components_projections_Main__WEBPACK_IMPORTED_MODULE_2___default()), Object.assign({}, window.InitialProps, (_Object$assign = {
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
  }, _Object$assign))), document.getElementById('projections'));
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_index_js"], function() { return __webpack_exec__("./app/javascript/packs/projections.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=projections-ce18789c560bb0d111c7.js.map