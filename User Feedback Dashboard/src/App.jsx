import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import FeedbackForm from "./component/FeedbackForm";
import FeedbackList from "./component/FeedbackList";
function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?_limit=5")
      .then((response) => setFeedbacks(response.data))
      .catch((error) => console.error("Error fetching feedbacks:", error));
  }, []);

  return (
    <div>
      <h1>User Feedback Dashboard</h1>
      <ul>
        {feedbacks.map((fb) => (
          <li key={fb.id}>
            <strong>{fb.name}</strong>: {fb.body}
          </li>
        ))}
      </ul>
      <FeedbackForm
        onAdd={(newFeedback) => setFeedbacks([...feedbacks, newFeedback])}
      />
      {/* <FeedbackList feedbacks={feedbacks} /> */}
      <p>Total Feedbacks: {feedbacks.length}</p>
    </div>
  );
}

export default App;
