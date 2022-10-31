(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["dashboard"],{

/***/ "./app/javascript/components/categories/FormModal.jsx":
/*!************************************************************!*\
  !*** ./app/javascript/components/categories/FormModal.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Modal */ "./app/javascript/components/shared/Modal.jsx");
/* harmony import */ var _shared_ColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ColorPicker */ "./app/javascript/components/shared/ColorPicker.jsx");
/* harmony import */ var _shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/CurrencyInput */ "./app/javascript/components/shared/CurrencyInput.jsx");
/* harmony import */ var _shared_FieldErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/FieldErrors */ "./app/javascript/components/shared/FieldErrors.jsx");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/categories/FormModal.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/categories/FormModal.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var FormModal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FormModal, _React$Component);

  function FormModal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleNameChange = function (e) {
      _this.setState({
        name: e.target.value
      });
    };

    _this.handleGoalChange = function (num) {
      _this.setState({
        goal: num
      });
    };

    _this.handleColorChange = function (color) {
      _this.setState({
        color: color
      });
    };

    _this.handleRevenueChange = function (event) {
      if (event.target.checked) {
        _this.state.is_revenue = 1;
      } else {
        _this.state.is_revenue = 0;
      }

      setIsRevenue(function (current) {
        return !current;
      });
    };

    _this.handleErrors = function (key, errs) {
      var _Object$assign;

      _this.setState({
        errors: Object.assign(_this.state.errors, (_Object$assign = {}, _Object$assign[key] = errs, _Object$assign))
      });
    };

    _this.handleDelete = function () {
      _helpers_main__WEBPACK_IMPORTED_MODULE_7__.Alerts.genericDelete('category').then(function (result) {
        if (!result.value) {
          return;
        }

        _api_main__WEBPACK_IMPORTED_MODULE_6__.Categories.delete(_this.props.category.id).then(function (resp) {
          _this.props.onSave(resp);
        }, function (error) {
          error.status == 409 ? _helpers_main__WEBPACK_IMPORTED_MODULE_7__.Alerts.genericConflict('All expenses must be assigned to a new category first.') : _helpers_main__WEBPACK_IMPORTED_MODULE_7__.Alerts.genericError();
        });
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();

      _this.setState({
        submitted: true
      });

      if (Object.values(_this.state.errors).flat().length) {
        return;
      }

      var apiCall = null;

      if (_this.props.category.id) {
        apiCall = _api_main__WEBPACK_IMPORTED_MODULE_6__.Categories.update(_this.props.category.id, {
          color: _this.state.color,
          monthly_goal: _this.state.goal,
          name: _this.state.name.trim()
        });
      } else {
        apiCall = _api_main__WEBPACK_IMPORTED_MODULE_6__.Categories.create({
          color: _this.state.color,
          monthly_goal: _this.state.goal,
          name: _this.state.name.trim(),
          is_revenue: _this.state.is_revenue
        });
      }

      apiCall.then(function (resp) {
        _this.props.onSave(resp);
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_7__.Alerts.genericError();
      });
    };

    _this.state = {
      color: _this.props.category.color,
      errors: {},
      goal: _this.props.category.monthly_goal || 0,
      name: _this.props.category.name,
      submitted: false,
      is_revenue: 0
    };
    return _this;
  }

  var _proto = FormModal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.nameInput.focus();
  };

  _proto.action = function action() {
    if (!this.props.category.id) {
      return 'Create';
    }

    return 'Update';
  };

  _proto.renderDelete = function renderDelete() {
    var _React$createElement;

    if (!this.props.category.id) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement = {
      className: "link-danger",
      onClick: this.handleDelete,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 12
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 75,
      columnNumber: 12
    }, _React$createElement), "Delete");
  };

  _proto.render = function render() {
    var _React$createElement2,
        _this2 = this,
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
        _React$createElement15,
        _React$createElement16,
        _React$createElement17,
        _React$createElement18,
        _React$createElement19,
        _React$createElement20;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Modal__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement20 = {
      onClose: this.props.onClose,
      title: this.action() + " Category",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 80,
      columnNumber: 7
    }, _React$createElement20), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", (_React$createElement19 = {
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 81,
      columnNumber: 9
    }, _React$createElement19), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement9 = {
      className: "row row-flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 82,
      columnNumber: 11
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement5 = {
      className: "input-group eight columns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 83,
      columnNumber: 13
    }, _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement2 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 84,
      columnNumber: 15
    }, _React$createElement2), "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement3 = {
      onChange: this.handleNameChange,
      ref: function ref(input) {
        _this2.nameInput = input;
      },
      type: "text",
      value: this.state.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 85,
      columnNumber: 15
    }, _React$createElement3)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_FieldErrors__WEBPACK_IMPORTED_MODULE_5__.default, (_React$createElement4 = {
      handleErrors: this.handleErrors,
      label: "Name",
      show: this.state.submitted,
      val: this.state.name.trim(),
      validations: {
        required: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 91,
      columnNumber: 15
    }, _React$createElement4))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement8 = {
      className: "input-group ml-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 100,
      columnNumber: 13
    }, _React$createElement8), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement6 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 15
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 101,
      columnNumber: 15
    }, _React$createElement6), "Color"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_ColorPicker__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement7 = {
      initialColor: this.state.color,
      omitColors: this.props.colorsToSkip,
      onChange: this.handleColorChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 102,
      columnNumber: 15
    }, _React$createElement7)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement13 = {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 106,
      columnNumber: 11
    }, _React$createElement13), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement12 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 107,
      columnNumber: 13
    }, _React$createElement12), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement10 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 15
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 108,
      columnNumber: 15
    }, _React$createElement10), "Monthly goal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement11 = {
      initialValue: this.state.goal,
      onChange: this.handleGoalChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 109,
      columnNumber: 15
    }, _React$createElement11)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement16 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 113,
      columnNumber: 11
    }, _React$createElement16), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement15 = {
      htmlFor: "isRevenue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 114,
      columnNumber: 13
    }, _React$createElement15), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement14 = {
      type: "checkbox",
      value: this.state.isRevenue,
      onChange: this.handleRevenueChange,
      id: "isRevenue",
      name: "isRevenue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 15
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 115,
      columnNumber: 15
    }, _React$createElement14)), "Is this a revenue?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement18 = {
      className: "form-actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 126,
      columnNumber: 11
    }, _React$createElement18), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement17 = {
      className: "btn btn-dark",
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 127,
      columnNumber: 13
    }, _React$createElement17), "Save"), this.renderDelete())));
  };

  return FormModal;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

