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
      colors: [],
      count: 3,
      project: 3
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
        lineNumber: 79,
        columnNumber: 12
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 79,
      columnNumber: 12
    }, _React$createElement));
  };

  _proto.render = function render() {
    var _this3 = this,
        _React$createElement2,
        _React$createElement3,
        _React$createElement4,
        _React$createElement5,
        _React$createElement6,
        _React$createElement7,
        _React$createElement8,
        _React$createElement9,
        _React$createElement10;

    if (!this.state.loaded) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement10 = {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 7
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 131,
      columnNumber: 7
    }, _React$createElement10), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement2 = {
      onClick: function onClick() {
        return _this3.setState({
          count: Math.min(12, Math.max(_this3.state.count + 1, 3))
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 132,
      columnNumber: 9
    }, _React$createElement2), "Increase studied months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement3 = {
      onClick: function onClick() {
        return _this3.setState({
          count: Math.min(12, Math.max(_this3.state.count - 1, 3))
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 135,
      columnNumber: 9
    }, _React$createElement3), "Decrease studied months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement4 = {
      onClick: function onClick() {
        return _this3.setState({
          project: Math.min(12, Math.max(_this3.state.project + 1, 3))
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 138,
      columnNumber: 9
    }, _React$createElement4), "Increase projected months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement5 = {
      onClick: function onClick() {
        return _this3.setState({
          project: Math.min(12, Math.max(_this3.state.project - 1, 3))
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 141,
      columnNumber: 9
    }, _React$createElement5), "Decrease projected months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", (_React$createElement6 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 148,
      columnNumber: 9
    }, _React$createElement6), "Predictions for the next few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement7 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 149,
      columnNumber: 9
    }, _React$createElement7)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement8 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 150,
      columnNumber: 9
    }, _React$createElement8)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProjectionsChart__WEBPACK_IMPORTED_MODULE_5__.default, (_React$createElement9 = {
      studiedMonths: this.state.count,
      projectedMonths: this.state.project,
      categoriesWithExpensesAndSpend: this.categoriesWithExpensesAndSpend(),
      expenses: this.state.expenses,
      revenues: this.state.revenues,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 8
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 151,
      columnNumber: 8
    }, _React$createElement9)));
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







