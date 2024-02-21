const { default: mongoose } = require("mongoose");
const Ad = require("../models/ad");

// Создать рекламу
module.exports.createAd = (req, res) => {
  console.log(req.body);
  const { customer, adTitle, startDate, endDate, isFreePlacement, place } =
    req.body;

  Ad.create({
    customer,
    adTitle,
    startDate,
    endDate,
    isFreePlacement,
    place: place,
  })
    .then((ad) => res.send({ data: ad }))
    .catch((err) => {
      console.error("Произошла ошибка", err);
      res.status(500).send({ message: "Произошла ошибка" });
    });
};

// Запросить все рекламы
module.exports.getAds = (req, res) => {
  Ad.find({})
    .populate("place")
    .then((ads) => res.send({ data: ads }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

// Запросить все рекламы с конкретного экрана
module.exports.getAdsByScreen = (req, res) => {
  console.log("Запрос на получение всех реклам с конкретного экрана получен");
  const screenId = req.params.id;
  console.log(id);
  Ad.find({ place: mongoose.Types.ObjectId(screenId) })
    .populate("place")
    .then((ad) => res.send({ data: ad }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

// Получить конкретную рекламу
module.exports.getAd = (req, res) => {
  Ad.findById(req.params.id)
    .then((ad) => res.send({ data: ad }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

// Изменить рекламу
module.exports.updateAd = (req, res) => {
  Ad.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((ad) => res.send({ data: ad }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};
