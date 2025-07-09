import React from "react";

function OS() {
  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#e0f7fa",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "400px",
      margin: "20px auto",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      color: "#00796b",
      fontSize: "24px",
      marginBottom: "10px",
    },
    list: {
      listStyleType: "circle",
      paddingLeft: "20px",
    },
    listItem: {
      color: "#004d40",
      margin: "6px 0",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Mobile Manufacturers</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>Samsung</li>
        <li style={styles.listItem}>HTC</li>
        <li style={styles.listItem}>Micromax</li>
        <li style={styles.listItem}>Apple</li>
      </ul>
    </div>
  );
}

export default OS;
