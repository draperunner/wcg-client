import React from 'react';
import { Bar, defaults } from 'react-chartjs-2';

const BarChart = (props) => {
  defaults.global.legend.display = false;
  const data = {
    labels: ['Abakus', 'Online'],
    datasets: [{
      data: props.data || [19, 12],
      backgroundColor: [
        '#b1281c',
        '#004b80',
      ],
      borderColor: [
        '#b1281c',
        '#004b80',
      ],
    }],
  };

  const options = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          // Format y values. Add space for each thousand. Example: 45000000 -> 45 000 000
          callback: value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
        },
      }],
    },
  };

  return <Bar data={data} options={options} />;
};

BarChart.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.number,
  ),
};

export default BarChart;
