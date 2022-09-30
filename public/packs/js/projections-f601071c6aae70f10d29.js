(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["projections"],{

/***/ "./app/javascript/components/projections/Main.jsx":
/*!********************************************************!*\
  !*** ./app/javascript/components/projections/Main.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Overview'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './CategoriesList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _expenses_FormModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expenses/FormModal */ "./app/javascript/components/expenses/FormModal.jsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Chart'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/projections/Main.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/projections/Main.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Main = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Main, _React$Component);

  function Main(props) {
    return _React$Component.call(this, props) || this; // this.state = {
    //   categories: [],
    //   expenses: [],
    //   loaded: false,
    //   monthlyGoal: 0,
    //   showExpenseCreateModal: false,
    // };
  } // componentDidMount() {
  //   this.loadData();
  // }
  // openExpenseCreate = () => { this.setState({ showExpenseCreateModal: true }); }
  // closeExpenseCreate = () => { this.setState({ showExpenseCreateModal: false }); }
  // onExpenseSave = () => {
  //   this.closeExpenseCreate();
  //   this.loadData();
  // }
  // loadData = () => {
  //   Categories.list().then(
  //     (cResp) => {
  //       this.setState({ categories: cResp });
  //       Expenses.list({ paid_after: moment().startOf('month').unix() }).then(
  //         (eResp) => {
  //           this.setState({ expenses: eResp });
  //           Goals.list().then(
  //             (gResp) => { this.setState({ loaded: true, monthlyGoal: gResp.monthly }); },
  //             () => { Alerts.genericError(); },
  //           );
  //         },
  //         () => { Alerts.genericError(); },
  //       );
  //     },
  //     () => { Alerts.genericError(); },
  //   );
  // }
  // categoriesWithExpensesAndSpend() {
  //   const categories = [];
  //   this.state.categories.forEach((category) => {
  //     category.expenses = this.state.expenses.filter((expense) => expense.category_id == category.id);
  //     category.spend = category.expenses.reduce((sum, exp) => sum + exp.amount, 0);
  //     categories.push(category);
  //   });
  //   return categories;
  // }
  // renderExpenseCreateModal() {
  //   if (!this.state.showExpenseCreateModal) { return ''; }
  //   return <ExpenseFormModal categories={this.state.categories} onClose={this.closeExpenseCreate} onSave={this.onExpenseSave} />;
  // }


  var _proto = Main.prototype;

  _proto.render = function render() {
    var _React$createElement, _React$createElement2;

    // if (!this.state.loaded) { return ''; }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement2 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 71,
      columnNumber: 7
    }, _React$createElement2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", (_React$createElement = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 72,
      columnNumber: 9
    }, _React$createElement), "Testing!"));
  };

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

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
var _jsxFileName = "/ontrack/app/javascript/packs/projections.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/packs/projections.jsx",
    _this = undefined;




document.addEventListener('DOMContentLoaded', function () {
  var _Object$assign;

  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_projections_Main__WEBPACK_IMPORTED_MODULE_2__.default, Object.assign({}, window.InitialProps, (_Object$assign = {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_moment_locale_af_js-node_modules_moment_loca-1725af","vendors-node_modules_react-datepicker_dist_react-datepicker_min_js-node_modules_react-text-ma-b62690","app_javascript_api_main_js-app_javascript_helpers_main_js-node_modules_moment_locale_sync_rec-f85292","app_javascript_components_expenses_FormModal_jsx"], function() { return __webpack_exec__("./app/javascript/packs/projections.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=projections-f601071c6aae70f10d29.js.map