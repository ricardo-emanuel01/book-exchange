const express = require('express');
const route = express();

const putUserController = require('../../controllers/user/user-update');

route.put('/user', putUserController);

module.exports = route;