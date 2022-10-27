(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["budget"],{

/***/ "./app/javascript/components/budget/AddBudgetModal.jsx":
/*!*************************************************************!*\
  !*** ./app/javascript/components/budget/AddBudgetModal.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Modal */ "./app/javascript/components/shared/Modal.jsx");
/* harmony import */ var _shared_FieldErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/FieldErrors */ "./app/javascript/components/shared/FieldErrors.jsx");
var _jsxFileName = "/ontrack/app/javascript/components/budget/AddBudgetModal.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/budget/AddBudgetModal.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var AddBudgetModal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(AddBudgetModal, _React$Component);

  function AddBudgetModal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleNameChange = function (e) {
      _this.setState({
        name: e.target.value
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
    };

    _this.state = {
      name: '',
      errors: {},
      submitted: false
    };
    return _this;
  }

  var _proto = AddBudgetModal.prototype;

  _proto.renderForm = function renderForm() {
    var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", (_React$createElement7 = {
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 26,
      columnNumber: 7
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement4 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 27,
      columnNumber: 9
    }, _React$createElement4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 28,
      columnNumber: 11
    }, _React$createElement), "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement2 = {
      type: "text",
      value: this.state.name,
      onChange: this.handleNameChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 29,
      columnNumber: 11
    }, _React$createElement2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_FieldErrors__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement3 = {
      label: "Name",
      val: this.state.description,
      validations: {
        required: true
      },
      show: this.state.submitted,
      handleErrors: this.handleErrors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 30,
      columnNumber: 11
    }, _React$createElement3))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
      className: "form-actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 38,
      columnNumber: 9
    }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement5 = {
      type: "submit",
      className: "btn btn-dark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 39,
      columnNumber: 11
    }, _React$createElement5), "Create")));
  };

  _proto.render = function render() {
    var _React$createElement8;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Modal__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement8 = {
      title: "Create Budget",
      onClose: this.props.onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 47,
      columnNumber: 7
    }, _React$createElement8), this.renderForm());
  };

  return AddBudgetModal;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

AddBudgetModal.propTypes = {
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired) //onSave: PropTypes.func.isRequired,

};
/* harmony default export */ __webpack_exports__["default"] = (AddBudgetModal);

/***/ }),

/***/ "./app/javascript/components/budget/Main.jsx":
/*!***************************************************!*\
  !*** ./app/javascript/components/budget/Main.jsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _budget_AddBudgetModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../budget/AddBudgetModal */ "./app/javascript/components/budget/AddBudgetModal.jsx");
