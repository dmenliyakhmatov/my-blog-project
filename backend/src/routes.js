import authorization from "./controllers/authorization.js";
import validators from './validators.js';
import usersActions from './controllers/user.js'
import postActions from './controllers/post.js'
import commentAction from './controllers/comment.js';
import likeAction from './controllers/post-likes.js'
import fs from 'fs';
import database from './database/connection.js';
import mongoose from 'mongoose';
import Boom from 'boom';

export default [{
    method: 'POST',
    path: '/api/register',
    handler: authorization.registration,
      options: {        
      validate: validators.registerData,
    }
  }, 
  { 
    method: 'POST',
    path: '/api/login',
    handler: authorization.login, 
    options: {
      validate: validators.loginData,
    }
  },
  {
    method: 'GET',
    path: '/api/info/{userId}',
    handler: usersActions.getInfo,
    options: {
      validate: validators.getInfo
    }
  },
  {
    method: 'GET',
    path: '/api/info/{userId}/nextPosts',
    handler: usersActions.getNextUserPost,
    options: {
      validate: validators.getInfo
    }
  },
  {
    method: 'GET',
    path: '/api/user/{userId}/edit',
    handler: usersActions.getEditInfo,
    options: {
      auth: {
        strategy: 'user'
      },
    }
  },
  {
    method: 'PUT',
    path: '/api/user/{userId}/edit',
    handler: usersActions.changeProfile,
    options: {
      auth: {
        strategy: 'user'
      },
      validate: validators.changeUserData
    }
  },
  {
    method: 'DELETE',
    path: '/api/user/{userId}/delete',
    handler: usersActions.deleteUser,
    options: {
      auth: {
        strategy: 'user'
      }
    }
  },
  {
    method: 'GET',
    path: '/userlist',
    handler: usersActions.showUserList,
    options: {
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/api/writing',
    handler: postActions.createPost,
    options: {
      auth: {
        strategy: 'user'
      },
      validate: validators.postData
    }
  },
  {
    method: 'GET',
    path: '/api/posts/all',
    handler: postActions.getAllPosts,
  },
  {
    method: 'GET',
    path: '/api/postAll/next',
    handler: postActions.getNextPosts,
  },
  {
    method: 'GET',
    path: '/api/posts/categories/{category}',
    handler: postActions.getCategoriesPosts,
  },
  {
  method: 'GET',
  path: '/api/posts/categories/{category}/next',
  handler: postActions.getNextCategoriesPosts,
  },
  {
    method: 'GET',
    path: '/api/posts/{postId}',
    handler: postActions.getPost,
  },
  {
    method: 'GET',
    path: '/{postId}/edit',
    handler: postActions.getEditPost,
    options: {
      auth: {
        strategy: 'user'
      }
    }
  },
  {
    method: 'PUT',
    path: '/api/{postId}/edit',
    handler: postActions.editPost,
    options: {
      auth: {
        strategy: 'user'
      },
      validate: validators.postData
    }
  },
  {
    method: 'DELETE',
    path: '/api/{postId}/delete',
    handler: postActions.deletePost,
    options: {
      auth: {
        strategy: 'user'
      },
      validate: validators.deletePostData,
    }
  },
  {
    method: 'POST',
    path: '/api/{postId}/comments',
    handler: commentAction.createComment,
    options: {
      auth: {
        strategy: 'user'
      },
      validate: validators.commentData
    }
  },
  {
    method: 'DELETE',
    path: '/{postId}/comments',
    handler: commentAction.deleteComment,
    options: {
      auth: {
        strategy: 'user'
      }
    }
  },
  {
    method: 'GET',
    path: '/api/{postId}/like',
    handler: likeAction.createLike,
    options: {
      auth: {
        strategy: 'user'
      }
    }
  },
  {
    method: 'GET',
    path: '/api/cover/{file*}',
    handler: {
      directory: {
        path: './src/public/img/covers',
        redirectToSlash: true,
        index: true,
      }
    }
  },
  {
    method: 'GET',
    path: '/api/avatar/{file*}',
    handler: {
      directory: {
        path: './src/public/img/avatars/',
        redirectToSlash: true,
        index: true,
      }
    }
  },
{
  method:'POST',
  path:'/api/upload',
  handler: async (req, h) => {
    const { payload } = req;
    try {
      const handleFileUpload = file => {
        return new Promise((resolve, reject) => {
          const filename = file.hapi.filename
          const data = file._data
          fs.writeFile('./src/public/img/covers/' + filename, data, err => {
            if (err) {
              console.log(err)
              reject(err)
            }
            resolve(`/cover/${filename}`)
          })
        })
      }
      const response = await handleFileUpload(payload.file)
      console.log(payload.postId)
      await database.post.findByIdAndUpdate(payload.postId, {coverUrl: response}, function(err, user){
        if(err) return console.log(err);
      })
      return 'Пост успешно изменен'
    }
     catch(e) {
      console.log(e)
    }
  },
  options: {
    payload: {
      output: 'stream',
      parse: true,
      multipart: true,
      allow: 'multipart/form-data'
    }
  }
  
},
{
  method:'POST',
  path:'/api/upload/avatar',
  handler: async (req, h) => {
    const { payload } = req;
    try {
      const handleFileUpload = file => {
        return new Promise((resolve, reject) => {
          const filename = file.hapi.filename
          const data = file._data
          fs.writeFile('./src/public/img/avatars/' + filename, data, err => {
            if (err) {
              console.log(err)
              reject(err)
            }
            resolve(`/avatar/${filename}`)
          })
        })
      }
      const response = await handleFileUpload(payload.file)
      await database.user.findByIdAndUpdate(payload.userId, {avatarUrl: response}, function(err, user){
        if(err) return console.log(err);
      })
      return response
    }
     catch(e) {
      console.log(e)
    }
  },
  options: {
    payload: {
      output: 'stream',
      parse: true,
      multipart: true,
      allow: 'multipart/form-data'
    }
  }
  
}

]