import React from 'react';
import { Chart } from 'react-chartjs-2';

const GanttChart = () => {
  // Gantt chart configuration
  const data = {
    datasets: [
      {
        label: 'Tasks',
        data: [
          {
            x: new Date('2023-06-01'),
            y: 'Task 1',
            from: new Date('2023-06-01'),
            to: new Date('2023-06-10'),
          },
          {
            x: new Date('2023-06-05'),
            y: 'Task 2',
            from: new Date('2023-06-05'),
            to: new Date('2023-06-15'),
          },
          // Add more tasks as needed
        ],
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        time: {
          unit: 'day',
        },
      },
      y: {
        type: 'category',
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default GanttChart;
