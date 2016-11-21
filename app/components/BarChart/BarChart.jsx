import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['Abakus', 'Online'],
    datasets: [{
      label: 'Points',
      data: [19, 12],
      fillColor: 'rgba(220,0,0,1)',
      strokeColor: 'rgba(220,0,0,1)',
      borderWidth: 1,
    }],
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };

  return <Bar data={data} options={options} width="600" height="250" />;
};

export default BarChart;
