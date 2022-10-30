(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["insights"],{

/***/ "./app/javascript/api/main.js":
/*!************************************!*\
  !*** ./app/javascript/api/main.js ***!
  \************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /ontrack/app/javascript/api/main.js: Export 'CsvConfig' is not defined. (12:2)\n\n  10 |   Goals,\n  11 |   Reports,\n> 12 |   CsvConfig,\n     |   ^\n  13 |   Base,\n  14 | };\n  15 |\n    at Object._raise (/ontrack/node_modules/@babel/parser/lib/index.js:807:17)\n    at Object.raiseWithData (/ontrack/node_modules/@babel/parser/lib/index.js:800:17)\n    at Object.raise (/ontrack/node_modules/@babel/parser/lib/index.js:761:17)\n    at Object.parseProgram (/ontrack/node_modules/@babel/parser/lib/index.js:12747:14)\n    at Object.parseTopLevel (/ontrack/node_modules/@babel/parser/lib/index.js:12733:25)\n    at Object.parse (/ontrack/node_modules/@babel/parser/lib/index.js:14473:10)\n    at parse (/ontrack/node_modules/@babel/parser/lib/index.js:14525:38)\n    at parser (/ontrack/node_modules/@babel/core/lib/parser/index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/ontrack/node_modules/@babel/core/lib/transformation/normalize-file.js:87:38)");

/***/ }),

/***/ "./app/javascript/components/insights/Main.jsx":
/*!*****************************************************!*\
  !*** ./app/javascript/components/insights/Main.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Year */ "./app/javascript/components/insights/Year.jsx");
/* harmony import */ var _Month__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Month */ "./app/javascript/components/insights/Month.jsx");
var _jsxFileName = "/ontrack/app/javascript/components/insights/Main.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/insights/Main.jsx",
    _this = undefined;






var Main = function Main(_ref) {
  var _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8, _React$createElement9;

  var hasData = _ref.hasData,
      availableYears = _ref.availableYears,
      availableMonths = _ref.availableMonths;

  if (!hasData) {
    var _React$createElement, _React$createElement2, _React$createElement3;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement3 = {
      className: "container text-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, _React$createElement3["__self"] = _this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 9,
      columnNumber: 7
    }, _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement = {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, _React$createElement["__self"] = _this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 10,
      columnNumber: 9
    }, _React$createElement), "No data available!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", (_React$createElement2 = {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, _React$createElement2["__self"] = _this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 11,
      columnNumber: 9
    }, _React$createElement2), "Add expenses to start seeing reports here."));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement9 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, _React$createElement9["__self"] = _this, _React$createElement9["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 17,
    columnNumber: 5
  }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement5 = {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, _React$createElement5["__self"] = _this, _React$createElement5["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 18,
    columnNumber: 7
  }, _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Year__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement4 = {
    availableYears: availableYears,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, _React$createElement4["__self"] = _this, _React$createElement4["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 19,
    columnNumber: 9
  }, _React$createElement4))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement8 = {
    className: "bg-gray mt-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, _React$createElement8["__self"] = _this, _React$createElement8["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 21,
    columnNumber: 7
  }, _React$createElement8), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement7 = {
    className: "container pv-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, _React$createElement7["__self"] = _this, _React$createElement7["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 22,
    columnNumber: 9
  }, _React$createElement7), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Month__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement6 = {
    availableMonths: availableMonths,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, _React$createElement6["__self"] = _this, _React$createElement6["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 23,
    columnNumber: 11
  }, _React$createElement6)))));
};

