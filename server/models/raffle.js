const mongoose = require('mongoose');

const raffleSchema = mongoose.Schema({
  name1: String,
  name2: String,
  name3: String,
  name4: String,
  name5: String
});

const Raffle = mongoose.model('Raffle', raffleSchema);

module.exports = Raffle;
