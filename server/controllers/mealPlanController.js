const MealPlan = require("../models/MealPlan");

// ==========================
// Add Meal Plan
// ==========================
const addMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.create(req.body);

    res.status(201).json({
      message: "Meal Plan Added Successfully",
      mealPlan,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Get All Meal Plans
// ==========================
const getMealPlans = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find().populate("clientId");

    res.status(200).json({
      message: "Meal Plans Retrieved Successfully",
      mealPlans,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Update Meal Plan
// ==========================
const updateMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!mealPlan) {
      return res.status(404).json({
        message: "Meal Plan Not Found",
      });
    }

    res.status(200).json({
      message: "Meal Plan Updated Successfully",
      mealPlan,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// Delete Meal Plan
// ==========================
const deleteMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findByIdAndDelete(req.params.id);

    if (!mealPlan) {
      return res.status(404).json({
        message: "Meal Plan Not Found",
      });
    }

    res.status(200).json({
      message: "Meal Plan Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addMealPlan,
  getMealPlans,
  updateMealPlan,
  deleteMealPlan,
};