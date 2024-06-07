import React from 'react';
import '../styles/FeedbackPageFooter.css';

const FeedbackPageFooter = () => {
  return (
    <footer className="feedback-footer">
      {/* 다른 참여자들의 문제를 볼 수 있는 버튼 */}
      <button className="footer-button">View Other Participants' Problems</button>
    </footer>
  );
};

export default FeedbackPageFooter;
