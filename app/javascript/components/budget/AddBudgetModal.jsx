import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../shared/Modal';
import FieldErrors from '../shared/FieldErrors';
import { Budgets } from '../../api/main';
import { Alerts } from '../../helpers/main';

class FormBudgetModal extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: this.props.budget.name,
          description: this.props.budget.description,
          errors: {},
          submitted: false,
        };
      }


  handleNameChange = (e) => { this.setState({ name: e.target.value }); }
  handleDescriptionChange = (e) => { this.setState({ description: e.target.value }); }
  handleErrors = (key, errs) => { this.setState({ errors: Object.assign(this.state.errors, { [key]: errs }) }); }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    if (Object.values(this.state.errors).flat().length) { return; }

    let apiCall = null;
    if (this.props.budget.id) {
      apiCall = Budgets.update(this.props.budget.id, { description: this.state.description.trim(), name: this.state.name.trim() });
    } else {
      apiCall = Budgets.create({ description: this.state.description.trim(), name: this.state.name.trim() });
    }

    apiCall.then(
      (resp) => { this.props.onSave(resp); },
      () => { Alerts.genericError(); },
    );
  }

  action() {
    if (!this.props.budget.id) { return 'Create'; }
    return 'Update';
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <label className="required">Name</label>
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          <FieldErrors
            label="Name"
            val={this.state.name}
            validations={{ required: true }}
            show={this.state.submitted} handleErrors={this.handleErrors}
          />
          <label className="required">Description</label>
          <textarea type="text" value={this.state.description} onChange={this.handleDescriptionChange}></textarea>
          <FieldErrors
            label="Description"
            val={this.state.description}
            validations={{ required: true }}
            show={this.state.submitted} handleErrors={this.handleErrors}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-dark">{this.action()}</button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <Modal title={`${this.action()} Budget`} onClose={this.props.onClose}>
        {this.renderForm()}
      </Modal>
    );
  }
}

FormBudgetModal.defaultProps = {
  budget: {
    name: '',
    description: '',
  },
};

FormBudgetModal.propTypes = {
  category: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default FormBudgetModal;
