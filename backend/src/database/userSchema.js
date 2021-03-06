import mongoose from 'mongoose';
import uuid from 'uuid';

const schema = new mongoose.Schema(
  {
    _id:{ 
      type: mongoose.Schema.Types.ObjectId,
      required:true,
    },
    name: {
      type: mongoose.Schema.Types.String,
      required:true,
    },
    surname: {
      type: mongoose.Schema.Types.String,
      required:true,
    },
    about: {
      type: mongoose.Schema.Types.String,
    },
    birthDate: {
      type: mongoose.Schema.Types.Date,
      required: true,
    },
    email: {
      type: mongoose.Schema.Types.String,
      required:true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required:true,
    },
    avatarUrl: {
      type: mongoose.Schema.Types.String,
      default: '/avatar/defaultAvatar.png'
    },
    token: {
      type: mongoose.Schema.Types.String,
      default: uuid.v4,
    },
    posts: [{
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'post'
    }]
  },
  {
    timestamps: true
}
);

export default schema;