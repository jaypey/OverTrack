import React, { useState } from 'react';
import moment from 'moment';
import Overview from './Overview';
import CategoriesList from './CategoriesList';
import ExpenseFormModal from '../expenses/FormModal';
import PieChart from '../shared/PieChart';
import { Categories, Revenues, Expenses, Goals, Reports, Budgets } from '../../api/main';
import { Alerts } from '../../helpers/main';
import BudgetSelector from '../shared/BudgetSelector'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reloadMain: false,
      categories: [],
      expenseCategories: [],
      revenueCategories: [],
      expenses: [],
      revenues: [],
      sumExpenses: 0,
      sumRevenues: 0,
      totalRevenuesLeft: 0,
      loadedexpenses: false,
      loadedrevenues: false,
      canCreate : false,
      monthlyGoal: 0,
      monthlyGoalRevenues: 0,
      showExpenseCreateModal: false,
      showRevenueCreateModal: false,
      data: [],
      labels: [],
      colors: [],
    };
  }

  componentDidMount() {
    this.reloadData();
  }

  openExpenseCreate = () => { if (this.state.canCreate) { this.setState({ showExpenseCreateModal: true }); } }
  closeExpenseCreate = () => { this.setState({ showExpenseCreateModal: false }); }
  openRevenueCreate = () => { if (this.state.canCreate) { this.setState({ showRevenueCreateModal: true }); } }
  closeRevenueCreate = () => { this.setState({ showRevenueCreateModal: false }); }
  onExpenseSave = () => {
    this.closeExpenseCreate();
    this.closeRevenueCreate();
    this.reloadData();
  }

  reloadData = () => {
    this.loadBudgetRole();
    this.loadCategories();
  }

  reloadMain = () => {
    this.state.reloadMain == true ? 
    this.setState({ reloadMain: false }, () => {
      setTimeout(function() {
        this.reloadData();
      }.bind(this), 200)
    }) :
    this.setState({ reloadMain: true }, () => {
      setTimeout(function() {
        this.reloadData();
      }.bind(this), 200)
    });
  }

  loadCategories = async () => {
    Categories.list().then(
      (cResp) => { 
        this.setState({ 
          categories: cResp 
        }, 
        () => {  
          this.loadExpensesCategories();
        });
      },
      () => { Alerts.error("Categories didn't load correctly"); }
    );
  }

  loadExpensesCategories = async () => {
    Categories.listExpenses().then(
      (cResp) => { 
        this.setState(
          { expenseCategories: cResp },
          () => {
            this.loadRevenuesCategories();
          });
        
      },
      () => { Alerts.error("Categories didn't load correctly"); }
    );
  }

  loadRevenuesCategories = async () => {
    Categories.listRevenues().then(
      (cResp) => { 
        this.setState(
          {revenueCategories: cResp},
          () => {
            this.loadExpensesData();
          });
      },
      () => { Alerts.error("Categories didn't load correctly"); }
    );
  }

  loadExpensesData = async () => {
    Expenses.list({ paid_after: moment().startOf('month').unix() }).then(
      (eResp) => {
        this.setState({ expenses: eResp });
        Goals.list().then(
          (gResp) => { 
            this.setState({ monthlyGoal: gResp.monthly }); 
          },
          () => { Alerts.error("Goal of expenses didn't load!"); },
        ).then(
          () => {
            this.loadRevenueData();
          }
        );
      },
      () => { Alerts.error("Expenses didn't load correctly!"); },
    );
  }

  loadRevenueData = async () => {
    Revenues.list({ paid_after: moment().startOf('month').unix() }).then(
      (rResp) => {
        this.setState({ revenues: rResp});
        Goals.list().then(
          (gResp) => {
            this.setState({ loaded: true, monthlyGoalRevenues: gResp.montly });
          },
          () => { Alerts.error("Goal of revenues didn't load!"); }
        ).then(
          () => {
            this.loadPieChartData(moment().format('MMMM YYYY'))
          }
        );
      },
      () => { Alerts.error("Revenues didn't load correctly!") }
    );
  }

  loadBudgetRole = async () => {
    Budgets.getSelectedBudgetRole()
    .then((cResp) => { 
        if (cResp.role_value <= 2 ) {
          this.setState({ canCreate: true });
        }
        else {
          this.setState({ canCreate: false });
        }
      }
    );
  }

  categoriesWithExpensesAndSpend() {
    const categories = [];
    this.state.categories.forEach((category) => {
      category.expenses = this.state.expenses.filter((expense) => expense.category_id == category.id);
      category.spend = category.expenses.reduce((sum, exp) => sum + exp.amount, 0);
      categories.push(category);
    });
    return categories;
  }

  EcategoriesWithExpensesAndSpend() {
    const categories = [];
    this.state.expenseCategories.forEach((category) => {
      category.expenses = this.state.expenses.filter((expense) => expense.category_id == category.id);
      category.spend = category.expenses.reduce((sum, exp) => sum + exp.amount, 0);
      categories.push(category);
    });
    return categories;
  }

  RcategoriesWithExpensesAndSpend() {
    const categories = [];
    this.state.revenueCategories.forEach((category) => {
      category.revenues = this.state.revenues.filter((expense) => expense.category_id == category.id);
      category.spend = category.revenues.reduce((sum, exp) => sum + exp.amount, 0);
      categories.push(category);
    });
    return categories;
  }

  renderExpenseCreateModal() {
    if (!this.state.showExpenseCreateModal) { return ''; }
    return <ExpenseFormModal categories={this.state.expenseCategories} title="Add an expense" onClose={this.closeExpenseCreate} onSave={this.onExpenseSave} />;
  }

  renderRevenueCreateModal() {
    if (!this.state.showRevenueCreateModal) { return ''; }
    return <ExpenseFormModal AddRevenue={1} categories={this.state.revenueCategories} title="Add a revenue" onClose={this.closeRevenueCreate} onSave={this.onExpenseSave} />;
  }

  getTotalRevenue = () => {
    var totalRevenue = 0;

    this.state.categories.forEach((category) => {
      if (category.is_revenue == 1) {
        category.revenues = this.state.revenues.filter((revenue) => revenue.category_id == category.id);
        category.revenues.forEach((revenue) => {
          totalRevenue += revenue.amount;
        });
      }
    });

    return (totalRevenue/100);
  }

  getTotalExpense = () => {
    var totalExpense = 0;

    this.state.categories.forEach((category) => {
      if (category.is_revenue == 0) {
        category.expenses = this.state.expenses.filter((expense) => expense.category_id == category.id);
        category.expenses.forEach((expense) => {
          totalExpense += expense.amount;
        });
      }
    });

    return (totalExpense/100);
  }

  loadSum = () => {
    var totalExpense = this.getTotalExpense();
    var totalRevenue = this.getTotalRevenue();

    if (totalRevenue > totalExpense) {
      return totalRevenue;
    }
    else if (totalExpense > totalRevenue) {
      return totalExpense;
    }
    else {
      return totalRevenue;
    }
  }

  calculateNumber = (spend, revenues) => {
    var item = Number.parseFloat((spend/revenues)*100).toFixed(3);
    if (item === NaN) {
      item = 0;
    }
    else if (item < 0.000) {
      item = 0;
    }
    else if (item > 100.000) {
      item = 100;
    }
    return item;
  }

  loadPieChartData = (month) => {
    Reports.month({ month }).then(
      (resp) => {

        const revenue = this.loadSum();
        
        const colors = resp.category_pourcentage.map((r) => r.color)
        const labels = resp.category_pourcentage.map((r) => r.category)
        const data = resp.category_pourcentage.map((r) => r.spend)


        if (data.length === 0) {
          colors = ['gray']
          labels = ['Empty']
          data = [100.000]
        }

        this.setState({ data: data });
        this.setState({ labels: labels });
        this.setState({ colors: colors });
        
        this.loadSumRevenuesLeft();
        return true;
      },
      () => { Alerts.error("The data for the pie chart didn't load correctly!") }
    );
  }

  loadSumRevenuesLeft = () => {
    var totalExpense = this.getTotalExpense();
    var totalRevenue = this.getTotalRevenue();

    this.setState({ totalRevenuesLeft: totalRevenue - totalExpense });
  }

  renderMain = (keyMain) => {
    let addR = this.state.canCreate ? <div className="container"><button className="btn btn-round btn-dark pos-abs mt-neg-20 z-5" onClick={this.openRevenueCreate}>+ add a revenue</button></div> : '';
    let addE = this.state.canCreate ? <div className="container"><button className="btn btn-round btn-dark pos-abs mt-neg-20 z-5" onClick={this.openExpenseCreate}>+ add an expense</button></div> : '';
    return (
      <div key={keyMain}>
        { this.renderExpenseCreateModal() }
        {this.renderRevenueCreateModal()}
        <div className="container">
          <Overview key={keyMain} categoriesWithExpensesAndSpend={this.categoriesWithExpensesAndSpend()} totalExpense={this.getTotalExpense()} totalRevenue={this.state.totalRevenuesLeft} totaltotalRevenue={this.getTotalRevenue()} monthlyGoal={this.getTotalRevenue()} onChange={this.reloadData} />
        </div>

        <div className="container mt-100">
          <div className="chart-container-short">
            <PieChart key={keyMain} labels={this.state.labels} data={this.state.data} colors={this.state.colors} />
          </div>
        </div>

        <div className="bg-art-2">
          {addE}
          <div className="container pv-100">
            <CategoriesList key={keyMain} canCreate={this.state.canCreate} categoriesWithExpensesAndSpend={this.EcategoriesWithExpensesAndSpend()} onChange={this.reloadData} />
          </div>
        </div>

        <div className="bg-art top-border">
          {addR}
          <div className="container pv-100">
            <CategoriesList key={keyMain} canCreate={this.state.canCreate} is_revenue={1} categoriesWithExpensesAndSpend={this.RcategoriesWithExpensesAndSpend()} onChange={this.reloadData} />
          </div>
        </div>

      </div>
    );
  }

  render() {
    if (!this.state.loaded) { return ''; }

    return (
      <div>
        <div className='container'>
          <BudgetSelector
          onChange={this.reloadMain}
          />
         </div>
        {this.renderMain(this.state.reloadMain)}

      </div>
    );
  }
}

export default Main;