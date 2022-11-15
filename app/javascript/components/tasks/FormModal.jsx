import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../shared/Modal';
import DatePicker from '../shared/DatePicker';
import CurrencyInput from '../shared/CurrencyInput';
import FieldErrors from '../shared/FieldErrors';
import { Tasks } from '../../api/main';
import { Alerts } from '../../helpers/main';

class FormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        is_done: this.props.task.is_done,
        title: this.props.task.title,
        description: this.props.task.description,
        due_date: this.props.task.due_date,
        category_id: this.props.task.category_id,
        category: this.props.category,
        errors: {},
        submitted: false,
    };
  }

  handleTitleChange = (title) => { this.setState({ title: title.target.value });}
  handleDescriptionChange = (description) => { this.setState({ description: description.target.value }); }
  handleDueDateChange = (val) => { this.setState({ due_date: val }); }
  handleCategoryChange = (category_id) => { this.setState({ category_id: category_id.target.value }); }

  handleErrors = (key, errs) => { this.setState({ errors: Object.assign(this.state.errors, { [key]: errs }) }); }

  handleDelete = () => {
    Alerts.genericDelete('task').then((result) => {
      if (!result.value) { return; }
      Tasks.delete(this.props.task.id).then(
        (resp) => { this.props.onClose(resp); },
        () => { Alerts.genericError(); },
      );
    });
  }

  handleSubmit= (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
    if (Object.values(this.state.errors).flat().length) { return; }

    let apiCall = null;
    if (this.props.task.id) {
      apiCall = Tasks.update(this.props.task.id, { 
        is_done: this.state.is_done, 
        title: this.state.title, 
        description: this.state.description, 
        due_date: this.state.due_date, 
        category_id: this.state.category_id,
      })
      } else {
      apiCall = Tasks.create({
        title: this.state.title, 
        description: this.state.description, 
        due_date: this.state.due_date, 
        category_id: this.state.category_id,
      });
    }

    apiCall.then(
      (resp) => { this.props.onSave(resp); },
      () => { Alerts.genericError(); },
    );
  }

  action() {
    if (!this.props.task.id) { return 'Create'; }
    return 'Edit';
  }

  renderDelete() {
    if (!this.props.task.id) { return ''; }
    return <a className="link-danger" onClick={this.handleDelete}>Delete</a>;
  }

  render() {
    return (
      <Modal onClose={this.props.onClose} title={`${this.action()} task`}>
        <form onSubmit={this.handleSubmit}>
          <div className="row row-flex">
            <div className="input-group columns">
              <label className="required">Title</label>
              <input
                onChange={this.handleTitleChange}
                type="text"
                value={this.state.title}
              />
              <FieldErrors
                handleErrors={this.handleErrors}
                label="Title"
                show={this.state.submitted}
                val={this.state.title}
                validations={{ required: true }}
              />
            </div>
          </div>
          <div className="row row-flex">
            <div className="input-group seven columns">
              <label className="required">Related category</label>
              <select value={this.state.category_id} onChange={this.handleCategoryChange}>
              <option key="0" value="0">No category</option>
              {this.props.categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div className="input-group five columns">
              <label>Due date</label>
              <DatePicker onChange={this.handleDueDateChange} />
            </div>
          </div>
          <div className="row row-flex">
            <div className="input-group columns">
              <label>Description</label>
              <textarea
                className='no-resize'
                onChange={this.handleDescriptionChange}
                type="text-area"
                value={this.state.description}
              />
            </div>
          </div>
          <div className="form-actions">
            <button className="btn btn-dark" type="submit">Save</button>
            {this.renderDelete()}
          </div>
        </form>
      </Modal>
    );
  }
}

FormModal.defaultProps = {
  task: {
    is_done: false,
    title: "",
    description: "",
    due_date: "",
    category_id: 0,
  },
  category: {},
  categories: [],
};

FormModal.propTypes = {
  task: PropTypes.object,
  category: PropTypes.object,
  categories : PropTypes.array,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default FormModal;
