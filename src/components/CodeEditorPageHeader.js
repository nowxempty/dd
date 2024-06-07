import React, { useState, useEffect } from 'react';
import '../styles/CodeEditorPageHeader.css';

const CodeEditorPageHeader = ({ runCode, submitCode }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="code-editor-header">
      <div className="top-header">
        <div className="timer">Time: {time}s</div>
        <div className="actions">
          <button className="header-button" onClick={runCode}>Run Code</button>
          <button className="header-button" onClick={submitCode}>Submit Code</button>
          <div className="profile">
            <span>Profile</span>
            <button className="header-button">Logout</button>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="problem-indicator">Problem 1</div>
        <div className="language-selector">Language: Python</div>
      </div>
    </header>
  );
};

export default CodeEditorPageHeader;
