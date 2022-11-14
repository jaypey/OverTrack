import React from 'react';
import moment from 'moment';
import ExpenseFormModal from '../expenses/FormModal';
import { Categories, Revenues, Expenses, Goals, Reports, Tasks } from '../../api/main';
import { Alerts } from '../../helpers/main';

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
    };
  }

  componentDidMount() {
    this.reloadData();
  }

  reloadData = () => {
    this.loadCategories();
    this.loadTasks();
  }

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

  render() {
    return (
      <div className='container'>
        <h1>Tasks page</h1>
      </div>
    );
  }
}

export default Main;