FormModal.defaultProps = {
  category: {
    color: '',
    monthly_goal: 0,
    name: '',
    is_revenue: 0
  },
  colorsToSkip: []
};
FormModal.propTypes = {
  category: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  colorsToSkip: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onSave: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (FormModal);

/***/ }),

/***/ "./app/javascript/components/dashboard/CategoriesList.jsx":
/*!****************************************************************!*\
  !*** ./app/javascript/components/dashboard/CategoriesList.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
/* harmony import */ var _CategoryTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryTile */ "./app/javascript/components/dashboard/CategoryTile.jsx");
/* harmony import */ var _categories_FormModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories/FormModal */ "./app/javascript/components/categories/FormModal.jsx");
var _jsxFileName = "/ontrack/app/javascript/components/dashboard/CategoriesList.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/dashboard/CategoriesList.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var CategoriesList = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CategoriesList, _React$Component);

  function CategoriesList(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.openCategoryCreate = function () {
      _this.setState({
        showCategoryCreateModal: true
      });
    };

    _this.closeCategoryCreate = function () {
      _this.setState({
        showCategoryCreateModal: false
      });
    };

    _this.onCategorySave = function () {
      _this.closeCategoryCreate();

      _this.props.onChange();
    };

    _this.state = {
      showCategoryCreateModal: false
    };
    return _this;
  }

  var _proto = CategoriesList.prototype;

  _proto.colorsToSkip = function colorsToSkip() {
    return this.props.categoriesWithExpensesAndSpend.map(function (cat) {
      return cat.color;
    });
  };

  _proto.chunkedCategories = function chunkedCategories() {
    var categoriesAndAddButton = this.props.categoriesWithExpensesAndSpend.concat('addButton');
    return _helpers_main__WEBPACK_IMPORTED_MODULE_2__.Arr.chunk(categoriesAndAddButton, 2);
  };

  _proto.renderCategoryCreateModal = function renderCategoryCreateModal() {
    var _React$createElement;

    if (!this.state.showCategoryCreateModal) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_categories_FormModal__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement = {
      colorsToSkip: this.colorsToSkip(),
      onClose: this.closeCategoryCreate,
      onSave: this.onCategorySave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 12
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 31,
      columnNumber: 12
    }, _React$createElement));
  };

  _proto.renderCategory = function renderCategory(category, idx) {
    var _React$createElement5;

    var markup = '';

    if (category == 'addButton') {
      var _React$createElement2, _React$createElement3;

      markup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement3 = {
        className: "category-tile dim-til-hover hover-pointer no-border",
        onClick: this.openCategoryCreate,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 38,
        columnNumber: 9
      }, _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement2 = {
        className: "new",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 39,
        columnNumber: 11
      }, _React$createElement2), "+ Add a category"));
    } else {
      var _React$createElement4;

      markup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CategoryTile__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement4 = {
        categoryWithExpensesAndSpend: category,
        colorsToSkip: this.colorsToSkip(),
        onChange: this.props.onChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 44,
        columnNumber: 9
      }, _React$createElement4));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement5 = {
      className: "six columns",
      key: idx,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 12
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 52,
      columnNumber: 12
    }, _React$createElement5), markup);
  };

  _proto.renderRow = function renderRow(listChunk, idx) {
    var _this2 = this,
        _React$createElement6;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
      className: "row",
      key: idx,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 7
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 57,
      columnNumber: 7
    }, _React$createElement6), listChunk.map(function (category, i) {
      return _this2.renderCategory(category, i);
    }));
  };

  _proto.render = function render() {
    var _this3 = this,
        _React$createElement7;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 65,
      columnNumber: 7
    }, _React$createElement7), this.renderCategoryCreateModal(), this.chunkedCategories().map(function (listChunk, idx) {
      return _this3.renderRow(listChunk, idx);
    }));
  };

  return CategoriesList;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

CategoriesList.defaultProps = {
  categoriesWithExpensesAndSpend: []
};
CategoriesList.propTypes = {
  categoriesWithExpensesAndSpend: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (CategoriesList);

/***/ }),

