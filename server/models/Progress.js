const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    bmi: {
      type: Number,
      required: true,
    },
    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Progress", progressSchema);