Main.propTypes = {
  availableYears: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  availableMonths: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  hasData: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./app/javascript/components/insights/Month.jsx":
/*!******************************************************!*\
  !*** ./app/javascript/components/insights/Month.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/BarChart */ "./app/javascript/components/shared/BarChart.jsx");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api_main__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/insights/Month.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/insights/Month.jsx",
    _this = undefined;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Month = function Month(_ref) {
  var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8, _React$createElement9, _React$createElement10, _React$createElement11, _React$createElement12, _React$createElement13, _React$createElement14, _React$createElement15, _React$createElement16, _React$createElement17, _React$createElement18, _React$createElement19, _React$createElement20, _React$createElement21, _React$createElement22, _React$createElement23, _React$createElement24;

  var availableMonths = _ref.availableMonths;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(availableMonths[availableMonths.length - 1]),
      _useState2 = _slicedToArray(_useState, 2),
      month = _useState2[0],
      setMonth = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      goal = _useState4[0],
      setGoal = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      spend = _useState6[0],
      setSpend = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    data: [],
    labels: []
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      chartdata = _useState8[0],
      setChartdata = _useState8[1];

  var handleMonthDecrement = function handleMonthDecrement() {
    return setMonth(availableMonths[availableMonths.indexOf(month) - 1]);
  };

  var handleMonthIncrement = function handleMonthIncrement() {
    return setMonth(availableMonths[availableMonths.indexOf(month) + 1]);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _api_main__WEBPACK_IMPORTED_MODULE_3__.Reports.month({
      month: month
    }).then(function (resp) {
      var labels = resp.category_totals.map(function (r) {
        return r.category;
      });
      var datasets = [{
        label: 'Spend',
        backgroundColor: '#8295e0',
        data: []
      }];
      resp.category_totals.forEach(function (r) {
        datasets[0].data.push(r.spend / 100);
      });
      setChartdata({
        data: datasets,
        labels: labels
      });
      setGoal(resp.monthly_goal);
      setSpend(resp.total);
    }, function () {
      _helpers_main__WEBPACK_IMPORTED_MODULE_4__.Alerts.genericError();
    });
  }, [month]);
  var goalComparison = parseFloat(spend) - parseFloat(goal);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement24 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, _React$createElement24["__self"] = _this, _React$createElement24["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 40,
    columnNumber: 5
  }, _React$createElement24), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, _React$createElement6["__self"] = _this, _React$createElement6["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 41,
    columnNumber: 7
  }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement2 = {
    className: "btn btn-transparent",
    onClick: handleMonthDecrement,
    disabled: availableMonths.indexOf(month) == 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, _React$createElement2["__self"] = _this, _React$createElement2["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 42,
    columnNumber: 9
  }, _React$createElement2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement = {
    className: "fa fa-chevron-left mr-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, _React$createElement["__self"] = _this, _React$createElement["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 43,
    columnNumber: 11
  }, _React$createElement))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement3 = {
    className: "d-inline-block mw-150 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, _React$createElement3["__self"] = _this, _React$createElement3["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 45,
    columnNumber: 9
  }, _React$createElement3), month), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", (_React$createElement5 = {
    className: "btn btn-transparent",
    onClick: handleMonthIncrement,
    disabled: availableMonths.indexOf(month) == availableMonths.length - 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, _React$createElement5["__self"] = _this, _React$createElement5["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 46,
    columnNumber: 9
  }, _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", (_React$createElement4 = {
    className: "fa fa-chevron-right ml-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, _React$createElement4["__self"] = _this, _React$createElement4["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 47,
    columnNumber: 11
  }, _React$createElement4)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement18 = {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, _React$createElement18["__self"] = _this, _React$createElement18["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 51,
    columnNumber: 7
  }, _React$createElement18), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement10 = {
    className: "six columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, _React$createElement10["__self"] = _this, _React$createElement10["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 52,
    columnNumber: 9
  }, _React$createElement10), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement9 = {
    className: "month flex flex-space-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, _React$createElement9["__self"] = _this, _React$createElement9["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 53,
    columnNumber: 11
  }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", (_React$createElement7 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, _React$createElement7["__self"] = _this, _React$createElement7["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 54,
    columnNumber: 13
  }, _React$createElement7), "Total spend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", (_React$createElement8 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, _React$createElement8["__self"] = _this, _React$createElement8["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 55,
    columnNumber: 13
  }, _React$createElement8), _helpers_main__WEBPACK_IMPORTED_MODULE_4__.Numerics.centsToDollars(spend)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement17 = {
    className: "six columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, _React$createElement17["__self"] = _this, _React$createElement17["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 60,
    columnNumber: 9
  }, _React$createElement17), !goal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", (_React$createElement13 = {
    className: "month flex flex-space-between",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, _React$createElement13["__self"] = _this, _React$createElement13["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 62,
    columnNumber: 13
  }, _React$createElement13), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement11 = {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, _React$createElement11["__self"] = _this, _React$createElement11["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 63,
    columnNumber: 15
  }, _React$createElement11), "Set a total monthly goal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", (_React$createElement12 = {
    className: "v-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, _React$createElement12["__self"] = _this, _React$createElement12["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 64,
    columnNumber: 15
  }, _React$createElement12), "N/A")), !!goal && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement16 = {
    className: "month flex flex-space-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, _React$createElement16["__self"] = _this, _React$createElement16["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 68,
    columnNumber: 13
  }, _React$createElement16), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", (_React$createElement14 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }, _React$createElement14["__self"] = _this, _React$createElement14["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 69,
    columnNumber: 15
  }, _React$createElement14), "Goal comparison"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", (_React$createElement15 = {
    className: goalComparison <= 0 ? 'text-success' : 'text-warning',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, _React$createElement15["__self"] = _this, _React$createElement15["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 70,
    columnNumber: 15
  }, _React$createElement15), _helpers_main__WEBPACK_IMPORTED_MODULE_4__.Numerics.centsToDollars(Math.abs(goalComparison)), goalComparison >= 0 ? ' over' : ' under')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement23 = {
    className: "month",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, _React$createElement23["__self"] = _this, _React$createElement23["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 79,
    columnNumber: 7
  }, _React$createElement23), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement20 = {
    className: "mb-30",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, _React$createElement20["__self"] = _this, _React$createElement20["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 80,
    columnNumber: 9
  }, _React$createElement20), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", (_React$createElement19 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, _React$createElement19["__self"] = _this, _React$createElement19["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 81,
    columnNumber: 11
  }, _React$createElement19), "Spend by category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement22 = {
    className: "chart-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, _React$createElement22["__self"] = _this, _React$createElement22["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 83,
    columnNumber: 9
  }, _React$createElement22), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_BarChart__WEBPACK_IMPORTED_MODULE_2__.default, (_React$createElement21 = {
    data: chartdata.data,
    labels: chartdata.labels,
    hideLegend: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, _React$createElement21["__self"] = _this, _React$createElement21["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 84,
    columnNumber: 11
  }, _React$createElement21)))));
};

