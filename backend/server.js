const express = require("express");

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Server is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