/***/ "./app/javascript/components/dashboard/CategoryTile.jsx":
/*!**************************************************************!*\
  !*** ./app/javascript/components/dashboard/CategoryTile.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
/* harmony import */ var _categories_FormModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories/FormModal */ "./app/javascript/components/categories/FormModal.jsx");
var _jsxFileName = "/ontrack/app/javascript/components/dashboard/CategoryTile.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/dashboard/CategoryTile.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var CategoryTile = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CategoryTile, _React$Component);

  function CategoryTile(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.openCategoryEdit = function () {
      _this.setState({
        showCategoryEditModal: true
      });
    };

    _this.closeCategoryEdit = function () {
      _this.setState({
        showCategoryEditModal: false
      });
    };

    _this.onCategorySave = function () {
      _this.closeCategoryEdit();

      _this.props.onChange();
    };

    _this.onExpenseSave = function () {
      _this.closeExpenseCreate();

      _this.props.onChange();
    };

    _this.state = {
      showCategoryEditModal: false
    };
    return _this;
  }

  var _proto = CategoryTile.prototype;

  _proto.goalDiff = function goalDiff() {
    if (!this.props.categoryWithExpensesAndSpend.monthly_goal) {
      return 0;
    }

    return this.props.categoryWithExpensesAndSpend.monthly_goal - this.props.categoryWithExpensesAndSpend.spend;
  };

  _proto.goalComparisonDisplay = function goalComparisonDisplay() {
    if (!this.props.categoryWithExpensesAndSpend.monthly_goal) {
      return 'No goal set';
    }

    var diff = this.goalDiff();
    return diff >= 0 ? _helpers_main__WEBPACK_IMPORTED_MODULE_2__.Numerics.centsToDollars(diff) + " remaining" : _helpers_main__WEBPACK_IMPORTED_MODULE_2__.Numerics.centsToDollars(Math.abs(diff)) + " over";
  };

  _proto.normalizedPercentage = function normalizedPercentage() {
    if (!this.props.categoryWithExpensesAndSpend.monthly_goal) {
      return 0;
    }

    return Math.min(100, this.props.categoryWithExpensesAndSpend.spend / this.props.categoryWithExpensesAndSpend.monthly_goal * 100);
  };

  _proto.renderCategoryEditModal = function renderCategoryEditModal() {
    var _React$createElement;

    if (!this.state.showCategoryEditModal) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_categories_FormModal__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement = {
      onClose: this.closeCategoryEdit,
      onSave: this.onCategorySave,
      category: this.props.categoryWithExpensesAndSpend,
      colorsToSkip: this.props.colorsToSkip,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 43,
      columnNumber: 7
    }, _React$createElement));
  };

  _proto.render = function render() {
    var _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7;

    var category = this.props.categoryWithExpensesAndSpend;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
      className: "category-tile flex flex-space-between tint-on-hover hover-pointer",
      style: {
        borderColor: category.color
      },
      onClick: this.openCategoryEdit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 56,
      columnNumber: 9
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement2 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 61,
      columnNumber: 11
    }, _React$createElement2), category.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
      className: "text-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 63,
      columnNumber: 11
    }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", (_React$createElement3 = {
      className: category.spend > 0 ? '' : 'text-muted',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 64,
      columnNumber: 13
    }, _React$createElement3), _helpers_main__WEBPACK_IMPORTED_MODULE_2__.Numerics.centsToDollars(category.spend)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement5 = {
      className: this.goalDiff() < 0 ? 'text-warning' : 'text-muted',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 65,
      columnNumber: 13
    }, _React$createElement5), this.goalDiff() < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement4 = {
      className: "fas fa-exclamation-circle mr-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 67,
      columnNumber: 17
    }, _React$createElement4)), this.goalComparisonDisplay()))), this.renderCategoryEditModal());
  };

  return CategoryTile;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

CategoryTile.defaultProps = {
  categoryWithExpensesAndSpend: {},
  colorsToSkip: []
};
CategoryTile.propTypes = {
  categoryWithExpensesAndSpend: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  colorsToSkip: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (CategoryTile);

/***/ }),

/***/ "./app/javascript/components/dashboard/Main.jsx":
/*!******************************************************!*\
  !*** ./app/javascript/components/dashboard/Main.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Overview */ "./app/javascript/components/dashboard/Overview.jsx");