Month.propTypes = {
  availableMonths: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (Month);

/***/ }),

/***/ "./app/javascript/components/insights/PieChart.jsx":
/*!*********************************************************!*\
  !*** ./app/javascript/components/insights/PieChart.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/ontrack/app/javascript/components/insights/PieChart.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/insights/PieChart.jsx",
    _this = undefined;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var PieChart = function PieChart(_ref) {
  var _React$createElement;

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
          display: false
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", (_React$createElement = {
    id: randomId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }
  }, _React$createElement["__self"] = _this, _React$createElement["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 37,
    columnNumber: 10
  }, _React$createElement));
};

PieChart.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  labels: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  colors: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (PieChart);

/***/ }),

/***/ "./app/javascript/components/insights/Year.jsx":
/*!*****************************************************!*\
  !*** ./app/javascript/components/insights/Year.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_BarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/BarChart */ "./app/javascript/components/shared/BarChart.jsx");
/* harmony import */ var _PieChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PieChart */ "./app/javascript/components/insights/PieChart.jsx");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_api_main__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
var _jsxFileName = "/ontrack/app/javascript/components/insights/Year.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/insights/Year.jsx",
    _this = undefined;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var Year = function Year(_ref) {
  var _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8, _React$createElement9, _React$createElement10, _React$createElement11, _React$createElement12, _React$createElement13, _React$createElement14, _React$createElement15, _React$createElement16, _React$createElement17, _React$createElement18, _React$createElement24, _React$createElement25, _categoryAverages$fin2, _React$createElement26, _React$createElement27, _React$createElement28, _React$createElement29, _React$createElement30, _React$createElement31, _React$createElement32;

  var availableYears = _ref.availableYears;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(availableYears[0]),
      _useState2 = _slicedToArray(_useState, 2),
      year = _useState2[0],
      setYear = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      yearTotal = _useState4[0],
      setYearTotal = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      categoryTotals = _useState6[0],
      setCategoryTotals = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      categoryAverages = _useState8[0],
      setCategoryAverages = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      averageRange = _useState10[0],
      setAverageRange = _useState10[1];

  var barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      barChartData = _useState12[0],
      setBarChartData = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    data: [],
    colors: [],
    labels: []
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      pieChartData = _useState14[0],
      setPieChartData = _useState14[1];

  var handleYearChange = function handleYearChange(e) {
    return setYear(e.target.value);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _api_main__WEBPACK_IMPORTED_MODULE_5__.Reports.year({
      year: year
    }).then(function (resp) {
      var barChartDatasets = resp.categories.map(function (c) {
        var dataPoints = barChartLabels.map(function (mon) {
          var _resp$category_amount;

          var amount = (_resp$category_amount = resp.category_amounts_by_month.find(function (a) {
            return a.month == mon && a.category == c.name;
          })) == null ? void 0 : _resp$category_amount.amount;
          return _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Numerics.centsToFloat(amount || 0);
        });
        return {
          label: c.name,
          data: dataPoints,
          backgroundColor: c.color
        };
      });
      var pieChartDatasets = [];
      var pieChartLabels = [];
      var pieChartColors = [];
      resp.categories.forEach(function (c) {
        var _resp$category_percen;

        pieChartLabels.push(c.name);
        pieChartColors.push(c.color);
        var percentage = (_resp$category_percen = resp.category_percentages.find(function (p) {
          return p.category === c.name;
        })) == null ? void 0 : _resp$category_percen.percentage;
        pieChartDatasets.push(_helpers_main__WEBPACK_IMPORTED_MODULE_6__.Numerics.floatToPercent(percentage || 0));
      });
      setBarChartData(barChartDatasets);
      setPieChartData({
        data: pieChartDatasets,
        colors: pieChartColors,
        labels: pieChartLabels
      });
      setCategoryTotals(resp.category_totals);
      setCategoryAverages(resp.category_averages_for_year.averages);
      setAverageRange([resp.category_averages_for_year.start_date, resp.category_averages_for_year.end_date]);
      setYearTotal(resp.total);
    }, function () {
      _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Alerts.genericError();
    });
  }, [year]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement32 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, _React$createElement32["__self"] = _this, _React$createElement32["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 59,
    columnNumber: 5
  }, _React$createElement32), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement4 = {
    className: "flex flex-space-between mb-30",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, _React$createElement4["__self"] = _this, _React$createElement4["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 60,
    columnNumber: 7
  }, _React$createElement4), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement3 = {
    className: "input-group inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, _React$createElement3["__self"] = _this, _React$createElement3["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 61,
    columnNumber: 9
  }, _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", (_React$createElement2 = {
    value: year,
    onChange: handleYearChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, _React$createElement2["__self"] = _this, _React$createElement2["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 62,
    columnNumber: 11
  }, _React$createElement2), availableYears.map(function (yr) {
    var _React$createElement;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", (_React$createElement = {
      key: yr,
      value: yr,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 39
      }
    }, _React$createElement["__self"] = _this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 63,
      columnNumber: 39
    }, _React$createElement), yr);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement6 = {
    className: "chart-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, _React$createElement6["__self"] = _this, _React$createElement6["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 68,
    columnNumber: 7
  }, _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_BarChart__WEBPACK_IMPORTED_MODULE_3__.default, (_React$createElement5 = {
    data: barChartData,
    labels: barChartLabels,
    hideLegend: true,
    stacked: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, _React$createElement5["__self"] = _this, _React$createElement5["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 69,
    columnNumber: 9
  }, _React$createElement5))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement31 = {
    className: "row row-flex flex mt-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, _React$createElement31["__self"] = _this, _React$createElement31["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 77,
    columnNumber: 7
  }, _React$createElement31), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement9 = {
    className: "six columns",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, _React$createElement9["__self"] = _this, _React$createElement9["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 78,
    columnNumber: 9
  }, _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement8 = {
    className: "chart-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, _React$createElement8["__self"] = _this, _React$createElement8["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 79,
    columnNumber: 11
  }, _React$createElement8), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PieChart__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement7 = {
    data: pieChartData.data,
    labels: pieChartData.labels,
    colors: pieChartData.colors,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, _React$createElement7["__self"] = _this, _React$createElement7["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 80,
    columnNumber: 13
  }, _React$createElement7)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement30 = {
    className: "totals six columns mt-50-sm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, _React$createElement30["__self"] = _this, _React$createElement30["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 84,
    columnNumber: 9
  }, _React$createElement30), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", (_React$createElement29 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, _React$createElement29["__self"] = _this, _React$createElement29["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 85,
    columnNumber: 11
  }, _React$createElement29), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", (_React$createElement18 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, _React$createElement18["__self"] = _this, _React$createElement18["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 86,
    columnNumber: 13
  }, _React$createElement18), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement17 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, _React$createElement17["__self"] = _this, _React$createElement17["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 87,
    columnNumber: 15
  }, _React$createElement17), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement10 = {
    className: "grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, _React$createElement10["__self"] = _this, _React$createElement10["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 88,
    columnNumber: 17
  }, _React$createElement10), "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement13 = {
    className: "grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }, _React$createElement13["__self"] = _this, _React$createElement13["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 89,
    columnNumber: 17
  }, _React$createElement13), "Total", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement11 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 19
    }
  }, _React$createElement11["__self"] = _this, _React$createElement11["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 91,
    columnNumber: 19
  }, _React$createElement11)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement12 = {
    className: "text-small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, _React$createElement12["__self"] = _this, _React$createElement12["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 92,
    columnNumber: 19
  }, _React$createElement12), "(All of ", year, ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement16 = {
    className: "grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, _React$createElement16["__self"] = _this, _React$createElement16["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 96,
    columnNumber: 17
  }, _React$createElement16), "Average", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", (_React$createElement14 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, _React$createElement14["__self"] = _this, _React$createElement14["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 98,
    columnNumber: 19
  }, _React$createElement14)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement15 = {
    className: "text-small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, _React$createElement15["__self"] = _this, _React$createElement15["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 99,
    columnNumber: 19
  }, _React$createElement15), "(", moment__WEBPACK_IMPORTED_MODULE_1___default()(averageRange[0]).format('M/D'), " - ", moment__WEBPACK_IMPORTED_MODULE_1___default()(averageRange[1]).format('M/D'), ")")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", (_React$createElement28 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }, _React$createElement28["__self"] = _this, _React$createElement28["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 105,
    columnNumber: 13
  }, _React$createElement28), categoryTotals.map(function (t) {
    var _React$createElement19, _React$createElement20, _React$createElement21, _categoryAverages$fin, _React$createElement22, _React$createElement23;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement23 = {
      key: t.category,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }
    }, _React$createElement23["__self"] = _this, _React$createElement23["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 107,
      columnNumber: 17
    }, _React$createElement23), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement20 = {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, _React$createElement20["__self"] = _this, _React$createElement20["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 108,
      columnNumber: 19
    }, _React$createElement20), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", (_React$createElement19 = {
      className: "color-tile",
      style: {
        backgroundColor: t.color
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 21
      }
    }, _React$createElement19["__self"] = _this, _React$createElement19["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 109,
      columnNumber: 21
    }, _React$createElement19)), t.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement21 = {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }, _React$createElement21["__self"] = _this, _React$createElement21["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 112,
      columnNumber: 19
    }, _React$createElement21), _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Numerics.centsToDollars(t.amount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement22 = {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }, _React$createElement22["__self"] = _this, _React$createElement22["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 113,
      columnNumber: 19
    }, _React$createElement22), _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Numerics.centsToDollars(((_categoryAverages$fin = categoryAverages.find(function (a) {
      return t.category === a.category;
    })) == null ? void 0 : _categoryAverages$fin.amount) || 0)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", (_React$createElement27 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, _React$createElement27["__self"] = _this, _React$createElement27["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 117,
    columnNumber: 15
  }, _React$createElement27), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement24 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, _React$createElement24["__self"] = _this, _React$createElement24["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 118,
    columnNumber: 17
  }, _React$createElement24), "All"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement25 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, _React$createElement25["__self"] = _this, _React$createElement25["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 119,
    columnNumber: 17
  }, _React$createElement25), _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Numerics.centsToDollars(yearTotal)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", (_React$createElement26 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  }, _React$createElement26["__self"] = _this, _React$createElement26["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 120,
    columnNumber: 17
  }, _React$createElement26), _helpers_main__WEBPACK_IMPORTED_MODULE_6__.Numerics.centsToDollars(((_categoryAverages$fin2 = categoryAverages.find(function (a) {
    return a.category === 'All';
  })) == null ? void 0 : _categoryAverages$fin2.amount) || 0))))))));
};

