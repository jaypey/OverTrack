import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Numerics } from '../../helpers/main';
import Progress from '../shared/Progress';
import GoalFormModal from '../goals/FormModal';

const initialState = {
      distinctExpenses: [],
      totalMonthlyChangePrediction: 0,
      totalPerMonth: [],
      variationPerMonth: [],
      averageVariationPerMonth: 0,
      totalPerNextMonthsPredictions: [],
      totalPerMonthRevenues: [],
      variationPerMonthRevenues: [],
      averageVariationPerMonthRevenues: 0,
      totalPerNextMonthsPredictionsRevenues: []
};

class ProjectionsChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
      distinctExpenses: [],
      totalMonthlyChangePrediction: 0,
      totalPerMonth: [],
      variationPerMonth: [],
      averageVariationPerMonth: 0,
      totalPerNextMonthsPredictions: [],
      totalPerMonthRevenues: [],
      variationPerMonthRevenues: [],
      averageVariationPerMonthRevenues: 0,
      totalPerNextMonthsPredictionsRevenues: []
    }
    };

  reset() {
    // this.setState({ distinctExpenses: [] })
    // this.setState({ totalPerMonth: [] })
    // this.setState({ variationPerMonth: [] })
    // this.setState({ totalPerNextMonthsPredictions: [] })
    // this.setState({ totalPerMonthRevenues: [] })
    // this.setState({ variationPerMonthRevenues: [] })
    // this.setState({ totalPerNextMonthsPredictionsRevenues: [] })
    // this.setState({ totalMonthlyChangePrediction: 0 })
    // this.setState({ averageVariationPerMonth: 0 })
    // this.setState({ averageVariationPerMonthRevenues: 0 })
    this.state.distinctExpenses = [];
    this.state.totalPerMonth = [];
    this.state.variationPerMonth = [];
    this.state.totalPerNextMonthsPredictions = [];
    this.state.totalPerMonthRevenues = [];
    this.state.variationPerMonthRevenues = [];
    this.state.totalPerNextMonthsPredictionsRevenues = [];
    this.state.totalMonthlyChangePrediction = 0;
    this.state.averageVariationPerMonth = 0;
    this.state.averageVariationPerMonthRevenues = 0;
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
    for (let i = 0; i < this.props.studiedMonths; i++)
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
    for (let i = 0; i < this.props.projectedMonths; i++)
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

  getTotalMonthlyAmountRevenues() {
    for (let i = 0; i < this.props.studiedMonths; i++)
    {
      this.state.totalPerMonthRevenues[i] = 0;
      for (let revenue of this.props.revenues) {
        var d = new Date(revenue.paid_at);
        var currentTime = new Date();
        if (d.getMonth() == (currentTime.getMonth() - 1 - i))
        {
          this.state.totalPerMonthRevenues[i] += (revenue.amount / 100);
        }
      }
    }
  }

  getAverageVariationPerMonthRevenues() {
    for (let i = this.state.totalPerMonthRevenues.length - 2; i > -1; i--) {
      this.state.variationPerMonthRevenues[i] = (this.state.totalPerMonthRevenues[i] - this.state.totalPerMonthRevenues[i + 1]);
    }
    const sum = this.state.variationPerMonthRevenues.reduce((partialSum, a) => partialSum + a, 0);
    this.state.averageVariationPerMonthRevenues = sum / this.state.variationPerMonthRevenues.length;
  }


  getTotalRevenuesProjections() {
    for (let i = 0; i < this.props.projectedMonths; i++)
    {
      if (i == 0)
      {
        this.state.totalPerNextMonthsPredictionsRevenues[i] = this.state.totalPerMonthRevenues[0] + this.state.averageVariationPerMonthRevenues;
      }
      else
      {
        this.state.totalPerNextMonthsPredictionsRevenues[i] = this.state.totalPerNextMonthsPredictionsRevenues[i - 1] + this.state.averageVariationPerMonthRevenues;
      }
    }
  }






  render() {
    this.reset();
    //this.setState({ distinctExpenses: [] })
    this.getTotalMonthlyAmount();
    this.getAverageVariationPerMonth();
    this.getTotalExpensesProjections();
    this.getTotalMonthlyAmountRevenues();
    this.getAverageVariationPerMonthRevenues();
    this.getTotalRevenuesProjections();
    console.log(this.props.studiedMonths);
    console.log(this.props.projectedMonths);
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
        <td className='red-text'>{this.state.variationPerMonth[index]}$</td>}
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
        <h3>Average variation per month : <span className='red-text'>{this.state.averageVariationPerMonth}$</span></h3>}
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
        <td className='red-text'>{this.state.averageVariationPerMonth}$</td>}
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
      <h3>Total revenues of the last few months</h3>

<table className='table'>
  <thead>
  <tr>
    <th>Month</th>
    <th>Total revenues</th>
    <th>Difference from last month</th>
  </tr>
  </thead>
  <tbody>
  {this.state.totalPerMonthRevenues.map((value, index) => 
(
  <tr>
    <td>{monthNames[(d.getMonth() - index - 1)]}</td>
    <td>{value}$</td>
    {index + 1 != this.state.totalPerMonthRevenues.length && this.state.variationPerMonthRevenues[index] < 0 &&
  <td className='red-text'>{this.state.variationPerMonthRevenues[index]}$</td>}
  {index + 1 != this.state.totalPerMonthRevenues.length && this.state.variationPerMonthRevenues[index] >= 0 &&
    <td className='green-text'>+{this.state.variationPerMonthRevenues[index]}$</td>
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
  
{this.state.averageVariationPerMonthRevenues < 0 &&
  <h3>Average variation per month : <span className='red-text'>{this.state.averageVariationPerMonthRevenues}$</span></h3>}
  {this.state.averageVariationPerMonthRevenues >= 0 &&
    <h3>Average variation per month : <span className='green-text'>+{this.state.averageVariationPerMonthRevenues}$</span></h3>
}

<br></br>
<br></br>

<h3>Projection of the total revenues for the next few months</h3>

<table className='table'>
  <thead>
  <tr>
    <th>Month</th>
    <th>Total revenues</th>
    <th>Difference from last month</th>
  </tr>
  </thead>
  <tbody>
  {this.state.totalPerNextMonthsPredictionsRevenues.map((value, index) => 
(
  <tr>
    <td>{monthNames[(d.getMonth() + index)]}</td>
    <td>{value}$</td>
    {this.state.averageVariationPerMonthRevenues < 0 &&
  <td className='red-text'>{this.state.averageVariationPerMonthRevenues}$</td>}
  {this.state.averageVariationPerMonthRevenues >= 0 &&
    <td className='green-text'>+{this.state.averageVariationPerMonthRevenues}$</td>
}
  </tr>))}
  </tbody>
</table>







        

<br></br>
<br></br>
<br></br>
<br></br>
        
    </div>
    );
  }
}

export default ProjectionsChart;