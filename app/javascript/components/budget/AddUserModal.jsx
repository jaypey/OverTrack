import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../shared/Modal';
import FieldErrors from '../shared/FieldErrors';
import { Budgets } from '../../api/main';
import { Alerts } from '../../helpers/main';

class FormAddUserModal extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            errors: {},
            submitted: false,
            budgetName: this.props.budget.name,
        };
      }


  handleEmailChange = (e) => { this.setState({ email: e.target.value }); }
  handleErrors = (key, errs) => { this.setState({ errors: Object.assign(this.state.errors, { [key]: errs }) }); }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    if (Object.values(this.state.errors).flat().length) { return; }

    let apiCall = null;

    apiCall = Budgets.adduser({budgetid: this.props.budget.id, email: this.state.email});

    apiCall.then(
      (resp) => { this.props.onSave(resp); },
      (error) => { error.status == 408 ? Alerts.genericConflict('User already added!') : error.status == 409 ? Alerts.genericConflict('User doesnt exist!') : Alerts.genericError(); },
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <label className="required">User email</label>
          <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
          <FieldErrors
            label="Email"
            val={this.state.email}
            validations={{ required: true }}
            show={this.state.submitted} handleErrors={this.handleErrors}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-dark">{"Add user to " + this.state.budgetName}</button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <Modal title={"Add user to " + this.state.budgetName} onClose={this.props.onClose}>
        {this.renderForm()}
      </Modal>
    );
  }
}

FormAddUserModal.defaultProps = {
  budget: {
    name: 'unknown'
  },
};

FormAddUserModal.propTypes = {
  category: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default FormAddUserModal;
