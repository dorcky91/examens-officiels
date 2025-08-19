// views/routes/userRoutesLoader.js
const { errors } = require("celebrate");
const examAnglaisRouter = require("../views/routes/anglais.routes");
const BASE_URL = "/api/examAnglais"; // Ruta base definida aquí

module.exports = (app) => {
  app.use(BASE_URL, examAnglaisRouter, errors());
};
