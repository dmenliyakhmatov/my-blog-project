import database from '../database/connection.js';
import mongoose from 'mongoose';
import Boom from 'boom';

export default {
  createPost: async (request, h) => {
    const {title, textContent} = request.payload;
    const authorOfPost = request.auth.credentials;

    let newPost = new database.post({
      _id: new mongoose.Types.ObjectId(),
      title: title,
      textContent: textContent,
      userId: authorOfPost.userId,
    });

    newPost.save(function (err) {
      if (err) throw err;
    })
    return "Пост успешно создан"
  },

  getPost: async (request, h) => {
    try {
      const postId = request.params.postId;
      const postData = await database.post.findById(postId);
      
      if(!postData) {
        return Boom.notFound('Страница не найдена')
      }
      await database.post.
          updateOne({_id: postId}, {$inc:{pageViews: 1}});
          
      return postData;
        
    } catch(e) {
      console.log(e);
      return Boom.badImplementation('Произошла ошибка на сервере. Попробуйте позже')
    }
  },

  getEditPost: async (request, h) => {
    const postId = request.params.postId;
    const postData = await database.post.findById(postId);
    
    if(!postData) {
      return Boom.notFound('Страница не найдена')
    }

    const authUser = request.auth.credentials.userId;

    if (authUser === postData.userId) {
      return postData;
      
    } else {
      return Boom.forbidden('У вас нет прав на данное действие');
    }
  },
  editPost: async (request, h) => {
    const postId = request.params.postId;
    const postData = await database.post.findById(postId);
    
    if(!postData) {
      return Boom.notFound('Страница не найдена')
    }

    const authUser = request.auth.credentials.userId;
    const changeData = request.payload;


    if (authUser === postData.userId) {
      await database.post.findByIdAndUpdate(postId, changeData, function(err, user){
        if(err) return console.log(err);
      })
      return 'Пост успешно изменен'
    } else {
      return Boom.forbidden('У вас нет прав на данное действие');
    }
  }
}