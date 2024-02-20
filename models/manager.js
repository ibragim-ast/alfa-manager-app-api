const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

const manager = mongoose.model("manager", managerSchema);

module.exports = manager;
