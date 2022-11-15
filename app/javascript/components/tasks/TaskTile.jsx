import React from 'react';
import PropTypes from 'prop-types';
import { Categories, Tasks } from '../../api/main';
import { Numerics } from '../../helpers/main';
import { Alerts } from '../../helpers/main';

class TaskTile extends React.Component {
  constructor(props) {
    super(props);
  }

  updateTask = (id, updates) => {
    Tasks.update(id, updates).then(
        () => { this.props.onChange()})
  }

  render() {
    const task = this.props.task;
    return (
      <>
        <div
            key={this.props.task.id}
            className="category-tile flex flex-space-between tint-on-hover hover-pointer"
            style={{ borderColor: this.props.taskCategory.color || 'black'}} >
            <span>
              <label class="container-checkbox">
              <input id="chk" checked={this.props.task.is_done} type="checkbox" onChange={() => {{ this.updateTask(this.props.task.id, { is_done: !task.is_done, title: task.title, description: task.description, due_date: task.due_date, category_id: task.category_id})}}}/>
              <span class="checkmark"></span>
              </label>
            </span>
            <h3 for="chk">{task.title}</h3>
            <h3>
                <span style={{ color: this.props.taskCategory.color, border: '1px solid' + this.props.taskCategory.color, padding: '10px', borderRadius: 50}}>{this.props.taskCategory.name || 'no category'}</span>
            </h3>
            <h3>
            Due: {task.due_date}
            </h3>
        </div>
      </>
    );
  }
}

TaskTile.defaultProps = {
  task: {},
  taskCategory: {},
};

TaskTile.propTypes = {
    task: PropTypes.object,
    taskCategory: PropTypes.object,
    onChange: PropTypes.func.isRequired,
};

export default TaskTile;
