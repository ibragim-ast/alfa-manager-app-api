const router = require("express").Router();

const adsRouter = require("./ads");
const screensRouter = require("./screens");

router.use("/ads", adsRouter);
router.use("/screens", screensRouter);

module.exports = router;
