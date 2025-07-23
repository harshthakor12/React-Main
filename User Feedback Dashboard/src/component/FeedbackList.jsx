import React from "react";
import FeedbackCard from "./FeedbackCard";

const FeedbackList = ({ feedbacks }) => {
  return (
    <div>
      {feedbacks && feedbacks.length > 0 ? (
        feedbacks.map((feedback, index) => (
          <FeedbackCard key={index} feedback={feedback} />
        ))
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
};

export default FeedbackList;