/* harmony import */ var _CategoriesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoriesList */ "./app/javascript/components/dashboard/CategoriesList.jsx");
/* harmony import */ var _expenses_FormModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../expenses/FormModal */ "./app/javascript/components/expenses/FormModal.jsx");
/* harmony import */ var _shared_PieChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/PieChart */ "./app/javascript/components/shared/PieChart.jsx");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/dashboard/Main.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/dashboard/Main.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Main = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Main, _React$Component);

  function Main(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.openExpenseCreate = function () {
      _this.setState({
        showExpenseCreateModal: true
      });
    };

    _this.closeExpenseCreate = function () {
      _this.setState({
        showExpenseCreateModal: false
      });
    };

    _this.openRevenueCreate = function () {
      _this.setState({
        showRevenueCreateModal: true
      });
    };

    _this.closeRevenueCreate = function () {
      _this.setState({
        showRevenueCreateModal: false
      });
    };

    _this.onExpenseSave = function () {
      _this.closeExpenseCreate();

      _this.closeRevenueCreate();

      _this.reloadData();
    };

    _this.reloadData = function () {
      _this.loadExpensesCategories();

      _this.loadRevenuesCategories();

      _this.loadExpensesData();

      _this.loadRevenueData();

      _this.loadPieChartData(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('MMMM YYYY'));
    };

    _this.loadExpensesCategories = function () {
      _api_main__WEBPACK_IMPORTED_MODULE_6__.Categories.listExpenses().then(function (cResp) {
        _this.setState({
          expensecategories: cResp
        });
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_7__.Alerts.error("Categories didn't load correctly");
      });
    };

    _this.loadRevenuesCategories = function () {
      _api_main__WEBPACK_IMPORTED_MODULE_6__.Categories.listRevenues().then(function (cResp) {
        _this.setState({
          revenuecategories: cResp
        });
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_7__.Alerts.error("Categories didn't load correctly");
      });
    };

    _this.loadExpensesData = function () {
      _api_main__WEBPACK_IMPORTED_MODULE_6__.Expenses.list({
        paid_after: moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('month').unix()
      }).then(function (eResp) {
        _this.setState({
          expenses: eResp
        });

        _api_main__WEBPACK_IMPORTED_MODULE_6__.Goals.list().then(function (gResp) {
          _this.setState({
            loaded: true,
            monthlyGoal: gResp.monthly
          });
        }, function () {
          _helpers_main__WEBPACK_IMPORTED_MODULE_7__.Alerts.error("Goal of expenses didn't load!");
        });
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_7__.Alerts.error("Expenses didn't load correctly!");
      });
    };

    _this.loadRevenueData = function () {
      _api_main__WEBPACK_IMPORTED_MODULE_6__.Revenues.list({
        paid_after: moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('month').unix()
      }).then(function (rResp) {
        _this.setState({
          revenues: rResp
        });
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_7__.Alerts.error("Revenues didn't load correctly!");
      });
    };

    _this.loadSum = function () {
      var indexRev = 0;

      _this.state.expensecategories.forEach(function (category) {
        if (category.is_revenue == 1) {
          category.revenues = _this.state.revenues.filter(function (revenue) {
            return revenue.category_id == category.id;
          });
          category.revenues.forEach(function (revenue) {
            indexRev += revenue.amount;
          });
        }
      });

      return indexRev / 100;
    };

    _this.loadPieChartData = function (month) {
      _api_main__WEBPACK_IMPORTED_MODULE_6__.Reports.month({
        month: month
      }).then(function (resp) {
        var revenue = _this.loadSum();

        var data = resp.category_pourcentage.map(function (r) {
          return Number.parseFloat(r.spend / revenue * 100).toFixed(3);
        });
        var labels = resp.category_pourcentage.map(function (r) {
          return r.category;
        });
        var colors = resp.category_pourcentage.map(function (r) {
          return r.color;
        });

        _this.setState({
          data: data
        });

        _this.setState({
          labels: labels
        });

        _this.setState({
          colors: colors
        });

        return true;
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_7__.Alerts.error("The data for the pie chart didn't load correctly!");
      });
    };

    _this.state = {
      expensecategories: [],
      revenuecategories: [],
      expenses: [],
      revenues: [],
      sumExpenses: 0,
      sumRevenues: 0,
      loadedexpenses: false,
      loadedrevenues: false,
      monthlyGoal: 0,
      showExpenseCreateModal: false,
      showRevenueCreateModal: false,
      data: [],
      labels: [],
      colors: []
    };
    return _this;
  }

  var _proto = Main.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.reloadData();
  };

  _proto.categoriesWithExpensesAndSpend = function categoriesWithExpensesAndSpend() {
    var _this2 = this;

    var categories = [];
    this.state.expensecategories.forEach(function (category) {
      category.expenses = _this2.state.expenses.filter(function (expense) {
        return expense.category_id == category.id;
      });
      category.spend = category.expenses.reduce(function (sum, exp) {
        return sum + exp.amount;
      }, 0);
      categories.push(category);
    });
    return categories;
  };

  _proto.revenueCategoriesWithExpensesAndSpend = function revenueCategoriesWithExpensesAndSpend() {
    var _this3 = this;

    var revenueCategories = []; // ToDo : change le nom expenses pour revenues (category.expenses)

    this.state.revenuecategories.forEach(function (category) {
      category.expenses = _this3.state.revenues.filter(function (revenue) {
        return revenue.category_id == category.id;
      });
      category.spend = category.expenses.reduce(function (sum, exp) {
        return sum + exp.amount;
      }, 0);
      revenueCategories.push(category);
    });
    return revenueCategories;
  };

  _proto.renderExpenseCreateModal = function renderExpenseCreateModal() {
    var _React$createElement;

    if (!this.state.showExpenseCreateModal) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_expenses_FormModal__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement = {
      categories: this.state.expensecategories,
      onClose: this.closeExpenseCreate,
      onSave: this.onExpenseSave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 12
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 112,
      columnNumber: 12
    }, _React$createElement));
  };

  _proto.renderRevenueCreateModal = function renderRevenueCreateModal() {
    var _React$createElement2;

    if (!this.state.showRevenueCreateModal) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RevenueFormModal, (_React$createElement2 = {
      categories: this.state.expensecategories,
      onClose: this.closeExpenseCreate,
      onSave: this.onExpenseSave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 12
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 117,
      columnNumber: 12
    }, _React$createElement2));
  };

  _proto.render = function render() {
    var _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8, _React$createElement9, _React$createElement10, _React$createElement11, _React$createElement12, _React$createElement13, _React$createElement14, _React$createElement15, _React$createElement16, _React$createElement17, _React$createElement18, _React$createElement19;

    if (!this.state.loaded) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement19 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 7
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 161,
      columnNumber: 7
    }, _React$createElement19), this.renderExpenseCreateModal(), this.renderRevenueCreateModal(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement4 = {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 164,
      columnNumber: 9
    }, _React$createElement4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Overview__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement3 = {
      categoriesWithExpensesAndSpend: this.categoriesWithExpensesAndSpend(),
      monthlyGoal: this.state.monthlyGoal,
      onChange: this.reloadData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 165,
      columnNumber: 11
    }, _React$createElement3))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
      className: "container mt-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 168,
      columnNumber: 9
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
      className: "chart-container-short",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 169,
      columnNumber: 11
    }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_PieChart__WEBPACK_IMPORTED_MODULE_5__.default, (_React$createElement5 = {
      labels: this.state.labels,
      data: this.state.data,
      colors: this.state.colors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 170,
      columnNumber: 13
    }, _React$createElement5)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement12 = {
      className: "bg-art",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 174,
      columnNumber: 9
    }, _React$createElement12), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement9 = {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 11
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 175,
      columnNumber: 11
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement8 = {
      className: "btn btn-round btn-dark pos-abs mt-neg-20 z-5",
      onClick: this.openExpenseCreate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 13
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 176,
      columnNumber: 13
    }, _React$createElement8), "+ add an expense")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement11 = {
      className: "container pv-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 178,
      columnNumber: 11
    }, _React$createElement11), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CategoriesList__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement10 = {
      categoriesWithExpensesAndSpend: this.categoriesWithExpensesAndSpend(),
      onChange: this.reloadData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 179,
      columnNumber: 13
    }, _React$createElement10)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement17 = {
      className: "bg-art-2 top-border",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 9
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 183,
      columnNumber: 9
    }, _React$createElement17), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement14 = {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 184,
      columnNumber: 11
    }, _React$createElement14), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement13 = {
      className: "btn btn-round btn-dark pos-abs mt-neg-20 z-5",
      onClick: this.openRevenueCreate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 185,
      columnNumber: 13
    }, _React$createElement13), "+ add a revenue"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement16 = {
      className: "container pv-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 187,
      columnNumber: 11
    }, _React$createElement16), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CategoriesList__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement15 = {
      revenueCategoriesWithExpensesAndSpend: this.revenueCategoriesWithExpensesAndSpend(),
      onChange: this.reloadData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 188,
      columnNumber: 13
    }, _React$createElement15)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement18 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 192,
      columnNumber: 9
    }, _React$createElement18), "test"));
  };

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./app/javascript/components/dashboard/Overview.jsx":
/*!**********************************************************!*\
  !*** ./app/javascript/components/dashboard/Overview.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
/* harmony import */ var _shared_Progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Progress */ "./app/javascript/components/shared/Progress.jsx");
/* harmony import */ var _goals_FormModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../goals/FormModal */ "./app/javascript/components/goals/FormModal.jsx");
var _jsxFileName = "/ontrack/app/javascript/components/dashboard/Overview.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/dashboard/Overview.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Overview = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Overview, _React$Component);

  function Overview(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.openGoal = function () {
      _this.setState({
        showGoalModal: true
      });
    };

    _this.closeGoal = function () {
      _this.setState({
        showGoalModal: false
      });
    };

    _this.onGoalSave = function () {
      _this.closeGoal();

      _this.props.onChange();
    };

    _this.state = {
      showGoalModal: false
    };
    return _this;
  }

  var _proto = Overview.prototype;

  _proto.goalDiff = function goalDiff() {
    if (!this.props.monthlyGoal) {
      return 0;
    }

    return this.props.monthlyGoal - this.totalSpend();
  };

  _proto.totalSpend = function totalSpend() {
    return this.props.categoriesWithExpensesAndSpend.reduce(function (sum, cat) {
      return sum + cat.spend;
    }, 0);
  };

  _proto.percentages = function percentages() {
    var outOf = Math.max(this.props.monthlyGoal, this.totalSpend());
    return this.props.categoriesWithExpensesAndSpend.map(function (category) {
      return {
        percentage: category.spend / outOf * 100,
        color: category.color
      };
    });
  };

  _proto.goalComparisonDisplay = function goalComparisonDisplay() {
    var diff = this.goalDiff();
    return diff >= 0 ? _helpers_main__WEBPACK_IMPORTED_MODULE_3__.Numerics.centsToDollars(diff) + " remaining" : _helpers_main__WEBPACK_IMPORTED_MODULE_3__.Numerics.centsToDollars(Math.abs(diff)) + " over";
  };

  _proto.renderGoalModal = function renderGoalModal() {
    var _React$createElement;

    if (!this.state.showGoalModal) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_goals_FormModal__WEBPACK_IMPORTED_MODULE_5__.default, (_React$createElement = {
      onClose: this.closeGoal,
      onSave: this.onGoalSave,
      goals: {
        monthly: this.props.monthlyGoal
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 12
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 42,
      columnNumber: 12
    }, _React$createElement));
  };

  _proto.render = function render() {
    var _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8, _React$createElement9, _React$createElement10, _React$createElement11, _React$createElement12;

    var today = moment__WEBPACK_IMPORTED_MODULE_2___default()();
    var daysLeftInMonth = moment__WEBPACK_IMPORTED_MODULE_2___default()().endOf('month').diff(today, 'days');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement12 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 50,
      columnNumber: 7
    }, _React$createElement12), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement2 = {
      className: "mb-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 51,
      columnNumber: 9
    }, _React$createElement2), today.format('MMMM'), " (", daysLeftInMonth, " days left)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement10 = {
      className: "flex row-flex flex-space-between flex-baseline mb-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 53,
      columnNumber: 9
    }, _React$createElement10), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement4 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 54,
      columnNumber: 11
    }, _React$createElement4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", (_React$createElement3 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 16
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 54,
      columnNumber: 16
    }, _React$createElement3), _helpers_main__WEBPACK_IMPORTED_MODULE_3__.Numerics.centsToDollars(this.totalSpend()))), !this.props.monthlyGoal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement5 = {
      href: null,
      onClick: this.openGoal,
      className: "dim-til-hover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 56,
      columnNumber: 13
    }, _React$createElement5), "Set a monthly goal"), !!this.props.monthlyGoal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement9 = {
      className: "flex flex-baseline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 59,
      columnNumber: 13
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
      className: this.goalDiff() < 0 ? 'text-warning mr-4' : 'text-muted mr-4',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 60,
      columnNumber: 15
    }, _React$createElement7), this.goalDiff() < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement6 = {
      className: "fas fa-exclamation-circle mr-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 19
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 62,
      columnNumber: 19
    }, _React$createElement6)), this.goalComparisonDisplay()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement8 = {
      className: "far fa-edit dim-til-hover hover-pointer text-muted",
      onClick: this.openGoal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 66,
      columnNumber: 15
    }, _React$createElement8)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Progress__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement11 = {
      data: this.percentages(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 71,
      columnNumber: 9
    }, _React$createElement11)));
  };

  return Overview;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Overview.defaultProps = {
  categoriesWithExpensesAndSpend: [],
  monthlyGoal: 0
};
Overview.propTypes = {
  categoriesWithExpensesAndSpend: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  monthlyGoal: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (Overview);

/***/ }),

