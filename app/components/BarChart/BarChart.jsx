import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {
  const data = {
    labels: ['Abakus', 'Online'],
    datasets: [{
      label: 'Points',
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

  const options = {};

  return <Bar data={data} options={options} />;
};

BarChart.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.number,
  ),
};


export default BarChart;
