(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["create_config"],{

/***/ "./app/javascript/components/expenses/CreateConfig.jsx":
/*!*************************************************************!*\
  !*** ./app/javascript/components/expenses/CreateConfig.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_FieldErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/FieldErrors */ "./app/javascript/components/shared/FieldErrors.jsx");
/* harmony import */ var _GenericList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GenericList */ "./app/javascript/components/expenses/GenericList.jsx");
var _jsxFileName = "/ontrack/app/javascript/components/expenses/CreateConfig.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/expenses/CreateConfig.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CreateConfig = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CreateConfig, _React$Component);

  function CreateConfig(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleRemoveSubstring = function (substringToDelete) {
      var stringToDelete = substringToDelete.trim();
      console.log(stringToDelete);
      console.log(_this.state);
      if (stringToDelete != "") _this.setState({
        ignoredSubstring: _this.state.ignoredSubstring.filter(function (e) {
          return e !== stringToDelete;
        })
      });
    };

    _this.handleAddSubstring = function () {
      var currentString = _this.state.currentSubstring.trim();

      if (currentString != "") {
        _this.setState(function (prevState) {
          return {
            ignoredSubstring: [].concat(prevState.ignoredSubstring.filter(function (e) {
              return e !== currentString;
            }), currentString).sort()
          };
        });

        _this.setState({
          currentSubstring: ""
        });
      }
    };

    _this.handleDescriptionIdxChange = function (e) {
      _this.setState({
        descriptionIdx: e.target.value
      });
    };

    _this.handleCategoryIdxChange = function (e) {
      _this.setState({
        categoryIdx: e.target.value
      });
    };

    _this.handleAmountIdxChange = function (e) {
      _this.setState({
        amountIdx: e.target.value
      });
    };

    _this.handleDateIdxChange = function (e) {
      _this.setState({
        dateIdx: e.target.value
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
    };

    _this.state = {
      descriptionIdx: 0,
      categoryIdx: 0,
      amountIdx: 0,
      dateIdx: 0,
      ignoredSubstring: [],
      currentSubstring: ""
    };
    return _this;
  }

  var _proto = CreateConfig.prototype;

  _proto.render = function render() {
    var _React$createElement,
        _React$createElement2,
        _React$createElement3,
        _React$createElement4,
        _React$createElement5,
        _this2 = this,
        _React$createElement6,
        _React$createElement7,
        _React$createElement8,
        _React$createElement9,
        _React$createElement10,
        _React$createElement11,
        _React$createElement12,
        _React$createElement13,
        _React$createElement14,
        _React$createElement15,
        _React$createElement16,
        _React$createElement17,
        _React$createElement18,
        _React$createElement19,
        _React$createElement20,
        _React$createElement21,
        _React$createElement22,
        _React$createElement23,
        _React$createElement24,
        _React$createElement25,
        _React$createElement26,
        _React$createElement27,
        _React$createElement28,
        _React$createElement29;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", (_React$createElement29 = {
      id: "config-form",
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, _React$createElement29["__self"] = this, _React$createElement29["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 60,
      columnNumber: 7
    }, _React$createElement29), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement13 = {
      className: "config-description-container config-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 62,
      columnNumber: 9
    }, _React$createElement13), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 63,
      columnNumber: 11
    }, _React$createElement), "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement4 = {
      className: "input-group config-idx",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 64,
      columnNumber: 11
    }, _React$createElement4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement2 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 65,
      columnNumber: 13
    }, _React$createElement2), "Index"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement3 = {
      className: "config-input config-idx-input",
      type: "number",
      min: "0",
      value: this.state.descriptionIdx,
      onChange: this.handleDescriptionIdxChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 66,
      columnNumber: 13
    }, _React$createElement3))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement5 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 70,
      columnNumber: 11
    }, _React$createElement5), "Ignored text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement12 = {
      className: "config-list-input-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 71,
      columnNumber: 11
    }, _React$createElement12), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement9 = {
      className: "config-list-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 72,
      columnNumber: 13
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement8 = {
      className: "input-and-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 73,
      columnNumber: 15
    }, _React$createElement8), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement6 = {
      className: "config-input config-list-textbox",
      onChange: function onChange(e) {
        return _this2.setState({
          currentSubstring: e.target.value
        });
      },
      value: this.state.currentSubstring,
      type: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 74,
      columnNumber: 17
    }, _React$createElement6)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement7 = {
      onClick: this.handleAddSubstring,
      className: "config-add-substring fa fa-plus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 76,
      columnNumber: 17
    }, _React$createElement7)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement11 = {
      className: "config-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 79,
      columnNumber: 13
    }, _React$createElement11), this.state.ignoredSubstring.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GenericList__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement10 = {
      handleDelete: this.handleRemoveSubstring,
      list: this.state.ignoredSubstring,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 58
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 80,
      columnNumber: 58
    }, _React$createElement10))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement18 = {
      className: "config-category-container config-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 85,
      columnNumber: 9
    }, _React$createElement18), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement14 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 86,
      columnNumber: 9
    }, _React$createElement14), "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement17 = {
      className: "input-group config-idx",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 87,
      columnNumber: 11
    }, _React$createElement17), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement15 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 88,
      columnNumber: 13
    }, _React$createElement15), "Index"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement16 = {
      className: "config-input config-idx-input",
      type: "number",
      min: "0",
      value: this.state.categoryIdx,
      onChange: this.handleCategoryIdxChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 89,
      columnNumber: 13
    }, _React$createElement16)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement23 = {
      className: "config-amount-container config-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, _React$createElement23["__self"] = this, _React$createElement23["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 95,
      columnNumber: 9
    }, _React$createElement23), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement19 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 96,
      columnNumber: 11
    }, _React$createElement19), "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement22 = {
      className: "input-group config-idx",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    }, _React$createElement22["__self"] = this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 97,
      columnNumber: 11
    }, _React$createElement22), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement20 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 98,
      columnNumber: 13
    }, _React$createElement20), "Index"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement21 = {
      className: "config-input config-idx-input",
      type: "number",
      min: "0",
      value: this.state.amountIdx,
      onChange: this.handleAmountIdxChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, _React$createElement21["__self"] = this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 99,
      columnNumber: 13
    }, _React$createElement21)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement28 = {
      className: "config-date-container config-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }
    }, _React$createElement28["__self"] = this, _React$createElement28["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 106,
      columnNumber: 9
    }, _React$createElement28), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement24 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }, _React$createElement24["__self"] = this, _React$createElement24["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 107,
      columnNumber: 11
    }, _React$createElement24), "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement27 = {
      className: "input-group config-idx",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }, _React$createElement27["__self"] = this, _React$createElement27["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 108,
      columnNumber: 11
    }, _React$createElement27), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement25 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    }, _React$createElement25["__self"] = this, _React$createElement25["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 109,
      columnNumber: 13
    }, _React$createElement25), "Index"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement26 = {
      className: "config-input config-idx-input",
      type: "number",
      min: "0",
      value: this.state.dateIdx,
      onChange: this.handleDateIdxChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }, _React$createElement26["__self"] = this, _React$createElement26["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 110,
      columnNumber: 13
    }, _React$createElement26)))));
  };

  return CreateConfig;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (CreateConfig);