/***/ "./app/javascript/components/expenses/FormModal.jsx":
/*!**********************************************************!*\
  !*** ./app/javascript/components/expenses/FormModal.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Modal */ "./app/javascript/components/shared/Modal.jsx");
/* harmony import */ var _shared_DatePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/DatePicker */ "./app/javascript/components/shared/DatePicker.jsx");
/* harmony import */ var _shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/CurrencyInput */ "./app/javascript/components/shared/CurrencyInput.jsx");
/* harmony import */ var _shared_FieldErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/FieldErrors */ "./app/javascript/components/shared/FieldErrors.jsx");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/expenses/FormModal.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/expenses/FormModal.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var FormModal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FormModal, _React$Component);

  function FormModal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleDescriptionChange = function (e) {
      _this.setState({
        description: e.target.value
      });
    };

    _this.handleAmountChange = function (num) {
      _this.setState({
        amount: num
      });
    };

    _this.handlePaidAtChange = function (val) {
      _this.setState({
        paidAt: val
      });
    };

    _this.handleCategoryChange = function (e) {
      _this.setState({
        category_id: e.target.value
      });
    };

    _this.handleErrors = function (key, errs) {
      var _Object$assign;

      _this.setState({
        errors: Object.assign(_this.state.errors, (_Object$assign = {}, _Object$assign[key] = errs, _Object$assign))
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();

      _this.setState({
        submitted: true
      });

      if (Object.values(_this.state.errors).flat().length) {
        return;
      }

      _api_main__WEBPACK_IMPORTED_MODULE_6__.Expenses.create({
        description: _this.state.description.trim(),
        category_id: _this.state.category_id,
        amount: _this.state.amount,
        paid_at: _this.state.paidAt
      }).then(function (resp) {
        _this.props.onSave(resp);
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_7__.Alerts.genericError();
      });
    };

    var categoryId = _this.props.categoryId;

    if (!categoryId && _this.props.categories.length) {
      categoryId = _this.props.categories[0].id;
    }

    _this.state = {
      description: '',
      category_id: categoryId,
      amount: 0,
      paidAt: new Date(),
      errors: {},
      submitted: false
    };
    return _this;
  }

  var _proto = FormModal.prototype;

  _proto.renderForm = function renderForm() {
    var _React$createElement3,
        _React$createElement4,
        _React$createElement5,
        _React$createElement6,
        _React$createElement7,
        _this2 = this,
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
        _React$createElement23;

    if (!this.props.categories.length) {
      var _React$createElement, _React$createElement2;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement2 = {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 45,
        columnNumber: 9
      }, _React$createElement2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", (_React$createElement = {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 46,
        columnNumber: 11
      }, _React$createElement), "Add a category before adding an expense!"));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", (_React$createElement23 = {
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }, _React$createElement23["__self"] = this, _React$createElement23["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 52,
      columnNumber: 7
    }, _React$createElement23), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 53,
      columnNumber: 9
    }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement3 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 54,
      columnNumber: 11
    }, _React$createElement3), "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement4 = {
      initialValue: this.state.amount,
      onChange: this.handleAmountChange,
      allowNegative: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 55,
      columnNumber: 11
    }, _React$createElement4)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_FieldErrors__WEBPACK_IMPORTED_MODULE_5__.default, (_React$createElement5 = {
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
        lineNumber: 56,
        columnNumber: 11
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 56,
      columnNumber: 11
    }, _React$createElement5))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement15 = {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 64,
      columnNumber: 9
    }, _React$createElement15), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement10 = {
      className: "input-group seven columns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 65,
      columnNumber: 11
    }, _React$createElement10), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement7 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 66,
      columnNumber: 13
    }, _React$createElement7), "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement9 = {
      value: this.state.category_id,
      onChange: this.handleCategoryChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 67,
      columnNumber: 13
    }, _React$createElement9), this.props.categories.map(function (c) {
      var _React$createElement8;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement8 = {
        key: c.id,
        value: c.id,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 49
        }
      }, _React$createElement8["__self"] = _this2, _React$createElement8["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 68,
        columnNumber: 49
      }, _React$createElement8), c.name);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement14 = {
      className: "input-group five columns",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 72,
      columnNumber: 11
    }, _React$createElement14), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement11 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 73,
      columnNumber: 13
    }, _React$createElement11), "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement12 = {
      onChange: this.handlePaidAtChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 74,
      columnNumber: 13
    }, _React$createElement12)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_FieldErrors__WEBPACK_IMPORTED_MODULE_5__.default, (_React$createElement13 = {
      label: "Date",
      val: this.state.paidAt,
      validations: {
        required: true
      },
      show: this.state.submitted,
      handleErrors: this.handleErrors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 75,
      columnNumber: 13
    }, _React$createElement13)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement19 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 84,
      columnNumber: 9
    }, _React$createElement19), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement16 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 85,
      columnNumber: 11
    }, _React$createElement16), "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement17 = {
      type: "text",
      value: this.state.description,
      onChange: this.handleDescriptionChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 86,
      columnNumber: 11
    }, _React$createElement17)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_FieldErrors__WEBPACK_IMPORTED_MODULE_5__.default, (_React$createElement18 = {
      label: "Description",
      val: this.state.description,
      validations: {
        required: true
      },
      show: this.state.submitted,
      handleErrors: this.handleErrors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 87,
      columnNumber: 11
    }, _React$createElement18))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement22 = {
      className: "form-actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }
    }, _React$createElement22["__self"] = this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 95,
      columnNumber: 9
    }, _React$createElement22), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement20 = {
      type: "submit",
      className: "btn btn-dark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 96,
      columnNumber: 11
    }, _React$createElement20), "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement21 = {
      className: "dim-til-hover",
      href: "/expense_uploads/new",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    }, _React$createElement21["__self"] = this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 97,
      columnNumber: 11
    }, _React$createElement21), "Import a CSV instead")));
  };

  _proto.render = function render() {
    var _React$createElement24;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Modal__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement24 = {
      title: "Create Expense",
      onClose: this.props.onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }
    }, _React$createElement24["__self"] = this, _React$createElement24["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 105,
      columnNumber: 7
    }, _React$createElement24), this.renderForm());
  };

  return FormModal;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

