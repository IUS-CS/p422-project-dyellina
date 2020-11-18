const express = require('express');
const raffle = require('./controller/raffle');

let routes = express.Router();

routes.route('/raffle')
  .get(raffle.root)

module.exports = routes;
