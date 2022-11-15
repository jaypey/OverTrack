import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../shared/Modal';
import ColorPicker from '../shared/ColorPicker';
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

  // componentDidMount() {
  //   document.addEventListener("click", this.handleOutsideClick, false);
  // }

  // handleOutsideClick = (e) => {
  //   if (!this.node.contains(e.target)) this.handleFocusLost();
  // };

  handleIsDoneChange = (is_done) => { this.setState({ is_done: is_done }); }
  handleTitleChange = (title) => { this.setState({ title: title.target.value });}
  handleDescriptionChange = (description) => { this.setState({ description: description }); }
  handleDueDateCahnge = (due_date) => { this.setState({ due_date: due_date }); }
  handleCategoryChange = (category_id) => { this.setState({ category_id: category_id }); }

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

    console.log("Saving...");
    console.log("Title before save: " + this.state.title)

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
        description: "test", 
        due_date: "2022-01-01", 
        category_id: 4,
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
            <div className="input-group eight columns">
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
};

FormModal.propTypes = {
  task: PropTypes.object,
  category: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default FormModal;
