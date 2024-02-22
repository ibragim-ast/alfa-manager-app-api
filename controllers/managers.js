const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Manager = require("../models/manager");
const { SECRET_KEY } = require("../utils/config");

// Контроллер регистрации
module.exports.createManager = (req, res) => {
  const { name, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) =>
      Manager.create({
        name: name,
        password: hash,
      })
    )
    .then((manager) => {
      const { _id, name } = manager;
      res.send({ _id, name });
    })
    .catch((err) => res.status(400).send(err));
};

// Контроллер аутентификации
module.exports.login = (req, res) => {
  const { name, password } = req.body;
  return Manager.findUserByCredentials(name, password)
    .then((manager) => {
      const token = jwt.sign({ _id: manager._id }, SECRET_KEY, {
        expiresIn: "7d",
      });
      res.send({ token });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};
