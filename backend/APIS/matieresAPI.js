// views/routes/userRoutesLoader.js
const { errors } = require("celebrate");
const matiereRouter = require("../views/routes/matieres.routes");
const BASE_URL = "/api/matieres"; // Ruta base definida aquí

module.exports = (app) => {
  app.use(BASE_URL, matiereRouter, errors());
};
