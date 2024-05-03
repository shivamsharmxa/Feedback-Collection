// FeedbackCard.js

import React from 'react';
import './FeedbackCard.css';

const FeedbackCard = ({ name, email, feedbackType, rating, comments }) => {
    // Function to generate star icons based on rating
    const renderStars = () => {
      const stars = [];
      for (let i = 0; i < rating; i++) {
        stars.push(<span key={i} className="star">&#9733;</span>); // Unicode character for star
      }
      return stars;
    };
  
    return (
      <div className="feedback-card">
        <div className="card-content">
          <div className="card-column">
            <div className="card-item">
              <strong>Name:</strong> {name}
            </div>
            <div className="card-item">
              <strong>Email:</strong> {email}
            </div>
            <div className="card-item">
              <strong>Feedback Type:</strong> {feedbackType}
            </div>
            <div className="card-item">
              <strong>Rating:</strong> {renderStars()}
            </div>
            <div className="card-item">
              <strong>Comments:</strong> {comments}
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default FeedbackCard;