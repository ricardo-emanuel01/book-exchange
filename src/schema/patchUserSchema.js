const joi = require('joi');

const patchUserSchema = joi.object({
    oldPassword: joi.string().min(6).required().trim().messages({
        "any.required": "O campo oldPassword é obrigatório.",
        "string.empty": "O campo oldPassword é obrigatório.",
        "string.min": "O campo oldPassword deve ter, no mínimo, 6 caracteres.",
        "string.base": "O campo oldPassword e sua confirmação deverá ser uma string de no mínimo 6 caracteres."
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
    })
});

module.exports = patchUserSchema;

