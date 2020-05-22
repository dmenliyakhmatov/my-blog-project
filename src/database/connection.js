import mongoose from 'mongoose';
import userSchema from './userSchema.js';
import postSchema from './postSchema.js'
import commentSchema from './commentSchema.js'

const host = process.env.MONGO_HOST || 'localhost';
const port = process.env.MONGO_PORT || 27017;

const uri = `mongodb://${host}:${port}/blog`;

mongoose.connect(uri, {useNewUrlParser:true});

const db = mongoose.connection;
db.on('error', (err) => {
  console.error('Произошла ошибка при подключении к Монге', err)
});

db.on('open', () => {
  console.log('success')
});

const user = mongoose.model('user', userSchema);
const post = mongoose.model('post', postSchema);
const comment = mongoose.model('comment', commentSchema);

export default {
  user,
  post,
  comment,
}