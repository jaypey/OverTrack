import React from 'react';
import moment from 'moment';
import Overview from './Overview';
import CategoriesList from './CategoriesList';
import ExpenseFormModal from '../expenses/FormModal';
import PieChart from '../shared/PieChart';
import { Categories, Revenues, Expenses, Goals, Reports } from '../../api/main';
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
      loadedexpenses: false,
      loadedrevenues: false,
      monthlyGoal: 0,
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

  openExpenseCreate = () => { this.setState({ showExpenseCreateModal: true }); }
  closeExpenseCreate = () => { this.setState({ showExpenseCreateModal: false }); }
  openRevenueCreate = () => { this.setState({ showRevenueCreateModal: true }); }
  closeRevenueCreate = () => { this.setState({ showRevenueCreateModal: false }); }
  onExpenseSave = () => {
    this.closeExpenseCreate();
    this.closeRevenueCreate();
    this.reloadData();
  }

  reloadData = () => {
    this.loadCategories();
    this.loadExpensesCategories();
    this.loadRevenuesCategories();
    this.loadExpensesData();
    this.loadRevenueData();
    this.loadPieChartData(moment().format('MMMM YYYY'));
  }

  reloadMain = () => {
    this.state.reloadMain == true ? this.setState({ reloadMain: false }) : this.setState({ reloadMain: true })
    this.reloadData();
  }

  loadCategories = () => {
    Categories.list().then(
      (cResp) => { this.setState({ categories: cResp }); },
      () => { Alerts.error("Categories didn't load correctly"); }
    );
  }

  loadExpensesCategories = () => {
    Categories.listExpenses().then(
      (cResp) => { this.setState({ expenseCategories: cResp }); },
      () => { Alerts.error("Categories didn't load correctly"); }
    );
  }

  loadRevenuesCategories = () => {
    Categories.listRevenues().then(
      (cResp) => { this.setState({ revenueCategories: cResp }); },
      () => { Alerts.error("Categories didn't load correctly"); }
    );
  }

  loadExpensesData = () => {
    Expenses.list({ paid_after: moment().startOf('month').unix() }).then(
      (eResp) => {
        this.setState({ expenses: eResp });
        Goals.list().then(
          (gResp) => { this.setState({ loaded: true, monthlyGoal: gResp.monthly }); },
          () => { Alerts.error("Goal of expenses didn't load!"); },
        );
      },
      () => { Alerts.error("Expenses didn't load correctly!"); },
    );
  }

  loadRevenueData = () => {
    Revenues.list({ paid_after: moment().startOf('month').unix() }).then(
      (rResp) => {
        this.setState({ revenues: rResp});
      },
      () => { Alerts.error("Revenues didn't load correctly!") }
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

  loadSum = () => {
    var indexRev = 0;

    this.state.categories.forEach((category) => {
      if (category.is_revenue == 1) {
        category.revenues = this.state.revenues.filter((revenue) => revenue.category_id == category.id);
        category.revenues.forEach((revenue) => {
          indexRev += revenue.amount;
        });
      }
    });

    return (indexRev/100);
  }

  loadPieChartData = (month) => {
    Reports.month({ month }).then(
      (resp) => {

        const revenue = this.loadSum();
        
        const data = resp.category_pourcentage.map((r) => 
          Number.parseFloat((r.spend/revenue)*100).toFixed(3)
        )
        const labels = resp.category_pourcentage.map((r) => r.category)
        const colors = resp.category_pourcentage.map((r) => r.color)

        this.setState({ data: data });
        this.setState({ labels: labels });
        this.setState({ colors: colors });

        return true;
      },
      () => { Alerts.error("The data for the pie chart didn't load correctly!") }
    );
  }

  renderMain = (keyMain) => {
    return (
      <div key={keyMain}>
        {this.renderExpenseCreateModal()}
        {this.renderRevenueCreateModal()}
        <div className="container">
          <Overview key={keyMain} categoriesWithExpensesAndSpend={this.categoriesWithExpensesAndSpend()} monthlyGoal={this.state.monthlyGoal} onChange={this.reloadData} />
        </div>

        <div className="container mt-100">
          <div className="chart-container-short">
            <PieChart key={keyMain} labels={this.state.labels} data={this.state.data} colors={this.state.colors} />
          </div>
        </div>

        <div className="bg-art-2">
          <div className="container">
            <button className="btn btn-round btn-dark pos-abs mt-neg-20 z-5" onClick={this.openExpenseCreate}>+ add an expense</button>
          </div>
          <div className="container pv-100">
            <CategoriesList key={keyMain} categoriesWithExpensesAndSpend={this.EcategoriesWithExpensesAndSpend()} onChange={this.reloadData} />
          </div>
        </div>

        <div className="bg-art top-border">
          <div className="container">
            <button className="btn btn-round btn-dark pos-abs mt-neg-20 z-5" onClick={this.openRevenueCreate}>+ add a revenue</button> {}
          </div>
          <div className="container pv-100">
            <CategoriesList key={keyMain} is_revenue={1} categoriesWithExpensesAndSpend={this.RcategoriesWithExpensesAndSpend()} onChange={this.reloadData} />
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
          <h3>Current Budget</h3>
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
