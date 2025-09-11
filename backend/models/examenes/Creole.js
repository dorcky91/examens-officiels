const { Schema } = require("mongoose");
import Exam from "./Exam";

const Creole = Exam.discriminator(
  "Creole",
  Schema({
    secciones: [{ tipo: String, preguntas: Number }],
  })
);

module.exports = Creole;
