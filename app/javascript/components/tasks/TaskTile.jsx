import React from 'react';
import PropTypes from 'prop-types';
import { Categories, Tasks } from '../../api/main';
import { Numerics } from '../../helpers/main';
import { Alerts } from '../../helpers/main';
import TaskFormModal from './FormModal';

class TaskTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTaskEditModal: false,
      firstDoneTask: false,
    }
  }

  updateTask = (id, updates) => {
    Tasks.update(id, updates).then(
        () => { this.props.onChange(); },
        (error) => { error.status == 403 ? Alerts.genericConflict('Insufficient permissions') : error.status == 408 ? Alerts.genericConflict('Cannot update task') : Alerts.genericError(); },
    );
  }

  openTaskEdit = () => { this.setState({ showTaskEditModal: true }); }
  closeTaskEdit = () => { this.setState({ showTaskEditModal: false }); }
  onTaskSave = () => {
    this.closeTaskEdit();
    this.props.onChange();
  }

  renderTaskEditModal() {
    if (!this.state.showTaskEditModal) { return ''; }
    return (
      <TaskFormModal
        task={this.props.task}
        categories={this.props.categories}
        category={this.props.category}
        onClose={this.closeTaskEdit}
        onSave={this.onTaskSave}
      />
    );
  }

  handleChildClick (e) {
    e.stopPropagation();
  }

  render() {
    const task = this.props.task;
    return (
      <>
        <div
            key={this.props.task.id}
            className={`category-tile flex flex-space-between tint-on-hover hover-pointer ${task.is_done ? "stripe" : ""}`}
            onClick={this.openTaskEdit}
            style={{ borderColor: this.props.taskCategory.color || 'black'}} >
            <span onClick={this.handleChildClick}>
              <label className="container-checkbox">
              <input id="chk" checked={this.props.task.is_done} type="checkbox" onChange={() => {{ this.updateTask(this.props.task.id, { is_done: !task.is_done})}}}/>
              <span className="checkmark"></span>
              </label>
            </span>
            <h3>{task.title}</h3>
            <h3>
                <span style={{ color: this.props.taskCategory.color, border: '1px solid' + this.props.taskCategory.color, padding: '10px', borderRadius: 50}}>{this.props.taskCategory.name || 'no category'}</span>
            </h3>
            <h3>
            Due: {task.due_date}
            </h3>
        </div>
        {this.renderTaskEditModal()}
      </>
    );
  }
}

TaskTile.defaultProps = {
  task: {},
  taskCategory: {},
  categories: [],
};

TaskTile.propTypes = {
    task: PropTypes.object,
    taskCategory: PropTypes.object,
    categories : PropTypes.array,
    onChange: PropTypes.func.isRequired,
};

export default TaskTile;
