import React from "react";

function Mh() {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f0f4ff",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "400px",
      margin: "20px auto",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      color: "#1a237e",
      fontSize: "24px",
      marginBottom: "10px",
    },
    list: {
      listStyleType: "disc",
      paddingLeft: "20px",
    },
    listItem: {
      margin: "5px 0",
      color: "#37474f",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Mobile Operating System</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>Android</li>
        <li style={styles.listItem}>Blackberry</li>
        <li style={styles.listItem}>iPhone</li>
        <li style={styles.listItem}>Windows Phone</li>
      </ul>
    </div>
  );
}

export default Mh;
