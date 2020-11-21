const express = require('express');
const raffles = require('./controllers/raffles');

let routes = express.Router();

routes.route('/raffles')
  .get(raffles.root)

module.exports = routes;
