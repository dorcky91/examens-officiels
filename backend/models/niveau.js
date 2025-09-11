const { Schema, model } = require("mongoose");

const NiveauSchema = new Schema(
  {
    nom: { type: String, required: true }, // Ej: NS4
    description: { type: String, required: true }, // Ej: Nouveau secondaire 4
  },
  { timestamps: true }
);

module.exports = model("Niveau", NiveauSchema);
