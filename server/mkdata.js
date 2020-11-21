const mongoose = require('mongoose');
const Raffle = require('./models/raffle');

const set1 = new Raffle({
  name1: 'Conner',
  name2: 'Jake',
  name3: 'Dakota',
  name4: 'Jordan',
  name5: 'Drew'
});
const set2 = new Raffle({
  name1: 'Sexton',
  name2: 'Finkbine',
  name3: 'Doyle',
  name4: 'H',
  name5: 'Anon'
});
mongoose.connect('mongodb://localhost:27017/Project',{useNewUrlParser: true, useUnifiedTopology: true});

set1.save().catch(err => console.error(err)).then(() => {console.log('saved set1')});
set2.save().catch(err => console.error(err)).then(() => {console.log('saved set2')});

