import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    _id:{ 
      type: mongoose.Schema.Types.ObjectId,
      required:true,
    },
    title: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    shortDiscription: {
      type: mongoose.Schema.Types.String,
    },
    textContent: {
      type: mongoose.Schema.Types.String,
      required:true,
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'comment',
    }],
    postAuthor: {
      type: mongoose.Schema.Types.ObjectId,
      required:true,
      ref: 'user'
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }],
    likesCount: {
      type: mongoose.Schema.Types.Number,
    },
    pageViews: {
      type:mongoose.Schema.Types.Number,
      required: true,
      default: 0
    },
    coverUrl: {
      type:mongoose.Schema.Types.String,
    }
  },
  {
    timestamps: true
}
);

export default schema;