const { Schema, model } = require("mongoose");

const MatiereSchema = new Schema(
  {
    nom: {
      type: String,
      required: [true, "Campo requerido"],
    },
    description: {
      type: String,
      required: [true, "Campo requerido"],
    },
    imgURL: {
      type: String,
      required: [true, "Campo requerido"],
    },
    idClasse: {
      type: Schema.Types.ObjectId,
      required: [true, "Dato requerido"],
      ref: "Classe",
    },
    icone: {
      type: String,
      required: [true, "Dato requerido"],
    },
  },
  {
    timestamps: true, // Esto agrega createdAt y updatedAt automáticamente
  }
);

module.exports = model("Matiere", MatiereSchema);
