const router = require("express").Router();
const { createManager, login } = require("../controllers/managers");
const { auth } = require("../middlewares/auth");

const adsRouter = require("./ads");
const screensRouter = require("./screens");
const managersRouter = require("./managers");
const ResourceNotFoundError = require("../errors/ResourceNotFoundError");

// Маршрут для входа пользователя
router.post("/signin", login);
// Маршрут для регистрации нового пользователя
router.post("/signup", createManager);

// Применение middleware для аутентификации пользователя
router.use(auth);

// Подключение маршрута для работы с рекламами
router.use("/ads", adsRouter);
// Подключение маршрута для работы с экранами
router.use("/screens", screensRouter);

router.all("*", (req, res, next) =>
  next(new ResourceNotFoundError("Неверный URL запроса"))
);

module.exports = router;
