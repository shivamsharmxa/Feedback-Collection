// FeedbackForm.js

import React, { useState } from 'react';
import EmojiSlider from './EmojiSlider';
import './FeedbackForm.css';
import 'fontsource-roboto';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    rating: '',
    comments: ''
  });

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
      <h2 className="form-title">Feedback Form</h2>
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
    </div>
  );
};

export default FeedbackForm;

