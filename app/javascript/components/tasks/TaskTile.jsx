import React from 'react';
import PropTypes from 'prop-types';
import { Categories } from '../../api/main';
import { Numerics } from '../../helpers/main';

class TaskTile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const task = this.props.task;
    return (
      <>
        <div
          className="category-tile flex flex-space-between tint-on-hover hover-pointer"
          style={{ borderColor: this.props.taskCategory.color || 'black'}} >
          <h3>{task.title} - {task.description} - <span style={{ color: this.props.taskCategory.color, border: '1px solid' + this.props.taskCategory.color, padding: '10px', borderRadius: 50}}>{this.props.taskCategory.name || 'no category'}</span> - Due: {task.due_date}</h3>
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
    // onChange: PropTypes.func.isRequired,
};

export default TaskTile;
