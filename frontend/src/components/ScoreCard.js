import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ScoreCard = ({ score }) => {
  const { overall, components, grade } = score;

  const data = {
    labels: ['Documentation', 'Code Quality', 'Consistency', 'Impact', 'Depth'],
    datasets: [
      {
        data: [
          components.documentation,
          components.code_quality,
          components.consistency,
          components.impact,
          components.depth
        ],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],
        borderWidth: 0
      }
    ]
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  const getGradeColor = (grade) => {
    const colors = {
      'A': '#4caf50',
      'B': '#8bc34a',
      'C': '#ffc107',
      'D': '#ff9800',
      'F': '#f44336'
    };
    return colors[grade] || '#999';
  };

  return (
    <div className="score-card">
      <div className="score-main">
        <div className="score-chart">
          <Doughnut data={data} options={options} />
          <div className="score-center">
            <span className="overall-score">{overall}</span>
            <span className="score-label">Overall</span>
          </div>
        </div>
        
        <div className="score-grade" style={{ backgroundColor: getGradeColor(grade) }}>
          <span className="grade-label">Grade</span>
          <span className="grade-value">{grade}</span>
        </div>
      </div>

      <div className="score-details">
        {Object.entries(components).map(([key, value]) => (
          <div key={key} className="score-item">
            <span className="score-item-label">{key.replace('_', ' ').toUpperCase()}</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${value}%` }}></div>
            </div>
            <span className="score-item-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCard;