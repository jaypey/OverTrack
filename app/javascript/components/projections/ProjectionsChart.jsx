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
        if((currentTime.getMonth() - 1 - i) < 0)
        {
          if ((d.getMonth() == (currentTime.getMonth() - 1 - i + 12)) && (d.getFullYear() != currentTime.getFullYear()))
          {
            this.state.totalPerMonth[i] += (expense.amount / 100);
          }
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
        if((currentTime.getMonth() - 1 - i) < 0)
        {
          if ((d.getMonth() == (currentTime.getMonth() - 1 - i + 12)) && (d.getFullYear() != currentTime.getFullYear()))
          {
            this.state.totalPerMonthRevenues[i] += (revenue.amount / 100);
          }
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
    this.getTotalMonthlyAmount();
    this.getAverageVariationPerMonth();
    this.getTotalExpensesProjections();
    this.getTotalMonthlyAmountRevenues();
    this.getAverageVariationPerMonthRevenues();
    this.getTotalRevenuesProjections();
    console.log(this.props.studiedMonths);
    console.log(this.props.projectedMonths);
    const d = new Date();
    var thisYear = d.getFullYear().toString();
    var lastYear = (d.getFullYear() - 1).toString();
    var nextYear = (d.getFullYear() + 1).toString();

    const monthNames = ["January " + thisYear, "February " + thisYear,"March " + thisYear, "April " + thisYear,
    "May " + thisYear, "June " + thisYear, "July " + thisYear, "August " + thisYear,
    "September " + thisYear, "October " + thisYear, "November "  + thisYear, "December " + thisYear,
    "January "  + nextYear, "February "  + nextYear, "March "  + nextYear, "April "  + nextYear,
    "May "  + nextYear, "June "  + nextYear, "July "  + nextYear, "August "  + nextYear,
     "September "  + nextYear, "October "  + nextYear, "November "  + nextYear, "December "  + nextYear
      ];
      monthNames[-1] = "December "  + lastYear
      monthNames[-2] = "November " + lastYear
      monthNames[-3] = "October " + lastYear
      monthNames[-4] = "September " + lastYear
      monthNames[-5] = "August " + lastYear
      monthNames[-6] = "July " + lastYear
      monthNames[-7] = "June " + lastYear
      monthNames[-8] = "May " + lastYear
      monthNames[-9] = "April " + lastYear
      monthNames[-10] = "March " + lastYear
      monthNames[-11] = "February " + lastYear
      monthNames[-12] = "January " + lastYear
    return (
    <div>
      <h2>Expenses</h2>
      <br></br>
      <br></br>

      <h3>Total expenses of the previous months</h3>
      <br></br>
      <div className='overflow-x bg-gray p-10 table-borders'>
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
          <td>{value.toFixed(2)}$</td>
          {index + 1 != this.state.totalPerMonth.length && this.state.variationPerMonth[index] < 0 &&
        <td className='green-text'>{this.state.variationPerMonth[index].toFixed(2)}$</td>}
        {index + 1 != this.state.totalPerMonth.length && this.state.variationPerMonth[index] > 0 &&
          <td className='red-text'>+{this.state.variationPerMonth[index].toFixed(2)}$</td>
      }
      {index + 1 != this.state.totalPerMonth.length && this.state.variationPerMonth[index] == 0 &&
          <td>{this.state.variationPerMonth[index].toFixed(2)}$</td>
      }
        </tr>))}
        </tbody>
      </table>
      </div>
      <br></br>
      <br></br>
        
      {this.state.averageVariationPerMonth < 0 &&
        <h3>Average variation per month : <span className='green-text'>{this.state.averageVariationPerMonth.toFixed(2)}$</span></h3>}
        {this.state.averageVariationPerMonth > 0 &&
          <h3>Average variation per month : <span className='red-text'>+{this.state.averageVariationPerMonth.toFixed(2)}$</span></h3>
      }
      {this.state.averageVariationPerMonth == 0 &&
          <h3>Average variation per month : <span>{this.state.averageVariationPerMonth.toFixed(2)}$</span></h3>
      }

      <br></br>
      <br></br>

      <h3>Projection of the total expenses for the upcoming months</h3>
      <br></br>
      <div className='overflow-x bg-gray p-10 table-borders'>
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
          <td>{value.toFixed(2)}$</td>
          {this.state.averageVariationPerMonth < 0 &&
        <td className='green-text'>{this.state.averageVariationPerMonth.toFixed(2)}$</td>}
        {this.state.averageVariationPerMonth > 0 &&
          <td className='red-text'>+{this.state.averageVariationPerMonth.toFixed(2)}$</td>
      }
      {this.state.averageVariationPerMonth == 0 &&
          <td>{this.state.averageVariationPerMonth.toFixed(2)}$</td>
      }
        </tr>))}
        </tbody>
      </table>
      </div>
<br></br>
<br></br>
<h2>Revenues</h2>
      <br></br>
      <br></br>
      <h3>Total revenues of the previous months</h3>
      <br></br>
<div className='overflow-x bg-gray p-10 table-borders'>
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
    <td>{value.toFixed(2)}$</td>
    {index + 1 != this.state.totalPerMonthRevenues.length && this.state.variationPerMonthRevenues[index] < 0 &&
  <td className='red-text'>{this.state.variationPerMonthRevenues[index].toFixed(2)}$</td>}
  {index + 1 != this.state.totalPerMonthRevenues.length && this.state.variationPerMonthRevenues[index] > 0 &&
    <td className='green-text'>+{this.state.variationPerMonthRevenues[index].toFixed(2)}$</td>
}
{index + 1 != this.state.totalPerMonthRevenues.length && this.state.variationPerMonthRevenues[index] == 0 &&
    <td>{this.state.variationPerMonthRevenues[index].toFixed(2)}$</td>
}
  </tr>))}
  </tbody>
</table>
</div>
<br></br>
<br></br>
  
{this.state.averageVariationPerMonthRevenues < 0 &&
  <h3>Average variation per month : <span className='red-text'>{this.state.averageVariationPerMonthRevenues.toFixed(2)}$</span></h3>}
  {this.state.averageVariationPerMonthRevenues > 0 &&
    <h3>Average variation per month : <span className='green-text'>+{this.state.averageVariationPerMonthRevenues.toFixed(2)}$</span></h3>
}
{this.state.averageVariationPerMonthRevenues == 0 &&
    <h3>Average variation per month : <span>{this.state.averageVariationPerMonthRevenues.toFixed(2)}$</span></h3>
}

<br></br>
<br></br>

<h3>Projection of the total revenues for the upcoming months</h3>
<br></br>
<div className='overflow-x bg-gray p-10 table-borders'>
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
    <td>{value.toFixed(2)}$</td>
    {this.state.averageVariationPerMonthRevenues < 0 &&
  <td className='red-text'>{this.state.averageVariationPerMonthRevenues.toFixed(2)}$</td>}
  {this.state.averageVariationPerMonthRevenues > 0 &&
    <td className='green-text'>+{this.state.averageVariationPerMonthRevenues.toFixed(2)}$</td>
}
{this.state.averageVariationPerMonthRevenues == 0 &&
    <td>{this.state.averageVariationPerMonthRevenues.toFixed(2)}$</td>
}
  </tr>))}
  </tbody>
</table>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
        
    </div>
    );
  }
}

export default ProjectionsChart;