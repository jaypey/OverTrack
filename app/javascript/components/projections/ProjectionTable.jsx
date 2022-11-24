import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Numerics } from '../../helpers/main';
import Progress from '../shared/Progress';
import GoalFormModal from '../goals/FormModal';
import BarChart from '../shared/BarChart';

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
    totalPerNextMonthsPredictionsRevenues: [],
};

class ProjectionTable extends React.Component {
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
    totalExpensesStudiedAndProjected: [],
    monthsStudiedAndProjected: [],
    positiveColour: '',
    negativeColour: '',
    studiedColour: '',
    projectedColour: '',
  }
  };

reset() {
  this.state.distinctExpenses = [];
  this.state.totalPerMonth = [];
  this.state.variationPerMonth = [];
  this.state.totalPerNextMonthsPredictions = [];
  this.state.totalMonthlyChangePrediction = 0;
  this.state.averageVariationPerMonth = 0;
  this.state.averageVariationPerMonthRevenues = 0;
  this.state.totalExpensesStudiedAndProjected = [];
  this.state.monthsStudiedAndProjected = [];
  this.state.positiveColour = '';
  this.state.negativeColour = '';
  this.state.studiedColour = '';
  this.state.projectedColour = '';
}

getTotalMonthlyAmount() {
  for (let i = 0; i < this.props.studiedMonths; i++)
  {
    this.state.totalPerMonth[i] = 0;
    for (let data of this.props.data) {
      var d = new Date(data.paid_at);
      var currentTime = new Date();
      if (d.getMonth() == (currentTime.getMonth() - 1 - i))
      {
        this.state.totalPerMonth[i] += (data.amount / 100);
      }
      if((currentTime.getMonth() - 1 - i) < 0)
      {
        if ((d.getMonth() == (currentTime.getMonth() - 1 - i + 12)) && (d.getFullYear() != currentTime.getFullYear()))
        {
          this.state.totalPerMonth[i] += (data.amount / 100);
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
      if (this.state.totalPerMonth[0] + this.state.averageVariationPerMonth < 0)
        this.state.totalPerNextMonthsPredictions[i] = 0;
      else
        this.state.totalPerNextMonthsPredictions[i] = this.state.totalPerMonth[0] + this.state.averageVariationPerMonth;
    }
    else
    {
      if (this.state.totalPerNextMonthsPredictions[i - 1] + this.state.averageVariationPerMonth < 0)
        this.state.totalPerNextMonthsPredictions[i] = 0;
      else
        this.state.totalPerNextMonthsPredictions[i] = this.state.totalPerNextMonthsPredictions[i - 1] + this.state.averageVariationPerMonth;
    }
  }
}

checkEnoughDataExpenses() {
  let numberOfMonthWithData = 0;
  for (let i = 0; i < this.props.studiedMonths; i++)
  {
    if (this.state.totalPerMonth[i] > 0)
      numberOfMonthWithData++;
  }
  if (numberOfMonthWithData > 2)
    return true;
  return false;
}

getTotalExpensesStudiedAndProjected() {
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


  for (let i = 0; i < this.state.totalPerMonth.length;i++)
  {
    this.state.totalExpensesStudiedAndProjected[i] = this.state.totalPerMonth[this.state.totalPerMonth.length - i - 1];
    this.state.monthsStudiedAndProjected[i] = monthNames[(d.getMonth() - (this.state.totalPerMonth.length - i))];
  }
  for (let i = this.state.totalPerMonth.length; i < (this.state.totalPerNextMonthsPredictions.length + this.state.totalPerMonth.length); i++)
  {
    this.state.totalExpensesStudiedAndProjected[i] = this.state.totalPerNextMonthsPredictions[i - this.state.totalPerMonth.length];
    this.state.monthsStudiedAndProjected[i] = monthNames[(d.getMonth() + i - this.state.totalPerMonth.length)]
  }
}

getColours() {
    if (this.props.name == "Revenues")
    {
        this.state.positiveColour = "green-text"
        this.state.negativeColour = "red-text"
        this.state.studiedColour = "#00cc00"
        this.state.projectedColour = "#3399ff"
    }
    else
    {
        this.state.positiveColour = "red-text"
        this.state.negativeColour = "green-text"
        this.state.studiedColour = "#ff3300"
        this.state.projectedColour = "#ffcc00"
    }
}

render() {
  this.reset();
  this.getTotalMonthlyAmount();
  this.getAverageVariationPerMonth();
  this.getTotalExpensesProjections();
  this.getTotalExpensesStudiedAndProjected();
  this.getColours();

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
    const barChartDatasetsExpenses = [];

      let valuesStudied = []
      let valuesProjected = []
      for (let i = 0; i < this.state.totalExpensesStudiedAndProjected.length; i++)
      {
        valuesStudied[i] = 0
        valuesProjected[i] = 0
        if (i < this.state.totalPerMonth.length)
        {
          valuesStudied[i] = Numerics.centsToFloat(this.state.totalExpensesStudiedAndProjected[i] * 100 || 0);
        }
        else
        {
          valuesProjected[i] = Numerics.centsToFloat(this.state.totalExpensesStudiedAndProjected[i] * 100 || 0);
        }
      }

      barChartDatasetsExpenses[0] = { label: "Previous", data: valuesStudied, backgroundColor: this.state.studiedColour };
      barChartDatasetsExpenses[1] = { label: "Projected", data: valuesProjected, backgroundColor: this.state.projectedColour };

  return (
  <div>
    <br></br>
    <br></br>
    {this.checkEnoughDataExpenses() &&
    <div>
      <br></br>
<div className="chart-container">
    <BarChart labels={this.state.monthsStudiedAndProjected} data={barChartDatasetsExpenses}
        stacked />
        </div>
      <br></br>
      <br></br>

    <h3>Total {this.props.name} of the previous months</h3>
    <br></br>
    <div className='overflow-x bg-gray p-10 table-borders'>
    <table className='table'>
      <thead>
      <tr>
        <th>Month</th>
        <th>Total {this.props.name}</th>
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
      <td className={this.state.negativeColour}>{this.state.variationPerMonth[index].toFixed(2)}$</td>}
      {index + 1 != this.state.totalPerMonth.length && this.state.variationPerMonth[index] > 0 &&
        <td className={this.state.positiveColour}>+{this.state.variationPerMonth[index].toFixed(2)}$</td>
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
      <h3>Average variation per month : <span className={this.state.negativeColour}>{this.state.averageVariationPerMonth.toFixed(2)}$</span></h3>}
      {this.state.averageVariationPerMonth > 0 &&
        <h3>Average variation per month : <span className={this.state.positiveColour}>+{this.state.averageVariationPerMonth.toFixed(2)}$</span></h3>
    }
    {this.state.averageVariationPerMonth == 0 &&
        <h3>Average variation per month : <span>{this.state.averageVariationPerMonth.toFixed(2)}$</span></h3>
    }

    <br></br>
    <br></br>

    <h3>Projection of the total {this.props.name} for the upcoming months</h3>
    <br></br>
    <div className='overflow-x bg-gray p-10 table-borders'>
    <table className='table'>
      <thead>
      <tr>
        <th>Month</th>
        <th>Total {this.props.name}</th>
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
      <td className={this.state.negativeColour}>{this.state.averageVariationPerMonth.toFixed(2)}$</td>}
      {this.state.averageVariationPerMonth > 0 &&
        <td className={this.state.positiveColour}>+{this.state.averageVariationPerMonth.toFixed(2)}$</td>
    }
    {this.state.averageVariationPerMonth == 0 &&
        <td>{this.state.averageVariationPerMonth.toFixed(2)}$</td>
    }
      </tr>))}
      </tbody>
    </table>
    </div>
</div>
}
{(!(this.checkEnoughDataExpenses())) &&
    <div>
      <h2 className='center-text'>Sorry, we don't have enough data to make the {this.props.name} predictions</h2>
      </div>
}
  </div>
  
  );
}
}

export default ProjectionTable;