// views/routes/userRoutesLoader.js
const { errors } = require("celebrate");
const usersRouter = require("../views/routes/users.routes");
const BASE_URL = "/api/usuarios"; // Ruta base definida aquí

module.exports = (app) => {
  app.use(BASE_URL, usersRouter, errors());
};
