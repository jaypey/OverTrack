import React from 'react';
import moment from 'moment';
import ExpenseFormModal from '../expenses/FormModal';
import { Categories, Revenues, Expenses, Goals, Reports } from '../../api/main';
import { Alerts } from '../../helpers/main';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
