const joi = require('joi');

const signInSchema = joi.object({
  email: joi.string().email().required().messages({
    "any.required": "O campo email é obrigatório.",
    "string.empty": "O campo email é obrigatório.",
    "string.email": "O campo email precisa ser um email válido.",
    "string.base": "O campo email precisa ser um email válido."
  }),
  password: joi.string().required().trim().messages({
    "any.required": "O campo password é obrigatório.",
    "string.empty": "O campo password é obrigatório.",
    "string.base": "O campo password deverá ser uma string"
  })
});

module.exports = signInSchema;

