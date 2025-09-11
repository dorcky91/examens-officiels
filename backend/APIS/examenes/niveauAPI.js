// views/routes/userRoutesLoader.js
const { errors } = require("celebrate");
const niveauRouter = require("../../views/routes/niveau.routes");
const BASE_URL = "/api/niveau"; // Ruta base definida aquí

module.exports = (app) => {
  app.use(BASE_URL, niveauRouter, errors());
};
