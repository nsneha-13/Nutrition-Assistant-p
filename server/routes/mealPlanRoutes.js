const express = require("express");
const router = express.Router();

const {
  addMealPlan,
  getMealPlans,
  updateMealPlan,
  deleteMealPlan,
} = require("../controllers/mealPlanController");

// Add Meal Plan
router.post("/add", addMealPlan);

// Get All Meal Plans
router.get("/", getMealPlans);

// Update Meal Plan
router.put("/:id", updateMealPlan);

// Delete Meal Plan
router.delete("/:id", deleteMealPlan);

module.exports = router;