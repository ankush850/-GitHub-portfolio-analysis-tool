import React from 'react';

const RecruiterFeedback = ({ feedback }) => {
  const {
    recruiter_type,
    first_impression,
    decision,
    strengths,
    concerns,
    interview_questions
  } = feedback;

  const getDecisionColor = (decision) => {
    const colors = {
      'HIRE': '#4caf50',
      'MAYBE': '#ff9800',
      'REJECT': '#f44336'
    };
    return colors[decision] || '#999';
  };

  return (
    <div className="recruiter-feedback">
      <div className="feedback-header">
        <h3>👔 Recruiter Simulation</h3>
        <span className="recruiter-type">As a {recruiter_type}</span>
      </div>

      <div className="first-impression">
        <p>{first_impression}</p>
      </div>

      <div className="decision-badge" style={{ backgroundColor: getDecisionColor(decision.decision) }}>
        {decision.decision} · {decision.confidence} confidence
      </div>

      <div className="feedback-grid">
        <div className="strengths-section">
          <h4>✅ Strengths</h4>
          <ul>
            {strengths.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        <div className="concerns-section">
          <h4>⚠️ Concerns</h4>
          <ul>
            {concerns.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </div>

      <div className="interview-questions">
        <h4>🎤 Potential Interview Questions</h4>
        <ol>
          {interview_questions.map((q, i) => <li key={i}>{q}</li>)}
        </ol>
      </div>
    </div>
  );
};

export default RecruiterFeedback;