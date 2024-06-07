import React, { useState, useEffect } from 'react';
import RankingPageHeader from './RankingPageHeader';
import RankingPageFooter from './RankingPageFooter';
import '../styles/RankingPage.css';

const RankingPage = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const fetchRankings = async () => {
      const data = [
        { rank: 1, username: 'user1', score: 100 },
        { rank: 2, username: 'user2', score: 90 },
        { rank: 3, username: 'user3', score: 80 },
      ];
      setRankings(data);
    };

    fetchRankings();
  }, []);

  return (
    <div className="ranking-page">
      <RankingPageHeader />
      <div className="content">
        <h2>Ranking Page</h2>
        <ul className="ranking-list">
          {rankings.map(user => (
            <li key={user.rank} className="ranking-item">
              <span className="ranking-rank">{user.rank}</span>
              <span className="ranking-username">{user.username}</span>
              <span className="ranking-score">{user.score}</span>
            </li>
          ))}
        </ul>
      </div>
      <RankingPageFooter />
    </div>
  );
};

export default RankingPage;
