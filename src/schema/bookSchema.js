const joi = require('joi');

const bookSchema = joi.object({
    title: joi.string().required().messages({
        "any.required": "O campo título é obrigatório.",
        "string.empty": "O campo título é obrigatório.",
    }),
    author: joi.string().required().messages({
        "any.required": "O campo autor é obrigatório.",
        "string.empty": "O campo autor é obrigatório.",
    }),
    gender: joi.array().items(joi.string()).required().messages({
        "any.required": "O campo gênero é obrigatório.",
        "string.empty": "O campo gênero é obrigatório.",
        "string.base": "O campo gênero deve ser uma lista de strings.",
        "array.base": "O campo gênero deve ser uma lista de strings.",
    }),
});

module.exports = bookSchema;
