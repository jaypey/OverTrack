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
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/budget/AddBudgetModal.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/budget/AddBudgetModal.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var FormBudgetModal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FormBudgetModal, _React$Component);

  function FormBudgetModal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleNameChange = function (e) {
      _this.setState({
        name: e.target.value
      });
    };

    _this.handleDescriptionChange = function (e) {
      _this.setState({
        description: e.target.value
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

      var apiCall = null;

      if (_this.props.budget.id) {
        apiCall = _api_main__WEBPACK_IMPORTED_MODULE_4__.Budgets.update(_this.props.budget.id, {
          description: _this.state.description.trim(),
          name: _this.state.name.trim()
        });
      } else {
        apiCall = _api_main__WEBPACK_IMPORTED_MODULE_4__.Budgets.create({
          description: _this.state.description.trim(),
          name: _this.state.name.trim()
        });
      }

      apiCall.then(function (resp) {
        _this.props.onSave(resp);
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.genericError();
      });
    };

    _this.state = {
      name: _this.props.budget.name,
      description: _this.props.budget.description,
      errors: {},
      submitted: false
    };
    return _this;
  }

  var _proto = FormBudgetModal.prototype;

  _proto.action = function action() {
    if (!this.props.budget.id) {
      return 'Create';
    }

    return 'Update';
  };

  _proto.renderForm = function renderForm() {
    var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8, _React$createElement9, _React$createElement10;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", (_React$createElement10 = {
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 49,
      columnNumber: 7
    }, _React$createElement10), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 50,
      columnNumber: 9
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 51,
      columnNumber: 11
    }, _React$createElement), "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement2 = {
      type: "text",
      value: this.state.name,
      onChange: this.handleNameChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 52,
      columnNumber: 11
    }, _React$createElement2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_FieldErrors__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement3 = {
      label: "Name",
      val: this.state.name,
      validations: {
        required: true
      },
      show: this.state.submitted,
      handleErrors: this.handleErrors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 53,
      columnNumber: 11
    }, _React$createElement3)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement4 = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 59,
      columnNumber: 11
    }, _React$createElement4), "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", (_React$createElement5 = {
      type: "text",
      value: this.state.description,
      onChange: this.handleDescriptionChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 60,
      columnNumber: 11
    }, _React$createElement5)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_FieldErrors__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement6 = {
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
        lineNumber: 61,
        columnNumber: 11
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 61,
      columnNumber: 11
    }, _React$createElement6))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement9 = {
      className: "form-actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 69,
      columnNumber: 9
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement8 = {
      type: "submit",
      className: "btn btn-dark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 70,
      columnNumber: 11
    }, _React$createElement8), this.action())));
  };

  _proto.render = function render() {
    var _React$createElement11;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Modal__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement11 = {
      title: this.action() + " Budget",
      onClose: this.props.onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 78,
      columnNumber: 7
    }, _React$createElement11), this.renderForm());
  };

  return FormBudgetModal;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

FormBudgetModal.defaultProps = {
  budget: {
    name: '',
    description: ''
  }
};
FormBudgetModal.propTypes = {
  category: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onSave: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (FormBudgetModal);

/***/ }),

/***/ "./app/javascript/components/budget/AddUserModal.jsx":
/*!***********************************************************!*\
  !*** ./app/javascript/components/budget/AddUserModal.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Modal */ "./app/javascript/components/shared/Modal.jsx");
