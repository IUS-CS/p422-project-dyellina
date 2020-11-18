const mongoose = require('mongoose');

const raffleSchema = mongoose.Schema({
  name: String,
  email: String,
  number: String
});

const Raffle = mongoose.model('Raffle', raffleSchema);

module.exports = Raffle;
