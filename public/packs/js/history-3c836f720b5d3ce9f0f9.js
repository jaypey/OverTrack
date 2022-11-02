(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["history"],{

/***/ "./app/javascript/components/history/Main.jsx":
/*!****************************************************!*\
  !*** ./app/javascript/components/history/Main.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Paginator */ "./app/javascript/components/shared/Paginator.jsx");
/* harmony import */ var _shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DatePicker */ "./app/javascript/components/shared/DatePicker.jsx");
/* harmony import */ var _shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/CurrencyInput */ "./app/javascript/components/shared/CurrencyInput.jsx");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/history/Main.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/history/Main.jsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Main = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Main, _React$Component);

  function Main(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.onLoadExpenses = function (payload) {
      _this.setState({
        expenses: payload.items
      });
    };

    _this.onLoadRevenues = function (payload) {
      _this.setState({
        revenues: payload.items
      });
    };

    _this.handlePaidAtMinExpenseChange = function (val) {
      _this.setState({
        minPaidAtExpense: moment__WEBPACK_IMPORTED_MODULE_2___default()(val).unix()
      });
    };

    _this.handlePaidAtMaxExpenseChange = function (val) {
      _this.setState({
        maxPaidAtExpense: moment__WEBPACK_IMPORTED_MODULE_2___default()(val).unix()
      });
    };

    _this.handlePaidAtMinRevenueChange = function (val) {
      _this.setState({
        minPaidAtRevenue: moment__WEBPACK_IMPORTED_MODULE_2___default()(val).unix()
      });
    };

    _this.handlePaidAtMaxRevenueChange = function (val) {
      _this.setState({
        maxPaidAtRevenue: moment__WEBPACK_IMPORTED_MODULE_2___default()(val).unix()
      });
    };

    _this.handleCategoryFilterChangeExpenses = function (e) {
      _this.setState({
        categoryIdExpenses: e.target.value
      });
    };

    _this.handleCategoryFilterChangeRevenues = function (e) {
      _this.setState({
        categoryIdRevenues: e.target.value
      });
    };

    _this.toggleSortDirRevenues = function () {
      _this.setState({
        sortDescRevenues: !_this.state.sortDescRevenues
      });
    };

    _this.toggleSortDirExpenses = function () {
      _this.setState({
        sortDescExpenses: !_this.state.sortDescExpenses
      });
    };

    _this.changeSortRevenues = function (s) {
      _this.setState({
        sortRevenues: s,
        sortDescRevenues: true
      });
    };

    _this.changeSortExpenses = function (s) {
      _this.setState({
        sortExpenses: s,
        sortDescExpenses: true
      });
    };

    _this.updateExpense = function (id, updates) {
      _api_main__WEBPACK_IMPORTED_MODULE_7__.Expenses.update(id, updates).then(function () {
        _this.setState({
          reloadPageTrigger: _this.state.reloadPageTrigger + 1
        });
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Alerts.genericError();
      });
    };

    _this.handleExpenseDelete = function (id) {
      _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Alerts.genericDelete('expense').then(function (result) {
        if (!result.value) {
          return;
        }

        _api_main__WEBPACK_IMPORTED_MODULE_7__.Expenses.delete(id).then(function () {
          _this.setState({
            reloadTrigger: _this.state.reloadTrigger + 1
          });
        }, function () {
          _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Alerts.genericError();
        });
      });
    };

    _this.updateRevenue = function (id, updates) {
      _api_main__WEBPACK_IMPORTED_MODULE_7__.Revenues.update(id, updates).then(function () {
        _this.setState({
          reloadPageTrigger: _this.state.reloadPageTrigger + 1
        });
      }, function () {
        _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Alerts.genericError();
      });
    };

    _this.handleRevenueDelete = function (id) {
      _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Alerts.genericDelete('revenue').then(function (result) {
        if (!result.value) {
          return;
        }

        _api_main__WEBPACK_IMPORTED_MODULE_7__.Revenues.delete(id).then(function () {
          _this.setState({
            reloadTrigger: _this.state.reloadTrigger + 1
          });
        }, function () {
          _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Alerts.genericError();
        });
      });
    };

    _this.handleTimeframeChangeExpense = function (e) {
      var timeframeExpense = e.target.value;

      var _this$minAndMaxForTim = _this.minAndMaxForTimeframe(timeframeExpense, 0),
          _this$minAndMaxForTim2 = _slicedToArray(_this$minAndMaxForTim, 2),
          minPaidAtExpense = _this$minAndMaxForTim2[0],
          maxPaidAtExpense = _this$minAndMaxForTim2[1];

      _this.setState({
        timeframeExpense: timeframeExpense,
        minPaidAtExpense: minPaidAtExpense,
        maxPaidAtExpense: maxPaidAtExpense
      });
    };

    _this.handleTimeframeChangeRevenue = function (e) {
      var timeframeRevenue = e.target.value;

      var _this$minAndMaxForTim3 = _this.minAndMaxForTimeframe(timeframeRevenue, 0),
          _this$minAndMaxForTim4 = _slicedToArray(_this$minAndMaxForTim3, 2),
          minPaidAtRevenue = _this$minAndMaxForTim4[0],
          maxPaidAtRevenue = _this$minAndMaxForTim4[1];

      _this.setState({
        timeframeRevenue: timeframeRevenue,
        minPaidAtRevenue: minPaidAtRevenue,
        maxPaidAtRevenue: maxPaidAtRevenue
      });
    };

    _this.handleSearchChangeExpenses = _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Util.debounce(function (search) {
      _this.setState({
        searchExpenses: search
      });
    }, 500);
    _this.handleSearchChangeRevenues = _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Util.debounce(function (search) {
      _this.setState({
        searchRevenues: search
      });
    }, 500);

    _this.minAndMaxForTimeframe = function (timeframe, is_revenue) {
      switch (timeframe) {
        case 'current_month':
          return [moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf('month').unix(), moment__WEBPACK_IMPORTED_MODULE_2___default()().unix()];

        case 'last_90_days':
          return [moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(90, 'days').unix(), moment__WEBPACK_IMPORTED_MODULE_2___default()().unix()];

        case 'ytd':
          return [moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf('year').unix(), moment__WEBPACK_IMPORTED_MODULE_2___default()().unix()];

        case 'custom':
          if (is_revenue == 0) {
            return [_this.state.minPaidAtExpense, _this.state.maxPaidAtExpense];
          } else {
            return [_this.state.minPaidAtExpense, _this.state.maxPaidAtRevenue];
          }

      }
    };

    var defaultTimeframe = 'last_90_days';

    var _this$minAndMaxForTim5 = _this.minAndMaxForTimeframe(defaultTimeframe, 0),
        _this$minAndMaxForTim6 = _slicedToArray(_this$minAndMaxForTim5, 2),
        _minPaidAtExpense = _this$minAndMaxForTim6[0],
        _maxPaidAtExpense = _this$minAndMaxForTim6[1];

    var _this$minAndMaxForTim7 = _this.minAndMaxForTimeframe(defaultTimeframe, 1),
        _this$minAndMaxForTim8 = _slicedToArray(_this$minAndMaxForTim7, 2),
        _minPaidAtRevenue = _this$minAndMaxForTim8[0],
        _maxPaidAtRevenue = _this$minAndMaxForTim8[1];

    _this.state = {
      expenses: [],
      revenues: [],
      expenseCategories: [],
      revenueCategories: [],
      minPaidAtExpense: _minPaidAtExpense,
      maxPaidAtExpense: _maxPaidAtExpense,
      minPaidAtRevenue: _minPaidAtRevenue,
      maxPaidAtRevenue: _maxPaidAtRevenue,
      categoryIdExpenses: _this.props.categoryId || '',
      categoryIdRevenues: _this.props.categoryId || '',
      sortRevenues: 'paid_at',
      sortDescRevenues: true,
      sortExpenses: 'paid_at',
      sortDescExpenses: true,
      reloadTrigger: 0,
      reloadPageTrigger: 0,
      timeframeExpense: defaultTimeframe,
      timeframeRevenue: defaultTimeframe,
      searchExpenses: '',
      searchRevenues: ''
    };
    return _this;
  }

  Main.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var revenues = props.categories.filter(function (cat) {
      return cat.is_revenue === 1;
    });
    var expenses = props.categories.filter(function (cat) {
      return cat.is_revenue === 0;
    });
    return {
      revenueCategories: revenues,
      expenseCategories: expenses
    };
  };

  var _proto = Main.prototype;

  _proto.urlExpenses = function urlExpenses() {
    return "/expenses?include_category=true&paid_before=" + this.state.maxPaidAtExpense + "&paid_after=" + this.state.minPaidAtExpense + "&category_id=" + this.state.categoryIdExpenses + "&sort=" + this.state.sortExpenses + "&sort_desc=" + this.state.sortDescExpenses + "&search=" + this.state.searchExpenses;
  } // ToDo: Fix url : error raised in paginator loaddata
  // sort is raising error
  ;

  _proto.urlRevenues = function urlRevenues() {
    return "/revenues?include_category=true&paid_before=" + this.state.maxPaidAtRevenue + "&paid_after=" + this.state.minPaidAtRevenue + "&category_id=" + this.state.categoryIdRevenues + "&sort=" + this.state.sortRevenues + "&sort_desc=" + this.state.sortDescRevenues + "&search=" + this.state.searchRevenues;
  };

  _proto.renderSortRevenues = function renderSortRevenues(key) {
    var _this2 = this;

    if (this.state.sortRevenues == key) {
      var _React$createElement;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement = {
        onClick: this.toggleSortDirRevenues,
        className: "fas fa-sort-" + (this.state.sortDescRevenues ? 'down' : 'up') + " ml-2 hover-pointer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 14
        }
      }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 151,
        columnNumber: 14
      }, _React$createElement));
    } else {
      var _React$createElement2;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement2 = {
        onClick: function onClick() {
          _this2.changeSortRevenues(key);
        },
        className: "fas fa-sort ml-2 hover-pointer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 14
        }
      }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 153,
        columnNumber: 14
      }, _React$createElement2));
    }
  };

  _proto.renderSortExpenses = function renderSortExpenses(key) {
    var _this3 = this;

    if (this.state.sortExpenses == key) {
      var _React$createElement3;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement3 = {
        onClick: this.toggleSortDirExpenses,
        className: "fas fa-sort-" + (this.state.sortDescExpenses ? 'down' : 'up') + " ml-2 hover-pointer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 14
        }
      }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 159,
        columnNumber: 14
      }, _React$createElement3));
    } else {
      var _React$createElement4;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement4 = {
        onClick: function onClick() {
          _this3.changeSortExpenses(key);
        },
        className: "fas fa-sort ml-2 hover-pointer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 14
        }
      }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 161,
        columnNumber: 14
      }, _React$createElement4));
    }
  };

  _proto.renderEmptyState = function renderEmptyState() {
    var _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8, _React$createElement9;

    if (this.props.hasData) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement9 = {
      className: "empty-or-error-status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 7
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 168,
      columnNumber: 7
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
      className: "status-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 169,
      columnNumber: 9
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", (_React$createElement5 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 11
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 170,
      columnNumber: 11
    }, _React$createElement5), "Our historian has nothing to do!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 11
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 171,
      columnNumber: 11
    }, _React$createElement6), "The expenses you enter will show up here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", (_React$createElement8 = {
      className: "status-image",
      src: window.historian,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 173,
      columnNumber: 9
    }, _React$createElement8)));
  };

  _proto.renderExpensesTable = function renderExpensesTable() {
    var _React$createElement10,
        _this4 = this,
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
        _React$createElement29,
        _React$createElement30,
        _React$createElement31,
        _React$createElement32,
        _React$createElement33,
        _React$createElement34,
        _React$createElement35,
        _React$createElement36,
        _React$createElement37,
        _React$createElement38;

    if (!this.props.hasData) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement38 = {
      className: "content-with-sidebar mt-30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 7
      }
    }, _React$createElement38["__self"] = this, _React$createElement38["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 181,
      columnNumber: 7
    }, _React$createElement38), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement23 = {
      className: "sidebar input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }
    }, _React$createElement23["__self"] = this, _React$createElement23["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 182,
      columnNumber: 9
    }, _React$createElement23), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement12 = {
      onChange: this.handleCategoryFilterChangeExpenses,
      defaultValue: this.state.categoryIdExpenses,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 11
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 183,
      columnNumber: 11
    }, _React$createElement12), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement10 = {
      value: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 184,
      columnNumber: 13
    }, _React$createElement10), "All categories"), this.state.expenseCategories.map(function (c) {
      var _React$createElement11;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement11 = {
        key: c.id,
        value: c.id,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 54
        }
      }, _React$createElement11["__self"] = _this4, _React$createElement11["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 185,
        columnNumber: 54
      }, _React$createElement11), c.name);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement17 = {
      className: "mt-10",
      onChange: this.handleTimeframeChangeExpense,
      defaultValue: this.state.timeframeExpense,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 11
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 188,
      columnNumber: 11
    }, _React$createElement17), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement13 = {
      value: "current_month",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 189,
      columnNumber: 13
    }, _React$createElement13), "Current month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement14 = {
      value: "last_90_days",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 190,
      columnNumber: 13
    }, _React$createElement14), "Last 90 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement15 = {
      value: "ytd",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 191,
      columnNumber: 13
    }, _React$createElement15), "Year to date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement16 = {
      value: "custom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 13
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 192,
      columnNumber: 13
    }, _React$createElement16), "Custom timeframe")), this.state.timeframeExpense === 'custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement21 = {
      className: "mt-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }, _React$createElement21["__self"] = this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 196,
      columnNumber: 13
    }, _React$createElement21), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement18 = {
      onChange: this.handlePaidAtMinExpenseChange,
      value: moment__WEBPACK_IMPORTED_MODULE_2___default().unix(this.state.minPaidAtExpense).toDate(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 15
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 197,
      columnNumber: 15
    }, _React$createElement18)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement19 = {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 198,
      columnNumber: 15
    }, _React$createElement19), "to"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement20 = {
      onChange: this.handlePaidAtMaxExpenseChange,
      value: moment__WEBPACK_IMPORTED_MODULE_2___default().unix(this.state.maxPaidAtExpense).toDate(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 15
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 199,
      columnNumber: 15
    }, _React$createElement20))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement22 = {
      className: "mt-10",
      placeholder: "Search for description",
      onChange: function onChange(e) {
        return _this4.handleSearchChangeExpenses(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 11
      }
    }, _React$createElement22["__self"] = this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 203,
      columnNumber: 11
    }, _React$createElement22))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement37 = {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }
    }, _React$createElement37["__self"] = this, _React$createElement37["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 206,
      columnNumber: 9
    }, _React$createElement37), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement34 = {
      className: "overflow-x bg-art-2 p-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 11
      }
    }, _React$createElement34["__self"] = this, _React$createElement34["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 207,
      columnNumber: 11
    }, _React$createElement34), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement33 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, _React$createElement33["__self"] = this, _React$createElement33["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 208,
      columnNumber: 13
    }, _React$createElement33), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("caption", (_React$createElement24 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 13
      }
    }, _React$createElement24["__self"] = this, _React$createElement24["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 209,
      columnNumber: 13
    }, _React$createElement24), "Expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement31 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 15
      }
    }, _React$createElement31["__self"] = this, _React$createElement31["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 210,
      columnNumber: 15
    }, _React$createElement31), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement30 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }
    }, _React$createElement30["__self"] = this, _React$createElement30["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 211,
      columnNumber: 17
    }, _React$createElement30), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement25 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 19
      }
    }, _React$createElement25["__self"] = this, _React$createElement25["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 212,
      columnNumber: 19
    }, _React$createElement25), "Date ", this.renderSortExpenses('paid_at')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement26 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 19
      }
    }, _React$createElement26["__self"] = this, _React$createElement26["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 213,
      columnNumber: 19
    }, _React$createElement26), "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement27 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 19
      }
    }, _React$createElement27["__self"] = this, _React$createElement27["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 214,
      columnNumber: 19
    }, _React$createElement27), "Amount ", this.renderSortExpenses('amount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement28 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 19
      }
    }, _React$createElement28["__self"] = this, _React$createElement28["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 215,
      columnNumber: 19
    }, _React$createElement28), "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement29 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 19
      }
    }, _React$createElement29["__self"] = this, _React$createElement29["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 216,
      columnNumber: 19
    }, _React$createElement29)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement32 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 15
      }
    }, _React$createElement32["__self"] = this, _React$createElement32["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 219,
      columnNumber: 15
    }, _React$createElement32), this.state.expenses.map(function (exp) {
      return _this4.renderExpense(exp);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement36 = {
      className: "mt-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 11
      }
    }, _React$createElement36["__self"] = this, _React$createElement36["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 225,
      columnNumber: 11
    }, _React$createElement36), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Paginator__WEBPACK_IMPORTED_MODULE_3__.default // url = loaddata directly from controller
    , (_React$createElement35 = {
      url: this.urlExpenses(),
      onLoad: this.onLoadExpenses,
      reloadTrigger: this.state.reloadTrigger,
      reloadPageTrigger: this.state.reloadPageTrigger,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 13
      }
    }, _React$createElement35["__self"] = this, _React$createElement35["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 226,
      columnNumber: 13
    }, _React$createElement35)))));
  };

  _proto.renderRevenuesTable = function renderRevenuesTable() {
    var _React$createElement39,
        _this5 = this,
        _React$createElement41,
        _React$createElement42,
        _React$createElement43,
        _React$createElement44,
        _React$createElement45,
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
        _React$createElement62,
        _React$createElement63,
        _React$createElement64,
        _React$createElement65,
        _React$createElement66,
        _React$createElement67;

    if (!this.props.hasData) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement67 = {
      className: "content-with-sidebar mt-30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 7
      }
    }, _React$createElement67["__self"] = this, _React$createElement67["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 242,
      columnNumber: 7
    }, _React$createElement67), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement52 = {
      className: "sidebar input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }
    }, _React$createElement52["__self"] = this, _React$createElement52["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 243,
      columnNumber: 9
    }, _React$createElement52), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement41 = {
      onChange: this.handleCategoryFilterChangeRevenues,
      defaultValue: this.state.categoryIdRevenues,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 11
      }
    }, _React$createElement41["__self"] = this, _React$createElement41["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 244,
      columnNumber: 11
    }, _React$createElement41), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement39 = {
      value: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }
    }, _React$createElement39["__self"] = this, _React$createElement39["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 245,
      columnNumber: 13
    }, _React$createElement39), "All categories"), this.state.revenueCategories.map(function (c) {
      var _React$createElement40;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement40 = {
        key: c.id,
        value: c.id,
        __self: _this5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 54
        }
      }, _React$createElement40["__self"] = _this5, _React$createElement40["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 246,
        columnNumber: 54
      }, _React$createElement40), c.name);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement46 = {
      className: "mt-10",
      onChange: this.handleTimeframeChangeRevenue,
      defaultValue: this.state.timeframeRevenue,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 11
      }
    }, _React$createElement46["__self"] = this, _React$createElement46["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 249,
      columnNumber: 11
    }, _React$createElement46), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement42 = {
      value: "current_month",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 13
      }
    }, _React$createElement42["__self"] = this, _React$createElement42["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 250,
      columnNumber: 13
    }, _React$createElement42), "Current month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement43 = {
      value: "last_90_days",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 13
      }
    }, _React$createElement43["__self"] = this, _React$createElement43["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 251,
      columnNumber: 13
    }, _React$createElement43), "Last 90 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement44 = {
      value: "ytd",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 13
      }
    }, _React$createElement44["__self"] = this, _React$createElement44["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 252,
      columnNumber: 13
    }, _React$createElement44), "Year to date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement45 = {
      value: "custom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 13
      }
    }, _React$createElement45["__self"] = this, _React$createElement45["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 253,
      columnNumber: 13
    }, _React$createElement45), "Custom timeframe")), this.state.timeframeRevenue === 'custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement50 = {
      className: "mt-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 13
      }
    }, _React$createElement50["__self"] = this, _React$createElement50["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 257,
      columnNumber: 13
    }, _React$createElement50), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement47 = {
      onChange: this.handlePaidAtMinRevenueChange,
      value: moment__WEBPACK_IMPORTED_MODULE_2___default().unix(this.state.minPaidAtExpense).toDate(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 15
      }
    }, _React$createElement47["__self"] = this, _React$createElement47["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 258,
      columnNumber: 15
    }, _React$createElement47)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement48 = {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 15
      }
    }, _React$createElement48["__self"] = this, _React$createElement48["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 259,
      columnNumber: 15
    }, _React$createElement48), "to"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement49 = {
      onChange: this.handlePaidAtMaxRevenueChange,
      value: moment__WEBPACK_IMPORTED_MODULE_2___default().unix(this.state.maxPaidAtExpense).toDate(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 15
      }
    }, _React$createElement49["__self"] = this, _React$createElement49["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 260,
      columnNumber: 15
    }, _React$createElement49))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement51 = {
      className: "mt-10",
      placeholder: "Search for description",
      onChange: function onChange(e) {
        return _this5.handleSearchChangeRevenues(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 11
      }
    }, _React$createElement51["__self"] = this, _React$createElement51["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 264,
      columnNumber: 11
    }, _React$createElement51))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement66 = {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 9
      }
    }, _React$createElement66["__self"] = this, _React$createElement66["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 267,
      columnNumber: 9
    }, _React$createElement66), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement63 = {
      className: "overflow-x bg-art p-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 11
      }
    }, _React$createElement63["__self"] = this, _React$createElement63["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 268,
      columnNumber: 11
    }, _React$createElement63), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement62 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 13
      }
    }, _React$createElement62["__self"] = this, _React$createElement62["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 269,
      columnNumber: 13
    }, _React$createElement62), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("caption", (_React$createElement53 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 13
      }
    }, _React$createElement53["__self"] = this, _React$createElement53["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 270,
      columnNumber: 13
    }, _React$createElement53), "Revenues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement60 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 15
      }
    }, _React$createElement60["__self"] = this, _React$createElement60["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 271,
      columnNumber: 15
    }, _React$createElement60), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement59 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }
    }, _React$createElement59["__self"] = this, _React$createElement59["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 272,
      columnNumber: 17
    }, _React$createElement59), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement54 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 19
      }
    }, _React$createElement54["__self"] = this, _React$createElement54["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 273,
      columnNumber: 19
    }, _React$createElement54), "Date ", this.renderSortRevenues('paid_at')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement55 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 19
      }
    }, _React$createElement55["__self"] = this, _React$createElement55["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 274,
      columnNumber: 19
    }, _React$createElement55), "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement56 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 19
      }
    }, _React$createElement56["__self"] = this, _React$createElement56["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 275,
      columnNumber: 19
    }, _React$createElement56), "Amount ", this.renderSortRevenues('amount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement57 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 19
      }
    }, _React$createElement57["__self"] = this, _React$createElement57["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 276,
      columnNumber: 19
    }, _React$createElement57), "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement58 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 19
      }
    }, _React$createElement58["__self"] = this, _React$createElement58["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 277,
      columnNumber: 19
    }, _React$createElement58)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement61 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 15
      }
    }, _React$createElement61["__self"] = this, _React$createElement61["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 280,
      columnNumber: 15
    }, _React$createElement61), this.state.revenues.map(function (exp) {
      return _this5.renderRevenue(exp);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement65 = {
      className: "mt-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 11
      }
    }, _React$createElement65["__self"] = this, _React$createElement65["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 286,
      columnNumber: 11
    }, _React$createElement65), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Paginator__WEBPACK_IMPORTED_MODULE_3__.default // url = loaddata directly from controller
    // ToDo : Change for urlRevenues and onLoadRevenues
    , (_React$createElement64 = {
      url: this.urlRevenues(),
      onLoad: this.onLoadRevenues,
      reloadTrigger: this.state.reloadTrigger,
      reloadPageTrigger: this.state.reloadPageTrigger,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 13
      }
    }, _React$createElement64["__self"] = this, _React$createElement64["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 287,
      columnNumber: 13
    }, _React$createElement64)))));
  };

  _proto.renderExpense = function renderExpense(expense) {
    var _this6 = this,
        _React$createElement68,
        _React$createElement69,
        _React$createElement71,
        _React$createElement72,
        _React$createElement73,
        _React$createElement74,
        _React$createElement75,
        _React$createElement76,
        _React$createElement77,
        _React$createElement78,
        _React$createElement79,
        _React$createElement80;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement80 = {
      key: expense.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 7
      }
    }, _React$createElement80["__self"] = this, _React$createElement80["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 303,
      columnNumber: 7
    }, _React$createElement80), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement69 = {
      className: "input-group mw-120",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 9
      }
    }, _React$createElement69["__self"] = this, _React$createElement69["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 304,
      columnNumber: 9
    }, _React$createElement69), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement68 = {
      onChange: function onChange(val) {
        return _this6.updateExpense(expense.id, {
          paid_at: val
        });
      },
      value: new Date(expense.paid_at),
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 11
      }
    }, _React$createElement68["__self"] = this, _React$createElement68["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 305,
      columnNumber: 11
    }, _React$createElement68))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement72 = {
      className: "input-group mw-150",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 9
      }
    }, _React$createElement72["__self"] = this, _React$createElement72["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 308,
      columnNumber: 9
    }, _React$createElement72), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement71 = {
      defaultValue: expense.category_id,
      onChange: function onChange(e) {
        return _this6.updateExpense(expense.id, {
          category_id: e.target.value
        });
      },
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 11
      }
    }, _React$createElement71["__self"] = this, _React$createElement71["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 309,
      columnNumber: 11
    }, _React$createElement71), this.state.expenseCategories.map(function (c) {
      var _React$createElement70;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement70 = {
        key: c.id,
        value: c.id,
        __self: _this6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 54
        }
      }, _React$createElement70["__self"] = _this6, _React$createElement70["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 310,
        columnNumber: 54
      }, _React$createElement70), c.name);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement74 = {
      className: "input-group mw-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 9
      }
    }, _React$createElement74["__self"] = this, _React$createElement74["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 314,
      columnNumber: 9
    }, _React$createElement74), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_5__.default, (_React$createElement73 = {
      initialValue: expense.amount,
      onBlur: function onBlur(val) {
        return _this6.updateExpense(expense.id, {
          amount: val
        });
      },
      className: "bg-gray-slight-contrast",
      allowNegative: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 11
      }
    }, _React$createElement73["__self"] = this, _React$createElement73["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 315,
      columnNumber: 11
    }, _React$createElement73))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement76 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 9
      }
    }, _React$createElement76["__self"] = this, _React$createElement76["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 323,
      columnNumber: 9
    }, _React$createElement76), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement75 = {
      defaultValue: expense.description,
      onBlur: function onBlur(e) {
        if (e.target.value.trim() != expense.description) {
          _this6.updateExpense(expense.id, {
            description: e.target.value.trim()
          });
        }
      },
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 11
      }
    }, _React$createElement75["__self"] = this, _React$createElement75["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 324,
      columnNumber: 11
    }, _React$createElement75))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement79 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }
    }, _React$createElement79["__self"] = this, _React$createElement79["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 327,
      columnNumber: 9
    }, _React$createElement79), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement78 = {
      onClick: function onClick() {
        return _this6.handleExpenseDelete(expense.id);
      },
      className: "dim-til-hover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 11
      }
    }, _React$createElement78["__self"] = this, _React$createElement78["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 328,
      columnNumber: 11
    }, _React$createElement78), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement77 = {
      className: "fa fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 93
      }
    }, _React$createElement77["__self"] = this, _React$createElement77["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 328,
      columnNumber: 93
    }, _React$createElement77)))));
  };

  _proto.renderRevenue = function renderRevenue(revenue) {
    var _this7 = this,
        _React$createElement81,
        _React$createElement82,
        _React$createElement84,
        _React$createElement85,
        _React$createElement86,
        _React$createElement87,
        _React$createElement88,
        _React$createElement89,
        _React$createElement90,
        _React$createElement91,
        _React$createElement92,
        _React$createElement93;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement93 = {
      key: revenue.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 7
      }
    }, _React$createElement93["__self"] = this, _React$createElement93["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 336,
      columnNumber: 7
    }, _React$createElement93), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement82 = {
      className: "input-group mw-120",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 9
      }
    }, _React$createElement82["__self"] = this, _React$createElement82["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 337,
      columnNumber: 9
    }, _React$createElement82), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement81 = {
      onChange: function onChange(val) {
        return _this7.updateRevenue(revenue.id, {
          paid_at: val
        });
      },
      value: new Date(revenue.paid_at),
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 11
      }
    }, _React$createElement81["__self"] = this, _React$createElement81["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 338,
      columnNumber: 11
    }, _React$createElement81))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement85 = {
      className: "input-group mw-150",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 9
      }
    }, _React$createElement85["__self"] = this, _React$createElement85["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 341,
      columnNumber: 9
    }, _React$createElement85), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement84 = {
      defaultValue: revenue.category_id,
      onChange: function onChange(e) {
        return _this7.updateRevenue(revenue.id, {
          category_id: e.target.value
        });
      },
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 11
      }
    }, _React$createElement84["__self"] = this, _React$createElement84["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 342,
      columnNumber: 11
    }, _React$createElement84), this.state.revenueCategories.map(function (c) {
      var _React$createElement83;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement83 = {
        key: c.id,
        value: c.id,
        __self: _this7,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 54
        }
      }, _React$createElement83["__self"] = _this7, _React$createElement83["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 343,
        columnNumber: 54
      }, _React$createElement83), c.name);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement87 = {
      className: "input-group mw-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 9
      }
    }, _React$createElement87["__self"] = this, _React$createElement87["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 347,
      columnNumber: 9
    }, _React$createElement87), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_5__.default, (_React$createElement86 = {
      initialValue: revenue.amount,
      onBlur: function onBlur(val) {
        return _this7.updateRevenue(revenue.id, {
          amount: val
        });
      },
      className: "bg-gray-slight-contrast",
      allowNegative: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 11
      }
    }, _React$createElement86["__self"] = this, _React$createElement86["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 348,
      columnNumber: 11
    }, _React$createElement86))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement89 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 9
      }
    }, _React$createElement89["__self"] = this, _React$createElement89["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 356,
      columnNumber: 9
    }, _React$createElement89), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement88 = {
      defaultValue: revenue.description,
      onBlur: function onBlur(e) {
        if (e.target.value.trim() != revenue.description) {
          _this7.updateRevenue(expense.id, {
            description: e.target.value.trim()
          });
        }
      },
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 11
      }
    }, _React$createElement88["__self"] = this, _React$createElement88["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 357,
      columnNumber: 11
    }, _React$createElement88))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement92 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 9
      }
    }, _React$createElement92["__self"] = this, _React$createElement92["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 360,
      columnNumber: 9
    }, _React$createElement92), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement91 = {
      onClick: function onClick() {
        return _this7.handleRevenueDelete(revenue.id);
      },
      className: "dim-til-hover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 11
      }
    }, _React$createElement91["__self"] = this, _React$createElement91["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 361,
      columnNumber: 11
    }, _React$createElement91), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement90 = {
      className: "fa fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 93
      }
    }, _React$createElement90["__self"] = this, _React$createElement90["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 361,
      columnNumber: 93
    }, _React$createElement90)))));
  };

  _proto.render = function render() {
    var _React$createElement94;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement94 = {
      className: "container wide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 7
      }
    }, _React$createElement94["__self"] = this, _React$createElement94["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 369,
      columnNumber: 7
    }, _React$createElement94), this.renderEmptyState(), this.renderExpensesTable(), this.renderRevenuesTable());
  };

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Main.defaultProps = {
  hasData: false,
  categories: [],
  categoryId: null,
  paidAfter: null
};
Main.propTypes = {
  hasData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  categories: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  categoryId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  paidAfter: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};
