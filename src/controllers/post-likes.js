import database from '../database/connection.js';
import mongoose from 'mongoose';
import Boom from 'boom';

export default {
  createLike: async (request, h) => {

    try {const mongoUserId = request.auth.credentials._id;
    const postId = request.params.postId;
    const post = await database.post.findById(postId);
    
    if(postData) {
      const likeIndex = post.likes.findIndex(id => id.toString() === mongoUserId.toString())

      if(likeIndex < 0) {
        post.likes.push(mongoUserId);
        post.save(function (err) {
          if (err) throw err;
        })
        return 'Лайк удален'
      } else {
        post.likes.splice(likeIndex, 1);
        post.save(function (err) {
          if (err) throw err;
        })
        return 'Лайк поставлен'
      }
    }} catch(e) {
      console.log(e);
      return Boom.badImplementation('Ошибка на сервере')
    }
  }
}