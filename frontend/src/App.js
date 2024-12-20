import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  // Fetch data from backend API
  useEffect(() => {
    fetch("/api")  // This should match the backend API endpoint
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Frontend App</h1>
      <p>{message ? message : "Loading..."}</p>
    </div>
  );
}

export default App;
