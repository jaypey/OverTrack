(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["create_config"],{

/***/ "./app/javascript/components/expenses/CreateConfig.jsx":
/*!*************************************************************!*\
  !*** ./app/javascript/components/expenses/CreateConfig.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_DatePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/DatePicker */ "./app/javascript/components/shared/DatePicker.jsx");
/* harmony import */ var _shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/CurrencyInput */ "./app/javascript/components/shared/CurrencyInput.jsx");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var CreateConfig = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CreateConfig, _React$Component);

  function CreateConfig(props) {
    return _React$Component.call(this, props) || this; // this.state = {
    //   expenses: props.expenses,
    //   submitting: false,
    // };
  } // handleExpenseDelete = (idx) => {
  //   const modifiedExpenses = [...this.state.expenses]; // Make a copy
  //   modifiedExpenses.splice(idx, 1);
  //   this.setState({ expenses: modifiedExpenses });
  // }
  // updateExpense = (idx, updates) => {
  //   const modifiedExpenses = [...this.state.expenses]; // Make a copy
  //   const modifiedExpense = Object.assign({ ...modifiedExpenses[idx] }, updates);
  //   modifiedExpenses[idx] = modifiedExpense;
  //   this.setState({ expenses: modifiedExpenses });
  // }
  // renderEmptyState() {
  //   if (this.props.expenses.length) { return ''; }
  //   return (
  //     <div className="empty-or-error-status mt-30">
  //       <div className="status-text">
  //         <h2>Nothing to import!</h2>
  //         <div>There are no expenses to import from your CSV.</div>
  //         <div className="mt-10">
  //           <a href="/expense_uploads/new" className="btn btn-dark">Go back</a>
  //         </div>
  //       </div>
  //       <img className="status-image" src={window.historian} />
  //     </div>
  //   );
  // }
  // cancel() {
  //   window.location = '/expense_uploads/new';
  // }
  // submit = () => {
  //   this.setState({ submitting: true });
  //   Expenses.bulkCreate({ expenses: this.state.expenses }).then(
  //     () => {
  //       this.setState({ submitting: false });
  //       Alerts.success('Your import was successful.', () => { window.location = '/expenses'; });
  //     },
  //     () => {
  //       this.setState({ submitting: false });
  //       Alerts.error('Something went wrong! Double check that your inputs are all valid.');
  //     },
  //   );
  // }
  // renderExpense(expense, idx) {
  //   return (
  //     <tr key={`${expense.paid_at}-${expense.amount}-${expense.description}-${idx}`}>
  //       <td className="input-group mw-150">
  //         <DatePicker onChange={(val) => this.updateExpense(idx, { paid_at: val })} value={new Date(expense.paid_at)} className="bg-gray-slight-contrast" />
  //       </td>
  //       <td className="input-group mw-200">
  //         <select defaultValue={expense.category_id} onChange={(e) => this.updateExpense(idx, { category_id: e.target.value })} className="bg-gray-slight-contrast">
  //           {this.props.categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
  //         </select>
  //       </td>
  //       <td className="input-group mw-100">
  //         <CurrencyInput
  //           initialValue={expense.amount}
  //           onBlur={(val) => this.updateExpense(idx, { amount: val })}
  //           allowNegative
  //           className="bg-gray-slight-contrast"
  //         />
  //       </td>
  //       <td className="input-group mw-300">
  //         <input defaultValue={expense.description} onBlur={(e) => { if (e.target.value.trim() != expense.description) { this.updateExpense(idx, { description: e.target.value.trim() }); } }} className="bg-gray-slight-contrast" />
  //       </td>
  //       <td>
  //         <a onClick={() => this.handleExpenseDelete(idx)} className="dim-til-hover"><i className="fa fa-times" /></a>
  //       </td>
  //     </tr>
  //   );
  // }


  var _proto = CreateConfig.prototype;

  _proto.render = function render() {
    return (
      /*#__PURE__*/
      // <div className="container pb-100">
      //   {this.renderEmptyState()}
      //   {this.props.expenses.length > 0 && (
      //     <>
      //       <h1>Review import ({this.state.expenses.length} items)</h1>
      //       <div>
      //         <div className="mt-30 mb-10">
      //           <em className="text-muted">Make any changes you want before submitting at the bottom of the page.</em>
      //         </div>
      //         <div className="overflow-x bg-gray p-10">
      //           <table className="table">
      //             <thead>
      //               <tr>
      //                 <th>Date</th>
      //                 <th>Category</th>
      //                 <th>Amount</th>
      //                 <th>Description</th>
      //                 <th />
      //               </tr>
      //             </thead>
      //             <tbody>
      //               {this.state.expenses.map((exp, idx) => this.renderExpense(exp, idx))}
      //             </tbody>
      //           </table>
      //         </div>
      //       </div>
      //       <div className="form-actions">
      //         <button
      //           type="submit"
      //           className="btn btn-dark"
      //           onClick={this.submit}
      //           disabled={this.state.submitting}
      //         >
      //           {this.state.submitting ? 'Submitting...' : 'Submit'}
      //         </button>
      //         <button type="button" className="btn" onClick={this.cancel}>Cancel</button>
      //       </div>
      //     </>
      //   )}
      // </div>
      react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, "Config Form for CSV")
    );
  };

  return CreateConfig;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component); // CreateConfig.defaultProps = {
