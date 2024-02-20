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
// module.exports.getAdsByScreen = (req, res) => {};
