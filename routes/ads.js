const router = require("express").Router(); // создали роутер
const { createAd } = require("../controllers/ads");

router.post("/", createAd);

module.exports = router;
