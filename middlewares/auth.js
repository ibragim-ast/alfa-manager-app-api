const jwt = require("jsonwebtoken");
const UnauthorizedError = require("../errors/UnauthorizedError");
const { UNAUTHORIZED_ACCESS } = require("../utils/constants");
const { SECRET_KEY } = require("../utils/config");

// Функция обработки ошибки авторизации
const handleAuthError = () => {
  throw new UnauthorizedError(UNAUTHORIZED_ACCESS);
};

// Мидлвар для проверки на наличие токена
module.exports.auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    handleAuthError();
  }

  const token = authorization.replace("Bearer ", "");
  let payload;

  try {
    payload = jwt.verify(token, SECRET_KEY);
  } catch (err) {
    handleAuthError();
  }
  req.manager = payload;

  next();
};
