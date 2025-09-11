const { Schema, model } = require("mongoose");

const MatiereESchema = new Schema(
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

    icone: {
      type: String,
      required: [true, "Dato requerido"],
    },
    idClasse: {
      type: Schema.Types.ObjectId,
      ref: "Classe",
      required: true,
    },
  },
  {
    timestamps: true, // Esto agrega createdAt y updatedAt automáticamente
  }
);

module.exports = model("MatiereE", MatiereESchema);