FormModal.defaultProps = {
  categories: [],
  categoryId: 0
};
FormModal.propTypes = {
  categories: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  categoryId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onSave: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (FormModal);

/***/ }),

/***/ "./app/javascript/components/goals/FormModal.jsx":
/*!*******************************************************!*\
  !*** ./app/javascript/components/goals/FormModal.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Modal */ "./app/javascript/components/shared/Modal.jsx");
/* harmony import */ var _shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/CurrencyInput */ "./app/javascript/components/shared/CurrencyInput.jsx");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/goals/FormModal.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/goals/FormModal.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var FormModal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FormModal, _React$Component);

  function FormModal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleGoalChange = function (num) {
      _this.setState({
        goal: num
      });
    };

    _this.handleErrors = function (key, errs) {
      var _Object$assign;

      _this.setState({
        errors: Object.assign(_this.state.errors, (_Object$assign = {}, _Object$assign[key] = errs, _Object$assign))
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();

      if (Object.values(_this.state.errors).flat().length) {
        return;
      }

      _api_main__WEBPACK_IMPORTED_MODULE_4__.Goals.update({
        monthly_goal: _this.state.goal
      }).then(function (resp) {
        _this.props.onSave(resp);
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.genericError();
      });
    };

    _this.state = {
      goal: _this.props.goals.monthly || 0,
      errors: {}
    };
    return _this;
  }

  var _proto = FormModal.prototype;

  _proto.render = function render() {
    var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Modal__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement8 = {
      title: "Edit Goal",
      onClose: this.props.onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 31,
      columnNumber: 7
    }, _React$createElement8), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", (_React$createElement7 = {
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 32,
      columnNumber: 9
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement4 = {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 33,
      columnNumber: 11
    }, _React$createElement4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement3 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 34,
      columnNumber: 13
    }, _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 35,
      columnNumber: 15
    }, _React$createElement), "Total Monthly Goal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement2 = {
      initialValue: this.state.goal,
      onChange: this.handleGoalChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 36,
      columnNumber: 15
    }, _React$createElement2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
      className: "form-actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 40,
      columnNumber: 11
    }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement5 = {
      type: "submit",
      className: "btn btn-dark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 41,
      columnNumber: 13
    }, _React$createElement5), "Save"))));
  };

  return FormModal;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

