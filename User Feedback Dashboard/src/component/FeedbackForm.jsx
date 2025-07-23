import React, { useState } from "react";
import "./FeedbackForm.css"; // Assuming you have some styles for the form

function FeedbackForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: Date.now(),
      ...form,
    };
    onAdd(newFeedback);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            required
            onChange={handleChange}
            placeholder="Your name"
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            required
            onChange={handleChange}
            placeholder="Your email"
          />
        </label>
      </div>
      <div>
        <label>
          Feedback Message:
          <textarea
            name="message"
            value={form.message}
            required
            onChange={handleChange}
            placeholder="Your feedback"
          />
        </label>
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
