import React from 'react';
import PropTypes, { object } from 'prop-types';
import TaskTile from './TaskTile';

class TasksList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        firstDoneTask: false,
        // nada for the moment
        // tasks sont dans props
      }
    }

    static getDerivedStateFromProps(props, state){
      state.firstDoneTask = props.firstDone;
      return null;
    }

    render() {
        return (
          <div>
            {this.props.tasks.map((task) => {
              if(!this.state.firstDoneTask)
                if(task.is_done == true){
                  this.state.firstDoneTask = true
                  return (
                    <div>
                      <button className='button-sort btn-showdone' onClick={this.props.toggleDoneTasks}>Hide done tasks</button>
                      <TaskTile canCreate={this.props.canCreate} task={task} taskCategory={this.props.categories.find(cat => {return cat.id === task.category_id})} onChange={this.props.onChange} categories={this.props.categories}/>
                    </div>
                  )
                }
                return <TaskTile canCreate={this.props.canCreate} task={task} taskCategory={this.props.categories.find(cat => {return cat.id === task.category_id})} onChange={this.props.onChange} categories={this.props.categories}/>
            })}
          </div>
        );
      }
}

TasksList.defaultProps = {
    tasks: [],
    categories: [],
    firstDone: false,
  };
  
TasksList.propTypes = {
    categories : PropTypes.array,
    firstDone : PropTypes.bool,
    tasks: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    toggleDoneTasks: PropTypes.func.isRequired,
    canCreate: PropTypes.bool.isRequired,
};

export default TasksList