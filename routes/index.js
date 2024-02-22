const router = require("express").Router();
const { createManager, login } = require("../controllers/managers");
const { auth } = require("../middlewares/auth");

const adsRouter = require("./ads");
const screensRouter = require("./screens");
const managersRouter = require("./managers");

router.post("/signup", createManager);
router.post("/signin", login);

router.use(auth);

router.use("/ads", adsRouter);
router.use("/screens", screensRouter);

module.exports = router;
