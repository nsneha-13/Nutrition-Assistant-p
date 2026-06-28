const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoutes");
const mealPlanRoutes = require("./routes/mealPlanRoutes");
const progressRoutes = require("./routes/progressRoutes");

const app = express();
connectDB();
// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/mealplans", mealPlanRoutes);
app.use("/api/progress", progressRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Nutrition Assistant Backend is Running Successfully 🚀"
  });
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});