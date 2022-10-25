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
      minPaidAtExpense,
      maxPaidAtExpense,
      minPaidAtRevenue,
      maxPaidAtRevenue,
      categoryId: this.props.categoryId || '',
      sort: 'paid_at',
      sortDesc: true,
      reloadTrigger: 0,
      reloadPageTrigger: 0,
      timeframeExpense: defaultTimeframe,
      timeframeRevenue: defaultTimeframe,
      search: '',
    };
  }

  onLoadExpenses = (payload) => { this.setState({ expenses: payload.items }); }
  onLoadRevenues = (payload) => { this.setState({ revenues: payload.items }); }

  handlePaidAtMinExpenseChange = (val) => { this.setState({ minPaidAtExpense: moment(val).unix() }); }
  handlePaidAtMaxExpenseChange = (val) => { this.setState({ maxPaidAtExpense: moment(val).unix() }); }

  handlePaidAtMinRevenueChange = (val) => { this.setState({ minPaidAtRevenue: moment(val).unix() }); }
  handlePaidAtMaxRevenueChange = (val) => { this.setState({ maxPaidAtRevenue: moment(val).unix() }); }
  
  handleCategoryFilterChange = (e) => { this.setState({ categoryId: e.target.value }); }
  toggleSortDir = () => { this.setState({ sortDesc: !this.state.sortDesc }); }
  changeSort = (s) => { this.setState({ sort: s, sortDesc: true }); }
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

  handleSearchChange = Util.debounce((search) => {
    this.setState({ search });
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
    return `/expenses?include_category=true&paid_before=${this.state.maxPaidAtExpense}&paid_after=${this.state.minPaidAtExpense}&category_id=${this.state.categoryId}&sort=${this.state.sort}&sort_desc=${this.state.sortDesc}&search=${this.state.search}`;
  }

  // ToDo: Fix url : error raised in paginator loaddata
  // sort is raising error
  urlRevenues() {
    return `/revenues?include_category=true&paid_before=${this.state.maxPaidAtExpense}&paid_after=${this.state.minPaidAtExpense}&category_id=${this.state.categoryId}`;
  }

  renderSort(key) {
    if (this.state.sort == key) {
      return <i onClick={this.toggleSortDir} className={`fas fa-sort-${this.state.sortDesc ? 'down' : 'up'} ml-2 hover-pointer`} />;
    } else {
      return <i onClick={() => { this.changeSort(key); }} className="fas fa-sort ml-2 hover-pointer" />;
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
          <select onChange={this.handleCategoryFilterChange} defaultValue={this.state.categoryId}>
            <option value="">All categories</option>
            {this.props.categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
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

          <input className="mt-10" placeholder="Search for description" onChange={e => this.handleSearchChange(e.target.value)} />
        </div>

        <div className="content">
          <div className="overflow-x bg-art-2 p-10">
            <table className="table">
            <caption>Expenses</caption>
              <thead>
                <tr>
                  <th>Date {this.renderSort('paid_at')}</th>
                  <th>Category</th>
                  <th>Amount {this.renderSort('amount')}</th>
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
              // url = loaddata directly from controller
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
          <select onChange={this.handleCategoryFilterChange} defaultValue={this.state.categoryId}>
            <option value="">All categories</option>
            {this.props.categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
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

          <input className="mt-10" placeholder="Search for description" onChange={e => this.handleSearchChange(e.target.value)} />
        </div>

        <div className="content">
          <div className="overflow-x bg-art p-10">
            <table className="table">
            <caption>Revenues</caption>
              <thead>
                <tr>
                  <th>Date {this.renderSort('paid_at')}</th>
                  <th>Category</th>
                  <th>Amount {this.renderSort('amount')}</th>
                  <th>Description</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                // ToDo : change for revenues
                {this.state.expenses.map((exp) => this.renderExpense(exp))}
              </tbody>
            </table>
          </div>

          <div className="mt-20">
            <Paginator
              // url = loaddata directly from controller
              // ToDo : Change for urlRevenues and onLoadRevenues
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

  renderExpense(expense) {
    return (
      <tr key={expense.id}>
        <td className="input-group mw-120">
          <DatePicker onChange={(val) => this.updateExpense(expense.id, { paid_at: val })} value={new Date(expense.paid_at)} className="bg-gray-slight-contrast" />
        </td>

        <td className="input-group mw-150">
          <select defaultValue={expense.category_id} onChange={(e) => this.updateExpense(expense.id, { category_id: e.target.value })} className="bg-gray-slight-contrast">
            {this.props.categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
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
