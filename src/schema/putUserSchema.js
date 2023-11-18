const joi = require('joi');

const putUserSchema = joi.object({
  name: joi.string().trim().messages({
    "string.empty": "O campo name é obrigatório.",
    "string.base": "O campo name deve ser uma string"
  }),
  email: joi.string().email().messages({
    "string.empty": "O campo email é obrigatório.",
    "string.email": "O campo email precisa ser um email válido.",
    "string.base": "O campo email precisa ser um email válido."
  }),
  phone: joi.string().regex(/^[0-9]{11}$/).messages({
    "string.empty": "O campo phone é obrigatório.",
    "string.base": "O campo phone deverá ser uma string com 11 números",
    "string.pattern.base": "O campo phone deverá ser uma string com 11 números"
  }),
  city: joi.string().trim().messages({
    "string.empty": "O campo city é obrigatório.",
    "string.base": "O campo city deve ser uma string"
  }),
  state: joi.string().trim().messages({
    "string.empty": "O campo state é obrigatório.",
    "string.base": "O campo state deve ser uma string"
  }),
});

module.exports = putUserSchema;