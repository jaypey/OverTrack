import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Numerics } from '../../helpers/main';
import Progress from '../shared/Progress';
import GoalFormModal from '../goals/FormModal';

class ProjectionsChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distinctExpenses: [],
      totalMonthlyChangePrediction: 0,
      totalPerMonth: [],
      variationPerMonth: [],
      averageVariationPerMonth: 0,
      totalPerNextMonthsPredictions: []
    };
  }


  getexpense() {
    {this.props.categoriesWithExpensesAndSpend.map(category => {
      category.expenses.map(expense =>  {
        // if (expense.description == "Breakfast")
        // {
          // this.setState(prevState => ({
          //   expensestest: [...prevState.expensestest, expense]
          // }))
          console.log(expense.id)
        // }
      }
      )
    })}
  }

  getcategories() {
    {this.props.categoriesWithExpensesAndSpend.map((category) =>
      (console.log(category.name)))}


  //   for (let expensesss of this.props.categoriesWithExpensesAndSpend) {
  //     if (expensesss.name == "T-Shirt sales")
  //     {
  //       console.log(expensesss.name)
  //     }
  // }
  }

  getDistinctExpenses() {
    {this.props.expenses.map((expense) =>
      { 
        var d = new Date(expense.paid_at);
        if (this.state.distinctExpenses.filter(e => e.id === expense.id).length == 0)
        {
          this.setState(prevState => ({
            distinctExpenses: [...prevState.distinctExpenses, expense]
          }))
          //console.log(d.toString());
        }
        })}
        for (let expense of this.state.distinctExpenses)
        {
          //console.log(expense.description)
        }
  }

  getTotalMonthlyAmount() {
    for (let i = 0; i < 5; i++)
    {
      this.state.totalPerMonth[i] = 0;
      for (let expense of this.props.expenses) {
        var d = new Date(expense.paid_at);
        var currentTime = new Date();
        if (d.getMonth() == (currentTime.getMonth() - 1 - i))
        {
          this.state.totalPerMonth[i] += (expense.amount / 100);
        }
      }
    }
  }

  getAverageVariationPerMonth() {
    for (let i = this.state.totalPerMonth.length - 2; i > -1; i--) {
      this.state.variationPerMonth[i] = (this.state.totalPerMonth[i] - this.state.totalPerMonth[i + 1]);
    }
    const sum = this.state.variationPerMonth.reduce((partialSum, a) => partialSum + a, 0);
    this.state.averageVariationPerMonth = sum / this.state.variationPerMonth.length;
  }


  getTotalExpensesProjections() {
    for (let i = 0; i < 5; i++)
    {
      if (i == 0)
      {
        this.state.totalPerNextMonthsPredictions[i] = this.state.totalPerMonth[0] + this.state.averageVariationPerMonth;
      }
      else
      {
        this.state.totalPerNextMonthsPredictions[i] = this.state.totalPerNextMonthsPredictions[i - 1] + this.state.averageVariationPerMonth;
      }
    }
  }

  render() {
    this.getTotalMonthlyAmount();
    this.getAverageVariationPerMonth();
    this.getTotalExpensesProjections();
    const d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", , "November", "December"
    ];
    monthNames[-1] = "December"
    monthNames[-2] = "November"
    monthNames[-3] = "October"
    monthNames[-4] = "September"
    monthNames[-5] = "August"
    monthNames[-6] = "July"
    monthNames[-7] = "June"
    monthNames[-8] = "May"
    monthNames[-9] = "April"
    monthNames[-10] = "March"
    monthNames[-11] = "February"
    monthNames[-12] = "January"
    return (
    <div>
      <h3>Total expenses of the last few months</h3>

      <table className='table'>
        <thead>
        <tr>
          <th>Month</th>
          <th>Total expenses</th>
          <th>Difference from last month</th>
        </tr>
        </thead>
        <tbody>
        {this.state.totalPerMonth.map((value, index) => 
      (
        <tr>
          <td>{monthNames[(d.getMonth() - index - 1)]}</td>
          <td>{value}$</td>
          {index + 1 != this.state.totalPerMonth.length && this.state.variationPerMonth[index] < 0 &&
        <td className='red-text'>-{this.state.variationPerMonth[index]}$</td>}
        {index + 1 != this.state.totalPerMonth.length && this.state.variationPerMonth[index] >= 0 &&
          <td className='green-text'>+{this.state.variationPerMonth[index]}$</td>
      }
        </tr>))}
        </tbody>
      </table>


      {/* {this.state.totalPerMonth.map((value, index) => 
      (
      <div>
        <p>{monthNames[(d.getMonth() - index - 1)]}</p>
        <p>{value}</p></div>))}

        {this.state.variationPerMonth.map((value, index) => (
          <div>
            <p>Change from {monthNames[(d.getMonth() - index - 2)]} to {monthNames[(d.getMonth() - index - 1)]}</p>
            {value >= 0 &&
        <p>+{value}</p>
      }
        {value < 0 &&
        <p>-{value}</p>
      }
          </div>
        ))} */}

      <br></br>
      <br></br>
        
      {this.state.averageVariationPerMonth < 0 &&
        <h3>Average variation per month : <span className='red-text'>-{this.state.averageVariationPerMonth}$</span></h3>}
        {this.state.averageVariationPerMonth >= 0 &&
          <h3>Average variation per month : <span className='green-text'>+{this.state.averageVariationPerMonth}$</span></h3>
      }

      <br></br>
      <br></br>

      <h3>Projection of the total expenses for the next few months</h3>

      <table className='table'>
        <thead>
        <tr>
          <th>Month</th>
          <th>Total expenses</th>
          <th>Difference from last month</th>
        </tr>
        </thead>
        <tbody>
        {this.state.totalPerNextMonthsPredictions.map((value, index) => 
      (
        <tr>
          <td>{monthNames[(d.getMonth() + index)]}</td>
          <td>{value}$</td>
          {this.state.averageVariationPerMonth < 0 &&
        <td className='red-text'>-{this.state.averageVariationPerMonth}$</td>}
        {this.state.averageVariationPerMonth >= 0 &&
          <td className='green-text'>+{this.state.averageVariationPerMonth}$</td>
      }
        </tr>))}
        </tbody>
      </table>

      {/* {this.state.totalPerNextMonthsPredictions.map((value, index) => 
      (
      <div>
        <p>{monthNames[(d.getMonth() + index)]}</p>
        <p>{value}</p></div>))} */}

<br></br>
<br></br>
<br></br>
<br></br>
        
    </div>
    );
  }
}

export default ProjectionsChart;