(self["webpackChunkontrack"] = self["webpackChunkontrack"] || []).push([["projections"],{

/***/ "./app/javascript/components/projections/CategoriesList.jsx":
/*!******************************************************************!*\
  !*** ./app/javascript/components/projections/CategoriesList.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
/* harmony import */ var _CategoryTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoryTile */ "./app/javascript/components/projections/CategoryTile.jsx");
/* harmony import */ var _categories_FormModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories/FormModal */ "./app/javascript/components/categories/FormModal.jsx");
var _jsxFileName = "/ontrack/app/javascript/components/projections/CategoriesList.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/projections/CategoriesList.jsx";

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

/***/ "./app/javascript/components/projections/CategoryTile.jsx":
/*!****************************************************************!*\
  !*** ./app/javascript/components/projections/CategoryTile.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
/* harmony import */ var _categories_FormModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories/FormModal */ "./app/javascript/components/categories/FormModal.jsx");
var _jsxFileName = "/ontrack/app/javascript/components/projections/CategoryTile.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/projections/CategoryTile.jsx";

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
/* harmony import */ var _Overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Overview */ "./app/javascript/components/projections/Overview.jsx");
/* harmony import */ var _CategoriesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CategoriesList */ "./app/javascript/components/projections/CategoriesList.jsx");
/* harmony import */ var _expenses_FormModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../expenses/FormModal */ "./app/javascript/components/expenses/FormModal.jsx");
/* harmony import */ var _shared_PieChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/PieChart */ "./app/javascript/components/shared/PieChart.jsx");
/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/main */ "./app/javascript/api/main.js");
/* harmony import */ var _helpers_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/main */ "./app/javascript/helpers/main.js");
/* harmony import */ var _ProjectionsChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProjectionsChart */ "./app/javascript/components/projections/ProjectionsChart.jsx");
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
      _api_main__WEBPACK_IMPORTED_MODULE_6__.Categories.list().then(function (cResp) {
        _this.setState({
          categories: cResp
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

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_expenses_FormModal__WEBPACK_IMPORTED_MODULE_4__.default, (_React$createElement = {
      categories: this.state.categories,
      onClose: this.closeExpenseCreate,
      onSave: this.onExpenseSave,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 12
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 80,
      columnNumber: 12
    }, _React$createElement));
  };

  _proto.render = function render() {
    var _React$createElement2, _React$createElement3;

    // if (!this.state.loaded) { return ''; }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement3 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 133,
      columnNumber: 7
    }, _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProjectionsChart__WEBPACK_IMPORTED_MODULE_8__.default, (_React$createElement2 = {
      str: "ca fonctionne",
      categoriesWithExpensesAndSpend: this.categoriesWithExpensesAndSpend(),
      testprop: this.state.categories,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 8
      }
    }, _React$createElement2["__self"] = this, _React$createElement2["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 138,
      columnNumber: 8
    }, _React$createElement2))) // <div>
    //   {this.renderExpenseCreateModal()}
    //   <div className="container">
    //     <Overview categoriesWithExpensesAndSpend={this.categoriesWithExpensesAndSpend()} monthlyGoal={this.state.monthlyGoal} onChange={this.reloadData} />
    //   </div>
    //   <div className="container mt-100">
    //     <div className="chart-container-short">
    //       <PieChart labels={this.state.labels} data={this.state.data} colors={this.state.colors} />
    //     </div>
    //   </div>
    //   <div className="bg-art mt-150">
    //     <div className="container">
    //       <button className="btn btn-round btn-dark pos-abs mt-neg-20 z-5" onClick={this.openExpenseCreate}>+ add an expense</button>
    //     </div>
    //     <div className="container pv-100 mh-350">
    //       <CategoriesList categoriesWithExpensesAndSpend={this.categoriesWithExpensesAndSpend()} onChange={this.reloadData} />
    //     </div>
    //   </div>
    // </div>
    ;
  };

  return Main;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./app/javascript/components/projections/Overview.jsx":
/*!************************************************************!*\
  !*** ./app/javascript/components/projections/Overview.jsx ***!
  \************************************************************/
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
var _jsxFileName = "/ontrack/app/javascript/components/projections/Overview.jsx",
    _jsxFileName2 = "/ontrack/app/javascript/components/projections/Overview.jsx";

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

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var ProjectionsChart = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ProjectionsChart, _React$Component);

  function ProjectionsChart(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      expensestest: [],
      expenseslastmonth: []
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

  _proto.getexpenseslastmonth = function getexpenseslastmonth() {
    {
      this.props.categoriesWithExpensesAndSpend.map(function (category) {
        return category.expenses.map(function (expense) {
          var currentMonth = new Date().getMonth() + 1;
          var paidMonth = new Date(expense.paid_at).getMonth();
          console.log(currentMonth);
          console.log(typeof expense.paid_at);

          if (expense.paid_at.getMonth() == 9) {
            console.log(expense.description); //expenseslastmonth.push(expense);
          }
        });
      });
    }
  };

  _proto.render = function render() {
    var _React$createElement,
        _this2 = this,
        _React$createElement3;

    this.getexpenseslastmonth();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", (_React$createElement3 = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }
    }, _React$createElement3["__self"] = this, _React$createElement3["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 63,
      columnNumber: 5
    }, _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", (_React$createElement = {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, _React$createElement["__self"] = this, _React$createElement["__source"] = {
      fileName: _jsxFileName2,
      lineNumber: 64,
      columnNumber: 9
    }, _React$createElement), "Hello test ", this.props.str), this.props.categoriesWithExpensesAndSpend.map(function (category) {
      var _React$createElement2;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", (_React$createElement2 = {
        key: category.id,
        __self: _this2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 26
        }
      }, _React$createElement2["__self"] = _this2, _React$createElement2["__source"] = {
        fileName: _jsxFileName2,
        lineNumber: 66,
        columnNumber: 26
      }, _React$createElement2), category.name);
    }));
  };

  return ProjectionsChart;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component); // ProjectionsChart.defaultProps = {
//   str: "test",
// };
// ProjectionsChart.propTypes = {
//   str: PropTypes.string,
// };


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
/******/ __webpack_require__.O(0, ["vendors-node_modules_prop-types_index_js-node_modules_react-dom_index_js","vendors-node_modules_axios_index_js-node_modules_moment_locale_af_js-node_modules_moment_loca-3bfda5","vendors-node_modules_react-datepicker_dist_react-datepicker_min_js-node_modules_react-text-ma-b62690","vendors-node_modules_chart_js_dist_Chart_js","app_javascript_api_main_js-app_javascript_helpers_main_js-node_modules_moment_locale_sync_rec-f85292","app_javascript_components_categories_FormModal_jsx-app_javascript_components_expenses_FormMod-57d084"], function() { return __webpack_exec__("./app/javascript/packs/projections.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=projections-746c350c68382105caa3.js.map