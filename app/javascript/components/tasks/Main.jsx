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
      TitleSortState: false,
      CategorySortState: false,
      DateSortState: false,
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
  }
  toggleTitleSort = () => {
    if(this.state.TitleSortState){
      this.setState({ tasks: this.state.tasks.sort((a, b) =>  a.title > b.title ? 1 : -1)});
      this.state.TitleSortState = false;
    } else {
      this.setState({ tasks: this.state.tasks.sort((a, b) =>  a.title > b.title ? -1 : 1,)});
      this.state.TitleSortState = true;
    }

    this.state.tasks.sort((a, b) => a.is_done - b.is_done);
  }
  toggleCategorySort = () => {
    if(this.state.CategorySortState){
      this.setState({ tasks: this.state.tasks.sort((a, b) => this.state.categories.find(obj => obj.id === a.category_id).name > this.state.categories.find(obj => obj.id === b.category_id).name ? 1 : -1)});
      this.state.CategorySortState = false;
    } else {
      this.setState({ tasks: this.state.tasks.sort((a, b) => this.state.categories.find(obj => obj.id === a.category_id).name > this.state.categories.find(obj => obj.id === b.category_id).name ? -1 : 1)});
      this.state.CategorySortState = true;
    }

    this.state.tasks.sort((a, b) => a.is_done - b.is_done);
  }
  toggleDateSort = () => {
    if(this.state.DateSortState){
      this.setState({ tasks: this.state.tasks.sort((a, b) => new Date(a.due_date) - new Date(b.due_date))});
      this.state.DateSortState = false;
    } else {
      this.setState({ tasks: this.state.tasks.sort((a, b) => new Date(b.due_date) - new Date(a.due_date))});
      this.state.DateSortState = true;
    }
    this.state.tasks.sort((a, b) => a.is_done - b.is_done);
  }

  render() {
    let buttonTitle;
    let buttonCategory;
    let buttonDate;
    if (this.state.tasks.length > 0) {
      if (this.state.TitleSortState) {
        buttonTitle = <button onClick={this.toggleTitleSort} className='button-sort button-1'>Title &nbsp;<i id="icTitle" className="arrow up"></i></button>
      } else {
        buttonTitle = <button onClick={this.toggleTitleSort} className='button-sort button-1'>Title &nbsp;<i id="icTitle" className="arrow down"></i></button>
      }
    }
    if (this.state.tasks.length > 0) {
      if (this.state.CategorySortState && this.state.tasks.length > 0) {
        buttonCategory = <button onClick={this.toggleCategorySort} className='button-sort button-2'>Category &nbsp;<i id="icCategory" className="arrow up"></i></button>
      } else {
        buttonCategory = <button onClick={this.toggleCategorySort} className='button-sort button-2'>Category &nbsp;<i id="icCategory" className="arrow down"></i></button>
      }
    }
    if (this.state.tasks.length > 0) {
      if (this.state.DateSortState && this.state.tasks.length > 0) {
        buttonDate = <button onClick={this.toggleDateSort} className='button-sort button-3'>Due date &nbsp;<i id="icDate" className="arrow up"></i></button>
      } else {
        buttonDate = <button onClick={this.toggleDateSort} className='button-sort button-3'>Due date &nbsp;<i id="icDate" className="arrow down"></i></button>
      }
    }

    return (
      <div className='container'>
        {this.renderTaskCreateModal()}
        <h1 className='d-inline-block'>Tasks for &nbsp;</h1>
          <BudgetSelector
          onChange={this.reloadData}
          />
        <button className="btn btn-round btn-dark mt-10 addTask" onClick={this.openTaskCreate}>+ add a task</button>
        <div style={{marginTop: 40, height: 40}}>
          {buttonTitle}
          {buttonCategory}
          {buttonDate}
        </div>
        <TasksList tasks={this.state.tasks} categories={this.state.categories} onChange={this.reloadData} />
      </div>
    );
  }
}

export default Main;
