const Screen = require("../models/screen");

// Контроллер создания экрана
module.exports.createScreen = (req, res) => {
  const { name, address } = req.body;
  Screen.create({ name, address })
    .then((screen) => res.send({ data: screen }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

// Контроллер запроса всех экранов
module.exports.getScreens = (req, res) => {
  console.log("Запрос выдачи всех экранов получен");
  Screen.find({})
    .then((screens) => res.send({ data: screens }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

// Контроллер запроса конкретного экранов
module.exports.getScreen = (req, res) => {
  Screen.findById(req.params.id)
    .then((screen) => res.send({ data: screen }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

// Контроллер обновления экрана
module.exports.updateScreen = (req, res) => {
  Screen.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((screen) => res.send({ data: screen }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

// Контроллер удаления экрана
module.exports.deleteScreen = (req, res) => {
  Screen.deleteOne(req.params.id)
    .then((screen) => res.send({ data: screen }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};
