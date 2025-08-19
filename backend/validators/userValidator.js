const { Joi } = require("celebrate");

const schema = Joi.object().keys({
  userName: Joi.string().min(3).max(30).required().messages({
    "string.base": "El nombre de usuario debe ser conjunto de carateres",
    "string.empty": "El nombre de usuario debe de estar vacío",
    "string.min":
      "El nombre de usuario debe tener un mínimo de {#limit} caracteres",
    "string.max":
      "El nombre de usuario debe tener un máximo de {#limit} caracteres",
    "any.required": "El nombre de usuario es obligatorio",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "El campo de email debe de tener un formato válido ",
    "any.required": "El email es obligatorio",
  }),
  phoneNumber: Joi.string()
    .pattern(/^\d{8,}$/)
    .messages({
      "string.pattern.base":
        "El número de teléfono debe tener al menos 8 dígitos",
    }),
  password: Joi.string().min(3).max(30).required().messages({
    "string.empty": "La contraseña no puede estar vacía",
    "string.min": "La contraseña debe tener al menos {#limit} caracteres",
    "string.max": "La contraseña debe tener como máximo {#limit} caracteres",
    "any.required": "La contraseña es obligatoria",
  }),
});

module.exports = { schema };
