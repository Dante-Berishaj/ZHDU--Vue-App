const express = require('express');
const users = express.Router()
const userApi = require('../controllers/userApi');
const { checkIfAdmin } = require('../middlewares/checkIfAdmin');

users.post('/register', userApi.register);

users.use(checkIfAdmin);

users.get('/list', userApi.list)

module.exports = users;