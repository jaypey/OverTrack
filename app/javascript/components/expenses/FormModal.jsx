import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../shared/Modal';
import DatePicker from '../shared/DatePicker';
import CurrencyInput from '../shared/CurrencyInput';
import FieldErrors from '../shared/FieldErrors';
import { Categories, Expenses, Revenues, Budgets } from '../../api/main';
import { Alerts } from '../../helpers/main';

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    let categoryId = this.props.categoryId;
    if (!categoryId && this.props.categories.length) { categoryId = this.props.categories[0].id; }

    this.state = {
      description: '',
      category_id: categoryId,
      amount: 0,
      paidAt: new Date(),
      errors: {},
      submitted: false,
    };
  }

  handleDescriptionChange = (e) => { this.setState({ description: e.target.value }); }
  handleAmountChange = (num) => { this.setState({ amount: num }); }
  handlePaidAtChange = (val) => { this.setState({ paidAt: val }); }
  handleCategoryChange = (e) => { this.setState({ category_id: e.target.value }); }
  handleErrors = (key, errs) => { this.setState({ errors: Object.assign(this.state.errors, { [key]: errs }) }); }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    if (Object.values(this.state.errors).flat().length) { return; }

    if (this.props.AddRevenue == 1){
      Budgets.getcurrentuserid().then(
        (cResp) => { console.log(cResp); },
        () => { Alerts.error("Current user didn't load correctly"); }
      );
      Revenues.create({ description: this.state.description.trim(), category_id: this.state.category_id, amount: this.state.amount, paid_at: this.state.paidAt }).then(
        (cResp) => { this.props.onSave(cResp); },
        (error) => { error.status == 403 ? Alerts.genericConflict('Insufficient permissions') : Alerts.genericError() },
        () => { Alerts.genericError() },
      );
    } else {
      Expenses.create({ description: this.state.description.trim(), category_id: this.state.category_id, amount: this.state.amount, paid_at: this.state.paidAt }).then(
        (resp) => { this.props.onSave(resp); },
        (error) => { error.status == 403 ? Alerts.genericConflict('Insufficient permissions') : Alerts.genericError() },
        () => { Alerts.genericError(); },
      );
    }
  }

  renderForm() {
    if (!this.props.categories.length) {
      return (
        <div className="text-center">
          <h4>Add a category before adding an expense!</h4>
        </div>
      );
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <label className="required">Amount</label>
          <CurrencyInput initialValue={this.state.amount} onChange={this.handleAmountChange} allowNegative />
          <FieldErrors
            label="Amount"
            val={this.state.amount}
            validations={{ required: true }}
            show={this.state.submitted} handleErrors={this.handleErrors}
          />
        </div>

        <div className="row">
          <div className="input-group seven columns">
            <label className="required">Category</label>
            <select value={this.state.category_id} onChange={this.handleCategoryChange}>
              {this.props.categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>

          <div className="input-group five columns">
            <label className="required">Date</label>
            <DatePicker onChange={this.handlePaidAtChange}/>
            <FieldErrors
              label="Date"
              val={this.state.paidAt}
              validations={{ required: true }}
              show={this.state.submitted} handleErrors={this.handleErrors}
            />
          </div>
        </div>

        <div className="input-group">
          <label className="required">Description</label>
          <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
          <FieldErrors
            label="Description"
            val={this.state.description}
            validations={{ required: true }}
            show={this.state.submitted} handleErrors={this.handleErrors}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-dark">Save</button>
          <a className="dim-til-hover" href="/expense_uploads/new">Import a CSV instead</a>
        </div>
      </form>
    );
  }

  render() {
    return (
      <Modal title={this.props.title} onClose={this.props.onClose}>
        {this.renderForm()}
      </Modal>
    );
  }
}

FormModal.defaultProps = {
  categories: [],
  categoryId: 0,
  title: '',
  AddRevenue: 0,
};

FormModal.propTypes = {
  title: PropTypes.string,
  categories: PropTypes.array,
  categoryId: PropTypes.number,
  AddRevenue: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default FormModal;
