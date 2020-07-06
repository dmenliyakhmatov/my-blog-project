import database from '../database/connection.js';
import mongoose from 'mongoose';
import Boom from 'boom';
import { request } from 'http';

export default {
  createPost: async (request, h) => {
    try{
      const {title, shortDiscription, textContent, category} = request.payload;
      const authorOfPost = request.auth.credentials;

      let newPost = new database.post({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        textContent: textContent,
        shortDiscription,
        postAuthor: authorOfPost._id,
        category: category,
      });

      newPost.save(function (err) {
        if (err) throw err;
      })
      await database.user.findByIdAndUpdate(authorOfPost._id, {$push: {posts: newPost._id}})
      console.log(newPost._id)
      return newPost._id
    } catch(e) {
      console.log(e)
      return Boom.badImplementation('Произошла ошибка на сервере. Попробуйте позже')
    }
  },

  getPost: async (request, h) => {
    try {
      const postId = request.params.postId;
      const post = await database.post
          .findById(postId)
          .populate({
            path: 'postAuthor',
            select: [ '_id', 'name', 'surname'],
          })
          .populate({
            path: 'comments',
            populate: {
              path: 'commentAuthor',
              select: ['name', 'surname', '_id', 'avatarUrl']
            }
          });

      if(!post) {
        return Boom.notFound('Страница не найдена')
      }
      await database.post.
          updateOne({_id: postId}, {$inc:{pageViews: 1}});


      const createdData = `${post.createdAt.getDate()}-${post.createdAt.getMonth()+1}-${post.createdAt.getFullYear()}`;
      const postData = {
        _id: post._id,
        title: post.title,
        shortDiscription: post.shortDiscription,
        textContent: post.textContent,
        comments: post.comments,
        postAuthor: post.postAuthor,
        likesCount: post.likesCount,
        pageViews: post.pageViews,
        coverUrl: post.coverUrl,
        category: post.category,
        createdData,
      }
      

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

    const authUser = request.auth.credentials._id;

    if (authUser === postData.userId) {
      return postData;
      
    } else {
      return Boom.forbidden('У вас нет прав на данное действие');
    }
  },
  editPost: async (request, h) => {
    try {
      const postId = request.params.postId;
      console.log(postId)
      const postData = await database.post.findById(postId);
      if(!postData) {
        return Boom.notFound('Страница не найдена')
      }
  
      const authUser = request.auth.credentials._id;
      const changeData = request.payload;

      if (String(authUser) === String(postData.postAuthor)) {
        await database.post.findByIdAndUpdate(postId, changeData, function(err, user){
          if(err) return console.log(err);
        })
        return 'Пост успешно изменен'
      } else {
        return Boom.forbidden('У вас нет прав на данное действие');
      }
    } catch(e) {
      // console.log(e)
      return Boom.badImplementation('Произошла ошибка на сервере. Попробуйте позже')
    }
    
  },

  getAllPosts: async (request, h) => {
    try {
        const postList = await database.post
        .find({},
          {
            _id: true,
            title: true, 
            textContent:true, 
            shortDiscription: true, 
            coverUrl:true,
            postAuthor:true,
            createdAt:true,
            likesCount:true,
            category: true
          }, 
            {sort: { 'createdAt': -1 }
          })
        .limit(4)
        .populate({
          path: 'postAuthor',
          select: ['_id', 'name', 'surname'],
        });
      return postList;
      
     

        
    } catch(e) {
      console.log(e);
      return Boom.badImplementation('Произошла ошибка на сервере. Попробуйте позже')
    }
  },
  getNextPosts: async (request, h) => {
    try {
      const postNumber = +request.headers.postnumber;
      console.log(postNumber)
      const postList = await database.post
        .find({},
          {
            _id: true,
            title: true,
            textContent:true,
            shortDiscription: true, 
            coverUrl:true,
            category: true
          },
          {sort: { 'createdAt': -1 }
        })
        .skip(postNumber)
        .limit(4)
        .populate({
          path: 'postAuthor',
          select: ['_id', 'name', 'surname'],
        });
        
        
      return postList;
        
    } catch(e) {
      console.log(e);
      return Boom.badImplementation('Произошла ошибка на сервере. Попробуйте позже')
    }
  },

  getCategoriesPosts: async (request, h) => {
    try {
      const category = request.params.category;
      const postList = await database.post
        .find({category:category},
          {
            _id: true,
            title: true, 
            textContent:true, 
            shortDiscription: true, 
            coverUrl:true,
            postAuthor:true,
            createdAt:true,
            likesCount:true,
            category: true,
          }, 
            {sort: { 'createdAt': -1 }
          })
        .limit(4)
        .populate({
          path: 'postAuthor',
          select: ['_id', 'name', 'surname'],
        });
      return postList;
        
    } catch(e) {
      console.log(e);
      return Boom.badImplementation('Произошла ошибка на сервере. Попробуйте позже')
    }
  },

  getNextCategoriesPosts: async (request, h) => {
    try {
      const category = request.params.category;
      const postNumber = +request.headers.postnumber;
      const postList = await database.post
        .find({category: category},
          {
            _id: true,
            title: true,
            textContent:true,
            shortDiscription: true, 
            coverUrl:true,
            category: true,
          },
          {sort: { 'createdAt': -1 }
        })
        .skip(postNumber)
        .limit(4)
        .populate({
          path: 'postAuthor',
          select: ['_id', 'name', 'surname'],
        });
        
        
      return postList;
        
    } catch(e) {
      console.log(e);
      return Boom.badImplementation('Произошла ошибка на сервере. Попробуйте позже')
    }
  },

  deletePost: async (request, h) => {
    try {
      const authUser = request.auth.credentials;
      const postId = request.params.postId;
      
      const foundPost = await database.post.findById(postId);

      if(foundPost) {

        if(String(authUser._id) === String(foundPost.postAuthor)) {
          await database.post.deleteOne({_id:postId})
          const author = await database.user.findById(foundPost.postAuthor);
          const postIndex = author.posts.findIndex(id => id.toString() === postId.toString())
          author.posts.splice(postIndex, 1);
          author.save(function (err) {
            if (err) throw err;
          })

        } else {
          return Boom.forbidden('Отсутвует разрешение на данное действие')
        }

      } else {
        return Boom.notFound('Пост не найден')
      }

      return 'Пост удален';
    } catch(e) {
      console.log(e);
      return Boom.badImplementation('Произошла ошибка , попробуйте позднее'); 
    }
  }
}