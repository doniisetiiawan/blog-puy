const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const uri = 'mongodb+srv://blog-puy:dqnIFvtl58YmmBS4@blog-puy-yirbl.mongodb.net/test?retryWrites=true&w=majority';

const options = {
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options).then(
  () => {
    console.log('Database connection established!');
  },
  (err) => {
    console.log(
      'Error connecting Database instance due to: ',
      err,
    );
  },
);

require('../api/models/Article');
