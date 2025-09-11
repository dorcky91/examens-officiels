// views/routes/userRoutesLoader.js
const { errors } = require("celebrate");
const matiereERouter = require("../../views/routes/matiereE.routes");
const BASE_URL = "/api/matiereE"; // Ruta base definida aquí

module.exports = (app) => {
  app.use(BASE_URL, matiereERouter, errors());
};
