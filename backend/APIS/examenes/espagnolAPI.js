// views/routes/userRoutesLoader.js
const { errors } = require("celebrate");
const examenEspagnolRouter = require("../../views/routes/examenes/espagnol.routes");
const BASE_URL = "/api/examEspagnol"; // Ruta base definida aquí

module.exports = (app) => {
  app.use(BASE_URL, examenEspagnolRouter, errors());
};
