import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-header">
        <div className="timer">
          Time: {/* 시간 표시 */}
        </div>
        <div className="actions">
          <button className="header-button">Run Code</button>
          <button className="header-button">Submit Code</button>
          <div className="profile">
            <span>Profile</span>
            <button className="header-button">Logout</button>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="problem-indicator">
          {/* 문제 번호 표시 */}
        </div>
        <div className="status">
          {/* 상태 표시 */}
        </div>
        <div className="language-selector">
          <span>Language: Python</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
