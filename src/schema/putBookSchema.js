const joi = require('joi');

const putBookSchema = joi.object({
    title: joi.string().optional().trim().messages({
        "string.empty": "O campo title não pode ser vazio.",
        "string.base": "O campo title deve ser uma string"
    }),
    author: joi.string().optional().trim().messages({
        "string.empty": "O campo author não pode ser vazio.",
        "string.base": "O campo author deve ser uma string"
    }),
    gender: joi.array().items(joi.string()).optional().min(1).messages({
        "string.base": "O campo gender deve ser uma lista de strings.",
        "array.base": "O campo gender deve ser uma lista de strings.",
        "array.min": "O campo gender deve ser uma lista com no mínimo 1 item"
    })
});

module.exports = putBookSchema;