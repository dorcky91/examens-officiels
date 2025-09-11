const { Schema } = require("mongoose");
const Exam = require("./Exam");

const Anglais = Exam.discriminator(
  "Anglais",
  Schema({
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
  })
);

module.exports = Anglais;