/***/ }),

/***/ "./app/javascript/components/expenses/GenericList.jsx":
/*!************************************************************!*\
  !*** ./app/javascript/components/expenses/GenericList.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _GenericListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenericListItem */ "./app/javascript/components/expenses/GenericListItem.jsx");
var _jsxFileName = "/ontrack/app/javascript/components/expenses/GenericList.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/expenses/GenericList.jsx",
    _this = undefined;




var GenericList = function GenericList(_ref) {
  var handleDelete = _ref.handleDelete,
      list = _ref.list;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, list.map(function (item, index) {
    var _React$createElement;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GenericListItem__WEBPACK_IMPORTED_MODULE_1__.default, (_React$createElement = {
      key: index,
      handleDelete: handleDelete,
      text: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, _React$createElement["__self"] = _this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 11,
      columnNumber: 21
    }, _React$createElement));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GenericList);

/***/ }),

/***/ "./app/javascript/components/expenses/GenericListItem.jsx":
/*!****************************************************************!*\
  !*** ./app/javascript/components/expenses/GenericListItem.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _jsxFileName = "/ontrack/app/javascript/components/expenses/GenericListItem.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/expenses/GenericListItem.jsx",
    _this = undefined;



var GenericListItem = function GenericListItem(_ref) {
  var _React$createElement, _React$createElement2, _React$createElement3;

  var handleDelete = _ref.handleDelete,
      text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement3 = {
    className: "generic-item-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, _React$createElement3["__self"] = _this, _React$createElement3["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 5,
    columnNumber: 9
  }, _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement = {
    className: "generic-item-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, _React$createElement["__self"] = _this, _React$createElement["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 6,
    columnNumber: 13
  }, _React$createElement), text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement2 = {
    onClick: function onClick() {
      return handleDelete(text);
    },
    className: "fa fa-times generic-item-delete",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, _React$createElement2["__self"] = _this, _React$createElement2["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 7,
    columnNumber: 13
  }, _React$createElement2)));
};

/* harmony default export */ __webpack_exports__["default"] = (GenericListItem);

