const mongoose = require("mongoose");

const mealPlanSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    breakfast: {
      type: String,
      required: true,
    },
    lunch: {
      type: String,
      required: true,
    },
    dinner: {
      type: String,
      required: true,
    },
    snacks: {
      type: String,
      default: "",
    },
    calories: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MealPlan", mealPlanSchema);