/* harmony default export */ __webpack_exports__["default"] = (Main);

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

/***/ "./app/javascript/components/shared/Paginator.jsx":
/*!********************************************************!*\
  !*** ./app/javascript/components/shared/Paginator.jsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/shared/Paginator.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/shared/Paginator.jsx";

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Paginator = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Paginator, _React$Component);

  function Paginator(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handlePageNext = function () {
      if (_this.state.selectedPage + 1 > _this.state.totalPages) {
        return;
      }

      _this.setState({
        selectedPage: _this.state.selectedPage + 1
      }, _this.loadData);
    };

    _this.handlePagePrev = function () {
      if (_this.state.selectedPage - 1 < 1) {
        return;
      }

      _this.setState({
        selectedPage: _this.state.selectedPage - 1
      }, _this.loadData);
    };

    _this.handleSelect = function (p) {
      _this.setState({
        selectedPage: p
      }, _this.loadData);
    };

    _this.state = {
      selectedPage: 1,
      itemsPerPage: _this.props.itemsPerPage,
      totalItems: 0,
      totalPages: 0
    };
    return _this;
  }

  var _proto = Paginator.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.loadData();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({
        selectedPage: 1
      }, this.loadData);
    }

    if (prevProps.reloadTrigger !== this.props.reloadTrigger) {
      this.setState({
        selectedPage: 1
      }, this.loadData);
    }

    if (prevProps.reloadPageTrigger !== this.props.reloadPageTrigger) {
      this.loadData();
    }
  };

  _proto.loadData = function loadData() {
    var _this2 = this;

    // Raises error if revenue
    if (!this.props.url.length) {
      return;
    }

    _api_main__WEBPACK_IMPORTED_MODULE_2__.Base.get(this.props.url, {
      page: this.state.selectedPage,
      per_page: this.state.itemsPerPage
    }).then(function (resp) {
      _this2.setState({
        totalItems: resp.total,
        totalPages: resp.total_pages,
        selectedPage: resp.page,
        itemsPerPage: resp.per_page
      });

      _this2.props.onLoad(resp);
    }, function () {
      _helpers_main__WEBPACK_IMPORTED_MODULE_3__.Alerts.genericError();
    });
  };

  _proto.firstPage = function firstPage() {
    return this.state.selectedPage === 1;
  };

  _proto.lastPage = function lastPage() {
    return this.state.selectedPage === this.state.totalPages;
  };

  _proto.itemsLowerLimit = function itemsLowerLimit() {
    if (this.state.selectedPage === 1) {
      return 1;
    }

    return (this.state.selectedPage - 1) * this.state.itemsPerPage + 1;
  };

  _proto.itemsUpperLimit = function itemsUpperLimit() {
    var upperLimit = this.state.selectedPage * this.state.itemsPerPage;

    if (this.state.totalItems < upperLimit) {
      return this.state.totalItems;
    }

    return upperLimit;
  };

  _proto.displayedPages = function displayedPages() {
    var pages = [];
    var lowerBound = 0;
    var upperBound = 0;

    if (this.state.totalPages <= 10) {
      lowerBound = 1;
      upperBound = this.state.totalPages;
    } else {
      // Make sure if we're on the last page, and there are enough previous pages, we still show 10 pages total up to the last page
      var nextSlidingLowerBound = this.state.selectedPage >= this.state.totalPages - 4 ? this.state.totalPages - 9 : this.state.selectedPage - 5;
      lowerBound = this.state.selectedPage >= 10 ? nextSlidingLowerBound : 1; // Make sure the next upper bound isn't outside of the range of pages available

      var nextSlidingUpperBound = this.state.selectedPage + 4 > this.state.totalPages ? this.state.totalPages : this.state.selectedPage + 4;
      upperBound = this.state.selectedPage >= 10 ? nextSlidingUpperBound : 10;
    }

    for (var p = lowerBound; p <= upperBound; p++) {
      pages.push(p);
    }

    return pages;
  };

  _proto.renderPage = function renderPage(p) {
    var _this3 = this,
        _React$createElement,
        _React$createElement2;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", (_React$createElement2 = {
      className: "hover-pointer " + (this.state.selectedPage == p ? 'active' : ''),
      "v-for": "p in displayedPages",
      key: "page-" + p,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 109,
      columnNumber: 7
    }, _React$createElement2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement = {
      onClick: function onClick() {
        return _this3.handleSelect(p);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 110,
      columnNumber: 9
    }, _React$createElement), p));
  };

  _proto.render = function render() {
    var _React$createElement3,
        _React$createElement4,
        _React$createElement5,
        _React$createElement6,
        _React$createElement7,
        _React$createElement8,
        _React$createElement9,
        _React$createElement10,
        _this4 = this,
        _React$createElement11,
        _React$createElement12,
        _React$createElement13,
        _React$createElement14,
        _React$createElement15;

    if (this.state.totalItems < 1) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement15 = {
      className: "paginator",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 7
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 119,
      columnNumber: 7
    }, _React$createElement15), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
      className: "pagination-num-items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 120,
      columnNumber: 9
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement6 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 11
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 121,
      columnNumber: 11
    }, _React$createElement6), "Showing ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", (_React$createElement3 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 25
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 121,
      columnNumber: 25
    }, _React$createElement3), this.itemsLowerLimit()), "-", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", (_React$createElement4 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 67
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 121,
      columnNumber: 67
    }, _React$createElement4), this.itemsUpperLimit()), " of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", (_React$createElement5 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 112
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 121,
      columnNumber: 112
    }, _React$createElement5), this.state.totalItems))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", (_React$createElement14 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 124,
      columnNumber: 9
    }, _React$createElement14), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", (_React$createElement10 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 125,
      columnNumber: 11
    }, _React$createElement10), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement9 = {
      onClick: this.handlePagePrev,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 126,
      columnNumber: 13
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement8 = {
      className: "fa fa-angle-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 46
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 126,
      columnNumber: 46
    }, _React$createElement8)))), this.displayedPages().map(function (p) {
      return _this4.renderPage(p);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", (_React$createElement13 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 129,
      columnNumber: 11
    }, _React$createElement13), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement12 = {
      onClick: this.handlePageNext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 130,
      columnNumber: 13
    }, _React$createElement12), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement11 = {
      className: "fa fa-angle-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 46
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 130,
      columnNumber: 46
    }, _React$createElement11))))));
  };

  return Paginator;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Paginator.defaultProps = {
  itemsPerPage: 5,
  url: '',
  reloadTrigger: 0,
  reloadPageTrigger: 0
};
Paginator.propTypes = {
  itemsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  url: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  reloadTrigger: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  reloadPageTrigger: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  onLoad: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (Paginator);

/***/ }),

/***/ "./app/javascript/packs/history.jsx":
/*!******************************************!*\
  !*** ./app/javascript/packs/history.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_history_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/history/Main */ "./app/javascript/components/history/Main.jsx");
var _jsxFileName = "/ontrack/app/javascript/packs/history.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/packs/history.jsx",
    _this = undefined;




document.addEventListener('DOMContentLoaded', function () {
  var _Object$assign;

  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_history_Main__WEBPACK_IMPORTED_MODULE_2__.default, Object.assign({}, window.InitialProps, (_Object$assign = {
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
  }, _Object$assign))), document.getElementById('history'));
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_axios_index_js-node_modules_moment_locale_af_js-node_modules_moment_loca-6cbc58","vendors-node_modules_prop-types_index_js","vendors-node_modules_react-datepicker_dist_react-datepicker_min_js-node_modules_react-text-ma-b62690","app_javascript_api_main_js-app_javascript_helpers_main_js-node_modules_moment_locale_sync_rec-f85292"], function() { return __webpack_exec__("./app/javascript/packs/history.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=history-3c836f720b5d3ce9f0f9.js.map