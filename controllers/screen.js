const Screen = require("../models/screen");

// Создать экран
module.exports.createScreen = (req, res) => {
  const { name, address } = req.body;
  Screen.create({ name, address })
    .then((screen) => res.send({ data: screen }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

// Запросить все экраны
module.exports.getScreens = (req, res) => {
  console.log("Запрос выдачи всех экранов получен");
  Screen.find({})
    .then((screens) => res.send({ data: screens }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

// Запросить конкретный экран
module.exports.getScreen = (req, res) => {
  Screen.findById(req.params.id)
    .then((screen) => res.send({ data: screen }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

// Обновить экран
module.exports.updateScreen = (req, res) => {
  Screen.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((screen) => res.send({ data: screen }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

// Удалить экран
module.exports.deleteScreen = (req, res) => {
  Screen.deleteOne(req.params.id)
    .then((screen) => res.send({ data: screen }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};
