const express = require('express');
const users = express.Router()
const userApi = require('../controllers/userApi');

users.post('/register', userApi.register)

module.exports = users;