/* harmony import */ var _shared_FieldErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/FieldErrors */ "./app/javascript/components/shared/FieldErrors.jsx");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/budget/AddUserModal.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/budget/AddUserModal.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var FormAddUserModal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FormAddUserModal, _React$Component);

  function FormAddUserModal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleEmailChange = function (e) {
      _this.setState({
        email: e.target.value
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

      var apiCall = null;
      apiCall = _api_main__WEBPACK_IMPORTED_MODULE_4__.Budgets.adduser({
        budgetid: _this.props.budget.id,
        email: _this.state.email
      });
      apiCall.then(function (resp) {
        _this.props.onSave(resp);
      }, function (error) {
        error.status == 408 ? _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.genericConflict('User already added!') : error.status == 409 ? _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.genericConflict('User doesnt exist!') : _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.genericError();
      });
    };

    _this.state = {
      email: '',
      errors: {},
      submitted: false,
      budgetName: _this.props.budget.name
    };
    return _this;
  }

  var _proto = FormAddUserModal.prototype;

  _proto.renderForm = function renderForm() {
    var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", (_React$createElement7 = {
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 40,
      columnNumber: 7
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement4 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 41,
      columnNumber: 9
    }, _React$createElement4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", (_React$createElement = {
      className: "required",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 42,
      columnNumber: 11
    }, _React$createElement), "User email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement2 = {
      type: "text",
      value: this.state.email,
      onChange: this.handleEmailChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 43,
      columnNumber: 11
    }, _React$createElement2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_FieldErrors__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement3 = {
      label: "Email",
      val: this.state.email,
      validations: {
        required: true
      },
      show: this.state.submitted,
      handleErrors: this.handleErrors,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 44,
      columnNumber: 11
    }, _React$createElement3))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
      className: "form-actions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 52,
      columnNumber: 9
    }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement5 = {
      type: "submit",
      className: "btn btn-dark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 53,
      columnNumber: 11
    }, _React$createElement5), "Add user to " + this.state.budgetName)));
  };

  _proto.render = function render() {
    var _React$createElement8;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Modal__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement8 = {
      title: "Add user to " + this.state.budgetName,
      onClose: this.props.onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 61,
      columnNumber: 7
    }, _React$createElement8), this.renderForm());
  };

  return FormAddUserModal;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

