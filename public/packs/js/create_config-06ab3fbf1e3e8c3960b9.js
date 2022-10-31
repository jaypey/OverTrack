(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["create_config"],{

/***/ "./app/javascript/api/main.js":
/*!************************************!*\
  !*** ./app/javascript/api/main.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Categories": function() { return /* reexport safe */ _modules_categories__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "Expenses": function() { return /* reexport safe */ _modules_expenses__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "Goals": function() { return /* reexport safe */ _modules_goals__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "Reports": function() { return /* reexport safe */ _modules_reports__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "CsvConfig": function() { return /* reexport safe */ _modules_csv_config__WEBPACK_IMPORTED_MODULE_5__.default; },
/* harmony export */   "Base": function() { return /* reexport safe */ _modules_base__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _modules_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/base */ "./app/javascript/api/modules/base.js");
/* harmony import */ var _modules_categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/categories */ "./app/javascript/api/modules/categories.js");
/* harmony import */ var _modules_expenses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/expenses */ "./app/javascript/api/modules/expenses.js");
/* harmony import */ var _modules_goals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/goals */ "./app/javascript/api/modules/goals.js");
/* harmony import */ var _modules_reports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/reports */ "./app/javascript/api/modules/reports.js");
/* harmony import */ var _modules_csv_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/csv_config */ "./app/javascript/api/modules/csv_config.js");








/***/ }),

/***/ "./app/javascript/api/modules/base.js":
/*!********************************************!*\
  !*** ./app/javascript/api/modules/base.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var apiAxiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: '/api/v1',
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});
var Base = {
  makeRequest: function makeRequest(requestObj) {
    var csrfToken = document.querySelector('meta[name=csrf-token]').content;
    apiAxiosInstance.defaults.headers.common['X-CSRF-Token'] = csrfToken;
    return new Promise(function (resolve, reject) {
      apiAxiosInstance(requestObj).then(function (success) {
        resolve(success.data);
      }, function (error) {
        reject(error.response);
      });
    });
  },
  get: function get(path, params, opts) {
    return this.makeRequest({
      url: path,
      method: 'GET',
      params: params
    }, opts);
  },
  "delete": function _delete(path, params, opts) {
    return this.makeRequest({
      url: path,
      method: 'DELETE',
      params: params
    }, opts);
  },
  post: function post(path, data, opts) {
    return this.makeRequest({
      url: path,
      data: data,
      method: 'POST'
    }, opts);
  },
  put: function put(path, data, opts) {
    return this.makeRequest({
      url: path,
      data: data,
      method: 'PUT'
    }, opts);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Base);

/***/ }),

/***/ "./app/javascript/api/modules/categories.js":
/*!**************************************************!*\
  !*** ./app/javascript/api/modules/categories.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./app/javascript/api/modules/base.js");

var Categories = {
  list: function list(params, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.get('/categories', params, opts || {});
  },
  create: function create(data, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.post('/categories', data, opts || {});
  },
  update: function update(id, data, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.put("/categories/" + id, data, opts || {});
  },
  "delete": function _delete(id, params, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.delete("/categories/" + id, params, opts || {});
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "./app/javascript/api/modules/csv_config.js":
/*!**************************************************!*\
  !*** ./app/javascript/api/modules/csv_config.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./app/javascript/api/modules/base.js");

var CsvConfig = {
  create: function create(data, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.post('/csv_config', data, opts || {});
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CsvConfig);

/***/ }),

/***/ "./app/javascript/api/modules/expenses.js":
/*!************************************************!*\
  !*** ./app/javascript/api/modules/expenses.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./app/javascript/api/modules/base.js");

var Expenses = {
  list: function list(params, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.get('/expenses', params, opts || {});
  },
  create: function create(data, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.post('/expenses', data, opts || {});
  },
  bulkCreate: function bulkCreate(data, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.post('/expenses/bulk_create', data, opts || {});
  },
  "delete": function _delete(id, params, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.delete("/expenses/" + id, params, opts || {});
  },
  update: function update(id, data, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.put("/expenses/" + id, data, opts || {});
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Expenses);

/***/ }),

