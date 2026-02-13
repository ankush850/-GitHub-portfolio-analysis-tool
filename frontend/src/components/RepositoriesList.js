import React, { useState } from 'react';
import { FaStar, FaCodeBranch, FaExclamationCircle } from 'react-icons/fa';

const RepositoriesList = ({ repositories }) => {
  const [selectedRepo, setSelectedRepo] = useState(null);

  return (
    <div className="repositories-list">
      <h3>Repositories Analysis</h3>
      <div className="repo-grid">
        {repositories.map((repo) => (
          <div 
            key={repo.name} 
            className={`repo-card ${selectedRepo?.name === repo.name ? 'selected' : ''}`}
            onClick={() => setSelectedRepo(repo)}
          >
            <div className="repo-header">
              <h4>{repo.name}</h4>
              <div className="repo-badge" data-grade={repo.score.grade}>
                {repo.score.grade}
              </div>
            </div>
            
            <p className="repo-description">{repo.description || 'No description'}</p>
            
            <div className="repo-metrics">
              <span><FaStar /> {repo.stars}</span>
              <span><FaCodeBranch /> {repo.forks}</span>
              <span><FaExclamationCircle /> {repo.open_issues}</span>
            </div>
            
            <div className="repo-languages">
              {Object.keys(repo.languages).slice(0, 3).map(lang => (
                <span key={lang} className="language-tag">{lang}</span>
              ))}
            </div>

            {selectedRepo?.name === repo.name && (
              <div className="repo-insights">
                <h5>Insights</h5>
                <div className="strengths">
                  <strong>Strengths:</strong>
                  <ul>
                    {repo.strengths.map((s, i) => <li key={i}>✓ {s}</li>)}
                  </ul>
                </div>
                <div className="weaknesses">
                  <strong>Needs Improvement:</strong>
                  <ul>
                    {repo.weaknesses.map((w, i) => <li key={i}>⚠ {w}</li>)}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepositoriesList;