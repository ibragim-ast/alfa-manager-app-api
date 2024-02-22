const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

managerSchema.statics.findUserByCredentials = function (name, password) {
  return this.findOne({ name }).then((manager) => {
    if (!manager) {
      return Promise.reject(new Error("Неправильные данные"));
    }

    return bcrypt.compare(password, manager.password).then((matched) => {
      if (!matched) {
        return Promise.reject(new Error("Неправильные данные"));
      }
      return manager;
    });
  });
};

module.exports = mongoose.model("manager", managerSchema);
