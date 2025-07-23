import React from "react";
import "../App.css"; // CSS is included in App.css

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
