const { Schema, model } = require("mongoose");

const ExamAnglaisSchema = Schema(
  {
    date: {
      type: String,
      required: [true, "Campo requerido"],
    },
    thème: {
      type: String,
      required: [true, "Campo requerido"],
    },
    texte: {
      type: String,
      required: [true, "Campo requerido"],
    },
    sections: [
      {
        section: {
          type: String,
          required: [true, "Campo requerido"],
        },
        questions: [
          {
            instruction: {
              type: String,
              required: [true, "Campo requerido"],
            },
            sousQuestions: [
              {
                question: { type: String },
                reponse: { type: String, default: null },
                choix: [{ type: String }], // para opciones múltiples
                // phrases: [{ type: String }], // para frases (ej. pronombres)
                phrases: [
                  {
                    question: { type: String, required: true },
                    response: { type: String, default: null },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Anglais_9AF", ExamAnglaisSchema);
