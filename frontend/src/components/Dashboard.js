import React from 'react';
import ScoreCard from './ScoreCard';
import RepositoriesList from './RepositoriesList';
import RecommendationsPanel from './RecommendationsPanel';
import RecruiterFeedback from './RecruiterFeedback';
import Roadmap from './Roadmap';
import ComparisonChart from './ComparisonChart';

const Dashboard = ({ profileData }) => {
  const { user_data, score, repositories, recruiter_feedback, roadmap } = profileData;

  return (
    <div className="dashboard">
      {/* User Info */}
      <div className="user-info-card">
        <img src={user_data.avatar_url} alt={user_data.login} className="avatar" />
        <div className="user-details">
          <h2>{user_data.name || user_data.login}</h2>
          {user_data.bio && <p className="bio">{user_data.bio}</p>}
          <div className="stats">
            <span>📦 {user_data.public_repos} repos</span>
            <span>👥 {user_data.followers} followers</span>
            <span>🔗 <a href={user_data.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a></span>
          </div>
        </div>
      </div>

      {/* Score Card */}
      <ScoreCard score={score} />

      {/* Main Grid */}
      <div className="dashboard-grid">
        <div className="grid-item span-2">
          <RepositoriesList repositories={repositories} />
        </div>
        <div className="grid-item">
          <RecommendationsPanel recommendations={recruiter_feedback.recommendations} />
        </div>
        <div className="grid-item span-2">
          <RecruiterFeedback feedback={recruiter_feedback} />
        </div>
        <div className="grid-item">
          <Roadmap roadmap={roadmap} />
        </div>
        <div className="grid-item">
          <ComparisonChart score={score.overall} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;