const joi = require('joi');

const signUpSchema = joi.object({
  name: joi.string().required().trim().messages({
    "any.required": "O campo name é obrigatório.",
    "string.empty": "O campo name é obrigatório.",
    "string.base": "O campo name deve ser uma string"
  }),
  email: joi.string().email().required().messages({
    "any.required": "O campo email é obrigatório.",
    "string.empty": "O campo email é obrigatório.",
    "string.email": "O campo email precisa ser um email válido.",
    "string.base": "O campo email precisa ser um email válido."
  }),
  phone: joi.string().regex(/^[0-9]{11}$/).required().messages({
    "any.required": "O campo phone é obrigatório.",
    "string.empty": "O campo phone é obrigatório.",
    "string.base": "O campo phone deverá ser uma string com 11 números",
    "string.pattern.base": "O campo phone deverá ser uma string com 11 números"
  }),
  password: joi.string().min(6).required().trim().messages({
    "any.required": "O campo password é obrigatório.",
    "string.empty": "O campo password é obrigatório.",
    "string.min": "O campo password deve ter, no mínimo, 6 caracteres.",
    "string.base": "O campo password e sua confirmação deverá ser uma string de no mínimo 6 caracteres."
  }),
  passwordConfirmation: joi.string().valid(joi.ref('password')).required().messages({
    "any.required": "O campo passwordConfirmation é obrigatório.",
    "string.empty": "O campo passwordConfirmation é obrigatório.",
    "any.only": "As senhas informadas não coincidem."
  }),
  city: joi.string().required().trim().messages({
    "any.required": "O campo city é obrigatório.",
    "string.empty": "O campo city é obrigatório.",
    "string.base": "O campo city deve ser uma string"
  }),
  state: joi.string().required().trim().messages({
    "any.required": "O campo state é obrigatório.",
    "string.empty": "O campo state é obrigatório.",
    "string.base": "O campo state deve ser uma string"
  }),
});

module.exports = signUpSchema;

