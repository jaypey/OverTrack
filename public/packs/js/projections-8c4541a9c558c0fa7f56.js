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
/* harmony import */ var _expenses_FormModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expenses/FormModal */ "./app/javascript/components/expenses/FormModal.jsx");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
/* harmony import */ var _ProjectionsChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectionsChart */ "./app/javascript/components/projections/ProjectionsChart.jsx");
var _jsxFileName = "/ontrack/app/javascript/components/projections/Main.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/projections/Main.jsx";

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

    _this.onExpenseSave = function () {
      _this.closeExpenseCreate();

      _this.reloadData();
    };

    _this.reloadData = function () {
      _this.loadCategory();

      _this.loadExpensesData();

      _this.loadRevenueData();

      _this.loadPieChartData(moment__WEBPACK_IMPORTED_MODULE_1___default()().format('MMMM YYYY'));
    };

    _this.loadCategory = function () {
      _api_main__WEBPACK_IMPORTED_MODULE_3__.Categories.list().then(function (cResp) {
        _this.setState({
          categories: cResp
        });
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_4__.Alerts.error("Categories didn't load correctly");
      });
    };

    _this.loadExpensesData = function () {
      _api_main__WEBPACK_IMPORTED_MODULE_3__.Expenses.list().then(function (eResp) {
        _this.setState({
          expenses: eResp
        });

        _api_main__WEBPACK_IMPORTED_MODULE_3__.Goals.list().then(function (gResp) {
          _this.setState({
            loaded: true,
            monthlyGoal: gResp.monthly
          });
        }, function () {
          _helpers_main__WEBPACK_IMPORTED_MODULE_4__.Alerts.error("Goal of expenses didn't load!");
        });
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_4__.Alerts.error("Expenses didn't load correctly!");
      });
    };

    _this.loadRevenueData = function () {
      _api_main__WEBPACK_IMPORTED_MODULE_3__.Revenues.list({
        paid_after: moment__WEBPACK_IMPORTED_MODULE_1___default()().startOf('month').unix()
      }).then(function (rResp) {
        _this.setState({
          revenues: rResp
        });
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_4__.Alerts.error("Revenues didn't load correctly!");
      });
    };

    _this.loadSum = function () {
      var indexRev = 0;

      _this.state.categories.forEach(function (category) {
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
      _api_main__WEBPACK_IMPORTED_MODULE_3__.Reports.month({
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
        _helpers_main__WEBPACK_IMPORTED_MODULE_4__.Alerts.error("The data for the pie chart didn't load correctly!");
      });
    };

    _this.state = {
      categories: [],
      expenses: [],
      expensesWithPredictions: [],
      sumExpenses: 0,
      revenues: [],
      sumRevenues: 0,
      loaded: false,
      monthlyGoal: 0,
      showExpenseCreateModal: false,
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
    this.state.categories.forEach(function (category) {
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

  _proto.renderExpenseCreateModal = function renderExpenseCreateModal() {
    var _React$createElement;

    if (!this.state.showExpenseCreateModal) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_expenses_FormModal__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement = {
      categories: this.state.categories,
      onClose: this.closeExpenseCreate,
      onSave: this.onExpenseSave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 12
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 78,
      columnNumber: 12
    }, _React$createElement));
  };

  _proto.render = function render() {
    var _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6;

    if (!this.state.loaded) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 7
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 130,
      columnNumber: 7
    }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", (_React$createElement2 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 131,
      columnNumber: 9
    }, _React$createElement2), "Predictions for the next few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement3 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 132,
      columnNumber: 9
    }, _React$createElement3)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement4 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 133,
      columnNumber: 9
    }, _React$createElement4)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProjectionsChart__WEBPACK_IMPORTED_MODULE_5__.default, (_React$createElement5 = {
      categoriesWithExpensesAndSpend: this.categoriesWithExpensesAndSpend(),
      expenses: this.state.expenses,
      revenues: this.state.revenues,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 8
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 134,
      columnNumber: 8
    }, _React$createElement5)));
  };

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./app/javascript/components/projections/ProjectionsChart.jsx":
/*!********************************************************************!*\
  !*** ./app/javascript/components/projections/ProjectionsChart.jsx ***!
  \********************************************************************/
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
var _jsxFileName = "/ontrack/app/javascript/components/projections/ProjectionsChart.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/projections/ProjectionsChart.jsx";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var ProjectionsChart = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProjectionsChart, _React$Component);

  function ProjectionsChart(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      distinctExpenses: [],
      totalMonthlyChangePrediction: 0,
      totalPerMonth: [],
      variationPerMonth: [],
      averageVariationPerMonth: 0,
      totalPerNextMonthsPredictions: [],
      totalPerMonthRevenues: [],
      variationPerMonthRevenues: [],
      averageVariationPerMonthRevenues: 0,
      totalPerNextMonthsPredictionsRevenues: []
    };
    return _this;
  }

  var _proto = ProjectionsChart.prototype;

  _proto.getexpense = function getexpense() {
    {
      this.props.categoriesWithExpensesAndSpend.map(function (category) {
        category.expenses.map(function (expense) {
          // if (expense.description == "Breakfast")
          // {
          // this.setState(prevState => ({
          //   expensestest: [...prevState.expensestest, expense]
          // }))
          console.log(expense.id); // }
        });
      });
    }
  };

  _proto.getcategories = function getcategories() {
    {
      this.props.categoriesWithExpensesAndSpend.map(function (category) {
        return console.log(category.name);
      });
    } //   for (let expensesss of this.props.categoriesWithExpensesAndSpend) {
    //     if (expensesss.name == "T-Shirt sales")
    //     {
    //       console.log(expensesss.name)
    //     }
    // }
  };

  _proto.getDistinctExpenses = function getDistinctExpenses() {
    var _this2 = this;

    {
      this.props.expenses.map(function (expense) {
        var d = new Date(expense.paid_at);

        if (_this2.state.distinctExpenses.filter(function (e) {
          return e.id === expense.id;
        }).length == 0) {
          _this2.setState(function (prevState) {
            return {
              distinctExpenses: [].concat(prevState.distinctExpenses, [expense])
            };
          }); //console.log(d.toString());

        }
      });
    }

    for (var _iterator = _createForOfIteratorHelperLoose(this.state.distinctExpenses), _step; !(_step = _iterator()).done;) {//console.log(expense.description)

      var expense = _step.value;
    }
  };

  _proto.getTotalMonthlyAmount = function getTotalMonthlyAmount() {
    for (var i = 0; i < 5; i++) {
      this.state.totalPerMonth[i] = 0;

      for (var _iterator2 = _createForOfIteratorHelperLoose(this.props.expenses), _step2; !(_step2 = _iterator2()).done;) {
        var expense = _step2.value;
        var d = new Date(expense.paid_at);
        var currentTime = new Date();

        if (d.getMonth() == currentTime.getMonth() - 1 - i) {
          this.state.totalPerMonth[i] += expense.amount / 100;
        }
      }
    }
  };

  _proto.getAverageVariationPerMonth = function getAverageVariationPerMonth() {
    for (var i = this.state.totalPerMonth.length - 2; i > -1; i--) {
      this.state.variationPerMonth[i] = this.state.totalPerMonth[i] - this.state.totalPerMonth[i + 1];
    }

    var sum = this.state.variationPerMonth.reduce(function (partialSum, a) {
      return partialSum + a;
    }, 0);
    this.state.averageVariationPerMonth = sum / this.state.variationPerMonth.length;
  };

  _proto.getTotalExpensesProjections = function getTotalExpensesProjections() {
    for (var i = 0; i < 5; i++) {
      if (i == 0) {
        this.state.totalPerNextMonthsPredictions[i] = this.state.totalPerMonth[0] + this.state.averageVariationPerMonth;
      } else {
        this.state.totalPerNextMonthsPredictions[i] = this.state.totalPerNextMonthsPredictions[i - 1] + this.state.averageVariationPerMonth;
      }
    }
  };

  _proto.getTotalMonthlyAmountRevenues = function getTotalMonthlyAmountRevenues() {
    for (var i = 0; i < 5; i++) {
      this.state.totalPerMonth[i] = 0;

      for (var _iterator3 = _createForOfIteratorHelperLoose(this.props.expenses), _step3; !(_step3 = _iterator3()).done;) {
        var expense = _step3.value;
        var d = new Date(expense.paid_at);
        var currentTime = new Date();

        if (d.getMonth() == currentTime.getMonth() - 1 - i) {
          this.state.totalPerMonth[i] += expense.amount / 100;
        }
      }
    }
  };

  _proto.getAverageVariationPerMonthRevenues = function getAverageVariationPerMonthRevenues() {
    for (var i = this.state.totalPerMonth.length - 2; i > -1; i--) {
      this.state.variationPerMonth[i] = this.state.totalPerMonth[i] - this.state.totalPerMonth[i + 1];
    }

    var sum = this.state.variationPerMonth.reduce(function (partialSum, a) {
      return partialSum + a;
    }, 0);
    this.state.averageVariationPerMonth = sum / this.state.variationPerMonth.length;
  };

  _proto.getTotalRevenuesProjections = function getTotalRevenuesProjections() {
    for (var i = 0; i < 5; i++) {
      if (i == 0) {
        this.state.totalPerNextMonthsPredictions[i] = this.state.totalPerMonth[0] + this.state.averageVariationPerMonth;
      } else {
        this.state.totalPerNextMonthsPredictions[i] = this.state.totalPerNextMonthsPredictions[i - 1] + this.state.averageVariationPerMonth;
      }
    }
  };

  _proto.render = function render() {
    var _React$createElement,
        _React$createElement2,
        _React$createElement3,
        _React$createElement4,
        _React$createElement5,
        _React$createElement6,
        _this3 = this,
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
        _React$createElement33,
        _React$createElement34,
        _React$createElement35,
        _React$createElement36,
        _React$createElement37,
        _React$createElement38,
        _React$createElement39;

    this.getTotalMonthlyAmount();
    this.getAverageVariationPerMonth();
    this.getTotalExpensesProjections();
    var d = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",, "November", "December"];
    monthNames[-1] = "December";
    monthNames[-2] = "November";
    monthNames[-3] = "October";
    monthNames[-4] = "September";
    monthNames[-5] = "August";
    monthNames[-6] = "July";
    monthNames[-7] = "June";
    monthNames[-8] = "May";
    monthNames[-9] = "April";
    monthNames[-10] = "March";
    monthNames[-11] = "February";
    monthNames[-12] = "January";
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement39 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 5
      }
    }, _React$createElement39["__self"] = this, _React$createElement39["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 181,
      columnNumber: 5
    }, _React$createElement39), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 7
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 182,
      columnNumber: 7
    }, _React$createElement), "Total expenses of the last few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement13 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 7
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 184,
      columnNumber: 7
    }, _React$createElement13), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement6 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 185,
      columnNumber: 9
    }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement5 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 186,
      columnNumber: 9
    }, _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement2 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 187,
      columnNumber: 11
    }, _React$createElement2), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement3 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 188,
      columnNumber: 11
    }, _React$createElement3), "Total expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement4 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 11
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 189,
      columnNumber: 11
    }, _React$createElement4), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement12 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 192,
      columnNumber: 9
    }, _React$createElement12), this.state.totalPerMonth.map(function (value, index) {
      var _React$createElement7, _React$createElement8, _React$createElement9, _React$createElement10, _React$createElement11;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement11 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 9
        }
      }, _React$createElement11["__self"] = _this3, _React$createElement11["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 195,
        columnNumber: 9
      }, _React$createElement11), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement7 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }
      }, _React$createElement7["__self"] = _this3, _React$createElement7["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 196,
        columnNumber: 11
      }, _React$createElement7), monthNames[d.getMonth() - index - 1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement8 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 11
        }
      }, _React$createElement8["__self"] = _this3, _React$createElement8["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 197,
        columnNumber: 11
      }, _React$createElement8), value, "$"), index + 1 != _this3.state.totalPerMonth.length && _this3.state.variationPerMonth[index] < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement9 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 9
        }
      }, _React$createElement9["__self"] = _this3, _React$createElement9["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 199,
        columnNumber: 9
      }, _React$createElement9), "-", _this3.state.variationPerMonth[index], "$"), index + 1 != _this3.state.totalPerMonth.length && _this3.state.variationPerMonth[index] >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement10 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }
      }, _React$createElement10["__self"] = _this3, _React$createElement10["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 201,
        columnNumber: 11
      }, _React$createElement10), "+", _this3.state.variationPerMonth[index], "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement14 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 7
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 226,
      columnNumber: 7
    }, _React$createElement14)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement15 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 7
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 227,
      columnNumber: 7
    }, _React$createElement15)), this.state.averageVariationPerMonth < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement17 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 230,
      columnNumber: 9
    }, _React$createElement17), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement16 = {
      className: "red-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 43
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 230,
      columnNumber: 43
    }, _React$createElement16), "-", this.state.averageVariationPerMonth, "$")), this.state.averageVariationPerMonth >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement19 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 11
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 232,
      columnNumber: 11
    }, _React$createElement19), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement18 = {
      className: "green-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 45
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 232,
      columnNumber: 45
    }, _React$createElement18), "+", this.state.averageVariationPerMonth, "$")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement20 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 7
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 235,
      columnNumber: 7
    }, _React$createElement20)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement21 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 7
      }
    }, _React$createElement21["__self"] = this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 236,
      columnNumber: 7
    }, _React$createElement21)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement22 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 7
      }
    }, _React$createElement22["__self"] = this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 238,
      columnNumber: 7
    }, _React$createElement22), "Projection of the total expenses for the next few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement34 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 7
      }
    }, _React$createElement34["__self"] = this, _React$createElement34["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 240,
      columnNumber: 7
    }, _React$createElement34), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement27 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }
    }, _React$createElement27["__self"] = this, _React$createElement27["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 241,
      columnNumber: 9
    }, _React$createElement27), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement26 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 9
      }
    }, _React$createElement26["__self"] = this, _React$createElement26["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 242,
      columnNumber: 9
    }, _React$createElement26), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement23 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 11
      }
    }, _React$createElement23["__self"] = this, _React$createElement23["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 243,
      columnNumber: 11
    }, _React$createElement23), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement24 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 11
      }
    }, _React$createElement24["__self"] = this, _React$createElement24["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 244,
      columnNumber: 11
    }, _React$createElement24), "Total expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement25 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 11
      }
    }, _React$createElement25["__self"] = this, _React$createElement25["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 245,
      columnNumber: 11
    }, _React$createElement25), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement33 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 9
      }
    }, _React$createElement33["__self"] = this, _React$createElement33["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 248,
      columnNumber: 9
    }, _React$createElement33), this.state.totalPerNextMonthsPredictions.map(function (value, index) {
      var _React$createElement28, _React$createElement29, _React$createElement30, _React$createElement31, _React$createElement32;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement32 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 9
        }
      }, _React$createElement32["__self"] = _this3, _React$createElement32["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 251,
        columnNumber: 9
      }, _React$createElement32), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement28 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }
      }, _React$createElement28["__self"] = _this3, _React$createElement28["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 252,
        columnNumber: 11
      }, _React$createElement28), monthNames[d.getMonth() + index]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement29 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 11
        }
      }, _React$createElement29["__self"] = _this3, _React$createElement29["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 253,
        columnNumber: 11
      }, _React$createElement29), value, "$"), _this3.state.averageVariationPerMonth < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement30 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 9
        }
      }, _React$createElement30["__self"] = _this3, _React$createElement30["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 255,
        columnNumber: 9
      }, _React$createElement30), "-", _this3.state.averageVariationPerMonth, "$"), _this3.state.averageVariationPerMonth >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement31 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 11
        }
      }, _React$createElement31["__self"] = _this3, _React$createElement31["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 257,
        columnNumber: 11
      }, _React$createElement31), "+", _this3.state.averageVariationPerMonth, "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement35 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 1
      }
    }, _React$createElement35["__self"] = this, _React$createElement35["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 269,
      columnNumber: 1
    }, _React$createElement35)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement36 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 1
      }
    }, _React$createElement36["__self"] = this, _React$createElement36["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 270,
      columnNumber: 1
    }, _React$createElement36)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement37 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 1
      }
    }, _React$createElement37["__self"] = this, _React$createElement37["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 271,
      columnNumber: 1
    }, _React$createElement37)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement38 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 1
      }
    }, _React$createElement38["__self"] = this, _React$createElement38["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 272,
      columnNumber: 1
    }, _React$createElement38)));
  };

  return ProjectionsChart;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectionsChart);

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_prop-types_index_js-node_modules_react-dom_index_js","vendors-node_modules_axios_index_js-node_modules_moment_locale_af_js-node_modules_moment_loca-3bfda5","vendors-node_modules_react-datepicker_dist_react-datepicker_min_js-node_modules_react-text-ma-b62690","app_javascript_api_main_js-app_javascript_helpers_main_js-node_modules_moment_locale_sync_rec-f85292","app_javascript_components_expenses_FormModal_jsx-app_javascript_components_goals_FormModal_js-20b2f7"], function() { return __webpack_exec__("./app/javascript/packs/projections.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=projections-8c4541a9c558c0fa7f56.js.map