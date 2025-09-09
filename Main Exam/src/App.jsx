// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Product from "./assets/Pages/Product"; // ✅ adjust path if needed
import "./App.css"; // ✅ styling file

const App = () => {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        {/* Navbar */}
        <nav style={{ marginBottom: "20px" }}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              marginRight: "15px",
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "blue" : "black",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              color: isActive ? "blue" : "black",
            })}
          >
            Products
          </NavLink>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<h1>Welcome to My Store </h1>} />
          <Route path="/products" element={<Product />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
