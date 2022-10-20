import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chart from 'chart.js';

const PieChart = ({ data, labels, colors }) => {
  const [randomId] = useState(Math.random().toString());
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    instance?.destroy();

    const size = data.length;

    const config = {
      type: 'pie',
      data: {
        datasets: [{ data, backgroundColor: colors }],
        labels,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display:true,
          position:'right'
        },
        tooltips: {
          callbacks: {
            label: t => `${labels[t.index]}: ${data[t.index]}%`,
          },
        },
      },
    }

    const newInstance = new Chart(document.getElementById(randomId), config);

    setInstance(newInstance);
  }, [data, labels]);

  return (
    <div>
      <canvas id={randomId} />
    </div>
  );
};

PieChart.propTypes = {
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

export default PieChart;