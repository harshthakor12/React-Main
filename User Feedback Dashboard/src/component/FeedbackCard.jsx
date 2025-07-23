import React from "react";

const FeedbackCard = ({ name, email, message }) => {
  return (
    <div className="feedback-card" style={styles.card}>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.email}>{email}</p>
      <p style={styles.message}>{message}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    background: "#fafafa",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  name: {
    margin: "0 0 4px 0",
    fontSize: "1.2em",
  },
  email: {
    margin: "0 0 8px 0",
    color: "#555",
    fontSize: "0.95em",
  },
  message: {
    margin: 0,
    color: "#222",
  },
};

export default FeedbackCard;
