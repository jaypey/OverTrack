import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import BarChart from '../shared/BarChart';
import PieChart from './PieChart';
import { Reports } from '../../api/main';
import { Alerts } from '../../helpers/main';
import { Numerics } from '../../helpers/main';

const Year = ({ availableYears }) => {
  const [year, setYear] = useState(availableYears[0]);
  const [yearTotal, setYearTotal] = useState(0);
  const [categoryTotals, setCategoryTotals] = useState([]);
  const [categoryAverages, setCategoryAverages] = useState([]);
  const [averageRange, setAverageRange] = useState([]);
  const barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState({
    data: [],
    colors: [],
    labels: [],
  });

  const handleYearChange = e => setYear(e.target.value);

  useEffect(() => {
    Reports.prediction({ year }).then(
      (resp) => {
        const barChartDatasets = resp.categories.map((c) => {
          const dataPoints = barChartLabels.map((mon) => {
            const amount = resp.category_amounts_by_month.find((a) => a.month == mon && a.category == c.name)?.amount;
            return Numerics.centsToFloat(amount || 0);
          });
          return { label: c.name, data: dataPoints, backgroundColor: c.color };
        });

        const pieChartDatasets = [];
        const pieChartLabels = [];
        const pieChartColors = [];
        resp.categories.forEach((c) => {
          pieChartLabels.push(c.name);
          pieChartColors.push(c.color);
          const percentage = resp.category_percentages.find((p) => p.category === c.name)?.percentage;
          pieChartDatasets.push(Numerics.floatToPercent(percentage || 0));
        });

        setBarChartData(barChartDatasets);
        setPieChartData({ data: pieChartDatasets, colors: pieChartColors, labels: pieChartLabels });
        setCategoryTotals(resp.category_totals);
        setCategoryAverages(resp.category_averages_for_year.averages);
        setAverageRange([resp.category_averages_for_year.start_date, resp.category_averages_for_year.end_date]);
        setYearTotal(resp.total);
      },
      () => { Alerts.genericError(); },
    );
  }, [year]);

  return (
    <div>
      <div className="flex flex-space-between mb-30">
        <div className="input-group inline">
          <select value={year} onChange={handleYearChange}>
            {availableYears.map(yr => <option key={yr} value={yr}>{yr}</option>)}
          </select>
        </div>
      </div>

      <div className="chart-container">
        <BarChart
          data={barChartData}
          labels={barChartLabels}
          hideLegend
          stacked
        />
      </div>

      </div>
  );
};

Year.propTypes = {
  availableYears: PropTypes.array.isRequired,
};

export default Year;
