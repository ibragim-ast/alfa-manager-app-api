const router = require("express").Router(); // создали роутер
const {
  createAd,
  getAds,
  getAdsByScreen,
  getAd,
  updateAd,
} = require("../controllers/ads");

// Контроллер создания рекламы
router.post("/", createAd);

// Контроллер получения всех реклам
router.get("/", getAds);

// Контроллер получения конкретной рекламы
router.get("/:id", getAd);

// Контроллер получения всех реклам с одного экрана
router.get("/:id/ads", getAdsByScreen);

// Контроллер изменения рекламы
router.patch("/:id", updateAd);

module.exports = router;
