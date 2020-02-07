const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://blog-puy:dqnIFvtl58YmmBS4@blog-puy-yirbl.mongodb.net/test?retryWrites=true&w=majority';

const options = {
  poolSize: 10,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

MongoClient.connect(uri, options)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
