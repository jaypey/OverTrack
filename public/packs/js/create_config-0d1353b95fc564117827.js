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
var _jsxFileName = "/ontrack/app/javascript/components/expenses/CreateConfig.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/expenses/CreateConfig.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var CreateConfig = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CreateConfig, _React$Component);

  function CreateConfig(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleErrors = function (key, errs) {
      var _Object$assign;

      _this.setState({
        errors: Object.assign(_this.state.errors, (_Object$assign = {}, _Object$assign[key] = errs, _Object$assign))
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
    };

    return _this;
  }

  var _proto = CreateConfig.prototype;

  _proto.render = function render() {
    var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", (_React$createElement4 = {
      id: "create-config-form",
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 19,
      columnNumber: 7
    }, _React$createElement4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement3 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 20,
      columnNumber: 9
    }, _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 21,
      columnNumber: 11
    }, _React$createElement), "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_FieldErrors__WEBPACK_IMPORTED_MODULE_1__.default, (_React$createElement2 = {
      label: "Amount",
      val: this.state.amount,
      validations: {
        required: true
      },
      show: this.state.submitted,
      handleErrors: this.handleErrors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 22,
      columnNumber: 11
    }, _React$createElement2))));
  };

  return CreateConfig;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (CreateConfig);

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
//# sourceMappingURL=create_config-0d1353b95fc564117827.js.map