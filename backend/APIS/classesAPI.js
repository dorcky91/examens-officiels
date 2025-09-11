// views/routes/userRoutesLoader.js
const { errors } = require("celebrate");
const classesRouter = require("../views/routes/classes.routes");
const BASE_URL = "/api/classes"; // Ruta base definida aquí

module.exports = (app) => {
  app.use(BASE_URL, classesRouter, errors());
};