/***/ }),

/***/ "./app/javascript/components/shared/FieldErrors.jsx":
/*!**********************************************************!*\
  !*** ./app/javascript/components/shared/FieldErrors.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/ontrack/app/javascript/components/shared/FieldErrors.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/shared/FieldErrors.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FieldErrors = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FieldErrors, _React$Component);

  function FieldErrors(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      errors: []
    };
    return _this;
  }

  var _proto = FieldErrors.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.buildErrorMessages();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.show != prevProps.show) {
      this.buildErrorMessages();
    }

    if (this.props.val != prevProps.val) {
      this.buildErrorMessages();
    }

    if (JSON.stringify(this.props.validations) != JSON.stringify(prevProps.validations)) {
      this.buildErrorMessages();
    }
  };

  _proto.valRequired = function valRequired() {
    var val = this.props.val;

    if (typeof val == 'number') {
      if (val == undefined || val == null || isNaN(parseInt(val.toString()))) {
        return false;
      }
    } else if (!val) {
      return false;
    }

    return true;
  };

  _proto.valGreaterThan = function valGreaterThan() {
    var val = this.props.val;

    if (parseFloat(val.toString()) <= this.props.validations.greaterThan) {
      return false;
    }

    return true;
  };

  _proto.buildErrorMessages = function buildErrorMessages() {
    var errs = [];

    if (this.props.validations.required && !this.valRequired()) {
      errs.push(this.props.label + " is required");
    }

    if (this.props.validations.greaterThan != undefined && !this.valGreaterThan()) {
      errs.push(this.props.label + " must be greater than " + this.props.validations.greaterThan);
    }

    this.setState({
      errors: errs
    });

    if (this.props.handleErrors) {
      this.props.handleErrors(this.props.label, errs);
    }
  };

  _proto.renderError = function renderError(e, idx) {
    var _React$createElement;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", (_React$createElement = {
      key: idx,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 12
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 48,
      columnNumber: 12
    }, _React$createElement), e);
  };

  _proto.render = function render() {
    var _this2 = this,
        _React$createElement2;

    if (!this.props.show || !this.state.errors.length) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", (_React$createElement2 = {
      className: "errors",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 55,
      columnNumber: 7
    }, _React$createElement2), this.state.errors.map(function (e, idx) {
      return _this2.renderError(e, idx);
    }));
  };

  return FieldErrors;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

FieldErrors.defaultProps = {
  val: null,
  validations: {},
  show: false,
  handleErrors: null,
  label: ''
};
FieldErrors.propTypes = {
  val: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  validations: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  show: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  handleErrors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ __webpack_exports__["default"] = (FieldErrors);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_prop-types_index_js-node_modules_react-dom_index_js"], function() { return __webpack_exec__("./app/javascript/packs/create_config.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=create_config-606ecd378916b4fc6da5.js.map