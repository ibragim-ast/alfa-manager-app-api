const router = require("express").Router(); // создали роутер
const {
  createAd,
  getAds,
  getAdsByScreen,
  getAd,
  updateAd,
  deleteAd,
} = require("../controllers/ads");

// Роутер создания рекламы
router.post("/", createAd);

// Роутер получения всех реклам
router.get("/", getAds);

// Роутер получения конкретной рекламы
router.get("/:id", getAd);

// Роутер получения всех реклам с одного экрана
router.get("/screen/:screenId", getAdsByScreen);

// Роутер изменения рекламы
router.patch("/:id", updateAd);

// Роутер удаления рекламы
router.delete("/:id", deleteAd);

module.exports = router;
