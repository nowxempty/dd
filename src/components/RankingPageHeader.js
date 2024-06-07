import React from 'react';
import '../styles/RankingPageHeader.css';

const RankingPageHeader = () => {
  return (
    <header className="ranking-header">
      <div className="top-header">
        <div className="profile">
          <span>Profile</span>
          <button className="header-button">Logout</button>
        </div>
      </div>
      <div className="bottom-header">
        <div className="status">Status: Ranking</div>
      </div>
    </header>
  );
};

export default RankingPageHeader;
