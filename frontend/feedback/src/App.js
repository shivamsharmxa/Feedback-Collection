// App.js

import React from 'react';
import './App.css';
import FeedbackForm from './components/feedbackForm/FeedbackForm'; 

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1 className="navbar-heading">Feedback Form</h1>
      </nav>
      <FeedbackForm />
    </div>
  );
}

export default App;

