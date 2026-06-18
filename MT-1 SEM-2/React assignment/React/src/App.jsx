import React from "react";

function App() {
  // Page Styling
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#e5e5e5",
    fontFamily: "Arial, sans-serif",
  };

  // Form Container Styling
  const formStyle = {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  // Heading Styling
  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  // Input Styling
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  // Button Styling
  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={pageStyle}>
      <form style={formStyle}>
        <h2 style={headingStyle}>Student Registration Form</h2>

        <input
          type="text"
          placeholder="Student Name"
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Email"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Course"
          style={inputStyle}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;