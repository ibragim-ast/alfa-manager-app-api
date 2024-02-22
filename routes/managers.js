const router = require("express").Router();
const { createManager } = require("../controllers/managers");

// Роутер создания менеджера
router.post("/signup", createManager);
