const express = require("express");
const router = express.Router();

const {
  addProgress,
  getProgress,
  updateProgress,
  deleteProgress,
} = require("../controllers/progressController");

// Add Progress
router.post("/add", addProgress);

// Get All Progress
router.get("/", getProgress);

// Update Progress
router.put("/:id", updateProgress);

// Delete Progress
router.delete("/:id", deleteProgress);

module.exports = router;