import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <FaGithub className="github-icon" />
          <h1>GitHub Portfolio Analyzer</h1>
        </div>
        <nav>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;