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
      shownTasks: [],
      excludedCategories: [],
      showTaskCreateModal: false,
      ShowDoneTasks: true,
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

  toggleDoneTasks = () => {
    this.setState({ShowDoneTasks: !this.state.ShowDoneTasks});
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
        if (this.state.ShowDoneTasks) {
          this.state.shownTasks.push(data)
        } else {
          if (!data.is_done)
            this.state.shownTasks.push(data)
        }
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


  toggleTitleSort = () => {
    console.log(this.state.tasks)
    if(this.state.TitleSortState){
      this.setState({ tasks: this.state.tasks.sort((a, b) =>  a.title > b.title ? 1 : -1)});
      this.state.TitleSortState = false;
    } else {
      this.setState({ tasks: this.state.tasks.sort((a, b) =>  a.title > b.title ? -1 : 1,)});
      this.state.TitleSortState = true;
    }
    console.log(this.state.tasks)

    this.state.tasks.sort((a, b) => a.is_done - b.is_done);
    console.log(this.state.tasks)
  }

  toggleCategorySort = () => {
    console.log(this.state.categories)
    if(this.state.CategorySortState){
      this.setState({ tasks: 
        this.state.tasks.sort((a, b) => 
          (a.category_id === 0 ? 'no category' : (this.state.categories.find(obj => obj.id === a.category_id).name)) > (b.category_id === 0 ? 'no category' : (this.state.categories.find(obj => obj.id === b.category_id).name)) ? 1 : -1)});
      this.state.CategorySortState = false;
    } else {
      this.setState({ tasks: 
        this.state.tasks.sort((a, b) => 
          (a.category_id === 0 ? 'no category' : (this.state.categories.find(obj => obj.id === a.category_id).name)) > (b.category_id === 0 ? 'no category' : (this.state.categories.find(obj => obj.id === b.category_id).name)) ? -1 : 1)});
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
    this.getShownTasks()

    let btnDoneTasks;
    let buttonTitle;
    let buttonCategory;
    let buttonDate;

    if (!this.state.ShowDoneTasks && this.state.shownTasks.length > 0){
      btnDoneTasks = <button className='button-sort btn-showdone' onClick={this.toggleDoneTasks}>Show done tasks</button>
    }

    if (this.state.shownTasks.length > 0) {
      if (this.state.TitleSortState) {
        buttonTitle = <button onClick={this.toggleTitleSort} className='button-sort button-1'>Title &nbsp;<i id="icTitle" className="arrow up"></i></button>
      } else {
        buttonTitle = <button onClick={this.toggleTitleSort} className='button-sort button-1'>Title &nbsp;<i id="icTitle" className="arrow down"></i></button>
      }
    }
    if (this.state.shownTasks.length > 0) {
      if (this.state.CategorySortState) {
        buttonCategory = <button onClick={this.toggleCategorySort} className='button-sort button-2'>Category &nbsp;<i id="icCategory" className="arrow up"></i></button>
      } else {
        buttonCategory = <button onClick={this.toggleCategorySort} className='button-sort button-2'>Category &nbsp;<i id="icCategory" className="arrow down"></i></button>
      }
    }
    if (this.state.shownTasks.length > 0) {
      if (this.state.DateSortState) {
        buttonDate = <button onClick={this.toggleDateSort} className='button-sort button-3'>Due date &nbsp;<i id="icDate" className="arrow up"></i></button>
      } else {
        buttonDate = <button onClick={this.toggleDateSort} className='button-sort button-3'>Due date &nbsp;<i id="icDate" className="arrow down"></i></button>
      }
    }

    return (
      <div className='tasks-page'>
      <div className='task-filer-box'>
          <div className='task-filter-title'>
            Filters
          </div>
          <div>
          <div className='flex-box'>
            <div className='filter-button' id={0} onClick={this.changeCategories}>
            <div className='filter-button-icon'>
            {this.state.excludedCategories.includes("0") &&
            <div className='filer-button-icon-empty'></div>}
            {(!this.state.excludedCategories.includes("0")) &&
            <div className='filer-button-icon-green'>✓</div>}
            </div>
            <div className='filter-button-text'>
              no category
            </div>
            </div>
                </div>
          {this.state.categories.map((category) => (
            <div className='flex-box'>
            <div className='filter-button' id={category.id} onClick={this.changeCategories}>
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
                </div>
            ))}
          </div>
      </div>
      <div className='task-list'>
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
        <TasksList tasks={this.state.shownTasks} categories={this.state.categories} onChange={this.reloadData} toggleDoneTasks={this.toggleDoneTasks}/>
        {/* Render un boutons show done tasks s'il y a des done tasks et qu'elles sont cachées*/}
        {btnDoneTasks}
        </div>
      </div>
    );
  }
}

export default Main;
