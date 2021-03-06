import database from '../database/connection.js';
import mongoose from 'mongoose';
import Boom from 'boom';

export default {
  createLike: async (request, h) => {

    try {const userId = request.auth.credentials._id;
    const postId = request.params.postId;
    const post = await database.post.findById(postId);
    
    if(post) {
      const likeIndex = post.likes.findIndex(id => id.toString() === userId.toString())
      if(likeIndex < 0) {
        post.likes.push(userId);
        post.likesCount = post.likes.length;
        post.save(function (err) {
          if (err) throw err;
        })
        return {postId: post._id, likesCount: post.likesCount};
      } else {
        post.likes.splice(likeIndex, 1);
        post.likesCount = post.likes.length;
        post.save(function (err) {
          if (err) throw err;
        })

        return {postId: post._id, likesCount: post.likesCount};
      }
    }} catch(e) {
      console.log(e);
      return Boom.badImplementation('Ошибка на сервере')
    }
  }
}