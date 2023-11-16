const joi = require('joi');

const userSchema = joi.object({
  name: joi.string().required().messages({
    "any.required": "O campo nome é obrigatório.",
    "string.empty": "O campo nome é obrigatório.",
  }),
  email: joi.string().email().required().messages({
    "any.required": "O campo email é obrigatório.",
    "string.empty": "O campo email é obrigatório.",
    "string.email": "O campo email precisa ser um email válido.",
  }),
  password: joi.string().min(6).required().messages({
    "any.required": "O campo senha é obrigatório.",
    "string.empty": "O campo senha é obrigatório.",
    "string.min": "O campo senha deve ter, no mínimo, 6 caracteres."
  }),
  passwordConfirmation: joi.string().valid(joi.ref('password')).required().messages({
    "any.required": "O campo confirmação de senha é obrigatório.",
    "string.empty": "O campo confirmação de senha é obrigatório.",
    "any.only": "As senhas informadas não coincidem."
  }),
  city: joi.string().required().messages({
    "any.required": "O campo cidade é obrigatório.",
    "string.empty": "O campo cidade é obrigatório.",
  }),
  state: joi.string().required().messages({
    "any.required": "O campo estado é obrigatório.",
    "string.empty": "O campo estado é obrigatório.",
  }),
});

module.exports = userSchema;