FormAddUserModal.defaultProps = {
  budget: {
    name: 'unknown'
  }
};
FormAddUserModal.propTypes = {
  category: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onSave: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (FormAddUserModal);

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
/* harmony import */ var _AddUserModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddUserModal */ "./app/javascript/components/budget/AddUserModal.jsx");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
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

    _this.onBudgetCreateSave = function () {
      _this.closeBudgetCreate();

      _this.reloadData();
    };

    _this.onBudgetUpdateSave = function () {
      _this.closeBudgetUpdate();

      _this.reloadData();
    };

    _this.onAddUser = function () {
      _this.closeUserAdd();

      _this.reloadData();
    };

    _this.onBudgetDelete = function () {
      _this.setState({
        idSelectedBudget: 0
      });

      _this.reloadData();
    };

    _this.onRemoveUser = function () {
      _this.reloadData();
    };

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

    _this.openBudgetUpdate = function () {
      _this.setState({
        showBudgetUpdate: true
      });
    };

    _this.closeBudgetUpdate = function () {
      _this.setState({
        showBudgetUpdate: false
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

    _this.openUserAdd = function () {
      _this.setState({
        showUserAdd: true
      });
    };

    _this.closeUserAdd = function () {
      _this.setState({
        showUserAdd: false
      });
    };

    _this.deleteBudget = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.genericDelete('budget').then(function (result) {
                  if (!result.value) {
                    return;
                  }

                  _api_main__WEBPACK_IMPORTED_MODULE_4__.Budgets.delete(id).then(function () {
                    _this.onBudgetDelete();
                  }, function () {
                    _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.genericError();
                  });
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleUserRemove = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(id, budgetId) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.genericRemove('user').then(function (result) {
                  if (!result.value) {
                    return;
                  }

                  _api_main__WEBPACK_IMPORTED_MODULE_4__.Budgets.removeuser({
                    id: budgetId,
                    userid: id
                  }).then(function () {
                    _this.onRemoveUser();
                  }, function () {
                    _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.genericError();
                  });
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.updateBudget = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log("update");

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.updateSelectedBudget = function () {
      _api_main__WEBPACK_IMPORTED_MODULE_4__.Budgets.updateSelectBudget({
        id: _this.state.idSelectedBudget
      }).then(function (cResp) {
        _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.success("Selected budget");
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.error("Couldnt select budget");
      });
    };

    _this.reloadData = function () {
      _this.loadBudgets();
    };

    _this.loadBudgets = function () {
      _api_main__WEBPACK_IMPORTED_MODULE_4__.Budgets.list().then(function (cResp) {
        _this.setState({
          budgets: cResp
        });
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_5__.Alerts.error("Budget didn't load correctly");
      });
    };

    _this.state = {
      budgets: [// {
        //     id: 1, name: 'Perso', users: [
        //         { id: 1, firstname: 'Laurent', lastname: 'Brochu' },
        //     ]
        // },
        // {
        //     id: 2, name: 'Famille', users: [
        //         { id: 2, firstname: 'Laurent', lastname: 'Brochu' },
        //         { id: 3, firstname: 'Maxime', lastname: 'Lefebvre' },
        //         { id: 4, firstname: 'Karl', lastname: 'Mainville' },
        //         { id: 5, firstname: 'Louis', lastname: 'Garceau' }
        //     ]
        // },
        // {
        //     id: 3, name: 'Entreprise Planto', users: [
        //         { id: 6, firstname: 'Laurent', lastname: 'Brochu' },
        //         { id: 7, firstname: 'Maxime', lastname: 'Aubin' },
        //         { id: 8, firstname: 'Jean-Philippe', lastname: 'Belval' }
        //     ]
        // }
      ],
      idSelectedBudget: 0,
      showBudgetCreate: false,
      showBudgetUpdate: false
    };
    return _this;
  }

  var _proto = Main.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.reloadData();
  };

  _proto.renderBudgetCreateModal = function renderBudgetCreateModal() {
    var _React$createElement;

    if (!this.state.showBudgetCreate) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_budget_AddBudgetModal__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement = {
      onClose: this.closeBudgetCreate,
      onSave: this.onBudgetCreateSave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 16
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 120,
      columnNumber: 16
    }, _React$createElement));
  };

  _proto.renderBudgetEditModal = function renderBudgetEditModal() {
    var _this2 = this,
        _React$createElement2;

    if (!this.state.showBudgetUpdate) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_budget_AddBudgetModal__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement2 = {
      onClose: this.closeBudgetUpdate,
      onSave: this.onBudgetUpdateSave,
      budget: this.state.budgets.find(function (budget) {
        return budget.id == _this2.state.idSelectedBudget;
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 16
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 125,
      columnNumber: 16
    }, _React$createElement2));
  };

  _proto.renderUserAddModal = function renderUserAddModal() {
    var _this3 = this,
        _React$createElement3;

    if (!this.state.showUserAdd) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_AddUserModal__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement3 = {
      onClose: this.closeUserAdd,
      onSave: this.onAddUser,
      budget: this.state.budgets.find(function (budget) {
        return budget.id == _this3.state.idSelectedBudget;
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 16
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 134,
      columnNumber: 16
    }, _React$createElement3));
  };

  _proto.renderBudgetUsers = function renderBudgetUsers(user) {
    var _React$createElement4,
        _React$createElement5,
        _React$createElement6,
        _React$createElement7,
        _this4 = this,
        _React$createElement8,
        _React$createElement9,
        _React$createElement10,
        _React$createElement11;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", (_React$createElement11 = {
      id: user.id,
      key: user.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 140,
      columnNumber: 13
    }, _React$createElement11), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", (_React$createElement5 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 141,
      columnNumber: 17
    }, _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", (_React$createElement4 = {
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 142,
      columnNumber: 21
    }, _React$createElement4), user.firstname + " " + user.lastname)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", (_React$createElement7 = {
      className: "input-group mw-150",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 145,
      columnNumber: 17
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("select", (_React$createElement6 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 21
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 152,
      columnNumber: 21
    }, _React$createElement6))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("td", (_React$createElement10 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 155,
      columnNumber: 17
    }, _React$createElement10), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", (_React$createElement9 = {
      onClick: function onClick() {
        return _this4.handleUserRemove(user.id, _this4.state.idSelectedBudget);
      },
      className: "dim-til-hover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 21
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 156,
      columnNumber: 21
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", (_React$createElement8 = {
      className: "fa fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 126
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 156,
      columnNumber: 126
    }, _React$createElement8)))));
  };

  _proto.renderBudgetInfo = function renderBudgetInfo(budget) {
    var _this5 = this,
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

    if (this.state.idSelectedBudget === 0) {
      return 'Select a budget';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement29 = {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    }, _React$createElement29["__self"] = this, _React$createElement29["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 165,
      columnNumber: 13
    }, _React$createElement29), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", (_React$createElement14 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 166,
      columnNumber: 17
    }, _React$createElement14), budget.name, "\xA0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", (_React$createElement13 = {
      onClick: function onClick() {
        return _this5.openBudgetUpdate();
      },
      className: "dim-til-hover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 28
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 168,
      columnNumber: 28
    }, _React$createElement13), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", (_React$createElement12 = {
      className: "fa fa-edit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 97
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 168,
      columnNumber: 97
    }, _React$createElement12)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", (_React$createElement15 = {
      className: "table_title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 170,
      columnNumber: 17
    }, _React$createElement15), budget.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement25 = {
      className: "overflow-x bg-gray p-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    }, _React$createElement25["__self"] = this, _React$createElement25["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 173,
      columnNumber: 17
    }, _React$createElement25), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("table", (_React$createElement22 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 21
      }
    }, _React$createElement22["__self"] = this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 174,
      columnNumber: 21
    }, _React$createElement22), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("thead", (_React$createElement20 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 25
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 175,
      columnNumber: 25
    }, _React$createElement20), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tr", (_React$createElement19 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 29
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 176,
      columnNumber: 29
    }, _React$createElement19), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", (_React$createElement16 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 33
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 177,
      columnNumber: 33
    }, _React$createElement16), "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", (_React$createElement17 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 33
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 178,
      columnNumber: 33
    }, _React$createElement17), "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("th", (_React$createElement18 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 33
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 179,
      columnNumber: 33
    }, _React$createElement18)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("tbody", (_React$createElement21 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 25
      }
    }, _React$createElement21["__self"] = this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 182,
      columnNumber: 25
    }, _React$createElement21), budget.users.map(function (user) {
      return _this5.renderBudgetUsers(user);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", (_React$createElement24 = {
      onClick: function onClick() {
        return _this5.openUserAdd();
      },
      className: "btn btn-round btn-accept",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 21
      }
    }, _React$createElement24["__self"] = this, _React$createElement24["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 186,
      columnNumber: 21
    }, _React$createElement24), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", (_React$createElement23 = {
      className: "text-light fa fa-plus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 101
      }
    }, _React$createElement23["__self"] = this, _React$createElement23["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 186,
      columnNumber: 101
    }, _React$createElement23)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", (_React$createElement26 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }
    }, _React$createElement26["__self"] = this, _React$createElement26["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 188,
      columnNumber: 17
    }, _React$createElement26)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement28 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }
    }, _React$createElement28["__self"] = this, _React$createElement28["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 189,
      columnNumber: 17
    }, _React$createElement28), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", (_React$createElement27 = {
      onClick: function onClick() {
        return _this5.updateSelectedBudget();
      },
      className: "btn btn-round btn-accept pos-abs mt-neg-20 z-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 21
      }
    }, _React$createElement27["__self"] = this, _React$createElement27["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 190,
      columnNumber: 21
    }, _React$createElement27), "Select")));
  };

  _proto.renderBudgets = function renderBudgets() {
    var _React$createElement30,
        _this6 = this,
        _React$createElement34,
        _React$createElement35,
        _React$createElement36,
        _React$createElement37,
        _React$createElement38,
        _React$createElement39,
        _React$createElement40;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement40 = {
      className: "content-with-sidebar mt-30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 13
      }
    }, _React$createElement40["__self"] = this, _React$createElement40["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 200,
      columnNumber: 13
    }, _React$createElement40), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement38 = {
      className: "sidebar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }
    }, _React$createElement38["__self"] = this, _React$createElement38["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 201,
      columnNumber: 17
    }, _React$createElement38), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", (_React$createElement30 = {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 21
      }
    }, _React$createElement30["__self"] = this, _React$createElement30["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 202,
      columnNumber: 21
    }, _React$createElement30), "Your budgets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", (_React$createElement34 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 21
      }
    }, _React$createElement34["__self"] = this, _React$createElement34["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 203,
      columnNumber: 21
    }, _React$createElement34), this.state.budgets.map(function (budget) {
      var _React$createElement31, _React$createElement32, _React$createElement33;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", (_React$createElement33 = {
        key: budget.id,
        onClick: function onClick() {
          return _this6.changeSelectedBudget(budget.id);
        },
        style: {
          cursor: 'pointer'
        },
        className: budget.id == _this6.state.idSelectedBudget ? 'input-group text-bold' : 'input-group',
        __self: _this6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 26
        }
      }, _React$createElement33["__self"] = _this6, _React$createElement33["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 205,
        columnNumber: 26
      }, _React$createElement33), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", (_React$createElement32 = {
        onClick: function onClick() {
          return _this6.deleteBudget(budget.id);
        },
        className: "dim-til-hover text-right",
        __self: _this6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 29
        }
      }, _React$createElement32["__self"] = _this6, _React$createElement32["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 210,
        columnNumber: 29
      }, _React$createElement32), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", (_React$createElement31 = {
        className: "fa fa-times",
        __self: _this6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 114
        }
      }, _React$createElement31["__self"] = _this6, _React$createElement31["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 210,
        columnNumber: 114
      }, _React$createElement31))), "\xA0 ", budget.name);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", (_React$createElement35 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 21
      }
    }, _React$createElement35["__self"] = this, _React$createElement35["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 214,
      columnNumber: 21
    }, _React$createElement35)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement37 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 21
      }
    }, _React$createElement37["__self"] = this, _React$createElement37["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 215,
      columnNumber: 21
    }, _React$createElement37), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", (_React$createElement36 = {
      className: "btn btn-round btn-dark pos-abs mt-neg-20 z-5",
      onClick: this.openBudgetCreate,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 25
      }
    }, _React$createElement36["__self"] = this, _React$createElement36["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 216,
      columnNumber: 25
    }, _React$createElement36), "+ Add Budget"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement39 = {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }
    }, _React$createElement39["__self"] = this, _React$createElement39["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 219,
      columnNumber: 17
    }, _React$createElement39), this.renderBudgetInfo(this.state.budgets.find(function (budget) {
      return budget.id == _this6.state.idSelectedBudget;
    }))));
  };

  _proto.render = function render() {
    var _React$createElement41;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", (_React$createElement41 = {
      className: "container wide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 13
      }
    }, _React$createElement41["__self"] = this, _React$createElement41["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 228,
      columnNumber: 13
    }, _React$createElement41), this.renderBudgetCreateModal(), this.renderBudgetEditModal(), this.renderUserAddModal(), this.renderBudgets());
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_moment_locale_af_js-node_modules_moment_loca-6cbc58","vendors-node_modules_prop-types_index_js","vendors-node_modules_babel_runtime_regenerator_index_js","app_javascript_api_main_js-app_javascript_helpers_main_js-node_modules_moment_locale_sync_rec-f85292"], function() { return __webpack_exec__("./app/javascript/packs/budget.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=budget-6c746f5c895014c7e294.js.map