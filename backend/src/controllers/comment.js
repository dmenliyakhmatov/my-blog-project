import database from '../database/connection.js';
import mongoose from 'mongoose';
import Boom from 'boom';

export default {
  createComment: async (request, h) => {
    const commentData = request.payload.commentBody;
    const postId = request.params.postId;
    const userId = request.auth.credentials._id;
    const foundPost = await database.post.findById(postId);

    if(foundPost) {
      const newComment = new database.comment({
        _id: new mongoose.Types.ObjectId(),
        postId: postId,
        commentBody: commentData,
        author: userId
      })
      
      newComment.save(function (err) {
        if (err) throw err;
      })
      await database.post.updateOne(
        {_id: postId},
        {$push: {comments: newComment._id}}
      )

      return "Комментарий успешно создан"
    
    } else { return Boom.notFound('Пост не найден')}
  },
  
  editComment: async (request, h) => {
    const authUserId = request.auth.credentials.userId;
    const {commentId, commentBody, authorUserId} = request.payload;

    if (authUserId === authorUserId) {
      return await database.comment.findByIdAndUpdate(commentId, commentBody,function(err, user){
        if(err) return console.log(err);
      })
      
    } else {
      return Boom.forbidden('У вас нет прав на данное действие')
    }
  },

  deleteComment: async (request, h) => {
    const {commentId, userId} = request.payload;
    const post = await database.post.findOne({_id:request.params.postId});
    const authUserId = request.auth.credentials._id;

    const commentIndex = post.comments.findIndex((comment) => comment.toString() === commentId.toString())
    if (authUserId === userId){
      
      if(commentIndex < 0) {
        return Boom.notFound('Comment has not been found')
      }

      post.comments.splice(commentIndex, 1);
      post.save(function (err) {
        if (err) throw err;
      })

      await database.comment.findByIdAndDelete(commentId);
      return 'Комментарий успешно удален'
    } else { return Boom.forbidden('Нет прав на данное действие')}
  },
}