import mongoose from 'mongoose';

const { Schema } = mongoose;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: String,
  tag: {
    type: String,
    enum: [
      'ECONOMY',
      'EDUCATION',
      'POLITICS',
      'STORY',
      'TECH',
    ],
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  photo: {
    type: String,
    required: true,
  },
});

export default mongoose.model('ArticleModel', BlogSchema);
