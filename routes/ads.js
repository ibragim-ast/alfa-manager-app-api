const router = require("express").Router(); // создали роутер
const { createAd, getAds } = require("../controllers/ads");

router.post("/", createAd);

router.get("/", getAds);

// router.get("/:screenId", getAdsByScreen);

module.exports = router;