Year.propTypes = {
  availableYears: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (Year);

/***/ }),

/***/ "./app/javascript/components/shared/BarChart.jsx":
/*!*******************************************************!*\
  !*** ./app/javascript/components/shared/BarChart.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/ontrack/app/javascript/components/shared/BarChart.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/shared/BarChart.jsx",
    _this = undefined;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var toggleCategory = function toggleCategory(_, legendItem) {
  var index = legendItem.datasetIndex;
  var ci = this.chart;
  var alreadyHidden = ci.getDatasetMeta(index).hidden === null ? false : ci.getDatasetMeta(index).hidden;
  ci.data.datasets.forEach(function (e, i) {
    var meta = ci.getDatasetMeta(i);

    if (i !== index) {
      if (!alreadyHidden) {
        meta.hidden = meta.hidden === null ? !meta.hidden : null;
      } else if (meta.hidden === null) {
        meta.hidden = true;
      }
    }

    if (i === index) {
      meta.hidden = null;
    }
  });
  ci.update();
};

var BarChart = function BarChart(_ref) {
  var _React$createElement;

  var data = _ref.data,
      labels = _ref.labels,
      hideLegend = _ref.hideLegend,
      stacked = _ref.stacked;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Math.random().toString()),
      _useState2 = _slicedToArray(_useState, 1),
      randomId = _useState2[0];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      instance = _useState4[0],
      setInstance = _useState4[1];

  (chart_js__WEBPACK_IMPORTED_MODULE_3___default().defaults.global.animation.duration) = 100;
  (chart_js__WEBPACK_IMPORTED_MODULE_3___default().defaults.scale.ticks.padding) = 10;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    instance == null ? void 0 : instance.destroy();
    var config = {
      type: 'bar',
      data: {
        datasets: data,
        labels: labels
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: !hideLegend,
          onClick: toggleCategory,
          position: 'bottom'
        },
        tooltips: {
          callbacks: {
            label: function label(t) {
              return data[t.datasetIndex].label + ": $" + _helpers_main__WEBPACK_IMPORTED_MODULE_2__.Numerics.commify(parseFloat(t.yLabel).toFixed(2));
            }
          }
        },
        scales: {
          yAxes: [{
            stacked: stacked,
            ticks: {
              callback: function callback(label) {
                return "$" + _helpers_main__WEBPACK_IMPORTED_MODULE_2__.Numerics.commify(label);
              }
            }
          }],
          xAxes: [{
            stacked: stacked
          }]
        }
      }
    };
    var newInstance = new (chart_js__WEBPACK_IMPORTED_MODULE_3___default())(document.getElementById(randomId), config);
    setInstance(newInstance);
  }, [data, labels]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", (_React$createElement = {
    id: randomId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 10
    }
  }, _React$createElement["__self"] = _this, _React$createElement["__source"] = {
    fileName: _jsxFileName2,
    lineNumber: 76,
    columnNumber: 10
  }, _React$createElement));
};

BarChart.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  labels: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  hideLegend: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  stacked: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
BarChart.defaultProps = {
  hideLegend: false,
  stacked: false
};
/* harmony default export */ __webpack_exports__["default"] = (BarChart);

