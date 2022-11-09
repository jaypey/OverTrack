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
      this.state.totalPerMonthRevenues[i] = 0;

      for (var _iterator3 = _createForOfIteratorHelperLoose(this.props.revenues), _step3; !(_step3 = _iterator3()).done;) {
        var revenue = _step3.value;
        var d = new Date(revenue.paid_at);
        var currentTime = new Date();

        if (d.getMonth() == currentTime.getMonth() - 1 - i) {
          this.state.totalPerMonthRevenues[i] += revenue.amount / 100;
        }
      }
    }
  };

  _proto.getAverageVariationPerMonthRevenues = function getAverageVariationPerMonthRevenues() {
    for (var i = this.state.totalPerMonthRevenues.length - 2; i > -1; i--) {
      this.state.variationPerMonthRevenues[i] = this.state.totalPerMonthRevenues[i] - this.state.totalPerMonthRevenues[i + 1];
    }

    var sum = this.state.variationPerMonthRevenues.reduce(function (partialSum, a) {
      return partialSum + a;
    }, 0);
    this.state.averageVariationPerMonthRevenues = sum / this.state.variationPerMonthRevenues.length;
  };

  _proto.getTotalRevenuesProjections = function getTotalRevenuesProjections() {
    for (var i = 0; i < 5; i++) {
      if (i == 0) {
        this.state.totalPerNextMonthsPredictionsRevenues[i] = this.state.totalPerMonthRevenues[0] + this.state.averageVariationPerMonthRevenues;
      } else {
        this.state.totalPerNextMonthsPredictionsRevenues[i] = this.state.totalPerNextMonthsPredictionsRevenues[i - 1] + this.state.averageVariationPerMonthRevenues;
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
        _React$createElement39,
        _React$createElement40,
        _React$createElement46,
        _React$createElement47,
        _React$createElement48,
        _React$createElement49,
        _React$createElement50,
        _React$createElement51,
        _React$createElement52,
        _React$createElement53,
        _React$createElement54,
        _React$createElement55,
        _React$createElement56,
        _React$createElement57,
        _React$createElement58,
        _React$createElement59,
        _React$createElement60,
        _React$createElement61,
        _React$createElement67,
        _React$createElement68,
        _React$createElement69,
        _React$createElement70,
        _React$createElement71,
        _React$createElement72,
        _React$createElement73,
        _React$createElement74,
        _React$createElement75,
        _React$createElement76,
        _React$createElement77,
        _React$createElement78,
        _React$createElement84,
        _React$createElement85,
        _React$createElement86,
        _React$createElement87,
        _React$createElement88,
        _React$createElement89,
        _React$createElement90,
        _React$createElement91,
        _React$createElement92,
        _React$createElement93,
        _React$createElement94,
        _React$createElement95,
        _React$createElement96,
        _React$createElement97,
        _React$createElement98,
        _React$createElement99,
        _React$createElement105,
        _React$createElement106,
        _React$createElement107,
        _React$createElement108,
        _React$createElement109,
        _React$createElement110,
        _React$createElement111;

    this.getTotalMonthlyAmount();
    this.getAverageVariationPerMonth();
    this.getTotalExpensesProjections();
    this.getTotalMonthlyAmountRevenues();
    this.getAverageVariationPerMonthRevenues();
    this.getTotalRevenuesProjections();
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement111 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 5
      }
    }, _React$createElement111["__self"] = this, _React$createElement111["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 184,
      columnNumber: 5
    }, _React$createElement111), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 7
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 185,
      columnNumber: 7
    }, _React$createElement), "Total expenses of the last few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement13 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 7
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 187,
      columnNumber: 7
    }, _React$createElement13), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement6 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 188,
      columnNumber: 9
    }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement5 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 189,
      columnNumber: 9
    }, _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement2 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 190,
      columnNumber: 11
    }, _React$createElement2), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement3 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 11
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 191,
      columnNumber: 11
    }, _React$createElement3), "Total expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement4 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 192,
      columnNumber: 11
    }, _React$createElement4), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement12 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 195,
      columnNumber: 9
    }, _React$createElement12), this.state.totalPerMonth.map(function (value, index) {
      var _React$createElement7, _React$createElement8, _React$createElement9, _React$createElement10, _React$createElement11;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement11 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 9
        }
      }, _React$createElement11["__self"] = _this3, _React$createElement11["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 198,
        columnNumber: 9
      }, _React$createElement11), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement7 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }
      }, _React$createElement7["__self"] = _this3, _React$createElement7["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 199,
        columnNumber: 11
      }, _React$createElement7), monthNames[d.getMonth() - index - 1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement8 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }
      }, _React$createElement8["__self"] = _this3, _React$createElement8["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 200,
        columnNumber: 11
      }, _React$createElement8), value, "$"), index + 1 != _this3.state.totalPerMonth.length && _this3.state.variationPerMonth[index] < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement9 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 9
        }
      }, _React$createElement9["__self"] = _this3, _React$createElement9["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 202,
        columnNumber: 9
      }, _React$createElement9), "-", _this3.state.variationPerMonth[index], "$"), index + 1 != _this3.state.totalPerMonth.length && _this3.state.variationPerMonth[index] >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement10 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 11
        }
      }, _React$createElement10["__self"] = _this3, _React$createElement10["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 204,
        columnNumber: 11
      }, _React$createElement10), "+", _this3.state.variationPerMonth[index], "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement14 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 7
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 229,
      columnNumber: 7
    }, _React$createElement14)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement15 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 7
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 230,
      columnNumber: 7
    }, _React$createElement15)), this.state.averageVariationPerMonth < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement17 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 9
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 233,
      columnNumber: 9
    }, _React$createElement17), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement16 = {
      className: "red-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 43
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 233,
      columnNumber: 43
    }, _React$createElement16), "-", this.state.averageVariationPerMonth, "$")), this.state.averageVariationPerMonth >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement19 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 11
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 235,
      columnNumber: 11
    }, _React$createElement19), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement18 = {
      className: "green-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 45
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 235,
      columnNumber: 45
    }, _React$createElement18), "+", this.state.averageVariationPerMonth, "$")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement20 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 7
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 238,
      columnNumber: 7
    }, _React$createElement20)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement21 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 7
      }
    }, _React$createElement21["__self"] = this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 239,
      columnNumber: 7
    }, _React$createElement21)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement22 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 7
      }
    }, _React$createElement22["__self"] = this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 241,
      columnNumber: 7
    }, _React$createElement22), "Projection of the total expenses for the next few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement34 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 7
      }
    }, _React$createElement34["__self"] = this, _React$createElement34["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 243,
      columnNumber: 7
    }, _React$createElement34), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement27 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 9
      }
    }, _React$createElement27["__self"] = this, _React$createElement27["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 244,
      columnNumber: 9
    }, _React$createElement27), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement26 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 9
      }
    }, _React$createElement26["__self"] = this, _React$createElement26["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 245,
      columnNumber: 9
    }, _React$createElement26), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement23 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 11
      }
    }, _React$createElement23["__self"] = this, _React$createElement23["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 246,
      columnNumber: 11
    }, _React$createElement23), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement24 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 11
      }
    }, _React$createElement24["__self"] = this, _React$createElement24["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 247,
      columnNumber: 11
    }, _React$createElement24), "Total expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement25 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 11
      }
    }, _React$createElement25["__self"] = this, _React$createElement25["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 248,
      columnNumber: 11
    }, _React$createElement25), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement33 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }
    }, _React$createElement33["__self"] = this, _React$createElement33["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 251,
      columnNumber: 9
    }, _React$createElement33), this.state.totalPerNextMonthsPredictions.map(function (value, index) {
      var _React$createElement28, _React$createElement29, _React$createElement30, _React$createElement31, _React$createElement32;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement32 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 9
        }
      }, _React$createElement32["__self"] = _this3, _React$createElement32["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 254,
        columnNumber: 9
      }, _React$createElement32), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement28 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }
      }, _React$createElement28["__self"] = _this3, _React$createElement28["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 255,
        columnNumber: 11
      }, _React$createElement28), monthNames[d.getMonth() + index]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement29 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 11
        }
      }, _React$createElement29["__self"] = _this3, _React$createElement29["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 256,
        columnNumber: 11
      }, _React$createElement29), value, "$"), _this3.state.averageVariationPerMonth < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement30 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 9
        }
      }, _React$createElement30["__self"] = _this3, _React$createElement30["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 258,
        columnNumber: 9
      }, _React$createElement30), "-", _this3.state.averageVariationPerMonth, "$"), _this3.state.averageVariationPerMonth >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement31 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 11
        }
      }, _React$createElement31["__self"] = _this3, _React$createElement31["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 260,
        columnNumber: 11
      }, _React$createElement31), "+", _this3.state.averageVariationPerMonth, "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement35 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 1
      }
    }, _React$createElement35["__self"] = this, _React$createElement35["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 273,
      columnNumber: 1
    }, _React$createElement35), "Total expenses of the last few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement47 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 7
      }
    }, _React$createElement47["__self"] = this, _React$createElement47["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 275,
      columnNumber: 7
    }, _React$createElement47), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement40 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 9
      }
    }, _React$createElement40["__self"] = this, _React$createElement40["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 276,
      columnNumber: 9
    }, _React$createElement40), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement39 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 9
      }
    }, _React$createElement39["__self"] = this, _React$createElement39["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 277,
      columnNumber: 9
    }, _React$createElement39), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement36 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 11
      }
    }, _React$createElement36["__self"] = this, _React$createElement36["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 278,
      columnNumber: 11
    }, _React$createElement36), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement37 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 11
      }
    }, _React$createElement37["__self"] = this, _React$createElement37["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 279,
      columnNumber: 11
    }, _React$createElement37), "Total expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement38 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 11
      }
    }, _React$createElement38["__self"] = this, _React$createElement38["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 280,
      columnNumber: 11
    }, _React$createElement38), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement46 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }
    }, _React$createElement46["__self"] = this, _React$createElement46["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 283,
      columnNumber: 9
    }, _React$createElement46), this.state.totalPerMonth.map(function (value, index) {
      var _React$createElement41, _React$createElement42, _React$createElement43, _React$createElement44, _React$createElement45;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement45 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 9
        }
      }, _React$createElement45["__self"] = _this3, _React$createElement45["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 286,
        columnNumber: 9
      }, _React$createElement45), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement41 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 11
        }
      }, _React$createElement41["__self"] = _this3, _React$createElement41["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 287,
        columnNumber: 11
      }, _React$createElement41), monthNames[d.getMonth() - index - 1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement42 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 11
        }
      }, _React$createElement42["__self"] = _this3, _React$createElement42["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 288,
        columnNumber: 11
      }, _React$createElement42), value, "$"), index + 1 != _this3.state.totalPerMonth.length && _this3.state.variationPerMonth[index] < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement43 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 9
        }
      }, _React$createElement43["__self"] = _this3, _React$createElement43["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 290,
        columnNumber: 9
      }, _React$createElement43), "-", _this3.state.variationPerMonth[index], "$"), index + 1 != _this3.state.totalPerMonth.length && _this3.state.variationPerMonth[index] >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement44 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }
      }, _React$createElement44["__self"] = _this3, _React$createElement44["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 292,
        columnNumber: 11
      }, _React$createElement44), "+", _this3.state.variationPerMonth[index], "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement48 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 7
      }
    }, _React$createElement48["__self"] = this, _React$createElement48["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 317,
      columnNumber: 7
    }, _React$createElement48)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement49 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 7
      }
    }, _React$createElement49["__self"] = this, _React$createElement49["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 318,
      columnNumber: 7
    }, _React$createElement49)), this.state.averageVariationPerMonth < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement51 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 9
      }
    }, _React$createElement51["__self"] = this, _React$createElement51["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 321,
      columnNumber: 9
    }, _React$createElement51), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement50 = {
      className: "red-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 43
      }
    }, _React$createElement50["__self"] = this, _React$createElement50["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 321,
      columnNumber: 43
    }, _React$createElement50), "-", this.state.averageVariationPerMonth, "$")), this.state.averageVariationPerMonth >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement53 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 11
      }
    }, _React$createElement53["__self"] = this, _React$createElement53["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 323,
      columnNumber: 11
    }, _React$createElement53), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement52 = {
      className: "green-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 45
      }
    }, _React$createElement52["__self"] = this, _React$createElement52["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 323,
      columnNumber: 45
    }, _React$createElement52), "+", this.state.averageVariationPerMonth, "$")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement54 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326,
        columnNumber: 7
      }
    }, _React$createElement54["__self"] = this, _React$createElement54["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 326,
      columnNumber: 7
    }, _React$createElement54)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement55 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 7
      }
    }, _React$createElement55["__self"] = this, _React$createElement55["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 327,
      columnNumber: 7
    }, _React$createElement55)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement56 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 7
      }
    }, _React$createElement56["__self"] = this, _React$createElement56["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 329,
      columnNumber: 7
    }, _React$createElement56), "Projection of the total expenses for the next few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement68 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 7
      }
    }, _React$createElement68["__self"] = this, _React$createElement68["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 331,
      columnNumber: 7
    }, _React$createElement68), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement61 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 9
      }
    }, _React$createElement61["__self"] = this, _React$createElement61["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 332,
      columnNumber: 9
    }, _React$createElement61), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement60 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 9
      }
    }, _React$createElement60["__self"] = this, _React$createElement60["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 333,
      columnNumber: 9
    }, _React$createElement60), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement57 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 11
      }
    }, _React$createElement57["__self"] = this, _React$createElement57["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 334,
      columnNumber: 11
    }, _React$createElement57), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement58 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 11
      }
    }, _React$createElement58["__self"] = this, _React$createElement58["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 335,
      columnNumber: 11
    }, _React$createElement58), "Total expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement59 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 11
      }
    }, _React$createElement59["__self"] = this, _React$createElement59["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 336,
      columnNumber: 11
    }, _React$createElement59), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement67 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 9
      }
    }, _React$createElement67["__self"] = this, _React$createElement67["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 339,
      columnNumber: 9
    }, _React$createElement67), this.state.totalPerNextMonthsPredictions.map(function (value, index) {
      var _React$createElement62, _React$createElement63, _React$createElement64, _React$createElement65, _React$createElement66;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement66 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 9
        }
      }, _React$createElement66["__self"] = _this3, _React$createElement66["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 342,
        columnNumber: 9
      }, _React$createElement66), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement62 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 11
        }
      }, _React$createElement62["__self"] = _this3, _React$createElement62["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 343,
        columnNumber: 11
      }, _React$createElement62), monthNames[d.getMonth() + index]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement63 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 11
        }
      }, _React$createElement63["__self"] = _this3, _React$createElement63["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 344,
        columnNumber: 11
      }, _React$createElement63), value, "$"), _this3.state.averageVariationPerMonth < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement64 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 9
        }
      }, _React$createElement64["__self"] = _this3, _React$createElement64["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 346,
        columnNumber: 9
      }, _React$createElement64), "-", _this3.state.averageVariationPerMonth, "$"), _this3.state.averageVariationPerMonth >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement65 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 11
        }
      }, _React$createElement65["__self"] = _this3, _React$createElement65["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 348,
        columnNumber: 11
      }, _React$createElement65), "+", _this3.state.averageVariationPerMonth, "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement69 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 1
      }
    }, _React$createElement69["__self"] = this, _React$createElement69["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 359,
      columnNumber: 1
    }, _React$createElement69)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement70 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 1
      }
    }, _React$createElement70["__self"] = this, _React$createElement70["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 360,
      columnNumber: 1
    }, _React$createElement70)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement71 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 1
      }
    }, _React$createElement71["__self"] = this, _React$createElement71["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 361,
      columnNumber: 1
    }, _React$createElement71)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement72 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 1
      }
    }, _React$createElement72["__self"] = this, _React$createElement72["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 362,
      columnNumber: 1
    }, _React$createElement72)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement73 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 7
      }
    }, _React$createElement73["__self"] = this, _React$createElement73["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 366,
      columnNumber: 7
    }, _React$createElement73), "Total revenues of the last few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement85 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 1
      }
    }, _React$createElement85["__self"] = this, _React$createElement85["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 368,
      columnNumber: 1
    }, _React$createElement85), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement78 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 3
      }
    }, _React$createElement78["__self"] = this, _React$createElement78["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 369,
      columnNumber: 3
    }, _React$createElement78), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement77 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 3
      }
    }, _React$createElement77["__self"] = this, _React$createElement77["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 370,
      columnNumber: 3
    }, _React$createElement77), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement74 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 5
      }
    }, _React$createElement74["__self"] = this, _React$createElement74["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 371,
      columnNumber: 5
    }, _React$createElement74), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement75 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 5
      }
    }, _React$createElement75["__self"] = this, _React$createElement75["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 372,
      columnNumber: 5
    }, _React$createElement75), "Total revenues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement76 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 5
      }
    }, _React$createElement76["__self"] = this, _React$createElement76["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 373,
      columnNumber: 5
    }, _React$createElement76), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement84 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 3
      }
    }, _React$createElement84["__self"] = this, _React$createElement84["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 376,
      columnNumber: 3
    }, _React$createElement84), this.state.totalPerMonthRevenues.map(function (value, index) {
      var _React$createElement79, _React$createElement80, _React$createElement81, _React$createElement82, _React$createElement83;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement83 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 3
        }
      }, _React$createElement83["__self"] = _this3, _React$createElement83["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 379,
        columnNumber: 3
      }, _React$createElement83), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement79 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 5
        }
      }, _React$createElement79["__self"] = _this3, _React$createElement79["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 380,
        columnNumber: 5
      }, _React$createElement79), monthNames[d.getMonth() - index - 1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement80 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 5
        }
      }, _React$createElement80["__self"] = _this3, _React$createElement80["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 381,
        columnNumber: 5
      }, _React$createElement80), value, "$"), index + 1 != _this3.state.totalPerMonthRevenues.length && _this3.state.variationPerMonthRevenues[index] < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement81 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383,
          columnNumber: 3
        }
      }, _React$createElement81["__self"] = _this3, _React$createElement81["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 383,
        columnNumber: 3
      }, _React$createElement81), "-", _this3.state.variationPerMonthRevenues[index], "$"), index + 1 != _this3.state.totalPerMonthRevenues.length && _this3.state.variationPerMonthRevenues[index] >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement82 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 5
        }
      }, _React$createElement82["__self"] = _this3, _React$createElement82["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 385,
        columnNumber: 5
      }, _React$createElement82), "+", _this3.state.variationPerMonthRevenues[index], "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement86 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 1
      }
    }, _React$createElement86["__self"] = this, _React$createElement86["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 410,
      columnNumber: 1
    }, _React$createElement86)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement87 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 1
      }
    }, _React$createElement87["__self"] = this, _React$createElement87["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 411,
      columnNumber: 1
    }, _React$createElement87)), this.state.averageVariationPerMonthRevenues < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement89 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 3
      }
    }, _React$createElement89["__self"] = this, _React$createElement89["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 414,
      columnNumber: 3
    }, _React$createElement89), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement88 = {
      className: "red-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 37
      }
    }, _React$createElement88["__self"] = this, _React$createElement88["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 414,
      columnNumber: 37
    }, _React$createElement88), "-", this.state.averageVariationPerMonthRevenues, "$")), this.state.averageVariationPerMonthRevenues >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement91 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 5
      }
    }, _React$createElement91["__self"] = this, _React$createElement91["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 416,
      columnNumber: 5
    }, _React$createElement91), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement90 = {
      className: "green-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 39
      }
    }, _React$createElement90["__self"] = this, _React$createElement90["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 416,
      columnNumber: 39
    }, _React$createElement90), "+", this.state.averageVariationPerMonthRevenues, "$")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement92 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 1
      }
    }, _React$createElement92["__self"] = this, _React$createElement92["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 419,
      columnNumber: 1
    }, _React$createElement92)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement93 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 1
      }
    }, _React$createElement93["__self"] = this, _React$createElement93["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 420,
      columnNumber: 1
    }, _React$createElement93)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement94 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 1
      }
    }, _React$createElement94["__self"] = this, _React$createElement94["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 422,
      columnNumber: 1
    }, _React$createElement94), "Projection of the total revenues for the next few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement106 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 1
      }
    }, _React$createElement106["__self"] = this, _React$createElement106["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 424,
      columnNumber: 1
    }, _React$createElement106), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement99 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 3
      }
    }, _React$createElement99["__self"] = this, _React$createElement99["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 425,
      columnNumber: 3
    }, _React$createElement99), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement98 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 3
      }
    }, _React$createElement98["__self"] = this, _React$createElement98["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 426,
      columnNumber: 3
    }, _React$createElement98), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement95 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 5
      }
    }, _React$createElement95["__self"] = this, _React$createElement95["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 427,
      columnNumber: 5
    }, _React$createElement95), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement96 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 5
      }
    }, _React$createElement96["__self"] = this, _React$createElement96["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 428,
      columnNumber: 5
    }, _React$createElement96), "Total revenues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement97 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 5
      }
    }, _React$createElement97["__self"] = this, _React$createElement97["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 429,
      columnNumber: 5
    }, _React$createElement97), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement105 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 3
      }
    }, _React$createElement105["__self"] = this, _React$createElement105["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 432,
      columnNumber: 3
    }, _React$createElement105), this.state.totalPerNextMonthsPredictionsRevenues.map(function (value, index) {
      var _React$createElement100, _React$createElement101, _React$createElement102, _React$createElement103, _React$createElement104;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement104 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 3
        }
      }, _React$createElement104["__self"] = _this3, _React$createElement104["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 435,
        columnNumber: 3
      }, _React$createElement104), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement100 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436,
          columnNumber: 5
        }
      }, _React$createElement100["__self"] = _this3, _React$createElement100["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 436,
        columnNumber: 5
      }, _React$createElement100), monthNames[d.getMonth() + index]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement101 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 437,
          columnNumber: 5
        }
      }, _React$createElement101["__self"] = _this3, _React$createElement101["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 437,
        columnNumber: 5
      }, _React$createElement101), value, "$"), _this3.state.averageVariationPerMonthRevenues < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement102 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 3
        }
      }, _React$createElement102["__self"] = _this3, _React$createElement102["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 439,
        columnNumber: 3
      }, _React$createElement102), "-", _this3.state.averageVariationPerMonthRevenues, "$"), _this3.state.averageVariationPerMonthRevenues >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement103 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 5
        }
      }, _React$createElement103["__self"] = _this3, _React$createElement103["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 441,
        columnNumber: 5
      }, _React$createElement103), "+", _this3.state.averageVariationPerMonthRevenues, "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement107 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 1
      }
    }, _React$createElement107["__self"] = this, _React$createElement107["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 455,
      columnNumber: 1
    }, _React$createElement107)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement108 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 1
      }
    }, _React$createElement108["__self"] = this, _React$createElement108["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 456,
      columnNumber: 1
    }, _React$createElement108)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement109 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 1
      }
    }, _React$createElement109["__self"] = this, _React$createElement109["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 457,
      columnNumber: 1
    }, _React$createElement109)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement110 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 1
      }
    }, _React$createElement110["__self"] = this, _React$createElement110["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 458,
      columnNumber: 1
    }, _React$createElement110)));
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
//# sourceMappingURL=projections-2585cd78fbab07c60117.js.map