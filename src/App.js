import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodeEditorPage from './components/CodeEditorPage';
import FeedbackPage from './components/FeedbackPage';
import RankingPage from './components/RankingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/code-editor" element={<CodeEditorPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/ranking" element={<RankingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