/***/ }),

/***/ "./app/javascript/helpers/alerts.js":
/*!******************************************!*\
  !*** ./app/javascript/helpers/alerts.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

var Alerts = {
  genericError: function genericError() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Uh oh!',
      text: 'Something went wrong. Refreshing the page and trying again might help.',
      type: 'error',
      confirmButtonText: 'Refresh'
    }).then(function (result) {
      if (!result.value) {
        return;
      }

      window.location.reload();
    });
  },
  error: function error(errorText, onClose) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Uh oh!',
      text: errorText,
      type: 'error',
      confirmButtonText: 'Ok'
    }).then(function () {
      if (onClose) {
        onClose();
      }
    });
  },
  success: function success(successText, onClose) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Woohoo!',
      text: successText,
      type: 'success',
      confirmButtonText: 'Ok'
    }).then(function () {
      if (onClose) {
        onClose();
      }
    });
  },
  genericDelete: function genericDelete(label) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Confirm delete',
      text: "Are you sure you want to delete this " + label + "?",
      type: 'warning',
      confirmButtonText: 'Yes, delete it!',
      showCancelButton: true,
      focusCancel: true,
      confirmButtonColor: '#bd4d4d'
    });
  },
  genericConflict: function genericConflict(description) {
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Hold on',
      text: description,
      type: 'warning'
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Alerts);

/***/ }),

