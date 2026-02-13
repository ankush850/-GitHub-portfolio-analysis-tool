import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Loader from './components/Loader';
import { analyzeProfile } from './services/api';
import './styles/App.css';
import { FaGithub, FaSearch, FaLightbulb, FaChartLine, FaUserTie } from 'react-icons/fa';

function App() {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await analyzeProfile(username);
      setProfileData(data);
    } catch (err) {
      console.error('Analysis error:', err);
      setError(err.message || 'Failed to analyze profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      
      <main className="container">
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-icon">
              <FaGithub size={60} />
            </div>
            <h1 className="hero-title">GitHub Portfolio Analyzer</h1>
            <p className="hero-subtitle">Get AI-powered insights on your GitHub profile to optimize your developer career</p>
            
            <form onSubmit={handleAnalyze} className="search-form">
              <div className="input-group">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter GitHub username"
                  className="search-input"
                  autoFocus
                />
                <button type="submit" className="search-button" disabled={loading}>
                  {loading ? 'Analyzing...' : 'Analyze Profile'}
                </button>
              </div>
            </form>

            {error && <div className="error-message">{error}</div>}
          </div>
          
          <div className="feature-highlights">
            <div className="highlight-card">
              <FaChartLine className="highlight-icon" />
              <h3>Detailed Analytics</h3>
              <p>Get comprehensive metrics on your GitHub activity</p>
            </div>
            <div className="highlight-card">
              <FaUserTie className="highlight-icon" />
              <h3>Recruiter Insights</h3>
              <p>See your profile through a recruiter's perspective</p>
            </div>
            <div className="highlight-card">
              <FaLightbulb className="highlight-icon" />
              <h3>Personalized Roadmap</h3>
              <p>Actionable steps to improve your developer profile</p>
            </div>
          </div>
        </section>

        {loading && <Loader />}

        {profileData && !loading && (
          <section className="results-section">
            <Dashboard profileData={profileData} />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;