import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Paginator from '../shared/Paginator';
import DatePicker from '../shared/DatePicker';
import CurrencyInput from '../shared/CurrencyInput';
import { Alerts, Util } from '../../helpers/main';
import { Expenses, Revenues } from '../../api/main';

class Main extends React.Component {
  constructor(props) {
    super(props);

    const defaultTimeframe = 'last_90_days';
    const [minPaidAtExpense, maxPaidAtExpense] = this.minAndMaxForTimeframe(defaultTimeframe, 0);
    const [minPaidAtRevenue, maxPaidAtRevenue] = this.minAndMaxForTimeframe(defaultTimeframe, 1);

    this.state = {
      expenses: [],
      revenues: [],
      expenseCategories :[],
      revenueCategories :[],
      minPaidAtExpense,
      maxPaidAtExpense,
      minPaidAtRevenue,
      maxPaidAtRevenue,
      categoryIdExpenses: this.props.categoryId || '',
      categoryIdRevenues: this.props.categoryId || '',
      sortRevenues: 'paid_at',
      sortDescRevenues: true,
      sortExpenses: 'paid_at',
      sortDescExpenses: true,
      reloadTrigger: 0,
      reloadPageTrigger: 0,
      timeframeExpense: defaultTimeframe,
      timeframeRevenue: defaultTimeframe,
      searchExpenses: '',
      searchRevenues: '',
    };
  }

  static getDerivedStateFromProps(props, state) { 
    const revenues = props.categories.filter(cat => {
      return cat.is_revenue === 1;});
    const expenses = props.categories.filter(cat => {
        return cat.is_revenue === 0;});
    
    return {revenueCategories: revenues, expenseCategories: expenses};
  }

  onLoadExpenses = (payload) => { this.setState({ expenses: payload.items }); }
  onLoadRevenues = (payload) => { this.setState({ revenues: payload.items }); }

  handlePaidAtMinExpenseChange = (val) => { this.setState({ minPaidAtExpense: moment(val).unix() }); }
  handlePaidAtMaxExpenseChange = (val) => { this.setState({ maxPaidAtExpense: moment(val).unix() }); }

  handlePaidAtMinRevenueChange = (val) => { this.setState({ minPaidAtRevenue: moment(val).unix() }); }
  handlePaidAtMaxRevenueChange = (val) => { this.setState({ maxPaidAtRevenue: moment(val).unix() }); }
  
  handleCategoryFilterChangeExpenses = (e) => { this.setState({ categoryIdExpenses: e.target.value }); }
  handleCategoryFilterChangeRevenues = (e) => { this.setState({ categoryIdRevenues: e.target.value }); }

  toggleSortDirRevenues = () => { this.setState({ sortDescRevenues: !this.state.sortDescRevenues }); }
  toggleSortDirExpenses = () => { this.setState({ sortDescExpenses: !this.state.sortDescExpenses }); }
  
  changeSortRevenues = (s) => { this.setState({ sortRevenues: s, sortDescRevenues: true }); }
  changeSortExpenses = (s) => { this.setState({ sortExpenses: s, sortDescExpenses: true }); }

  updateExpense = (id, updates) => {
    Expenses.update(id, updates).then(
      () => { this.setState({ reloadPageTrigger: this.state.reloadPageTrigger + 1 }); },
      () => { Alerts.genericError(); },
    );
  }
  handleExpenseDelete = (id) => {
    Alerts.genericDelete('expense').then((result) => {
      if (!result.value) { return; }
      Expenses.delete(id).then(
        () => { this.setState({ reloadTrigger: this.state.reloadTrigger + 1 }); },
        () => { Alerts.genericError(); },
      );
    });
  }

  updateRevenue = (id, updates) => {
    Revenues.update(id, updates).then(
      () => { this.setState({ reloadPageTrigger: this.state.reloadPageTrigger + 1 }); },
      () => { Alerts.genericError(); },
    );
  }
  handleRevenueDelete = (id) => {
    Alerts.genericDelete('revenue').then((result) => {
      if (!result.value) { return; }
      Revenues.delete(id).then(
        () => { this.setState({ reloadTrigger: this.state.reloadTrigger + 1 }); },
        () => { Alerts.genericError(); },
      );
    });
  }

  handleTimeframeChangeExpense = (e) => {
    const timeframeExpense = e.target.value;
    const [minPaidAtExpense, maxPaidAtExpense] = this.minAndMaxForTimeframe(timeframeExpense, 0);

    this.setState({ timeframeExpense, minPaidAtExpense, maxPaidAtExpense });
  }
  handleTimeframeChangeRevenue = (e) => {
    const timeframeRevenue = e.target.value;
    const [minPaidAtRevenue, maxPaidAtRevenue] = this.minAndMaxForTimeframe(timeframeRevenue, 0);

    this.setState({ timeframeRevenue, minPaidAtRevenue, maxPaidAtRevenue });
  }

