// src/components/FeedbackForm/EmojiSlider.js

import React, { useState } from 'react';
import './EmojiSlider.css';

const EmojiSlider = ({ label, value, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const handleChange = (newValue) => {
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const emojis = [
    { value: 1, label: '😢', description: 'Very Sad', color: '#ff4d4d' },
    { value: 2, label: '😔', description: 'Sad', color: '#ffa64d' },
    { value: 3, label: '😐', description: 'Neutral', color: '#ffc04d' },
    { value: 4, label: '🙂', description: 'Happy', color: '#4dff4d' },
    { value: 5, label: '😃', description: 'Very Happy', color: '#4dffff' }
  ];

  return (
    <div className="emoji-slider">
      <label>{label}</label>
      <div className="emoji-container">
        {emojis.map(emoji => (
          <button
            key={emoji.value}
            className={selectedValue === emoji.value ? 'selected' : ''}
            style={{ backgroundColor: emoji.color }}
            onClick={() => handleChange(emoji.value)}
            title={emoji.description}
          >
            {emoji.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmojiSlider;
