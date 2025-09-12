import React from "react";
import { Link } from "react-router-dom";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase";
import "../App.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
    console.log("User logged out");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        MyApp
      </Link>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>

        {/* Show only if logged in */}
        {user && (
          <>
            <Link to="/add-product" className="nav-link">
              Add Product
            </Link>
          </>
        )}
      </div>

      <div className="auth-section">
        {!user ? (
          <Link to="/login" className="btn login-btn">
            Login
          </Link>
        ) : (
          <button onClick={handleLogout} className="btn logout-btn">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
