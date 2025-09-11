const { Schema, model } = require("mongoose");

const examSchema = Schema({
  idMatiere: {
    type: Schema.Types.ObjectId,
    required: [true, "Campo requerido"],
    ref: "matiere",
  },
  theme: {
    type: String,
    required: [true, "Campo requerido"],
  },
  texte: {
    type: String,
    required: [true, "Campo requerido"],
  },
  date: {
    type: String,
    required: [true, "Campo requerido"],
  },
  active: { type: Boolean, default: true },
});

module.exports = model("Exam", examSchema);
