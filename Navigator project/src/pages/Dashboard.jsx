// src/pages/Dashboard.jsx
import React from "react";
import { useAuth } from "../components/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard</h1>
      <p>
        Welcome, <strong>{user?.email}</strong> 🎉
      </p>
    </div>
  );
};

export default Dashboard;
