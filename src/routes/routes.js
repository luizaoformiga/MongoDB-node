const express = require('express');
const routes = express.Router();

const userControl = require('../controllers/userControl');

routes.post('/users', userControl.insert);
routes.get('/users', userControl.index);
routes.get('/users/:id', userControl.details);
routes.put('/users/:id', userControl.update);

module.exports = routes;
