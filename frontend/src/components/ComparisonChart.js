import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ComparisonChart = ({ score }) => {
  const data = {
    labels: ['You', 'Average Student', 'Top 10%', 'Top 1%'],
    datasets: [
      {
        label: 'Portfolio Score',
        data: [score, 65, 85, 95],
        backgroundColor: [
          '#4caf50',
          '#ff9800',
          '#2196f3',
          '#9c27b0'
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  };

  return (
    <div className="comparison-chart">
      <h3>📊 Benchmark Comparison</h3>
      <Bar data={data} options={options} />
      <p className="chart-note">Compare your score with other profiles</p>
    </div>
  );
};

export default ComparisonChart;