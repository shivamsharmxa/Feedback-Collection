// FeedbackForm.js

import React, { useState } from 'react';
import EmojiSlider from './EmojiSlider';
import './FeedbackForm.css';
import FeedbackCard from '../Card/FeedbackCard';


const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    rating: '',
    comments: ''
  });
  const [feedbackData, setFeedbackData] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmojiChange = (value) => {
    setFormData({ ...formData, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log(formData);
    // Add the new feedback data to the feedbackData state
    setFeedbackData([...feedbackData, formData]);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      feedbackType: '',
      rating: '',
      comments: ''
    });
  };
  
  return (
    <div className="feedback-form-container">
      <h2 className="form-title">Feedback Form
      <hr/>
      </h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="feedbackType" className="form-label">Feedback Type:</label>
          <select id="feedbackType" name="feedbackType" value={formData.feedbackType} onChange={handleChange} className="form-select" required>
            <option value="">Select</option>
            <option value="Complaint">Complaint</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Compliment">Compliment</option>
          </select>
        </div>
        
        <div className="form-group">
          <label className="form-label">Rating:</label>
          <EmojiSlider value={formData.rating} onChange={handleEmojiChange} />
        </div>
        
        <div className="form-group">
          <label htmlFor="comments" className="form-label">Comments:</label>
          <textarea id="comments" name="comments" rows="4" value={formData.comments} onChange={handleChange} className="form-textarea" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {/* Display feedback cards */}
      <div className="feedback-cards-container">
        {feedbackData.map((feedback, index) => (
          <FeedbackCard
            key={index}
            name={feedback.name}
            email={feedback.email}
            feedbackType={feedback.feedbackType}
            rating={feedback.rating}
            comments={feedback.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackForm;

