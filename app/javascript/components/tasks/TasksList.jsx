import React from 'react';
import PropTypes, { object } from 'prop-types';
import TaskTile from './TaskTile';

class TasksList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        // nada for the moment
        // tasks sont dans props
      }
    }

    render() {
        return (
          <div>
            {this.props.tasks.map((task) => (
                <TaskTile task={task} taskCategory={this.props.categories.find(cat => {return cat.id === task.category_id})} onChange={this.props.onChange} categories={this.props.categories}/>
            ))}
          </div>
        );
      }
}

TasksList.defaultProps = {
    tasks: [],
    categories: [],
  };
  
TasksList.propTypes = {
    categories : PropTypes.array,
    tasks: PropTypes.array,
    onChange: PropTypes.func.isRequired
};

export default TasksList