var initialState = {
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

  _proto.reset = function reset() {
    this.setState(initialState);
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
    for (var i = 0; i < this.props.studiedMonths; i++) {
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
    for (var i = 0; i < this.props.projectedMonths; i++) {
      if (i == 0) {
        this.state.totalPerNextMonthsPredictions[i] = this.state.totalPerMonth[0] + this.state.averageVariationPerMonth;
      } else {
        this.state.totalPerNextMonthsPredictions[i] = this.state.totalPerNextMonthsPredictions[i - 1] + this.state.averageVariationPerMonth;
      }
    }
  };

  _proto.getTotalMonthlyAmountRevenues = function getTotalMonthlyAmountRevenues() {
    for (var i = 0; i < this.props.studiedMonths; i++) {
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
    for (var i = 0; i < this.props.projectedMonths; i++) {
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
        _React$createElement41,
        _React$createElement42,
        _React$createElement43,
        _React$createElement44,
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
        _React$createElement62,
        _React$createElement63,
        _React$createElement64,
        _React$createElement65,
        _React$createElement71,
        _React$createElement72,
        _React$createElement73,
        _React$createElement74,
        _React$createElement75,
        _React$createElement76,
        _React$createElement77;

    //this.reset();
    this.getTotalMonthlyAmount();
    this.getAverageVariationPerMonth();
    this.getTotalExpensesProjections();
    this.getTotalMonthlyAmountRevenues();
    this.getAverageVariationPerMonthRevenues();
    this.getTotalRevenuesProjections();
    console.log(this.props.studiedMonths);
    console.log(this.props.projectedMonths);
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement77 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 5
      }
    }, _React$createElement77["__self"] = this, _React$createElement77["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 170,
      columnNumber: 5
    }, _React$createElement77), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 7
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 171,
      columnNumber: 7
    }, _React$createElement), "Total expenses of the last few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement13 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 7
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 173,
      columnNumber: 7
    }, _React$createElement13), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement6 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 174,
      columnNumber: 9
    }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement5 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 175,
      columnNumber: 9
    }, _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement2 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 176,
      columnNumber: 11
    }, _React$createElement2), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement3 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 11
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 177,
      columnNumber: 11
    }, _React$createElement3), "Total expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement4 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 11
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 178,
      columnNumber: 11
    }, _React$createElement4), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement12 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 181,
      columnNumber: 9
    }, _React$createElement12), this.state.totalPerMonth.map(function (value, index) {
      var _React$createElement7, _React$createElement8, _React$createElement9, _React$createElement10, _React$createElement11;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement11 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 9
        }
      }, _React$createElement11["__self"] = _this3, _React$createElement11["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 184,
        columnNumber: 9
      }, _React$createElement11), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement7 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }
      }, _React$createElement7["__self"] = _this3, _React$createElement7["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 185,
        columnNumber: 11
      }, _React$createElement7), monthNames[d.getMonth() - index - 1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement8 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }
      }, _React$createElement8["__self"] = _this3, _React$createElement8["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 186,
        columnNumber: 11
      }, _React$createElement8), value, "$"), index + 1 != _this3.state.totalPerMonth.length && _this3.state.variationPerMonth[index] < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement9 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 9
        }
      }, _React$createElement9["__self"] = _this3, _React$createElement9["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 188,
        columnNumber: 9
      }, _React$createElement9), "-", _this3.state.variationPerMonth[index], "$"), index + 1 != _this3.state.totalPerMonth.length && _this3.state.variationPerMonth[index] >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement10 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }
      }, _React$createElement10["__self"] = _this3, _React$createElement10["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 190,
        columnNumber: 11
      }, _React$createElement10), "+", _this3.state.variationPerMonth[index], "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement14 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 7
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 215,
      columnNumber: 7
    }, _React$createElement14)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement15 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 7
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 216,
      columnNumber: 7
    }, _React$createElement15)), this.state.averageVariationPerMonth < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement17 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 219,
      columnNumber: 9
    }, _React$createElement17), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement16 = {
      className: "red-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 43
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 219,
      columnNumber: 43
    }, _React$createElement16), "-", this.state.averageVariationPerMonth, "$")), this.state.averageVariationPerMonth >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement19 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 11
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 221,
      columnNumber: 11
    }, _React$createElement19), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement18 = {
      className: "green-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 45
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 221,
      columnNumber: 45
    }, _React$createElement18), "+", this.state.averageVariationPerMonth, "$")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement20 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 7
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 224,
      columnNumber: 7
    }, _React$createElement20)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement21 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 7
      }
    }, _React$createElement21["__self"] = this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 225,
      columnNumber: 7
    }, _React$createElement21)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement22 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 7
      }
    }, _React$createElement22["__self"] = this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 227,
      columnNumber: 7
    }, _React$createElement22), "Projection of the total expenses for the next few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement34 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 7
      }
    }, _React$createElement34["__self"] = this, _React$createElement34["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 229,
      columnNumber: 7
    }, _React$createElement34), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement27 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }
    }, _React$createElement27["__self"] = this, _React$createElement27["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 230,
      columnNumber: 9
    }, _React$createElement27), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement26 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 9
      }
    }, _React$createElement26["__self"] = this, _React$createElement26["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 231,
      columnNumber: 9
    }, _React$createElement26), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement23 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 11
      }
    }, _React$createElement23["__self"] = this, _React$createElement23["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 232,
      columnNumber: 11
    }, _React$createElement23), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement24 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 11
      }
    }, _React$createElement24["__self"] = this, _React$createElement24["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 233,
      columnNumber: 11
    }, _React$createElement24), "Total expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement25 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 11
      }
    }, _React$createElement25["__self"] = this, _React$createElement25["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 234,
      columnNumber: 11
    }, _React$createElement25), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement33 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 9
      }
    }, _React$createElement33["__self"] = this, _React$createElement33["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 237,
      columnNumber: 9
    }, _React$createElement33), this.state.totalPerNextMonthsPredictions.map(function (value, index) {
      var _React$createElement28, _React$createElement29, _React$createElement30, _React$createElement31, _React$createElement32;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement32 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 9
        }
      }, _React$createElement32["__self"] = _this3, _React$createElement32["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 240,
        columnNumber: 9
      }, _React$createElement32), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement28 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }
      }, _React$createElement28["__self"] = _this3, _React$createElement28["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 241,
        columnNumber: 11
      }, _React$createElement28), monthNames[d.getMonth() + index]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement29 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }
      }, _React$createElement29["__self"] = _this3, _React$createElement29["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 242,
        columnNumber: 11
      }, _React$createElement29), value, "$"), _this3.state.averageVariationPerMonth < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement30 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 9
        }
      }, _React$createElement30["__self"] = _this3, _React$createElement30["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 244,
        columnNumber: 9
      }, _React$createElement30), "-", _this3.state.averageVariationPerMonth, "$"), _this3.state.averageVariationPerMonth >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement31 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }
      }, _React$createElement31["__self"] = _this3, _React$createElement31["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 246,
        columnNumber: 11
      }, _React$createElement31), "+", _this3.state.averageVariationPerMonth, "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement35 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 1
      }
    }, _React$createElement35["__self"] = this, _React$createElement35["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 257,
      columnNumber: 1
    }, _React$createElement35)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement36 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 1
      }
    }, _React$createElement36["__self"] = this, _React$createElement36["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 258,
      columnNumber: 1
    }, _React$createElement36)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement37 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 1
      }
    }, _React$createElement37["__self"] = this, _React$createElement37["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 259,
      columnNumber: 1
    }, _React$createElement37)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement38 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 1
      }
    }, _React$createElement38["__self"] = this, _React$createElement38["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 260,
      columnNumber: 1
    }, _React$createElement38)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement39 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 7
      }
    }, _React$createElement39["__self"] = this, _React$createElement39["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 261,
      columnNumber: 7
    }, _React$createElement39), "Total revenues of the last few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement51 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 1
      }
    }, _React$createElement51["__self"] = this, _React$createElement51["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 263,
      columnNumber: 1
    }, _React$createElement51), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement44 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 3
      }
    }, _React$createElement44["__self"] = this, _React$createElement44["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 264,
      columnNumber: 3
    }, _React$createElement44), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement43 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 3
      }
    }, _React$createElement43["__self"] = this, _React$createElement43["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 265,
      columnNumber: 3
    }, _React$createElement43), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement40 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 5
      }
    }, _React$createElement40["__self"] = this, _React$createElement40["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 266,
      columnNumber: 5
    }, _React$createElement40), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement41 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 5
      }
    }, _React$createElement41["__self"] = this, _React$createElement41["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 267,
      columnNumber: 5
    }, _React$createElement41), "Total revenues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement42 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 5
      }
    }, _React$createElement42["__self"] = this, _React$createElement42["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 268,
      columnNumber: 5
    }, _React$createElement42), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement50 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 3
      }
    }, _React$createElement50["__self"] = this, _React$createElement50["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 271,
      columnNumber: 3
    }, _React$createElement50), this.state.totalPerMonthRevenues.map(function (value, index) {
      var _React$createElement45, _React$createElement46, _React$createElement47, _React$createElement48, _React$createElement49;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement49 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 3
        }
      }, _React$createElement49["__self"] = _this3, _React$createElement49["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 274,
        columnNumber: 3
      }, _React$createElement49), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement45 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 5
        }
      }, _React$createElement45["__self"] = _this3, _React$createElement45["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 275,
        columnNumber: 5
      }, _React$createElement45), monthNames[d.getMonth() - index - 1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement46 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 5
        }
      }, _React$createElement46["__self"] = _this3, _React$createElement46["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 276,
        columnNumber: 5
      }, _React$createElement46), value, "$"), index + 1 != _this3.state.totalPerMonthRevenues.length && _this3.state.variationPerMonthRevenues[index] < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement47 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 3
        }
      }, _React$createElement47["__self"] = _this3, _React$createElement47["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 278,
        columnNumber: 3
      }, _React$createElement47), "-", _this3.state.variationPerMonthRevenues[index], "$"), index + 1 != _this3.state.totalPerMonthRevenues.length && _this3.state.variationPerMonthRevenues[index] >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement48 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 5
        }
      }, _React$createElement48["__self"] = _this3, _React$createElement48["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 280,
        columnNumber: 5
      }, _React$createElement48), "+", _this3.state.variationPerMonthRevenues[index], "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement52 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 1
      }
    }, _React$createElement52["__self"] = this, _React$createElement52["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 305,
      columnNumber: 1
    }, _React$createElement52)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement53 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 1
      }
    }, _React$createElement53["__self"] = this, _React$createElement53["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 306,
      columnNumber: 1
    }, _React$createElement53)), this.state.averageVariationPerMonthRevenues < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement55 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 3
      }
    }, _React$createElement55["__self"] = this, _React$createElement55["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 309,
      columnNumber: 3
    }, _React$createElement55), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement54 = {
      className: "red-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 37
      }
    }, _React$createElement54["__self"] = this, _React$createElement54["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 309,
      columnNumber: 37
    }, _React$createElement54), "-", this.state.averageVariationPerMonthRevenues, "$")), this.state.averageVariationPerMonthRevenues >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement57 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 5
      }
    }, _React$createElement57["__self"] = this, _React$createElement57["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 311,
      columnNumber: 5
    }, _React$createElement57), "Average variation per month : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement56 = {
      className: "green-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 39
      }
    }, _React$createElement56["__self"] = this, _React$createElement56["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 311,
      columnNumber: 39
    }, _React$createElement56), "+", this.state.averageVariationPerMonthRevenues, "$")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement58 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 1
      }
    }, _React$createElement58["__self"] = this, _React$createElement58["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 314,
      columnNumber: 1
    }, _React$createElement58)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement59 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 1
      }
    }, _React$createElement59["__self"] = this, _React$createElement59["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 315,
      columnNumber: 1
    }, _React$createElement59)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement60 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 1
      }
    }, _React$createElement60["__self"] = this, _React$createElement60["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 317,
      columnNumber: 1
    }, _React$createElement60), "Projection of the total revenues for the next few months"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement72 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 1
      }
    }, _React$createElement72["__self"] = this, _React$createElement72["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 319,
      columnNumber: 1
    }, _React$createElement72), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement65 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 3
      }
    }, _React$createElement65["__self"] = this, _React$createElement65["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 320,
      columnNumber: 3
    }, _React$createElement65), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement64 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 3
      }
    }, _React$createElement64["__self"] = this, _React$createElement64["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 321,
      columnNumber: 3
    }, _React$createElement64), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement61 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 5
      }
    }, _React$createElement61["__self"] = this, _React$createElement61["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 322,
      columnNumber: 5
    }, _React$createElement61), "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement62 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 5
      }
    }, _React$createElement62["__self"] = this, _React$createElement62["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 323,
      columnNumber: 5
    }, _React$createElement62), "Total revenues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement63 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 5
      }
    }, _React$createElement63["__self"] = this, _React$createElement63["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 324,
      columnNumber: 5
    }, _React$createElement63), "Difference from last month"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement71 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 3
      }
    }, _React$createElement71["__self"] = this, _React$createElement71["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 327,
      columnNumber: 3
    }, _React$createElement71), this.state.totalPerNextMonthsPredictionsRevenues.map(function (value, index) {
      var _React$createElement66, _React$createElement67, _React$createElement68, _React$createElement69, _React$createElement70;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement70 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 3
        }
      }, _React$createElement70["__self"] = _this3, _React$createElement70["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 330,
        columnNumber: 3
      }, _React$createElement70), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement66 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 5
        }
      }, _React$createElement66["__self"] = _this3, _React$createElement66["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 331,
        columnNumber: 5
      }, _React$createElement66), monthNames[d.getMonth() + index]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement67 = {
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 5
        }
      }, _React$createElement67["__self"] = _this3, _React$createElement67["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 332,
        columnNumber: 5
      }, _React$createElement67), value, "$"), _this3.state.averageVariationPerMonthRevenues < 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement68 = {
        className: "red-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 3
        }
      }, _React$createElement68["__self"] = _this3, _React$createElement68["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 334,
        columnNumber: 3
      }, _React$createElement68), "-", _this3.state.averageVariationPerMonthRevenues, "$"), _this3.state.averageVariationPerMonthRevenues >= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement69 = {
        className: "green-text",
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 5
        }
      }, _React$createElement69["__self"] = _this3, _React$createElement69["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 336,
        columnNumber: 5
      }, _React$createElement69), "+", _this3.state.averageVariationPerMonthRevenues, "$"));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement73 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 1
      }
    }, _React$createElement73["__self"] = this, _React$createElement73["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 350,
      columnNumber: 1
    }, _React$createElement73)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement74 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 1
      }
    }, _React$createElement74["__self"] = this, _React$createElement74["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 351,
      columnNumber: 1
    }, _React$createElement74)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement75 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 1
      }
    }, _React$createElement75["__self"] = this, _React$createElement75["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 352,
      columnNumber: 1
    }, _React$createElement75)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement76 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 1
      }
    }, _React$createElement76["__self"] = this, _React$createElement76["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 353,
      columnNumber: 1
    }, _React$createElement76)));
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
//# sourceMappingURL=projections-689ae8ef188cdda09f72.js.map