FormModal.defaultProps = {
  goals: {
    monthly: 0
  }
};
FormModal.propTypes = {
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onSave: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  goals: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (FormModal);

/***/ }),

/***/ "./app/javascript/components/shared/ColorPicker.jsx":
/*!**********************************************************!*\
  !*** ./app/javascript/components/shared/ColorPicker.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/ontrack/app/javascript/components/shared/ColorPicker.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/shared/ColorPicker.jsx";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var QUICK_COLORS = ['#899b9c', '#88b779', '#0d947a', '#248ed5', '#9053ad', '#ffda7d', '#f49119', '#e64637', '#dd5e8e', '#ba3427', '#b3b3b3', '#c5e276', '#0ab191', '#95dce8', '#c67171', '#8e5b4c', '#e9eeef', '#9ad8a9', '#c7f4f9', '#d9c3ea', '#fffacf', '#ffcea6', '#f9b6b6', '#c7b299', '#2d4053', '#141516', '#603813'];

var ColorPicker = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ColorPicker, _React$Component);

  function ColorPicker(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleChange = function (color) {
      _this.setState({
        color: color
      });

      _this.props.onChange(color);
    };

    _this.useTextField = function () {
      _this.setState({
        useTextField: true
      });
    };

    _this.state = {
      initialColor: _this.props.initialColor,
      color: _this.props.initialColor,
      useTextField: false
    };
    return _this;
  }

  var _proto = ColorPicker.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (!this.state.initialColor.length) {
      this.setState({
        color: this.colors()[0]
      });
      this.props.onChange(this.colors()[0]);
    }
  };

  _proto.colors = function colors() {
    var availColors = [];

    if (this.state.initialColor.length) {
      availColors.push(this.state.initialColor);
    }

    for (var _iterator = _createForOfIteratorHelperLoose(QUICK_COLORS), _step; !(_step = _iterator()).done;) {
      var color = _step.value;

      if (availColors.map(function (el) {
        return el.toLowerCase();
      }).includes(color.toLowerCase())) {
        continue;
      }

      if (this.props.omitColors.length && this.props.omitColors.map(function (el) {
        return el.toLowerCase();
      }).includes(color.toLowerCase())) {
        continue;
      }

      if (availColors.length >= 15) {
        break;
      }

      availColors.push(color);
    }

    return availColors;
  };

  _proto.renderSwatches = function renderSwatches() {
    var _this2 = this;

    return this.colors().map(function (color, idx) {
      var _React$createElement;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement = {
        onClick: function onClick() {
          return _this2.handleChange(color);
        },
        key: idx,
        className: "sample hover-pointer " + (color.toLowerCase() == _this2.state.color.toLowerCase() ? 'active' : ''),
        style: {
          backgroundColor: color
        },
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 7
        }
      }, _React$createElement["__self"] = _this2, _React$createElement["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 72,
        columnNumber: 7
      }, _React$createElement));
    });
  };

  _proto.render = function render() {
    var _React$createElement2,
        _React$createElement3,
        _this3 = this,
        _React$createElement4,
        _React$createElement5;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement5 = {
      className: "color-picker",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 83,
      columnNumber: 7
    }, _React$createElement5), !this.state.useTextField && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.renderSwatches(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement3 = {
      className: "mr-10 mt-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 87,
      columnNumber: 13
    }, _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement2 = {
      onClick: this.useTextField,
      type: "button",
      className: "btn btn-sm btn-full",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 88,
      columnNumber: 15
    }, _React$createElement2), "Enter hex instead"))), this.state.useTextField && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement4 = {
      type: "text",
      placeholder: "#fff",
      value: this.state.color,
      onChange: function onChange(e) {
        return _this3.handleChange(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 94,
      columnNumber: 11
    }, _React$createElement4)));
  };

  return ColorPicker;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

ColorPicker.defaultProps = {
  omitColors: [],
  initialColor: ''
};
ColorPicker.propTypes = {
  initialColor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  omitColors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (ColorPicker);

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

/***/ "./app/javascript/components/shared/Modal.jsx":
/*!****************************************************!*\
  !*** ./app/javascript/components/shared/Modal.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/ontrack/app/javascript/components/shared/Modal.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/shared/Modal.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Modal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Modal, _React$Component);

  function Modal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    document.body.className += ' modal-open';
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var openModals = document.querySelectorAll('.modal').length;

    if (openModals == 1) {
      document.body.className = document.body.className.replace('modal-open', '');
    }
  };

  _proto.render = function render() {
    var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement8 = {
      className: "modal-mask modal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 18,
      columnNumber: 7
    }, _React$createElement8), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
      className: "modal-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 19,
      columnNumber: 9
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
      className: "modal-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 20,
      columnNumber: 11
    }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement4 = {
      className: "modal-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 21,
      columnNumber: 13
    }, _React$createElement4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 22,
      columnNumber: 15
    }, _React$createElement), this.props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement3 = {
      className: "close",
      onClick: this.props.onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 24,
      columnNumber: 15
    }, _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement2 = {
      className: "fa fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 25,
      columnNumber: 17
    }, _React$createElement2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement5 = {
      className: "modal-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 29,
      columnNumber: 13
    }, _React$createElement5), this.props.children))));
  };

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Modal.defaultProps = {
  title: ''
};
Modal.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./app/javascript/components/shared/PieChart.jsx":
/*!*******************************************************!*\
  !*** ./app/javascript/components/shared/PieChart.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/ontrack/app/javascript/components/shared/PieChart.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/shared/PieChart.jsx",
    _this = undefined;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var PieChart = function PieChart(_ref) {
  var _React$createElement, _React$createElement2;

  var data = _ref.data,
      labels = _ref.labels,
      colors = _ref.colors;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.random().toString()),
      _useState2 = _slicedToArray(_useState, 1),
      randomId = _useState2[0];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      instance = _useState4[0],
      setInstance = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    instance == null ? void 0 : instance.destroy();
    var size = data.length;
    var config = {
      type: 'pie',
      data: {
        datasets: [{
          data: data,
          backgroundColor: colors
        }],
        labels: labels
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'right'
        },
        tooltips: {
          callbacks: {
            label: function label(t) {
              return labels[t.index] + ": " + data[t.index] + "%";
            }
          }
        }
      }
    };
    var newInstance = new (chart_js__WEBPACK_IMPORTED_MODULE_2___default())(document.getElementById(randomId), config);
    setInstance(newInstance);
  }, [data, labels]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement2 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, _React$createElement2["__self"] = _this, _React$createElement2["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 41,
    columnNumber: 5
  }, _React$createElement2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", (_React$createElement = {
    id: randomId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, _React$createElement["__self"] = _this, _React$createElement["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 42,
    columnNumber: 7
  }, _React$createElement)));
};

PieChart.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  labels: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  colors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (PieChart);

/***/ }),