  handleSearchChangeExpenses = Util.debounce((search) => {
    this.setState({ searchExpenses: search });
  }, 500);

  handleSearchChangeRevenues = Util.debounce((search) => {
    this.setState({ searchRevenues: search });
  }, 500);

  minAndMaxForTimeframe = (timeframe, is_revenue) => {
    switch (timeframe) {
    case 'current_month':
      return [moment().startOf('month').unix(), moment().unix()];
    case 'last_90_days':
      return [moment().subtract(90, 'days').unix(), moment().unix()];
    case 'ytd':
      return [moment().startOf('year').unix(), moment().unix()];
    case 'custom':
      if (is_revenue == 0) {
        return [this.state.minPaidAtExpense, this.state.maxPaidAtExpense];
      } else {
        return [this.state.minPaidAtExpense, this.state.maxPaidAtRevenue];
      }
    }
  };

  urlExpenses() {
    return `/expenses?include_category=true&paid_before=${this.state.maxPaidAtExpense}&paid_after=${this.state.minPaidAtExpense}&category_id=${this.state.categoryIdExpenses}&sort=${this.state.sortExpenses}&sort_desc=${this.state.sortDescExpenses}&search=${this.state.searchExpenses}`;
  }

  urlRevenues() {
    return `/revenues?include_category=true&paid_before=${this.state.maxPaidAtRevenue}&paid_after=${this.state.minPaidAtRevenue}&category_id=${this.state.categoryIdRevenues}&sort=${this.state.sortRevenues}&sort_desc=${this.state.sortDescRevenues}&search=${this.state.searchRevenues}`; 
  }

  renderSortRevenues(key) {
    if (this.state.sortRevenues == key) {
      return <i onClick={this.toggleSortDirRevenues} className={`fas fa-sort-${this.state.sortDescRevenues ? 'down' : 'up'} ml-2 hover-pointer`} />;
    } else {
      return <i onClick={() => { this.changeSortRevenues(key); }} className="fas fa-sort ml-2 hover-pointer" />;
    }
  }

  renderSortExpenses(key) {
    if (this.state.sortExpenses == key) {
      return <i onClick={this.toggleSortDirExpenses} className={`fas fa-sort-${this.state.sortDescExpenses ? 'down' : 'up'} ml-2 hover-pointer`} />;
    } else {
      return <i onClick={() => { this.changeSortExpenses(key); }} className="fas fa-sort ml-2 hover-pointer" />;
    }
  }

  renderEmptyState() {
    if (this.props.hasData) { return ''; }
    return (
      <div className="empty-or-error-status">
        <div className="status-text">
          <h2>Our historian has nothing to do!</h2>
          <div>The expenses you enter will show up here.</div>
        </div>
        <img className="status-image" src={window.historian} />
      </div>
    );
  }

  renderExpensesTable() {
    if (!this.props.hasData) { return ''; }
    return (
      <div className="content-with-sidebar mt-30">
        <div className="sidebar input-group">
          <select onChange={this.handleCategoryFilterChangeExpenses} defaultValue={this.state.categoryIdExpenses}>
            <option value="">All categories</option>
            {this.state.expenseCategories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>

          <select className="mt-10" onChange={this.handleTimeframeChangeExpense} defaultValue={this.state.timeframeExpense}>
            <option value='current_month'>Current month</option>
            <option value='last_90_days'>Last 90 days</option>
            <option value='ytd'>Year to date</option>
            <option value='custom'>Custom timeframe</option>
          </select>

          {this.state.timeframeExpense === 'custom' && (
            <div className="mt-10">
              <DatePicker onChange={this.handlePaidAtMinExpenseChange} value={moment.unix(this.state.minPaidAtExpense).toDate()} />
              <div className="text-center">to</div>
              <DatePicker onChange={this.handlePaidAtMaxExpenseChange} value={moment.unix(this.state.maxPaidAtExpense).toDate()} />
            </div>
          )}

          <input className="mt-10" placeholder="Search for description" onChange={e => this.handleSearchChangeExpenses(e.target.value)} />
        </div>

        <div className="content">
          <div className="overflow-x bg-art-2 p-10">
            <table className="table">
            <caption>Expenses</caption>
              <thead>
                <tr>
                  <th>Date {this.renderSortExpenses('paid_at')}</th>
                  <th>Category</th>
                  <th>Amount {this.renderSortExpenses('amount')}</th>
                  <th>Description</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.expenses.map((exp) => this.renderExpense(exp))}
              </tbody>
            </table>
          </div>

          <div className="mt-20">
            <Paginator
              url={this.urlExpenses()}
              onLoad={this.onLoadExpenses}
              reloadTrigger={this.state.reloadTrigger}
              reloadPageTrigger={this.state.reloadPageTrigger}
            />
          </div>
        </div>
      </div>
    );
  }

