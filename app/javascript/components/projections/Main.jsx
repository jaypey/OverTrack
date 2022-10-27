import React from 'react';
import moment from 'moment';
import ExpenseFormModal from '../expenses/FormModal';
import { Categories, Revenues, Expenses, Goals, Reports } from '../../api/main';
import { Alerts } from '../../helpers/main';
import ProjectionsChart from './ProjectionsChart';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      project: 3,
    };
  }

  componentDidMount() {
    this.reloadData();
  }

  openExpenseCreate = () => { this.setState({ showExpenseCreateModal: true }); }
  closeExpenseCreate = () => { this.setState({ showExpenseCreateModal: false }); }
  onExpenseSave = () => {
    this.closeExpenseCreate();
    this.reloadData();
  }

  reloadData = () => {
    this.loadCategory();
    this.loadExpensesData();
    this.loadRevenueData();
    this.loadPieChartData(moment().format('MMMM YYYY'));
  }

  loadCategory = () => {
    Categories.list().then(
      (cResp) => { this.setState({ categories: cResp }); },
      () => { Alerts.error("Categories didn't load correctly"); }
    );
  }

  loadExpensesData = () => {
    Expenses.list().then(
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
    this.state.categories.forEach((category) => {
      category.expenses = this.state.expenses.filter((expense) => expense.category_id == category.id);
      category.spend = category.expenses.reduce((sum, exp) => sum + exp.amount, 0);
      categories.push(category);
    });
    return categories;
  }

  renderExpenseCreateModal() {
    if (!this.state.showExpenseCreateModal) { return ''; }
    return <ExpenseFormModal categories={this.state.categories} onClose={this.closeExpenseCreate} onSave={this.onExpenseSave} />;
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

  render() {
    var currentTime = new Date();
    var thisYear = currentTime.getFullYear().toString();
    var lastYear = (currentTime.getFullYear() - 1).toString();
    var nextYear = (currentTime.getFullYear() + 1).toString();

    const monthNames = ["January " + thisYear, "February " + thisYear,"March " + thisYear, "April " + thisYear,
    "May " + thisYear, "June " + thisYear, "July " + thisYear, "August " + thisYear,
    "September " + thisYear, "October " + thisYear, "November "  + thisYear, "December " + thisYear,
    "January "  + nextYear, "February "  + nextYear, "March "  + nextYear, "April "  + nextYear,
    "May "  + nextYear, "June "  + nextYear, "July "  + nextYear, "August "  + nextYear,
     "September "  + nextYear, "October "  + nextYear, "November "  + nextYear, "December "  + nextYear
      ];
      monthNames[-1] = "December "  + lastYear
      monthNames[-2] = "November " + lastYear
      monthNames[-3] = "October " + lastYear
      monthNames[-4] = "September " + lastYear
      monthNames[-5] = "August " + lastYear
      monthNames[-6] = "July " + lastYear
      monthNames[-7] = "June " + lastYear
      monthNames[-8] = "May " + lastYear
      monthNames[-9] = "April " + lastYear
      monthNames[-10] = "March " + lastYear
      monthNames[-11] = "February " + lastYear
      monthNames[-12] = "January " + lastYear
    if (!this.state.loaded) { return ''; }
    return (
      <div className='container'>
        <h2>Personalise your projections</h2>
        <br></br>
        <br></br>
        <div className='month-container'>
          <div className='previous-months'>{monthNames[currentTime.getMonth() - this.state.count - 1]} - {monthNames[currentTime.getMonth() - 1]}</div>
          <div className='upcoming-months'>{monthNames[currentTime.getMonth()]} - {monthNames[currentTime.getMonth() + this.state.project]}</div>
        </div>
        <br></br>
        <button className='btn button-width-left more-button' onClick={() => this.setState({ count: Math.min(12, Math.max(this.state.count + 1, 3)) })}>
          + previous months
        </button>
        <button className='btn button-width-right more-button' onClick={() => this.setState({ project: Math.min(12, Math.max(this.state.project + 1, 3)) })}>
          + upcoming months
        </button>
        <br></br>
        <br></br>
        <button className='btn button-width-left less-button' onClick={() => this.setState({ count: Math.min(12, Math.max(this.state.count - 1, 3)) })}>
          - previous months
        </button>
        <button className='btn button-width-right less-button' onClick={() => this.setState({ project: Math.min(12, Math.max(this.state.project - 1, 3)) })}>
          - upcoming months
        </button>
        <br></br>
        <br></br>
        <br></br>
      {<ProjectionsChart studiedMonths={this.state.count} projectedMonths={this.state.project} categoriesWithExpensesAndSpend={this.categoriesWithExpensesAndSpend()} expenses={this.state.expenses} revenues={this.state.revenues} /> }
      </div>
    );
  }
}

export default Main;
