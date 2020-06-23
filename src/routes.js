import authorization from "./controllers/authorization.js";
import validators from './validators.js';
import usersActions from './controllers/user.js'
import postActions from './controllers/post.js'
import commentAction from './controllers/comment.js';
import fs from 'fs';

export default [{
    method: 'POST',
    path: '/register',
    handler: authorization.registration,
      options: {        
      validate: validators.registerData,
    }
  }, 
  { 
    method: 'POST',
    path: '/login',
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
    method: 'PUT',
    path: '/user/{userId}/edit',
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
    path: '/user/{userId}/delete',
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
    path: '/writing',
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
    path: '/api/postAll',
    handler: postActions.getAllPosts,
  },
  {
    method: 'GET',
    path: '/api/postAll/next',
    handler: postActions.getNextPosts,
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
    path: '/{postId}/edit',
    handler: postActions.editPost,
    options: {
      auth: {
        strategy: 'user'
      },
      validate: validators.postData
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
    path: '/{file*}',
    handler: {
      directory: {
        path: './src/public',
        redirectToSlash: true,
        index: true,
      }
    }
  },
  {
    method: 'GET',
    path: '/avatar/{file*}',
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
  path:'/upload',
  handler: (req, h) => {
    const { payload } = req;
   console.log(payload)
    try {
      const handleFileUpload = file => {
        return new Promise((resolve, reject) => {
          const filename = file.hapi.filename
          const data = file._data
          console.log(data)
          fs.writeFile('./src/public/img/' + filename, data, err => {
            if (err) {
              console.log(err)
              reject(err)
            }
            resolve({ message: 'Upload successfully!' })
          })
        })
      }

      
      const response = handleFileUpload(payload.file)
      return response;

      

    } catch(e) {
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