// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
  const labels = Object.keys(data);
  const values = labels.map((key) => data[key].value);
  const colors = labels.map((key) => data[key].color);

  const chartData = {
    labels, // X-axis labels
    datasets: [
      {
        label: 'Technology Usage', // Label for the dataset
        data: values, // Data values
        backgroundColor: colors, // Bar colors
        borderColor: colors.map(color => color), // Border colors
        borderWidth: 1, // Border width
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: false,
        text: 'Technology Usage Breakdown', // Chart title
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Y-axis starts at zero
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
