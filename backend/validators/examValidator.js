const { Joi } = require("celebrate");

const sousQuestionSchema = Joi.object({
  question: Joi.string().allow("").required().messages({
    "string.base": "La pregunta debe ser un texto",
    "any.required": "La pregunta es obligatoria",
  }),
  reponse: Joi.string().allow(null, "").messages({
    "string.base": "La respuesta debe ser un texto o null",
  }),
  choix: Joi.array().items(Joi.string()).optional(),
});

const questionSchema = Joi.object({
  instruction: Joi.string().required().messages({
    "string.base": "La instrucción debe ser un texto",
    "any.required": "La instrucción es obligatoria",
  }),
  sousQuestions: Joi.array().items(sousQuestionSchema).required().messages({
    "array.base": "Debe contener un arreglo de subpreguntas",
    "any.required": "Las subpreguntas son obligatorias",
  }),
});

const sectionSchema = Joi.object({
  section: Joi.string().required().messages({
    "string.base": "El nombre de la sección debe ser un texto",
    "any.required": "El nombre de la sección es obligatorio",
  }),
  questions: Joi.array().items(questionSchema).required().messages({
    "array.base": "Debe contener un arreglo de preguntas",
    "any.required": "Las preguntas son obligatorias",
  }),
});

const schema = Joi.object({
  date: Joi.string().required().messages({
    "string.base": "La fecha debe ser un texto",
    "any.required": "La fecha es obligatoria",
  }),
  thème: Joi.string().required().messages({
    "string.base": "El tema debe ser un texto",
    "any.required": "El tema es obligatorio",
  }),
  texte: Joi.string().allow("").required().messages({
    "string.base": "El texto debe ser un texto",
    "any.required": "El texto es obligatorio",
  }),
  sections: Joi.array().items(sectionSchema).required().messages({
    "array.base": "Debe contener un arreglo de secciones",
    "any.required": "Las secciones son obligatorias",
  }),
});

module.exports = { schema };
