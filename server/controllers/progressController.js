const Progress = require("../models/Progress");

// ==========================
// Add Progress
// ==========================
const addProgress = async (req, res) => {
  try {
    const progress = await Progress.create(req.body);

    res.status(201).json({
      message: "Progress Added Successfully",
      progress,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Get All Progress
// ==========================
const getProgress = async (req, res) => {
  try {
    const progress = await Progress.find().populate("clientId");

    res.status(200).json({
      message: "Progress Retrieved Successfully",
      progress,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Update Progress
// ==========================
const updateProgress = async (req, res) => {
  try {
    const progress = await Progress.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!progress) {
      return res.status(404).json({
        message: "Progress Not Found",
      });
    }

    res.status(200).json({
      message: "Progress Updated Successfully",
      progress,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Delete Progress
// ==========================
const deleteProgress = async (req, res) => {
  try {
    const progress = await Progress.findByIdAndDelete(req.params.id);

    if (!progress) {
      return res.status(404).json({
        message: "Progress Not Found",
      });
    }

    res.status(200).json({
      message: "Progress Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addProgress,
  getProgress,
  updateProgress,
  deleteProgress,
};