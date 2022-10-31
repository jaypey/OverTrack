import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import BarChart from '../shared/BarChart';
import PieChart from '../shared/PieChart'
import { Reports } from '../../api/main';
import { Alerts } from '../../helpers/main';

const Chart = ({ month, type, revenue }) => {
  const [chartdata, setChartdata] = useState({ data: [], labels: [], colors: [] });
  
  
  useEffect(() => {
    if (type == "PIE") {
      Reports.month({ month }).then(
        (resp) => {
          var other = 100;
          const datasets = [
            { label: 'Category', data: [] },
            { label: 'Pourcentage', data: [] },
            { label: 'Color', data: [] }
          ];
          resp.category_totals.forEach((r) => {
            datasets[0].data.push(r.category);
            datasets[1].data.push((r.spend/revenue));
            datasets[2].data.push(r.color);
            other -= (r.spend/revenue);
          });

          if (other > 0) {
            datasets[0].data.push("revenues");
            datasets[1].data.push(other);
          }
          setChartdata(datasets[1], datasets[0]);
        },
        () => { Alerts.error("The data for the pie chart didn't load correctly!") }
      );
    }
    else if("BAR") {
      Reports.month({ month }).then(
        (resp) => {
          const labels = resp.category_totals.map((r) => r.category);
          const datasets = [
            { label: 'Spend', backgroundColor: '#8295e0', data: [] },
            {
              label: `Average (${moment(resp.category_averages_for_year.start_date).format('M/D')} - ${moment(resp.category_averages_for_year.end_date).format('M/D')})`,
              backgroundColor: '#deeefe',
              data: [],
            },
            { label: 'Goal', backgroundColor: '#d8a384', data: [] },
          ];
          resp.category_totals.forEach((r) => {
            datasets[0].data.push(r.spend / 100);
            const avg = resp.category_averages_for_year.averages.find(a => a.category === r.category)?.amount || 0;
            datasets[1].data.push(avg / 100);
            datasets[2].data.push(r.monthly_goal / 100);
          });
  
          setChartdata({ data: datasets, labels });
        },
        () => { Alerts.genericError(); },
      );
    }
  }, [month]);

  if (type === "PIE") { 
    <div className="chart-container-short">
      <PieChart data={chartdata.data} labels={chartdata.labels} colors={chartdata.colors} />
    </div>
  }
  else if (type === "BAR") {
    return (
      <div className="chart-container-short">
        <BarChart data={chartdata.data} labels={chartdata.labels} hideLegend />
      </div>
    );
  }
  else {
    return (
      <div className="chart-container-short">
        No type selected!
      </div>
    );
  }
};

Chart.propTypes = {
  month: PropTypes.string.isRequired,
};

export default Chart;
