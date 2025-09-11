const { Schema, model, default: mongoose } = require("mongoose");

const ExamensSchema = Schema(
  {
    idMatiere: {
      type: Schema.Types.ObjectId,
      required: [true, "Campo requerido"],
      ref: "matiere",
    },

    matiere: {
      type: String,
      required: [true, "Campo requerido"],
    },

    thème: {
      type: String,
      required: [true, "Campo requerido"],
    },

    date: {
      type: String,
      required: [true, "Campo requerido"],
    },
    archive: {
      type: String,
      required: [true, "Campo requerido"],
    },
    structure: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, "Campo requerido"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Examens", ExamensSchema);
