require("dotenv").config();

const {
  PORT = 3000,
  DB_URI = "mongodb://localhost:27017/alfadb",
  NODE_ENV,
  JWT_SECRET,
} = process.env;

const DEV_SECRET = "super-dev-secret-key";
const SECRET_KEY =
  NODE_ENV === "production" && JWT_SECRET ? JWT_SECRET : DEV_SECRET;

module.exports = {
  PORT,
  DB_URI,
  SECRET_KEY,
  NODE_ENV,
};
