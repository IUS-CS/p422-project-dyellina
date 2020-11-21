const Raffles = require('../models/raffle');

module.exports = {
  root: (req, res) => {
    Raffles.find().exec((err, raffles) => {
      if(err) {
        res.status(500);
        res.json(err);
        return;
      }
      let set = [];
      for(let sets of raffles) {
        set.push(sets)
      }
      res.json(set);
    })
  }
}
