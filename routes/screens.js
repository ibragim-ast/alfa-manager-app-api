const router = require("express").Router(); // создали роутер

const {
  createScreen,
  getScreens,
  getScreen,
  updateScreen,
  deleteScreen,
} = require("../controllers/screen");

// Создать экран
router.post("/", createScreen);

// Запрос одного экрана
router.get("/:id", getScreen);

// Запрос всех экранов
router.get("/", getScreens);

// Обновить экран
router.patch("/:id", updateScreen);

// Удалить экран
router.delete("/:id", deleteScreen);

module.exports = router;
