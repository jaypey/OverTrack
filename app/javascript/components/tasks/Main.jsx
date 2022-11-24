import React from 'react';
import TasksList from './TasksList';
import { Categories, Revenues, Expenses, Goals, Reports, Tasks } from '../../api/main';
import { Alerts } from '../../helpers/main';
import BudgetSelector from '../shared/BudgetSelector';
import TaskFormModal from './FormModal';

// Besoins (API)
// Toutes les catégories
// Toutes les tâches

// Components à créer
// TasksList
// TaskTile
// CategoriesList
// CategoryTile
// FormModal (Pour le edit + details)

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      tasks: [],
      shownTasks: [],
      excludedCategories: [],
      showTaskCreateModal: false,
    };
  }

  componentDidMount() {
    this.reloadData();
  }

  onTaskSave = () => {
    this.closeTaskCreate();
    this.reloadData();
  }

  reloadData = () => {
    this.loadCategories();
    this.loadTasks();
  }

  openTaskCreate = () => { this.setState({ showTaskCreateModal: true }); }
  closeTaskCreate = () => { this.setState({ showTaskCreateModal: false }); }

  loadCategories = () => {
    Categories.list().then(
      (cResp) => { this.setState({ categories: cResp }); },
      () => { Alerts.error("Categories didn't load correctly"); }
    );
  }

  loadTasks = () => {
    Tasks.list().then(
      (cResp) => { this.setState({ tasks: cResp }); },
      () => { Alerts.error("Tasks didn't load correctly"); }
    );
  }

  renderTaskCreateModal() {
    if (!this.state.showTaskCreateModal) { return ''; }
    return <TaskFormModal onClose={this.closeTaskCreate} onSave={this.onTaskSave} categories={this.state.categories}/>;
  }

  getShownTasks() {
    this.state.shownTasks = []
    for (let data of this.state.tasks) {
      if (!(this.state.excludedCategories.includes(data.category_id.toString())))
      {
        this.state.shownTasks.push(data)
      }
    }
  }

  changeCategories = event => {
    console.log("CLICKED!")
    console.log(event.currentTarget.id)
    let array = this.state.excludedCategories
    if (array.includes(event.currentTarget.id))
    {
      const index = array.indexOf(event.currentTarget.id);
      if (index > -1) {
        array.splice(index, 1);
      }
    }
    else
      array.push(event.currentTarget.id)
    

    this.setState({ excludedCategories: array })      
  }

  render() {
    return (
      <div className='tasks-page'>
      <div className='task-filer-box'>
          <div className='task-filter-title'>
            Filters
          </div>
          <div>
          {this.state.categories.map((category) => (
            <div className='flex-box'>
            {/* <input defaultChecked={true} type="checkbox" name={category.id} value={category.id} onChange={this.changeCategories}></input> */}
            <div className='filter-button' style={{border: '1px solid black'}} id={category.id} onClick={this.changeCategories}>
            <div className='filter-button-icon'>
            {this.state.excludedCategories.includes(category.id.toString()) &&
            <div className='filer-button-icon-empty'></div>}
            {(!this.state.excludedCategories.includes(category.id.toString())) &&
            <div className='filer-button-icon-green'>✓</div>}
            </div>
            <div className='filter-button-text'>
              {category.name}
            </div>
            </div>
            {/* <p>{category.name}</p> */}
                </div>
            ))}
          </div>
      </div>
      <div className='task-list'>
        {this.renderTaskCreateModal()}
        <h1>Tasks for</h1>
          <BudgetSelector
          onChange={this.reloadData}
          />
        <button className="btn btn-round btn-dark mt-10" onClick={this.openTaskCreate}>+ add a task</button>
        {this.getShownTasks()}
        <TasksList tasks={this.state.shownTasks} categories={this.state.categories} onChange={this.reloadData} />
      </div>
      </div>
    );
  }
}

export default Main;