/***/ "./app/javascript/helpers/arrays.js":
/*!******************************************!*\
  !*** ./app/javascript/helpers/arrays.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Arr = {
  chunk: function chunk(arr, len) {
    var chunks = [];
    var n = arr.length;
    var i = 0;

    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }

    return chunks;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Arr);

/***/ }),

/***/ "./app/javascript/helpers/main.js":
/*!****************************************!*\
  !*** ./app/javascript/helpers/main.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Numerics": function() { return /* reexport safe */ _numerics__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "Arr": function() { return /* reexport safe */ _arrays__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "Alerts": function() { return /* reexport safe */ _alerts__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "Util": function() { return /* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_3__.default; }
/* harmony export */ });
/* harmony import */ var _numerics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numerics */ "./app/javascript/helpers/numerics.js");
/* harmony import */ var _arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrays */ "./app/javascript/helpers/arrays.js");
/* harmony import */ var _alerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alerts */ "./app/javascript/helpers/alerts.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./app/javascript/helpers/util.js");






/***/ }),

/***/ "./app/javascript/helpers/numerics.js":
/*!********************************************!*\
  !*** ./app/javascript/helpers/numerics.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var Numerics = {
  centsToDollars: function centsToDollars(value) {
    if (value == null || value == undefined) {
      return '';
    }

    try {
      return '$' + (value / 100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(value, error);
      return value.toString();
    }
  },
  centsToFloat: function centsToFloat(value) {
    if (value == null || value == undefined) {
      return 0;
    }

    try {
      return (value / 100).toFixed(2);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(value, error);
      return value;
    }
  },
  floatToPercent: function floatToPercent(value) {
    if (value == null || value == undefined) {
      return 0;
    }

    try {
      return (value * 100).toFixed(2);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(value, error);
      return value;
    }
  },
  commify: function commify(value) {
    if (value == null || value == undefined) {
      return '';
    } // This accounts for more than 3 digits after a decimal. We don't want commas there.


    var parts = value.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  },
  timestamp: function timestamp(value) {
    if (value == null || value == undefined) {
      return '';
    }

    try {
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(value).format('MM/DD/YYYY');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(value, error);
      return value.toString();
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Numerics);

/***/ }),

/***/ "./app/javascript/helpers/util.js":
/*!****************************************!*\
  !*** ./app/javascript/helpers/util.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Util = {
  debounce: function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this;
      var args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./app/javascript/packs/insights.jsx":
/*!*******************************************!*\
  !*** ./app/javascript/packs/insights.jsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_insights_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/insights/Main */ "./app/javascript/components/insights/Main.jsx");
var _jsxFileName = "/ontrack/app/javascript/packs/insights.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/packs/insights.jsx",
    _this = undefined;




document.addEventListener('DOMContentLoaded', function () {
  var _Object$assign;

  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_insights_Main__WEBPACK_IMPORTED_MODULE_2__.default, Object.assign({}, window.InitialProps, (_Object$assign = {
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
  }, _Object$assign))), document.getElementById('insights'));
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_prop-types_index_js-node_modules_react-dom_index_js","vendors-node_modules_moment_locale_af_js-node_modules_moment_locale_ar-dz_js-node_modules_mom-488603","vendors-node_modules_chart_js_dist_Chart_js"], function() { return __webpack_exec__("./app/javascript/packs/insights.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=insights-692ba251c6c681be6479.js.map