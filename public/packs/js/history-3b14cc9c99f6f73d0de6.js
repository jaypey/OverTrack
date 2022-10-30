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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

    _this.handlePaidAtMinChange = function (val) {
      _this.setState({
        minPaidAtExpense: moment__WEBPACK_IMPORTED_MODULE_2___default()(val).unix()
      });
    };

    _this.handlePaidAtMaxChange = function (val) {
      _this.setState({
        maxPaidAtExpense: moment__WEBPACK_IMPORTED_MODULE_2___default()(val).unix()
      });
    };

    _this.handleCategoryFilterChange = function (e) {
      _this.setState({
        categoryId: e.target.value
      });
    };

    _this.toggleSortDir = function () {
      _this.setState({
        sortDesc: !_this.state.sortDesc
      });
    };

    _this.changeSort = function (s) {
      _this.setState({
        sort: s,
        sortDesc: true
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

    _this.handleTimeframeChange = function (e) {
      var timeframe = e.target.value;

      var _this$minAndMaxForTim = _this.minAndMaxForTimeframe(timeframe, 0),
          _this$minAndMaxForTim2 = _slicedToArray(_this$minAndMaxForTim, 2),
          minPaidAtExpense = _this$minAndMaxForTim2[0],
          maxPaidAtExpense = _this$minAndMaxForTim2[1];

      _this.setState({
        timeframe: timeframe,
        minPaidAtExpense: minPaidAtExpense,
        maxPaidAtExpense: maxPaidAtExpense
      });
    };

    _this.handleSearchChange = _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Util.debounce(function (search) {
      _this.setState({
        search: search
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

    var _this$minAndMaxForTim3 = _this.minAndMaxForTimeframe(defaultTimeframe, 0),
        _this$minAndMaxForTim4 = _slicedToArray(_this$minAndMaxForTim3, 2),
        _minPaidAtExpense = _this$minAndMaxForTim4[0],
        _maxPaidAtExpense = _this$minAndMaxForTim4[1];

    var _this$minAndMaxForTim5 = _this.minAndMaxForTimeframe(defaultTimeframe, 1),
        _this$minAndMaxForTim6 = _slicedToArray(_this$minAndMaxForTim5, 2),
        minPaidAtRevenue = _this$minAndMaxForTim6[0],
        maxPaidAtRevenue = _this$minAndMaxForTim6[1];

    _this.state = {
      expenses: [],
      revenues: [],
      minPaidAtExpense: _minPaidAtExpense,
      maxPaidAtExpense: _maxPaidAtExpense,
      minPaidAtRevenue: minPaidAtRevenue,
      maxPaidAtRevenue: maxPaidAtRevenue,
      categoryId: _this.props.categoryId || '',
      sort: 'paid_at',
      sortDesc: true,
      reloadTrigger: 0,
      reloadPageTrigger: 0,
      timeframe: defaultTimeframe,
      search: ''
    };
    return _this;
  }

  var _proto = Main.prototype;

  _proto.urlExpenses = function urlExpenses() {
    return "/expenses?include_category=true&paid_before=" + this.state.maxPaidAtExpense + "&paid_after=" + this.state.minPaidAtExpense + "&category_id=" + this.state.categoryId + "&sort=" + this.state.sort + "&sort_desc=" + this.state.sortDesc + "&search=" + this.state.search;
  };

  _proto.urlRevenues = function urlRevenues() {
    return "/revenues?include_category=true";
  };

  _proto.renderSort = function renderSort(key) {
    var _this2 = this;

    if (this.state.sort == key) {
      var _React$createElement;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement = {
        onClick: this.toggleSortDir,
        className: "fas fa-sort-" + (this.state.sortDesc ? 'down' : 'up') + " ml-2 hover-pointer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 14
        }
      }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 95,
        columnNumber: 14
      }, _React$createElement));
    } else {
      var _React$createElement2;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement2 = {
        onClick: function onClick() {
          _this2.changeSort(key);
        },
        className: "fas fa-sort ml-2 hover-pointer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 14
        }
      }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 97,
        columnNumber: 14
      }, _React$createElement2));
    }
  };

  _proto.renderEmptyState = function renderEmptyState() {
    var _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7;

    if (this.props.hasData) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
      className: "empty-or-error-status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 104,
      columnNumber: 7
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement5 = {
      className: "status-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 105,
      columnNumber: 9
    }, _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", (_React$createElement3 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 106,
      columnNumber: 11
    }, _React$createElement3), "Our historian has nothing to do!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement4 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 107,
      columnNumber: 11
    }, _React$createElement4), "The expenses you enter will show up here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", (_React$createElement6 = {
      className: "status-image",
      src: window.historian,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 109,
      columnNumber: 9
    }, _React$createElement6)));
  };

  _proto.renderExpensesTable = function renderExpensesTable() {
    var _React$createElement8,
        _this3 = this,
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
        _React$createElement29,
        _React$createElement30,
        _React$createElement31,
        _React$createElement32,
        _React$createElement33,
        _React$createElement34,
        _React$createElement35,
        _React$createElement36;

    if (!this.props.hasData) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement36 = {
      className: "content-with-sidebar mt-30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 7
      }
    }, _React$createElement36["__self"] = this, _React$createElement36["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 117,
      columnNumber: 7
    }, _React$createElement36), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement21 = {
      className: "sidebar input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }
    }, _React$createElement21["__self"] = this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 118,
      columnNumber: 9
    }, _React$createElement21), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement10 = {
      onChange: this.handleCategoryFilterChange,
      defaultValue: this.state.categoryId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 119,
      columnNumber: 11
    }, _React$createElement10), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement8 = {
      value: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 120,
      columnNumber: 13
    }, _React$createElement8), "All categories"), this.props.categories.map(function (c) {
      var _React$createElement9;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement9 = {
        key: c.id,
        value: c.id,
        __self: _this3,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 47
        }
      }, _React$createElement9["__self"] = _this3, _React$createElement9["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 121,
        columnNumber: 47
      }, _React$createElement9), c.name);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement15 = {
      className: "mt-10",
      onChange: this.handleTimeframeChange,
      defaultValue: this.state.timeframe,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 124,
      columnNumber: 11
    }, _React$createElement15), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement11 = {
      value: "current_month",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 125,
      columnNumber: 13
    }, _React$createElement11), "Current month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement12 = {
      value: "last_90_days",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 126,
      columnNumber: 13
    }, _React$createElement12), "Last 90 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement13 = {
      value: "ytd",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 127,
      columnNumber: 13
    }, _React$createElement13), "Year to date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement14 = {
      value: "custom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 128,
      columnNumber: 13
    }, _React$createElement14), "Custom timeframe")), this.state.timeframe === 'custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement19 = {
      className: "mt-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 13
      }
    }, _React$createElement19["__self"] = this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 132,
      columnNumber: 13
    }, _React$createElement19), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement16 = {
      onChange: this.handlePaidAtMinChange,
      value: moment__WEBPACK_IMPORTED_MODULE_2___default().unix(this.state.minPaidAtExpense).toDate(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 15
      }
    }, _React$createElement16["__self"] = this, _React$createElement16["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 133,
      columnNumber: 15
    }, _React$createElement16)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement17 = {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, _React$createElement17["__self"] = this, _React$createElement17["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 134,
      columnNumber: 15
    }, _React$createElement17), "to"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement18 = {
      onChange: this.handlePaidAtMaxChange,
      value: moment__WEBPACK_IMPORTED_MODULE_2___default().unix(this.state.maxPaidAtExpense).toDate(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }
    }, _React$createElement18["__self"] = this, _React$createElement18["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 135,
      columnNumber: 15
    }, _React$createElement18))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement20 = {
      className: "mt-10",
      placeholder: "Search for description",
      onChange: function onChange(e) {
        return _this3.handleSearchChange(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }
    }, _React$createElement20["__self"] = this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 139,
      columnNumber: 11
    }, _React$createElement20))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement35 = {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }
    }, _React$createElement35["__self"] = this, _React$createElement35["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 142,
      columnNumber: 9
    }, _React$createElement35), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement32 = {
      className: "overflow-x bg-art-2 p-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }
    }, _React$createElement32["__self"] = this, _React$createElement32["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 143,
      columnNumber: 11
    }, _React$createElement32), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement31 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }
    }, _React$createElement31["__self"] = this, _React$createElement31["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 144,
      columnNumber: 13
    }, _React$createElement31), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("caption", (_React$createElement22 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }
    }, _React$createElement22["__self"] = this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 145,
      columnNumber: 13
    }, _React$createElement22), "Expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement29 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 15
      }
    }, _React$createElement29["__self"] = this, _React$createElement29["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 146,
      columnNumber: 15
    }, _React$createElement29), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement28 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }
    }, _React$createElement28["__self"] = this, _React$createElement28["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 147,
      columnNumber: 17
    }, _React$createElement28), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement23 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 19
      }
    }, _React$createElement23["__self"] = this, _React$createElement23["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 148,
      columnNumber: 19
    }, _React$createElement23), "Date ", this.renderSort('paid_at')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement24 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 19
      }
    }, _React$createElement24["__self"] = this, _React$createElement24["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 149,
      columnNumber: 19
    }, _React$createElement24), "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement25 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 19
      }
    }, _React$createElement25["__self"] = this, _React$createElement25["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 150,
      columnNumber: 19
    }, _React$createElement25), "Amount ", this.renderSort('amount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement26 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }, _React$createElement26["__self"] = this, _React$createElement26["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 151,
      columnNumber: 19
    }, _React$createElement26), "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement27 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 19
      }
    }, _React$createElement27["__self"] = this, _React$createElement27["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 152,
      columnNumber: 19
    }, _React$createElement27)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement30 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 15
      }
    }, _React$createElement30["__self"] = this, _React$createElement30["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 155,
      columnNumber: 15
    }, _React$createElement30), this.state.expenses.map(function (exp) {
      return _this3.renderExpense(exp);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement34 = {
      className: "mt-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 11
      }
    }, _React$createElement34["__self"] = this, _React$createElement34["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 161,
      columnNumber: 11
    }, _React$createElement34), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Paginator__WEBPACK_IMPORTED_MODULE_3__.default // url = loaddata directly from controller
    , (_React$createElement33 = {
      url: this.urlExpenses(),
      onLoad: this.onLoadExpenses,
      reloadTrigger: this.state.reloadTrigger,
      reloadPageTrigger: this.state.reloadPageTrigger,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }, _React$createElement33["__self"] = this, _React$createElement33["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 162,
      columnNumber: 13
    }, _React$createElement33)))));
  };

  _proto.renderRevenuesTable = function renderRevenuesTable() {
    var _React$createElement37,
        _this4 = this,
        _React$createElement39,
        _React$createElement40,
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
        _React$createElement65;

    if (!this.props.hasData) {
      return '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement65 = {
      className: "content-with-sidebar mt-30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 7
      }
    }, _React$createElement65["__self"] = this, _React$createElement65["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 178,
      columnNumber: 7
    }, _React$createElement65), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement50 = {
      className: "sidebar input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }
    }, _React$createElement50["__self"] = this, _React$createElement50["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 179,
      columnNumber: 9
    }, _React$createElement50), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement39 = {
      onChange: this.handleCategoryFilterChange,
      defaultValue: this.state.categoryId,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 11
      }
    }, _React$createElement39["__self"] = this, _React$createElement39["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 180,
      columnNumber: 11
    }, _React$createElement39), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement37 = {
      value: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }, _React$createElement37["__self"] = this, _React$createElement37["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 181,
      columnNumber: 13
    }, _React$createElement37), "All categories"), this.props.categories.map(function (c) {
      var _React$createElement38;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement38 = {
        key: c.id,
        value: c.id,
        __self: _this4,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 47
        }
      }, _React$createElement38["__self"] = _this4, _React$createElement38["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 182,
        columnNumber: 47
      }, _React$createElement38), c.name);
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement44 = {
      className: "mt-10",
      onChange: this.handleTimeframeChange,
      defaultValue: this.state.timeframe,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }
    }, _React$createElement44["__self"] = this, _React$createElement44["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 185,
      columnNumber: 11
    }, _React$createElement44), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement40 = {
      value: "current_month",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }
    }, _React$createElement40["__self"] = this, _React$createElement40["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 186,
      columnNumber: 13
    }, _React$createElement40), "Current month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement41 = {
      value: "last_90_days",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }
    }, _React$createElement41["__self"] = this, _React$createElement41["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 187,
      columnNumber: 13
    }, _React$createElement41), "Last 90 days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement42 = {
      value: "ytd",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, _React$createElement42["__self"] = this, _React$createElement42["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 188,
      columnNumber: 13
    }, _React$createElement42), "Year to date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement43 = {
      value: "custom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 13
      }
    }, _React$createElement43["__self"] = this, _React$createElement43["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 189,
      columnNumber: 13
    }, _React$createElement43), "Custom timeframe")), this.state.timeframe === 'custom' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement48 = {
      className: "mt-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }, _React$createElement48["__self"] = this, _React$createElement48["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 193,
      columnNumber: 13
    }, _React$createElement48), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement45 = {
      onChange: this.handlePaidAtMinChange,
      value: moment__WEBPACK_IMPORTED_MODULE_2___default().unix(this.state.minPaidAtExpense).toDate(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 15
      }
    }, _React$createElement45["__self"] = this, _React$createElement45["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 194,
      columnNumber: 15
    }, _React$createElement45)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement46 = {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 15
      }
    }, _React$createElement46["__self"] = this, _React$createElement46["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 195,
      columnNumber: 15
    }, _React$createElement46), "to"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement47 = {
      onChange: this.handlePaidAtMaxChange,
      value: moment__WEBPACK_IMPORTED_MODULE_2___default().unix(this.state.maxPaidAtExpense).toDate(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 15
      }
    }, _React$createElement47["__self"] = this, _React$createElement47["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 196,
      columnNumber: 15
    }, _React$createElement47))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement49 = {
      className: "mt-10",
      placeholder: "Search for description",
      onChange: function onChange(e) {
        return _this4.handleSearchChange(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 11
      }
    }, _React$createElement49["__self"] = this, _React$createElement49["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 200,
      columnNumber: 11
    }, _React$createElement49))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement64 = {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }
    }, _React$createElement64["__self"] = this, _React$createElement64["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 203,
      columnNumber: 9
    }, _React$createElement64), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement61 = {
      className: "overflow-x bg-art p-10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 11
      }
    }, _React$createElement61["__self"] = this, _React$createElement61["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 204,
      columnNumber: 11
    }, _React$createElement61), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement60 = {
      className: "table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 13
      }
    }, _React$createElement60["__self"] = this, _React$createElement60["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 205,
      columnNumber: 13
    }, _React$createElement60), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("caption", (_React$createElement51 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 13
      }
    }, _React$createElement51["__self"] = this, _React$createElement51["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 206,
      columnNumber: 13
    }, _React$createElement51), "Revenues"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement58 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 15
      }
    }, _React$createElement58["__self"] = this, _React$createElement58["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 207,
      columnNumber: 15
    }, _React$createElement58), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement57 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    }, _React$createElement57["__self"] = this, _React$createElement57["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 208,
      columnNumber: 17
    }, _React$createElement57), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement52 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 19
      }
    }, _React$createElement52["__self"] = this, _React$createElement52["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 209,
      columnNumber: 19
    }, _React$createElement52), "Date ", this.renderSort('paid_at')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement53 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 19
      }
    }, _React$createElement53["__self"] = this, _React$createElement53["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 210,
      columnNumber: 19
    }, _React$createElement53), "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement54 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 19
      }
    }, _React$createElement54["__self"] = this, _React$createElement54["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 211,
      columnNumber: 19
    }, _React$createElement54), "Amount ", this.renderSort('amount')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement55 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 19
      }
    }, _React$createElement55["__self"] = this, _React$createElement55["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 212,
      columnNumber: 19
    }, _React$createElement55), "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", (_React$createElement56 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 19
      }
    }, _React$createElement56["__self"] = this, _React$createElement56["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 213,
      columnNumber: 19
    }, _React$createElement56)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement59 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 15
      }
    }, _React$createElement59["__self"] = this, _React$createElement59["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 216,
      columnNumber: 15
    }, _React$createElement59), this.state.expenses.map(function (exp) {
      return _this4.renderExpense(exp);
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement63 = {
      className: "mt-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 11
      }
    }, _React$createElement63["__self"] = this, _React$createElement63["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 222,
      columnNumber: 11
    }, _React$createElement63), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_Paginator__WEBPACK_IMPORTED_MODULE_3__.default // url = loaddata directly from controller
    , (_React$createElement62 = {
      url: this.urlRevenues(),
      onLoad: this.onLoadRevenues,
      reloadTrigger: this.state.reloadTrigger,
      reloadPageTrigger: this.state.reloadPageTrigger,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 13
      }
    }, _React$createElement62["__self"] = this, _React$createElement62["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 223,
      columnNumber: 13
    }, _React$createElement62)))));
  };

  _proto.renderExpense = function renderExpense(expense) {
    var _this5 = this,
        _React$createElement66,
        _React$createElement67,
        _React$createElement69,
        _React$createElement70,
        _React$createElement71,
        _React$createElement72,
        _React$createElement73,
        _React$createElement74,
        _React$createElement75,
        _React$createElement76,
        _React$createElement77,
        _React$createElement78;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement78 = {
      key: expense.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 7
      }
    }, _React$createElement78["__self"] = this, _React$createElement78["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 238,
      columnNumber: 7
    }, _React$createElement78), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement67 = {
      className: "input-group mw-120",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }
    }, _React$createElement67["__self"] = this, _React$createElement67["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 239,
      columnNumber: 9
    }, _React$createElement67), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_DatePicker__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement66 = {
      onChange: function onChange(val) {
        return _this5.updateExpense(expense.id, {
          paid_at: val
        });
      },
      value: new Date(expense.paid_at),
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 11
      }
    }, _React$createElement66["__self"] = this, _React$createElement66["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 240,
      columnNumber: 11
    }, _React$createElement66))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement70 = {
      className: "input-group mw-150",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 9
      }
    }, _React$createElement70["__self"] = this, _React$createElement70["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 243,
      columnNumber: 9
    }, _React$createElement70), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement69 = {
      defaultValue: expense.category_id,
      onChange: function onChange(e) {
        return _this5.updateExpense(expense.id, {
          category_id: e.target.value
        });
      },
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 11
      }
    }, _React$createElement69["__self"] = this, _React$createElement69["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 244,
      columnNumber: 11
    }, _React$createElement69), this.props.categories.map(function (c) {
      var _React$createElement68;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement68 = {
        key: c.id,
        value: c.id,
        __self: _this5,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 47
        }
      }, _React$createElement68["__self"] = _this5, _React$createElement68["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 245,
        columnNumber: 47
      }, _React$createElement68), c.name);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement72 = {
      className: "input-group mw-100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }
    }, _React$createElement72["__self"] = this, _React$createElement72["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 249,
      columnNumber: 9
    }, _React$createElement72), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_CurrencyInput__WEBPACK_IMPORTED_MODULE_5__.default, (_React$createElement71 = {
      initialValue: expense.amount,
      onBlur: function onBlur(val) {
        return _this5.updateExpense(expense.id, {
          amount: val
        });
      },
      className: "bg-gray-slight-contrast",
      allowNegative: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 11
      }
    }, _React$createElement71["__self"] = this, _React$createElement71["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 250,
      columnNumber: 11
    }, _React$createElement71))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement74 = {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 9
      }
    }, _React$createElement74["__self"] = this, _React$createElement74["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 258,
      columnNumber: 9
    }, _React$createElement74), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", (_React$createElement73 = {
      defaultValue: expense.description,
      onBlur: function onBlur(e) {
        if (e.target.value.trim() != expense.description) {
          _this5.updateExpense(expense.id, {
            description: e.target.value.trim()
          });
        }
      },
      className: "bg-gray-slight-contrast",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 11
      }
    }, _React$createElement73["__self"] = this, _React$createElement73["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 259,
      columnNumber: 11
    }, _React$createElement73))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement77 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 9
      }
    }, _React$createElement77["__self"] = this, _React$createElement77["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 262,
      columnNumber: 9
    }, _React$createElement77), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement76 = {
      onClick: function onClick() {
        return _this5.handleExpenseDelete(expense.id);
      },
      className: "dim-til-hover",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 11
      }
    }, _React$createElement76["__self"] = this, _React$createElement76["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 263,
      columnNumber: 11
    }, _React$createElement76), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement75 = {
      className: "fa fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 93
      }
    }, _React$createElement75["__self"] = this, _React$createElement75["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 263,
      columnNumber: 93
    }, _React$createElement75)))));
  };

  _proto.render = function render() {
    var _React$createElement79;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement79 = {
      className: "container wide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 7
      }
    }, _React$createElement79["__self"] = this, _React$createElement79["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 271,
      columnNumber: 7
    }, _React$createElement79), this.renderEmptyState(), this.renderExpensesTable(), this.renderRevenuesTable());
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
        lineNumber: 108,
        columnNumber: 7
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 108,
      columnNumber: 7
    }, _React$createElement2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement = {
      onClick: function onClick() {
        return _this3.handleSelect(p);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 109,
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
        lineNumber: 118,
        columnNumber: 7
      }
    }, _React$createElement15["__self"] = this, _React$createElement15["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 118,
      columnNumber: 7
    }, _React$createElement15), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
      className: "pagination-num-items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, _React$createElement7["__self"] = this, _React$createElement7["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 119,
      columnNumber: 9
    }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement6 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }, _React$createElement6["__self"] = this, _React$createElement6["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 120,
      columnNumber: 11
    }, _React$createElement6), "Showing ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", (_React$createElement3 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 120,
      columnNumber: 25
    }, _React$createElement3), this.itemsLowerLimit()), "-", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", (_React$createElement4 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 67
      }
    }, _React$createElement4["__self"] = this, _React$createElement4["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 120,
      columnNumber: 67
    }, _React$createElement4), this.itemsUpperLimit()), " of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", (_React$createElement5 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 112
      }
    }, _React$createElement5["__self"] = this, _React$createElement5["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 120,
      columnNumber: 112
    }, _React$createElement5), this.state.totalItems))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", (_React$createElement14 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }
    }, _React$createElement14["__self"] = this, _React$createElement14["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 123,
      columnNumber: 9
    }, _React$createElement14), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", (_React$createElement10 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }, _React$createElement10["__self"] = this, _React$createElement10["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 124,
      columnNumber: 11
    }, _React$createElement10), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement9 = {
      onClick: this.handlePagePrev,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, _React$createElement9["__self"] = this, _React$createElement9["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 125,
      columnNumber: 13
    }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement8 = {
      className: "fa fa-angle-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 46
      }
    }, _React$createElement8["__self"] = this, _React$createElement8["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 125,
      columnNumber: 46
    }, _React$createElement8)))), this.displayedPages().map(function (p) {
      return _this4.renderPage(p);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", (_React$createElement13 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    }, _React$createElement13["__self"] = this, _React$createElement13["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 128,
      columnNumber: 11
    }, _React$createElement13), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement12 = {
      onClick: this.handlePageNext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, _React$createElement12["__self"] = this, _React$createElement12["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 129,
      columnNumber: 13
    }, _React$createElement12), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement11 = {
      className: "fa fa-angle-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 46
      }
    }, _React$createElement11["__self"] = this, _React$createElement11["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 129,
      columnNumber: 46
    }, _React$createElement11))))));
  };

  return Paginator;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Paginator.defaultProps = {
  itemsPerPage: 2,
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_prop-types_index_js-node_modules_react-dom_index_js","vendors-node_modules_axios_index_js-node_modules_moment_locale_af_js-node_modules_moment_loca-3bfda5","vendors-node_modules_react-datepicker_dist_react-datepicker_min_js-node_modules_react-text-ma-b62690","app_javascript_api_main_js-app_javascript_helpers_main_js-node_modules_moment_locale_sync_rec-f85292"], function() { return __webpack_exec__("./app/javascript/packs/history.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=history-3b14cc9c99f6f73d0de6.js.map