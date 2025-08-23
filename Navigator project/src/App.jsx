// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/components/AuthContext";

import Home from "../src/pages/Home";
import Login from "../src/components/Login";
import Register from "../src/components/Register";
import ProtectedRoute from "../src/Routes/ProtectedRoute";
import Addproduct from "../src/pages/Addproduct";
import Product from "../src/pages/Product";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />

        {/* Protect add product */}
        <Route
          path="/Addproduct"
          element={
            <ProtectedRoute>
              <Addproduct />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
