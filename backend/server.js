const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// API Endpoint
app.use("/api", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
