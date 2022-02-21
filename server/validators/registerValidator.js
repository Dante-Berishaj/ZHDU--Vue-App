const Joi = require('joi');

const schema = Joi.object().keys({
    email: Joi.string().email().alphanum().min(5).max(25).required(),
    password: Joi.string().alphanum().min(5).max(10).required()
})

module.exports = schema