  renderRevenuesTable() {
    if (!this.props.hasData) { return ''; }
    return (
      <div className="content-with-sidebar mt-30">
        <div className="sidebar input-group">
          <select onChange={this.handleCategoryFilterChangeRevenues} defaultValue={this.state.categoryIdRevenues}>
            <option value="">All categories</option>
            {this.state.revenueCategories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>

          <select className="mt-10" onChange={this.handleTimeframeChangeRevenue} defaultValue={this.state.timeframeRevenue}>
            <option value='current_month'>Current month</option>
            <option value='last_90_days'>Last 90 days</option>
            <option value='ytd'>Year to date</option>
            <option value='custom'>Custom timeframe</option>
          </select>

          {this.state.timeframeRevenue === 'custom' && (
            <div className="mt-10">
              <DatePicker onChange={this.handlePaidAtMinRevenueChange} value={moment.unix(this.state.minPaidAtExpense).toDate()} />
              <div className="text-center">to</div>
              <DatePicker onChange={this.handlePaidAtMaxRevenueChange} value={moment.unix(this.state.maxPaidAtExpense).toDate()} />
            </div>
          )}

          <input className="mt-10" placeholder="Search for description" onChange={e => this.handleSearchChangeRevenues(e.target.value)} />
        </div>

        <div className="content">
          <div className="overflow-x bg-art p-10">
            <table className="table">
            <caption>Revenues</caption>
              <thead>
                <tr>
                  <th>Date {this.renderSortRevenues('paid_at')}</th>
                  <th>Category</th>
                  <th>Amount {this.renderSortRevenues('amount')}</th>
                  <th>Description</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.revenues.map((exp) => this.renderRevenue(exp))}
              </tbody>
            </table>
          </div>

          <div className="mt-20">
            <Paginator
              url={this.urlRevenues()}
              onLoad={this.onLoadRevenues}
              reloadTrigger={this.state.reloadTrigger}
              reloadPageTrigger={this.state.reloadPageTrigger}
            />
          </div>
        </div>
      </div>
    );
  }

  renderExpense(expense) {
    return (
      <tr key={expense.id}>
        <td className="input-group mw-120">
          <DatePicker onChange={(val) => this.updateExpense(expense.id, { paid_at: val })} value={new Date(expense.paid_at)} className="bg-gray-slight-contrast" />
        </td>

        <td className="input-group mw-150">
          <select defaultValue={expense.category_id} onChange={(e) => this.updateExpense(expense.id, { category_id: e.target.value })} className="bg-gray-slight-contrast">
            {this.state.expenseCategories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </td>

        <td className="input-group mw-100">
          <CurrencyInput
            initialValue={expense.amount}
            onBlur={(val) => this.updateExpense(expense.id, { amount: val })}
            className="bg-gray-slight-contrast"
            allowNegative
          />
        </td>

        <td className="input-group">
          <input defaultValue={expense.description} onBlur={(e) => { if (e.target.value.trim() != expense.description) { this.updateExpense(expense.id, { description: e.target.value.trim() }); } } } className="bg-gray-slight-contrast" />
        </td>

        <td>
          <a onClick={() => this.handleExpenseDelete(expense.id)} className="dim-til-hover"><i className="fa fa-times" /></a>
        </td>
      </tr>
    );
  }

  renderRevenue(revenue) {
    return (
      <tr key={revenue.id}>
        <td className="input-group mw-120">
          <DatePicker onChange={(val) => this.updateRevenue(revenue.id, { paid_at: val })} value={new Date(revenue.paid_at)} className="bg-gray-slight-contrast" />
        </td>

        <td className="input-group mw-150">
          <select defaultValue={revenue.category_id} onChange={(e) => this.updateRevenue(revenue.id, { category_id: e.target.value })} className="bg-gray-slight-contrast">
            {this.state.revenueCategories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </td>

        <td className="input-group mw-100">
          <CurrencyInput
            initialValue={revenue.amount}
            onBlur={(val) => this.updateRevenue(revenue.id, { amount: val })}
            className="bg-gray-slight-contrast"
            allowNegative
          />
        </td>

        <td className="input-group">
          <input defaultValue={revenue.description} onBlur={(e) => { if (e.target.value.trim() != revenue.description) { this.updateRevenue(expense.id, { description: e.target.value.trim() }); } } } className="bg-gray-slight-contrast" />
        </td>

        <td>
          <a onClick={() => this.handleRevenueDelete(revenue.id)} className="dim-til-hover"><i className="fa fa-times" /></a>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div className="container wide">
        {this.renderEmptyState()}
        {this.renderExpensesTable()}
        {this.renderRevenuesTable()}
      </div>
    );
  }
}

Main.defaultProps = {
  hasData: false,
  categories: [],
  categoryId: null,
  paidAfter: null,
};

Main.propTypes = {
  hasData: PropTypes.bool,
  categories: PropTypes.array,
  categoryId: PropTypes.any,
  paidAfter: PropTypes.any,
};

export default Main;
