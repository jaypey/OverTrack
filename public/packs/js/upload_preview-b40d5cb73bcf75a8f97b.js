(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["upload_preview"],{

/***/ "./app/javascript/components/expenses/UploadPreview.jsx":
/*!**************************************************************!*\
  !*** ./app/javascript/components/expenses/UploadPreview.jsx ***!
  \**************************************************************/
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
var _jsxFileName = "/ontrack/app/javascript/components/expenses/UploadPreview.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/expenses/UploadPreview.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var UploadPreview = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(UploadPreview, _React$Component);

  function UploadPreview(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleExpenseDelete = function (idx) {
      var modifiedExpenses = [].concat(_this.state.expenses); // Make a copy

      modifiedExpenses.splice(idx, 1);

      _this.setState({
        expenses: modifiedExpenses
      });
    };

    _this.updateExpense = function (idx, updates) {
      var modifiedExpenses = [].concat(_this.state.expenses); // Make a copy

      var modifiedExpense = Object.assign(_objectSpread({}, modifiedExpenses[idx]), updates);
      modifiedExpenses[idx] = modifiedExpense;

      _this.setState({
        expenses: modifiedExpenses
      });
    };

    _this.submit = function () {
      _this.setState({
        submitting: true
      });

      _api_main__WEBPACK_IMPORTED_MODULE_4__.Expenses.bulkCreate({
        expenses: _this.state.expenses
      }).then(function () {
        _this.setState({
          submitting: false
        });

        _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.success('Your import was successful.', function () {
          window.location = '/expenses';
        });
      }, function () {
        _this.setState({
          submitting: false
        });

        _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.error('Something went wrong! Double check that your inputs are all valid.');
      });
    };

    _this.state = {
      expenses: props.expenses,
      submitting: false
    };
    return _this;
  }

  var _proto = UploadPreview.prototype;

  _proto.renderEmptyState = function renderEmptyState() {
    var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7;

    if (this.props.expenses.length) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
      className: "empty-or-error-status mt-30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 33,
      columnNumber: 7
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement5 = {
      className: "status-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 34,
      columnNumber: 9
    }, _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", (_React$createElement = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 35,
      columnNumber: 11
    }, _React$createElement), "Nothing to import!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement2 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 36,
      columnNumber: 11
    }, _React$createElement2), "There are no expenses to import from your CSV."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement4 = {
      className: "mt-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 37,
      columnNumber: 11
    }, _React$createElement4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement3 = {
      href: "/expense_uploads/new",
      className: "btn btn-dark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 38,
      columnNumber: 13
    }, _React$createElement3), "Go back"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", (_React$createElement6 = {
      className: "status-image",
      src: window.historian,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 41,
      columnNumber: 9
    }, _React$createElement6)));
  };

  _proto.cancel = function cancel() {
    window.location = '/expense_uploads/new';
  };

  _proto.renderExpense = function renderExpense(expense, idx) {
    var _this2 = this,
        _React$createElement8,
        _React$createElement9,
        _React$createElement11,
        _React$createElement12,
        _React$createElement13,
        _React$createElement14,
        _React$createElement15,
        _React$createElement16,
        _React$createElement17,
        _React$createElement18,
        _React$createElement19,
        _React$createElement20;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement20 = {
      key: expense.paid_at + "-" + expense.amount + "-" + expense.description + "-" + idx,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 67,
      columnNumber: 7
    }, _React$createElement20), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement9 = {
      className: "input-group mw-150",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 68,
      columnNumber: 9
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement8 = {
      onChange: function onChange(val) {
        return _this2.updateExpense(idx, {
          paid_at: val
        });
      },
      value: new Date(expense.paid_at),
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 69,
      columnNumber: 11
    }, _React$createElement8))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement12 = {
      className: "input-group mw-200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 72,
      columnNumber: 9
    }, _React$createElement12), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement11 = {
      defaultValue: expense.category_id,
      onChange: function onChange(e) {
        return _this2.updateExpense(idx, {
          category_id: e.target.value
        });
      },
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 73,
      columnNumber: 11
    }, _React$createElement11), this.props.categories.map(function (c) {
      var _React$createElement10;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement10 = {
        key: c.id,
        value: c.id,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 47
        }
      }, _React$createElement10["__self"] = _this2, _React$createElement10["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 74,
        columnNumber: 47
      }, _React$createElement10), c.name);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement14 = {
      className: "input-group mw-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 78,
      columnNumber: 9
    }, _React$createElement14), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement13 = {
      initialValue: expense.amount,
      onBlur: function onBlur(val) {
        return _this2.updateExpense(idx, {
          amount: val
        });
      },
      allowNegative: true,
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 79,
      columnNumber: 11
    }, _React$createElement13))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement16 = {
      className: "input-group mw-300",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 87,
      columnNumber: 9
    }, _React$createElement16), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement15 = {
      defaultValue: expense.description,
      onBlur: function onBlur(e) {
        if (e.target.value.trim() != expense.description) {
          _this2.updateExpense(idx, {
            description: e.target.value.trim()
          });
        }
      },
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 88,
      columnNumber: 11
    }, _React$createElement15))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement19 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 91,
      columnNumber: 9
    }, _React$createElement19), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement18 = {
      onClick: function onClick() {
        return _this2.handleExpenseDelete(idx);
      },
      className: "dim-til-hover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 92,
      columnNumber: 11
    }, _React$createElement18), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement17 = {
      className: "fa fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 86
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 92,
      columnNumber: 86
    }, _React$createElement17)))));
  };

  _proto.render = function render() {
    var _React$createElement21,
        _React$createElement22,
        _React$createElement23,
        _React$createElement24,
        _React$createElement25,
        _React$createElement26,
        _React$createElement27,
        _React$createElement28,
        _React$createElement29,
        _React$createElement30,
        _this3 = this,
        _React$createElement31,
        _React$createElement32,
        _React$createElement33,
        _React$createElement34,
        _React$createElement35,
        _React$createElement36,
        _React$createElement37,
        _React$createElement38;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement38 = {
      className: "container pb-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }
    }, _React$createElement38["__self"] = this, _React$createElement38["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 100,
      columnNumber: 7
    }, _React$createElement38), this.renderEmptyState(), this.props.expenses.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", (_React$createElement21 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, _React$createElement21["__self"] = this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 105,
      columnNumber: 13
    }, _React$createElement21), "Review import (", this.state.expenses.length, " items)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement34 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    }, _React$createElement34["__self"] = this, _React$createElement34["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 106,
      columnNumber: 13
    }, _React$createElement34), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement23 = {
      className: "mt-30 mb-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 15
      }
    }, _React$createElement23["__self"] = this, _React$createElement23["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 107,
      columnNumber: 15
    }, _React$createElement23), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", (_React$createElement22 = {
      className: "text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, _React$createElement22["__self"] = this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 108,
      columnNumber: 17
    }, _React$createElement22), "Make any changes you want before submitting at the bottom of the page.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement33 = {
      className: "overflow-x bg-gray p-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 15
      }
    }, _React$createElement33["__self"] = this, _React$createElement33["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 110,
      columnNumber: 15
    }, _React$createElement33), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement32 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, _React$createElement32["__self"] = this, _React$createElement32["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 111,
      columnNumber: 17
    }, _React$createElement32), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement30 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }, _React$createElement30["__self"] = this, _React$createElement30["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 112,
      columnNumber: 19
    }, _React$createElement30), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement29 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 21
      }
    }, _React$createElement29["__self"] = this, _React$createElement29["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 113,
      columnNumber: 21
    }, _React$createElement29), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement24 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 23
      }
    }, _React$createElement24["__self"] = this, _React$createElement24["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 114,
      columnNumber: 23
    }, _React$createElement24), "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement25 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 23
      }
    }, _React$createElement25["__self"] = this, _React$createElement25["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 115,
      columnNumber: 23
    }, _React$createElement25), "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement26 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 23
      }
    }, _React$createElement26["__self"] = this, _React$createElement26["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 116,
      columnNumber: 23
    }, _React$createElement26), "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement27 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 23
      }
    }, _React$createElement27["__self"] = this, _React$createElement27["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 117,
      columnNumber: 23
    }, _React$createElement27), "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement28 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 23
      }
    }, _React$createElement28["__self"] = this, _React$createElement28["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 118,
      columnNumber: 23
    }, _React$createElement28)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement31 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 19
      }
    }, _React$createElement31["__self"] = this, _React$createElement31["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 121,
      columnNumber: 19
    }, _React$createElement31), this.state.expenses.map(function (exp, idx) {
      return _this3.renderExpense(exp, idx);
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement37 = {
      className: "form-actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    }, _React$createElement37["__self"] = this, _React$createElement37["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 128,
      columnNumber: 13
    }, _React$createElement37), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement35 = {
      type: "submit",
      className: "btn btn-dark",
      onClick: this.submit,
      disabled: this.state.submitting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 15
      }
    }, _React$createElement35["__self"] = this, _React$createElement35["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 129,
      columnNumber: 15
    }, _React$createElement35), this.state.submitting ? 'Submitting...' : 'Submit'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement36 = {
      type: "button",
      className: "btn",
      onClick: this.cancel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 15
      }
    }, _React$createElement36["__self"] = this, _React$createElement36["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 137,
      columnNumber: 15
    }, _React$createElement36), "Cancel"))));
  };

  return UploadPreview;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

