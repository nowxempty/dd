import React from 'react';
import '../styles/FeedbackPageHeader.css';

const FeedbackPageHeader = () => {
  return (
    <header className="feedback-header">
      <div className="top-header">
        <div className="actions">
          <button className="header-button">Add Sticker</button>
          <div className="profile">
            <span>Profile</span>
            <button className="header-button">Logout</button>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="problem-selector">Problem Selector</div>
      </div>
    </header>
  );
};

export default FeedbackPageHeader;
