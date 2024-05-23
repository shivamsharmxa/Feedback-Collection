// Main feedback form file

import React,{useState} from 'react';
import FeedbackForm from './FeedbackForm';
import FeedbackCard from '../Card/FeedbackCard';

function MainForm() {
    const [feedbackData, setFeedbackData] = useState([]);
  
    const handleFeedbackSubmit = (data) => {
      // Update the state with the new feedback data
      setFeedbackData([...feedbackData, data]);
    };

    return(
        <div className="container">

            {/* Pass the onSubmit function to the FeedbackForm component */}
           <FeedbackForm onSubmit={handleFeedbackSubmit} />
           <div className="feedback-cards-container">

            {/* Render feedback cards based on the feedbackData state */}
            {feedbackData.map((feedback, index) => (
            <FeedbackCard
            key={index}
            name={feedback.name}
            email={feedback.email}
            feedbackType={feedback.feedbackType}
            />
            ))} 
          </div>
        </div>  
    );
}    
export default MainForm;