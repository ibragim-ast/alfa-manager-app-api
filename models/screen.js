const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

module.exports = mongoose.model("screen", screenSchema);
