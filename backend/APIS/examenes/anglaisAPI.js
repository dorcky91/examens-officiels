// views/routes/userRoutesLoader.js
const { errors } = require("celebrate");
const examenAnglaisRouter = require("../../views/routes/examenes/anglais.routes");
const BASE_URL = "/api/exam-anglais"; // Ruta base definida aquí

module.exports = (app) => {
  app.use(BASE_URL, examenAnglaisRouter, errors());
};