/***/ "./app/javascript/components/shared/Progress.jsx":
/*!*******************************************************!*\
  !*** ./app/javascript/components/shared/Progress.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/ontrack/app/javascript/components/shared/Progress.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/shared/Progress.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Progress = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Progress, _React$Component);

  function Progress() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Progress.prototype;

  _proto.renderData = function renderData(value, idx) {
    var _React$createElement;

    if (value.percentage <= 0) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement = {
      className: "progress",
      key: idx,
      style: {
        width: value.percentage + "%",
        backgroundColor: value.color ? value.color : '#565656'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 9,
      columnNumber: 7
    }, _React$createElement));
  };

  _proto.render = function render() {
    var _this = this,
        _React$createElement2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement2 = {
      className: "progress-bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 15,
      columnNumber: 7
    }, _React$createElement2), this.props.data.map(function (value, idx) {
      return _this.renderData(value, idx);
    }));
  };

  return Progress;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Progress.defaultProps = {
  data: []
};
Progress.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};
/* harmony default export */ __webpack_exports__["default"] = (Progress);

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
var _jsxFileName = "/ontrack/app/javascript/packs/dashboard.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/packs/dashboard.jsx",
    _this = undefined;




document.addEventListener('DOMContentLoaded', function () {
  var _Object$assign;

  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_dashboard_Main__WEBPACK_IMPORTED_MODULE_2__.default, Object.assign({}, window.InitialProps, (_Object$assign = {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_prop-types_index_js-node_modules_react-dom_index_js","vendors-node_modules_axios_index_js-node_modules_moment_locale_af_js-node_modules_moment_loca-3bfda5","vendors-node_modules_react-datepicker_dist_react-datepicker_min_js-node_modules_react-text-ma-b62690","vendors-node_modules_chart_js_dist_Chart_js","app_javascript_api_main_js-app_javascript_helpers_main_js-node_modules_moment_locale_sync_rec-f85292"], function() { return __webpack_exec__("./app/javascript/packs/dashboard.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=dashboard-b2797bbb3935708da302.js.map