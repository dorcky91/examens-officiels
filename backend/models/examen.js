const { Schema, model } = require("mongoose");

const ExamenSchema = new Schema(
  {
    idClasse: { type: Schema.Types.ObjectId, ref: "Classe", required: true },
    nom: { type: String, required: true }, // materia tomada desde Classe
    matiereId: { type: Schema.Types.ObjectId },
    theme: { type: String, required: true },
    texte: { type: String, required: true },
    date: { type: String, required: true },
    structure: { type: Schema.Types.Mixed, required: true }, // flexible
  },
  { timestamps: true }
);

module.exports = model("Examens", ExamenSchema);