//   categories: [],
//   expenses: [],
// };
// CreateConfig.propTypes = {
//   categories: PropTypes.array,
//   expenses: PropTypes.array,
// };


/* harmony default export */ __webpack_exports__["default"] = (CreateConfig);

/***/ }),

/***/ "./app/javascript/components/shared/CurrencyInput.jsx":
/*!************************************************************!*\
  !*** ./app/javascript/components/shared/CurrencyInput.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-text-mask */ "./node_modules/react-text-mask/dist/reactTextMask.js");
/* harmony import */ var react_text_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_text_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/ontrack/app/javascript/components/shared/CurrencyInput.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/shared/CurrencyInput.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CurrencyInput = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CurrencyInput, _React$Component);

  function CurrencyInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleChange = function (e) {
      if (!_this.props.onChange) {
        return;
      }

      var num = e.target.value.replace(/\$|,/g, '');
      var cents = parseInt(parseFloat(num).toFixed(2).replace(/\./g, ''));
      var normalized = isNaN(cents) ? 0 : cents;

      _this.props.onChange(normalized);
    };

    _this.handleBlur = function (e) {
      if (!_this.props.onBlur) {
        return;
      }

      var num = e.target.value.replace(/\$|,/g, '');
      var cents = parseInt(parseFloat(num).toFixed(2).replace(/\./g, ''));
      var normalized = isNaN(cents) ? 0 : cents;

      _this.props.onBlur(normalized);
    };

    return _this;
  }

  var _proto = CurrencyInput.prototype;

  _proto.render = function render() {
    var _React$createElement;

    var defaultMaskOptions = {
      prefix: '$',
      includeThousandsSeparator: true,
      thousandsSeparatorSymbol: ',',
      allowDecimal: true,
      decimalSymbol: '.',
      decimalLimit: 2,
      integerLimit: 7,
      allowLeadingZeroes: false,
      allowNegative: this.props.allowNegative
    };
    var currencyMask = text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_3___default()(defaultMaskOptions);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_text_mask__WEBPACK_IMPORTED_MODULE_2___default()), (_React$createElement = {
      placeholder: "$0.00",
      inputMode: "decimal",
      mask: currencyMask,
      onBlur: this.handleBlur,
      onChange: this.handleChange,
      defaultValue: this.props.initialValue ? (this.props.initialValue / 100).toFixed(2) : '',
      className: this.props.className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 38,
      columnNumber: 7
    }, _React$createElement));
  };

  return CurrencyInput;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

CurrencyInput.defaultProps = {
  initialValue: 0,
  allowNegative: false,
  className: '',
  onBlur: null,
  onChange: null
};
CurrencyInput.propTypes = {
  initialValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  allowNegative: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (CurrencyInput);

/***/ }),

/***/ "./app/javascript/components/shared/DatePicker.jsx":
/*!*********************************************************!*\
  !*** ./app/javascript/components/shared/DatePicker.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/ontrack/app/javascript/components/shared/DatePicker.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/shared/DatePicker.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Picker = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Picker, _React$Component);

  function Picker(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleChange = function (val) {
      _this.setState({
        startDate: val
      });

      _this.props.onChange(val);
    };

    _this.state = {
      startDate: _this.props.value
    };
    return _this;
  }

  var _proto = Picker.prototype;

  _proto.render = function render() {
    var _React$createElement;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_2___default()), (_React$createElement = {
      onChange: this.handleChange,
      selected: this.state.startDate,
      className: this.props.className,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 18,
      columnNumber: 7
    }, _React$createElement));
  };

  return Picker;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Picker.defaultProps = {
  value: new Date(),
  className: ''
};
Picker.propTypes = {
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (Picker);

/***/ }),

/***/ "./app/javascript/packs/create_config.jsx":
/*!************************************************!*\
  !*** ./app/javascript/packs/create_config.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_expenses_CreateConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/expenses/CreateConfig */ "./app/javascript/components/expenses/CreateConfig.jsx");
var _jsxFileName = "/ontrack/app/javascript/packs/create_config.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/packs/create_config.jsx",
    _this = undefined;




document.addEventListener('DOMContentLoaded', function () {
  var _React$createElement;

  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_expenses_CreateConfig__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, _React$createElement["__self"] = _this, _React$createElement["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 7,
    columnNumber: 5
  }, _React$createElement)), document.getElementById('create_config'));
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_moment_locale_af_js-node_modules_moment_loca-1725af","vendors-node_modules_react-datepicker_dist_react-datepicker_min_js-node_modules_react-text-ma-b62690","app_javascript_api_main_js-app_javascript_helpers_main_js-node_modules_moment_locale_sync_rec-f85292"], function() { return __webpack_exec__("./app/javascript/packs/create_config.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=create_config-b5a5affef7e9b2b9aefc.js.map