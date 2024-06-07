import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CodeEditorPage from './components/CodeEditorPage';
import FeedbackPage from './components/FeedbackPage';
import RankingPage from './components/RankingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Header.css';
import './styles/Footer.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<CodeEditorPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/ranking" element={<RankingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