/***/ "./app/javascript/api/modules/goals.js":
/*!*********************************************!*\
  !*** ./app/javascript/api/modules/goals.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./app/javascript/api/modules/base.js");

var Goals = {
  list: function list(params, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.get('/goals', params, opts || {});
  },
  update: function update(data, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.put('/goals', data, opts || {});
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Goals);

/***/ }),

/***/ "./app/javascript/api/modules/reports.js":
/*!***********************************************!*\
  !*** ./app/javascript/api/modules/reports.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "./app/javascript/api/modules/base.js");

var Reports = {
  year: function year(params, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.get('/reports/year', params, opts || {});
  },
  month: function month(params, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return _base__WEBPACK_IMPORTED_MODULE_0__.default.get('/reports/month', params, opts || {});
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Reports);

/***/ }),

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
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/expenses/CreateConfig.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/expenses/CreateConfig.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CreateConfig = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CreateConfig, _React$Component);

  function CreateConfig(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var name = _this.state.configName;
      var config_json = {
        has_header: _this.state.hasHeader,
        descriptions: {
          index: _this.state.descriptionIdx,
          ignore_substrings: _this.state.ignoredSubstring
        },
        categories: {
          index: _this.state.categoryIdx,
          mappings: {}
        },
        amounts: {
          index: _this.state.amountIdx,
          spend_is_negative: _this.state.spendIsNegative,
          skip_non_spend: _this.state.skipNonSpend
        },
        timestamps: {
          index: _this.state.dateIdx
        },
        auto_detect: {
          filename_substring: "account1234",
          default_category: _this.state.defaultCategory
        }
      };
      console.log(name);
      console.log(config_json); // let apiCall = null;
      // apiCall = CsvConfig.create({
      //   name: this.state.configName,
      //   config_json: { has_head: this.state.hasHeader }
      // });
      // apiCall.then(
      //   (resp) => { this.props.onSave(resp); },
      //   () => { Alerts.genericError(); },
      // );
    };

    _this.handleRemoveSubstring = function (substringToDelete) {
      var stringToDelete = substringToDelete.trim();
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

    _this.handleAddSubtringKeyPress = function (e) {
      if (e.keyCode === 13) {
        _this.handleAddSubstring();
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

    _this.handleNameChange = function (e) {
      _this.setState({
        configName: e.target.value
      });
    };

    _this.handleHasHeaderChange = function (e) {
      _this.setState({
        hasHeader: e.target.checked
      });
    };

    _this.handleDefaultCategoryChange = function (e) {
      _this.setState({
        defaultCategory: e.target.value
      });
    };

    _this.handleSpendIsNegativeChange = function (e) {
      _this.setState({
        spendIsNegative: e.target.checked
      });
    };

    _this.handleSkipNonSpendChange = function (e) {
      _this.setState({
        skipNonSpend: e.target.checked
      });
    };

    _this.state = {
      configName: "",
      descriptionIdx: 0,
      categoryIdx: 0,
      amountIdx: 0,
      dateIdx: 0,
      ignoredSubstring: [],
      currentSubstring: "",
      hasHeader: false,
      spendIsNegative: false,
      skipNonSpend: false,
      defaultCategory: "Uncategorized"
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
        _React$createElement6,
        _React$createElement7,
        _React$createElement8,
        _React$createElement9,
        _React$createElement10,
        _React$createElement11,
        _React$createElement12,
        _React$createElement13,
        _React$createElement14,
        _this2 = this,
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
        _React$createElement29,
        _React$createElement30,
        _React$createElement31,
        _React$createElement32,
        _React$createElement33,
        _React$createElement34,
        _React$createElement35,
        _React$createElement36,
        _React$createElement37,
        _React$createElement38,
        _React$createElement39,
        _React$createElement40,
        _React$createElement41,
        _React$createElement42,
        _React$createElement43,
        _React$createElement44,
        _React$createElement45,
        _React$createElement46,
        _React$createElement47,
        _React$createElement48;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", (_React$createElement48 = {
      id: "config-form",
      onKeyDown: function onKeyDown(e) {
        e.key === 'Enter' && e.preventDefault();
      },
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }
    }, _React$createElement48["__self"] = this, _React$createElement48["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 116,
      columnNumber: 7
    }, _React$createElement48), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", (_React$createElement = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 119,
      columnNumber: 9
    }, _React$createElement), "CSV Configuration Creator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement9 = {
      className: "config-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 120,
      columnNumber: 9
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", (_React$createElement2 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 121,
      columnNumber: 11
    }, _React$createElement2), "Basic information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement5 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 122,
      columnNumber: 11
    }, _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement3 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 123,
      columnNumber: 13
    }, _React$createElement3), "Config name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement4 = {
      value: this.state.configName,
      onChange: this.handleNameChange,
      type: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 124,
      columnNumber: 13
    }, _React$createElement4))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement8 = {
      className: "config-checkbox-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 128,
      columnNumber: 11
    }, _React$createElement8), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement6 = {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Skip the first row of the CSV file (check this box if your file has a header)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 129,
      columnNumber: 13
    }, _React$createElement6), "Skip first row?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement7 = {
      value: this.state.hasHeader,
      onChange: this.handleHasHeaderChange,
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 130,
      columnNumber: 13
    }, _React$createElement7)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement22 = {
      className: "config-description-container config-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }
    }, _React$createElement22["__self"] = this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 136,
      columnNumber: 9
    }, _React$createElement22), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement10 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 137,
      columnNumber: 11
    }, _React$createElement10), "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement13 = {
      className: "input-group config-idx",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 138,
      columnNumber: 11
    }, _React$createElement13), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement11 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 139,
      columnNumber: 13
    }, _React$createElement11), "Index"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement12 = {
      className: "config-input config-idx-input",
      type: "number",
      min: "0",
      value: this.state.descriptionIdx,
      onChange: this.handleDescriptionIdxChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 140,
      columnNumber: 13
    }, _React$createElement12))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement14 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 11
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 144,
      columnNumber: 11
    }, _React$createElement14), "Ignored text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement21 = {
      className: "config-list-input-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }
    }, _React$createElement21["__self"] = this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 145,
      columnNumber: 11
    }, _React$createElement21), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement18 = {
      className: "config-list-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 146,
      columnNumber: 13
    }, _React$createElement18), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement17 = {
      className: "input-and-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 15
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 147,
      columnNumber: 15
    }, _React$createElement17), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement15 = {
      className: "config-input config-list-textbox",
      onChange: function onChange(e) {
        return _this2.setState({
          currentSubstring: e.target.value
        });
      },
      onKeyDown: this.handleAddSubtringKeyPress,
      value: this.state.currentSubstring,
      type: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 148,
      columnNumber: 17
    }, _React$createElement15)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement16 = {
      onClick: this.handleAddSubstring,
      className: "config-add-substring fa fa-plus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 153,
      columnNumber: 17
    }, _React$createElement16)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement20 = {
      className: "config-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 158,
      columnNumber: 13
    }, _React$createElement20), this.state.ignoredSubstring.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GenericList__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement19 = {
      handleDelete: this.handleRemoveSubstring,
      list: this.state.ignoredSubstring,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 58
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 159,
      columnNumber: 58
    }, _React$createElement19))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement30 = {
      className: "config-category-container config-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }
    }, _React$createElement30["__self"] = this, _React$createElement30["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 164,
      columnNumber: 9
    }, _React$createElement30), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement23 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }
    }, _React$createElement23["__self"] = this, _React$createElement23["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 165,
      columnNumber: 11
    }, _React$createElement23), "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement26 = {
      className: "input-group config-idx",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }
    }, _React$createElement26["__self"] = this, _React$createElement26["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 166,
      columnNumber: 11
    }, _React$createElement26), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement24 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }
    }, _React$createElement24["__self"] = this, _React$createElement24["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 167,
      columnNumber: 13
    }, _React$createElement24), "Index"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement25 = {
      className: "config-input config-idx-input",
      type: "number",
      min: "0",
      value: this.state.categoryIdx,
      onChange: this.handleCategoryIdxChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }
    }, _React$createElement25["__self"] = this, _React$createElement25["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 168,
      columnNumber: 13
    }, _React$createElement25))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement29 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 11
      }
    }, _React$createElement29["__self"] = this, _React$createElement29["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 172,
      columnNumber: 11
    }, _React$createElement29), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement27 = {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Default category to use if the category of the row isn't registered in OverTrack",
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 13
      }
    }, _React$createElement27["__self"] = this, _React$createElement27["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 173,
      columnNumber: 13
    }, _React$createElement27), "Default category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement28 = {
      className: "config-input",
      type: "text",
      value: this.state.defaultCategory,
      onChange: this.handleDefaultCategoryChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 13
      }
    }, _React$createElement28["__self"] = this, _React$createElement28["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 174,
      columnNumber: 13
    }, _React$createElement28)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement41 = {
      className: "config-amount-container config-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }
    }, _React$createElement41["__self"] = this, _React$createElement41["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 180,
      columnNumber: 9
    }, _React$createElement41), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement31 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 11
      }
    }, _React$createElement31["__self"] = this, _React$createElement31["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 181,
      columnNumber: 11
    }, _React$createElement31), "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement34 = {
      className: "input-group config-idx",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }
    }, _React$createElement34["__self"] = this, _React$createElement34["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 182,
      columnNumber: 11
    }, _React$createElement34), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement32 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, _React$createElement32["__self"] = this, _React$createElement32["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 183,
      columnNumber: 13
    }, _React$createElement32), "Index"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement33 = {
      className: "config-input config-idx-input",
      type: "number",
      min: "0",
      value: this.state.amountIdx,
      onChange: this.handleAmountIdxChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }
    }, _React$createElement33["__self"] = this, _React$createElement33["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 184,
      columnNumber: 13
    }, _React$createElement33))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement37 = {
      className: "config-checkbox-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 11
      }
    }, _React$createElement37["__self"] = this, _React$createElement37["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 189,
      columnNumber: 11
    }, _React$createElement37), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement35 = {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Amounts that starts with a minus (-) is considered a spending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }
    }, _React$createElement35["__self"] = this, _React$createElement35["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 190,
      columnNumber: 13
    }, _React$createElement35), "Spend is negative?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement36 = {
      value: this.state.spendIsNegative,
      onChange: this.handleSpendIsNegativeChange,
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, _React$createElement36["__self"] = this, _React$createElement36["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 191,
      columnNumber: 13
    }, _React$createElement36))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement40 = {
      className: "config-checkbox-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 11
      }
    }, _React$createElement40["__self"] = this, _React$createElement40["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 196,
      columnNumber: 11
    }, _React$createElement40), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement38 = {
      "data-toggle": "tooltip",
      "data-placement": "top",
      title: "Skip all amounts that aren't considered a spending",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 13
      }
    }, _React$createElement38["__self"] = this, _React$createElement38["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 197,
      columnNumber: 13
    }, _React$createElement38), "Skip non spend?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement39 = {
      value: this.state.skipNonSpend,
      onChange: this.handleSkipNonSpendChange,
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }
    }, _React$createElement39["__self"] = this, _React$createElement39["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 198,
      columnNumber: 13
    }, _React$createElement39)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement46 = {
      className: "config-date-container config-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }
    }, _React$createElement46["__self"] = this, _React$createElement46["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 205,
      columnNumber: 9
    }, _React$createElement46), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement42 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 11
      }
    }, _React$createElement42["__self"] = this, _React$createElement42["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 206,
      columnNumber: 11
    }, _React$createElement42), "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement45 = {
      className: "input-group config-idx",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 11
      }
    }, _React$createElement45["__self"] = this, _React$createElement45["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 207,
      columnNumber: 11
    }, _React$createElement45), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement43 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, _React$createElement43["__self"] = this, _React$createElement43["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 208,
      columnNumber: 13
    }, _React$createElement43), "Index"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement44 = {
      className: "config-input config-idx-input",
      type: "number",
      min: "0",
      value: this.state.dateIdx,
      onChange: this.handleDateIdxChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 13
      }
    }, _React$createElement44["__self"] = this, _React$createElement44["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 209,
      columnNumber: 13
    }, _React$createElement44)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement47 = {
      type: "submit",
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 9
      }
    }, _React$createElement47["__self"] = this, _React$createElement47["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 215,
      columnNumber: 9
    }, _React$createElement47), "Create"));
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_prop-types_index_js-node_modules_react-dom_i-c60236"], function() { return __webpack_exec__("./app/javascript/packs/create_config.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=create_config-06ab3fbf1e3e8c3960b9.js.map