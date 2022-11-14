import React from 'react';
import PropTypes from 'prop-types';

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
                <p>{task.description}</p>
            ))}
          </div>
        );
      }
}

TasksList.defaultProps = {
    tasks: []
  };
  
TasksList.propTypes = {
    tasks: PropTypes.array,
    onChange: PropTypes.func.isRequired
};

export default TasksList