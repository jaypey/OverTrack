import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

const PieChart = ({ data, labels, colors }) => {
  const [randomId] = useState(Math.random().toString());
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    instance?.destroy();

    const chartData =  {
      datasets: [{
          label: labels,
          data: data, 
          backgroundColor: colors
        }]
    };

    const config = {
      type: 'pie',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            label: t => `${labels[t.index]}: ${data[t.index]}%`
          },
        },
        legend: {
          display: true,
          position: 'right',
          labels: {
            
          },
        },
      },
    }

    const newInstance = new Chart(document.getElementById(randomId), config);

    setInstance(newInstance);
  }, [data, labels, colors]);

  return (
    <div>
      <canvas id={randomId} style={{ width: '50%' }} />
    </div>
  );
};

PieChart.propTypes = {
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

export default PieChart;