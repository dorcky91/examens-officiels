// models/Classe.js
const { Schema, model } = require("mongoose");

const MatiereSchema = new Schema(
  {
    nom: { type: String, required: true },
    icone: { type: String },
  },
  { _id: true } // cada materia tendrá su propio _id único
);

const ClasseSchema = new Schema(
  {
    nom: { type: String, required: true },
    description: { type: String },
    matieres: [MatiereSchema], // materias embebidas en la clase
  },
  { timestamps: true }
);

module.exports = model("Classe", ClasseSchema);