var _jsxFileName = "/ontrack/app/javascript/components/budget/Main.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/budget/Main.jsx";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Main = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Main, _React$Component);

  function Main(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.openBudgetCreate = function () {
      _this.setState({
        showBudgetCreate: true
      });
    };

    _this.closeBudgetCreate = function () {
      _this.setState({
        showBudgetCreate: false
      });
    };

    _this.changeSelectedBudget = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  idSelectedBudget: id
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      //Mocking the data 
      budgets: [{
        id: 1,
        name: 'Perso',
        users: [{
          id: 1,
          firstname: 'Laurent',
          lastname: 'Brochu'
        }]
      }, {
        id: 2,
        name: 'Famille',
        users: [{
          id: 2,
          firstname: 'Laurent',
          lastname: 'Brochu'
        }, {
          id: 3,
          firstname: 'Maxime',
          lastname: 'Lefebvre'
        }, {
          id: 4,
          firstname: 'Karl',
          lastname: 'Mainville'
        }, {
          id: 5,
          firstname: 'Louis',
          lastname: 'Garceau'
        }]
      }, {
        id: 3,
        name: 'Entreprise Planto',
        users: [{
          id: 6,
          firstname: 'Laurent',
          lastname: 'Brochu'
        }, {
          id: 7,
          firstname: 'Maxime',
          lastname: 'Aubin'
        }, {
          id: 8,
          firstname: 'Jean-Philippe',
          lastname: 'Belval'
        }]
      }],
      idSelectedBudget: 0,
      showBudgetCreate: false
    };
    return _this;
  }

  var _proto = Main.prototype;

  _proto.renderBudgetCreateModal = function renderBudgetCreateModal() {
    var _React$createElement;

    if (!this.state.showBudgetCreate) {
      return '';
    } //return <AddBudgetModal onClose={this.closeBudgetCreate} onSave={this.onBudgetSave} />;


    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_budget_AddBudgetModal__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement = {
      onClose: this.closeBudgetCreate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 16
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 44,
      columnNumber: 16
    }, _React$createElement));
  };

  _proto.renderBudgetUsers = function renderBudgetUsers(user) {
    var _React$createElement2,
        _React$createElement3,
        _React$createElement4,
        _React$createElement5,
        _this2 = this,
        _React$createElement6,
        _React$createElement7,
        _React$createElement8,
        _React$createElement9;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", (_React$createElement9 = {
      key: user.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 50,
      columnNumber: 13
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", (_React$createElement3 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 51,
      columnNumber: 17
    }, _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", (_React$createElement2 = {
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 52,
      columnNumber: 21
    }, _React$createElement2), user.firstname + " " + user.lastname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", (_React$createElement5 = {
      className: "input-group mw-150",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 55,
      columnNumber: 17
    }, _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", (_React$createElement4 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 62,
      columnNumber: 21
    }, _React$createElement4))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", (_React$createElement8 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 65,
      columnNumber: 17
    }, _React$createElement8), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", (_React$createElement7 = {
      onClick: function onClick() {
        return _this2.handleUserRemove(user.id, _this2.state.budgetId);
      },
      className: "dim-til-hover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 66,
      columnNumber: 21
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", (_React$createElement6 = {
      className: "fa fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 118
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 66,
      columnNumber: 118
    }, _React$createElement6)))));
  };

  _proto.renderBudgetInfo = function renderBudgetInfo(budget) {
    var _React$createElement10,
        _React$createElement11,
        _React$createElement12,
        _React$createElement13,
        _React$createElement14,
        _this3 = this,
        _React$createElement15,
        _React$createElement16,
        _React$createElement17,
        _React$createElement18,
        _React$createElement19,
        _React$createElement20,
        _React$createElement21;

    if (this.state.idSelectedBudget === 0) {
      return 'Select a budget';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement21 = {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, _React$createElement21["__self"] = this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 75,
      columnNumber: 13
    }, _React$createElement21), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement17 = {
      className: "overflow-x bg-gray p-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 76,
      columnNumber: 17
    }, _React$createElement17), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("table", (_React$createElement16 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 77,
      columnNumber: 21
    }, _React$createElement16), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead", (_React$createElement14 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 78,
      columnNumber: 25
    }, _React$createElement14), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", (_React$createElement13 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 29
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 79,
      columnNumber: 29
    }, _React$createElement13), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", (_React$createElement10 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 33
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 80,
      columnNumber: 33
    }, _React$createElement10), "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", (_React$createElement11 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 33
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 81,
      columnNumber: 33
    }, _React$createElement11), "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", (_React$createElement12 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 33
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 82,
      columnNumber: 33
    }, _React$createElement12)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody", (_React$createElement15 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 85,
      columnNumber: 25
    }, _React$createElement15), budget.users.map(function (user) {
      return _this3.renderBudgetUsers(user);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", (_React$createElement18 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 90,
      columnNumber: 17
    }, _React$createElement18)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement20 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 91,
      columnNumber: 17
    }, _React$createElement20), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", (_React$createElement19 = {
      className: "btn btn-round btn-accept pos-abs mt-neg-20 z-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 92,
      columnNumber: 21
    }, _React$createElement19), "Select")));
  };

  _proto.renderBudgets = function renderBudgets() {
    var _React$createElement22,
        _this4 = this,
        _React$createElement24,
        _React$createElement25,
        _React$createElement26,
        _React$createElement27,
        _React$createElement28,
        _React$createElement29,
        _React$createElement30;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement30 = {
      className: "content-with-sidebar mt-30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, _React$createElement30["__self"] = this, _React$createElement30["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 102,
      columnNumber: 13
    }, _React$createElement30), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement28 = {
      className: "sidebar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }
    }, _React$createElement28["__self"] = this, _React$createElement28["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 103,
      columnNumber: 17
    }, _React$createElement28), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", (_React$createElement22 = {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    }, _React$createElement22["__self"] = this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 104,
      columnNumber: 21
    }, _React$createElement22), "Your budgets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", (_React$createElement24 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }, _React$createElement24["__self"] = this, _React$createElement24["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 105,
      columnNumber: 21
    }, _React$createElement24), this.state.budgets.map(function (budget) {
      var _React$createElement23;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", (_React$createElement23 = {
        key: budget.id,
        onClick: function onClick() {
          return _this4.changeSelectedBudget(budget.id);
        },
        style: {
          cursor: 'pointer'
        },
        className: budget.id == _this4.state.idSelectedBudget ? 'input-group text-bold' : 'input-group',
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 26
        }
      }, _React$createElement23["__self"] = _this4, _React$createElement23["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 107,
        columnNumber: 26
      }, _React$createElement23), budget.name);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", (_React$createElement25 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, _React$createElement25["__self"] = this, _React$createElement25["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 115,
      columnNumber: 21
    }, _React$createElement25)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement27 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }, _React$createElement27["__self"] = this, _React$createElement27["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 116,
      columnNumber: 21
    }, _React$createElement27), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", (_React$createElement26 = {
      className: "btn btn-round btn-dark pos-abs mt-neg-20 z-5",
      onClick: this.openBudgetCreate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 25
      }
    }, _React$createElement26["__self"] = this, _React$createElement26["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 117,
      columnNumber: 25
    }, _React$createElement26), "+ Add Budget"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement29 = {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }, _React$createElement29["__self"] = this, _React$createElement29["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 120,
      columnNumber: 17
    }, _React$createElement29), this.renderBudgetInfo(this.state.budgets.find(function (budget) {
      return budget.id == _this4.state.idSelectedBudget;
    }))));
  };

  _proto.render = function render() {
    var _React$createElement31;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement31 = {
      className: "container wide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, _React$createElement31["__self"] = this, _React$createElement31["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 129,
      columnNumber: 13
    }, _React$createElement31), this.renderBudgetCreateModal(), this.renderBudgets());
  };

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

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

/***/ "./app/javascript/packs/budget.jsx":
/*!*****************************************!*\
  !*** ./app/javascript/packs/budget.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_budget_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/budget/Main */ "./app/javascript/components/budget/Main.jsx");
var _jsxFileName = "/ontrack/app/javascript/packs/budget.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/packs/budget.jsx",
    _this = undefined;




document.addEventListener('DOMContentLoaded', function () {
  var _Object$assign;

  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_budget_Main__WEBPACK_IMPORTED_MODULE_2__.default, Object.assign({}, window.InitialProps, (_Object$assign = {
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
  }, _Object$assign))), document.getElementById('budget'));
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_prop-types_index_js-node_modules_react-dom_index_js","vendors-node_modules_babel_runtime_regenerator_index_js"], function() { return __webpack_exec__("./app/javascript/packs/budget.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=budget-27e2912e71c92df455b1.js.map