UploadPreview.defaultProps = {
  categories: [],
  expenses: []
};
UploadPreview.propTypes = {
  categories: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  expenses: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (UploadPreview);

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

/***/ "./app/javascript/packs/upload_preview.jsx":
/*!*************************************************!*\
  !*** ./app/javascript/packs/upload_preview.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_expenses_UploadPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/expenses/UploadPreview */ "./app/javascript/components/expenses/UploadPreview.jsx");
var _jsxFileName = "/ontrack/app/javascript/packs/upload_preview.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/packs/upload_preview.jsx",
    _this = undefined;




document.addEventListener('DOMContentLoaded', function () {
  var _Object$assign;

  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_expenses_UploadPreview__WEBPACK_IMPORTED_MODULE_2__.default, Object.assign({}, window.InitialProps, (_Object$assign = {
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
  }, _Object$assign))), document.getElementById('upload_preview'));
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_moment_locale_af_js-node_modules_moment_loca-6cbc58","vendors-node_modules_prop-types_index_js","vendors-node_modules_react-datepicker_dist_react-datepicker_min_js-node_modules_react-text-ma-b62690","app_javascript_api_main_js-app_javascript_helpers_main_js-node_modules_moment_locale_sync_rec-f85292"], function() { return __webpack_exec__("./app/javascript/packs/upload_preview.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=upload_preview-b40d5cb73bcf75a8f97b.js.map