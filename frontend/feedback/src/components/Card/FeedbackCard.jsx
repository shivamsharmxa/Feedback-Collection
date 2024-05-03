// FeedbackCard.js

import React from 'react';
import './FeedbackCard.css';








const FeedbackCard = ({ name, email, feedbackType, rating }) => {
  // Function to generate emoji rating
  const generateRatingEmoji = () => {
    const ratingEmoji = Array.from({ length: rating }, (_, index) => '⭐️');
    return ratingEmoji.join('');
  };

  return (
    <div className="feedback-card">
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-email">{email}</p>
        <p className="card-feedback">{feedbackType}</p>
        <div className="rating">
          <span>Rating:</span>
          <span>{generateRatingEmoji()}</span>
        </div>
      </div>
    </div>
  );
};




export default FeedbackCard;
