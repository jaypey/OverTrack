import React from 'react';
import moment from 'moment';
import Overview from './Overview';
import CategoriesList from './CategoriesList';
import ExpenseFormModal from '../expenses/FormModal';
import PieChart from '../shared/PieChart';
import { Categories, Revenues, Expenses, Goals, Reports } from '../../api/main';
import { Alerts } from '../../helpers/main';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expensecategories: [],
      revenuecategories: [],
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
    this.loadExpensesData();
    this.loadRevenueData();
    this.loadPieChartData(moment().format('MMMM YYYY'));
  }

  loadCategories = () => {
    Categories.listExpenses().then(
      (cResp) => { this.setState({ expensecategories: cResp }); },
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

  categoriesWithExpensesAndSpend() {
    const categories = [];
    this.state.expensecategories.forEach((category) => {
      category.expenses = this.state.expenses.filter((expense) => expense.category_id == category.id);
      category.spend = category.expenses.reduce((sum, exp) => sum + exp.amount, 0);
      categories.push(category);
    });
    return categories;
  }

  renderExpenseCreateModal() {
    if (!this.state.showExpenseCreateModal) { return ''; }
    return <ExpenseFormModal categories={this.state.expensecategories} onClose={this.closeExpenseCreate} onSave={this.onExpenseSave} />;
  }

  renderRevenueCreateModal() {
    if (!this.state.showRevenueCreateModal) { return ''; }
    return <RevenueFormModal categories={this.state.expensecategories} onClose={this.closeExpenseCreate} onSave={this.onExpenseSave} />;
  }

  loadRevenueData = () => {
    Revenues.list({ paid_after: moment().startOf('month').unix() }).then(
      (rResp) => {
        this.setState({ revenues: rResp});
      },
      () => { Alerts.error("Revenues didn't load correctly!") }
    );
  }

  loadSum = () => {
    var indexRev = 0;

    this.state.expensecategories.forEach((category) => {
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

  render() {
    if (!this.state.loaded) { return ''; }

    return (
      <div>
        {this.renderExpenseCreateModal()}
        <div className="container">
          <Overview categoriesWithExpensesAndSpend={this.categoriesWithExpensesAndSpend()} monthlyGoal={this.state.monthlyGoal} onChange={this.reloadData} />
        </div>

        <div className="container mt-100">
          <div className="chart-container-short">
            <PieChart labels={this.state.labels} data={this.state.data} colors={this.state.colors} />
          </div>
        </div>

        <div className="bg-art">
          <div className="container">
            <button className="btn btn-round btn-dark pos-abs mt-neg-20 z-5" onClick={this.openExpenseCreate}>+ add an expense</button>
          </div>
          <div className="container pv-100">
            <CategoriesList categoriesWithExpensesAndSpend={this.categoriesWithExpensesAndSpend()} onChange={this.reloadData} />
          </div>
        </div>

        <div className="bg-art-2 top-border">
          <div className="container">
            <button className="btn btn-round btn-dark pos-abs mt-neg-20 z-5" onClick={this.openRevenueCreate}>+ add a revenue</button> {}
          </div>
          <div className="container pv-100">
            {/* <CategoriesList categoriesWithExpensesAndSpend={this.categoriesWithExpensesAndSpend()} onChange={this.reloadData} /> */}
          </div>
        </div>

      </div>
    );
  }
}

export default Main;
