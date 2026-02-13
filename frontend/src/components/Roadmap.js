import React from 'react';

const Roadmap = ({ roadmap }) => {
  const { timeline, priority_focus, estimated_impact } = roadmap;

  return (
    <div className="roadmap">
      <h3>🎯 Improvement Roadmap</h3>
      
      <div className="priority-focus">
        <strong>Priority Focus:</strong> {priority_focus}
      </div>

      <div className="timeline">
        {Object.entries(timeline).map(([period, data]) => (
          <div key={period} className="timeline-period">
            <h4>{data.timeframe}</h4>
            {data.actions && (
              <ul>
                {data.actions.map((action, i) => (
                  <li key={i}>
                    <strong>{action.task || action.goal}</strong>
                    {action.details && <p>{action.details}</p>}
                    {action.tasks && (
                      <ul className="sub-tasks">
                        {action.tasks.map((task, j) => <li key={j}>{task}</li>)}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="impact-estimate">
        <h4>📈 Estimated Impact</h4>
        <div className="impact-score">
          <span>Current: {estimated_impact.current_score}</span>
          <span>→</span>
          <span>Potential: {estimated_impact.potential_score}</span>
          <span className="improvement">+{estimated_impact.improvement}</span>
        </div>
        <p className="timeframe">{estimated_impact.timeframe}</p>
      </div>
    </div>
  );
};

export default Roadmap;