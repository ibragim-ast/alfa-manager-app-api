const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const router = require("./routes"); // импортируем роутер

const { PORT = 3000 } = process.env;
const app = express();

const dbConnection = "mongodb://localhost:27017/alfadb";
mongoose.connect(dbConnection);
const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Ошибка соединения с MongoDB:", error);
});
db.once("open", () => {
  console.log("Успешное соединение с MongoDB");
});

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
