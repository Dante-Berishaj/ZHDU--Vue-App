const express = require('express');
const userApi = require('../controllers/userApi');
const { checkIfAuthenticated } = require('../middlewares/checkIfAuthenticated');
const authenticated = express.Router();

authenticated.use(checkIfAuthenticated)

authenticated.get('/list', userApi.list)

module.exports = authenticated