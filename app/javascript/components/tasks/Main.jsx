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
      doneSortState: true,
      TitleSortState: true,
      CategorySortState: true,
      DateSortState: true,
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

  toggleDoneSort = () => {

    if(this.state.doneSortState){
      this.setState({ tasks: this.state.tasks.sort((a, b) =>  a.is_done - b.is_done)});
      this.state.doneSortState = false;
    } else {
      this.setState({ tasks: this.state.tasks.sort((a, b) =>  b.is_done - a.is_done)});
      this.state.doneSortState = true;
    }

    // console.log(this.state.tasks);
    // this.state.tasks.sort((a, b) =>  a.id - b.id);
    // console.log(this.state.tasks);
    // this.state.tasks.sort((a, b) =>  b.id - a.id);
    // console.log(this.state.tasks);
  }
  toggleTitleSort = () => {
    this.state.tasks.sort((a, b) => a.is_done - b.is_done);
  }
  toggleCategorySort = () => {
    this.state.tasks.sort((a, b) => a.is_done - b.is_done);
  }
  toggleDateSort = () => {
    this.state.tasks.sort((a, b) => a.is_done - b.is_done);
  }

  render() {
    let buttonDone;
    if (this.state.doneSortState) {
      buttonDone = <button onClick={this.toggleDoneSort} className='button-sort button-1'>Done <i id="icDone" className="arrow down"></i></button>
    } else {
      buttonDone = <button onClick={this.toggleDoneSort} className='button-sort button-1'>Done <i id="icDone" className="arrow up"></i></button>
    }
    return (
      <div className='container'>
        {this.renderTaskCreateModal()}
        <h1>Tasks for</h1>
          <BudgetSelector
          onChange={this.reloadData}
          />
        <button className="btn btn-round btn-dark mt-10" onClick={this.openTaskCreate}>+ add a task</button>
        <div style={{marginTop: 40, height: 40}}>
          {buttonDone}
          <button onClick={this.toggleTitleSort} className='button-sort button-2'>Title <i id="icTitle" className="arrow down"></i></button>
          <button onClick={this.toggleCategorySort} className='button-sort button-3'>Category <i id="icCategory" className="arrow down"></i></button>
          <button onClick={this.toggleDateSort} className='button-sort button-4'>Due date <i id="icDate" className="arrow down"></i></button>
        </div>
        <TasksList tasks={this.state.tasks} categories={this.state.categories} onChange={this.reloadData} />
      </div>
    );
  }
}

export default Main;
