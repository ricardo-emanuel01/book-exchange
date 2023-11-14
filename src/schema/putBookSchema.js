const joi = require('joi');

const putBookSchema = joi.object({
    title: joi.string().optional().messages({
        "string.empty": "O campo título não pode ser vazio.",
    }),
    author: joi.string().optional().messages({
        "string.empty": "O campo autor não pode ser vazio.",
    }),
    gender: joi.array().items(joi.string()).optional().messages({
        "string.base": "O campo gênero deve ser uma lista de strings.",
        "array.base": "O campo gênero deve ser uma lista de strings.",
    }),
});

module.exports = putBookSchema;

