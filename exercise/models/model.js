const mongoose = require('mongoose');

const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ArticleModel', BlogSchema);
