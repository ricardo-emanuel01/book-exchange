const joi = require('joi');

const postBookSchema = joi.object({
  title: joi.string().required().trim().messages({
    "any.required": "O campo title é obrigatório.",
    "string.empty": "O campo title é obrigatório.",
    "string.base": "O campo title deve ser uma string"
  }),
  author: joi.string().required().trim().messages({
    "any.required": "O campo author é obrigatório.",
    "string.empty": "O campo author é obrigatório.",
    "string.base": "O campo  author deve ser uma string"
  }),
  gender: joi.array().items(joi.string()).min(1).required().messages({
    "any.required": "O campo gender é obrigatório.",
    "string.empty": "O campo gender é obrigatório.",
    "string.base": "O campo gender deve ser uma lista de strings.",
    "array.base": "O campo gender deve ser uma lista de strings.",
    "array.min": "O campo gender deve ser uma lista com no mínimo 1 item"
  }),
});

module.exports = postBookSchema;