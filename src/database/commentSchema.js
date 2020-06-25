import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    _id:{ 
      type: mongoose.Schema.Types.ObjectId,
      required:true
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    commentBody: {
      type: mongoose.Schema.Types.String,
      required:true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required:true,
      ref: 'user'
    }
  },
  {
    timestamps: true
}
);

export default schema;