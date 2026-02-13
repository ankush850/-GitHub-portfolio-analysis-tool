import React from 'react';

const RecommendationsPanel = ({ recommendations }) => {
  const getPriorityColor = (priority) => {
    const colors = {
      'Critical': '#f44336',
      'High': '#ff9800',
      'Medium': '#2196f3',
      'Low': '#4caf50'
    };
    return colors[priority] || '#999';
  };

  return (
    <div className="recommendations-panel">
      <h3>Quick Actions</h3>
      <div className="recommendations-list">
        {recommendations.map((rec, index) => (
          <div key={index} className="recommendation-item">
            <div 
              className="priority-indicator" 
              style={{ backgroundColor: getPriorityColor(rec.priority) }}
            >
              {rec.priority}
            </div>
            <h4>{rec.task}</h4>
            <p>{rec.details}</p>
            <div className="recommendation-meta">
              <span className="time-estimate">⏱ {rec.estimated_time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsPanel;