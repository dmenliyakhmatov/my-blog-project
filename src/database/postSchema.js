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
    textContent: {
      type: mongoose.Schema.Types.String,
      required:true,
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'comment'
    }],
    userId: {
      type: mongoose.Schema.Types.String,
      required:true
    },
    likes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }],
    pageViews: {
      type:mongoose.Schema.Types.Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
}
);

export default schema;