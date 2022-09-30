import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../shared/Modal';
import DatePicker from '../shared/DatePicker';
import CurrencyInput from '../shared/CurrencyInput';
import FieldErrors from '../shared/FieldErrors';
import { Expenses } from '../../api/main';
import { Alerts } from '../../helpers/main';

class AddBudgetModal extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          errors: {},
          submitted: false,
        };
      }

  handleNameChange = (e) => { this.setState({ name: e.target.value }); }
  handleErrors = (key, errs) => { this.setState({ errors: Object.assign(this.state.errors, { [key]: errs }) }); }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <label className="required">Name</label>
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          <FieldErrors
            label="Name"
            val={this.state.description}
            validations={{ required: true }}
            show={this.state.submitted} handleErrors={this.handleErrors}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-dark">Create</button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <Modal title="Create Budget" onClose={this.props.onClose}>
        {this.renderForm()}
      </Modal>
    );
  }
}

AddBudgetModal.defaultProps = {
  categories: [],
  categoryId: 0,
};

AddBudgetModal.propTypes = {
  categories: PropTypes.array,
  categoryId: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default AddBudgetModal;
