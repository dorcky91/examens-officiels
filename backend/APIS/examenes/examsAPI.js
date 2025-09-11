// views/routes/userRoutesLoader.js
const { errors } = require("celebrate");
const examensRouter = require("../../views/routes/examens.routes");
const BASE_URL = "/api/exams"; // Ruta base definida aquí

module.exports = (app) => {
  app.use(BASE_URL, examensRouter, errors());
};
