const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
  },
  adTitle: {
    type: String,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  isFreePlacement: {
    type: Boolean,
    default: false,
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "screen",
    required: true,
  },
});

module.exports = mongoose.model("ad", adSchema);
