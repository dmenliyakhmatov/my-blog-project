import database from '../database/connection.js';
import Boom from 'boom';
import comment from './comment.js';

export default {
  getEditInfo: async (request, h) => {
    try {
      const paramsUserId = request.params.userId;
      const authUser = request.auth.credentials;
      const isOwner = String(authUser._id) === String(paramsUserId);

      if(isOwner) {
        const user = await database.user.findById( paramsUserId) ;
        
        const birthDate = `${user.birthDate.getDate()}.0${user.birthDate.getMonth()+1}.${user.birthDate.getFullYear()}`;

        const userInfo = {
          name: user.name,
          surname: user.surname,
          email: user.email,
          birthDate: birthDate,
          about: user.about,
        }
          return {...userInfo};
      } else {
        return Boom.forbidden('Отсутвует разрешение на данное действие')
      }
      } catch(e) {
        console.log(e);
        return Boom.badImplementation('Произошла ошибка , попробуйте позднее'); 
    }
  },

  changeProfile: async (request, h) => {
    try {
      const authUser = request.auth.credentials;
      const profileId = request.params.userId;
      const changeData = request.payload;
      
      if(String(authUser._id) === String(profileId)) {
        
        console.log(changeData)
        await database.user.findByIdAndUpdate(profileId, changeData, { 
        }, function(err, user){
          if(err) return console.log(err);
        })
      } else {
        return Boom.forbidden('Отсутвует разрешение на данное действие')
      }
      
      const birthDate = `${changeData.birthDate.getDate()}.0${changeData.birthDate.getMonth()+1}.${changeData.birthDate.getFullYear()}`;

      return {...changeData, birthDate};
    } catch (err) {
      console.log(err)
      return Boom.badImplementation('Произошла ошибка, попробуйте позднее');
    }
  },

  deleteUser: async (request, h) => {
    try {
      const authUser = request.auth.credentials;
      const profileId = request.params.userId;
      
      if(String(authUser._id) === String(profileId)) {
        await database.user.deleteOne({_id:profileId})
      } else {
        return Boom.forbidden('Отсутвует разрешение на данное действие')
      }

      return "Пользователь успешно удален";
    } catch(e) {
      console.log(e);
      return Boom.badImplementation('Произошла ошибка , попробуйте позднее'); 
    }
  },

  showUserList: async (request, h) => {
    try {
      const userList = await database.user.find({});
      return userList;
    } catch(e) {
      console.log(e);
      return Boom.badImplementation('Произошла ошибка, попробуйте позднее'); 
    }
  },
  getInfo: async (request, h) => {
    try {
      const paramsUserId = request.params.userId;
      const token = request.headers.token;
      let isCurrentUserPage = false;
      const user = await database.user
        .findOne({_id: paramsUserId})
        .populate({
          path: 'posts',
          options: { sort: { 'createdAt': -1 } },
          limit: 4,
          populate: {
            path: 'postAuthor',
            select: [ '_id', 'name', 'surname'],
          }
        });
        const authUser = await database.user.findOne({ token });
        if(authUser) {
          isCurrentUserPage = String(authUser._id) === String(paramsUserId);
        }
        const birthDate = `${user.birthDate.getDate()}.0${user.birthDate.getMonth()+1}.${user.birthDate.getFullYear()}`;
      if(user) {
        const userInfo = {
        _id: user._id,
        name: user.name,
        surname: user.surname,
        birthDate: birthDate,
        about: user.about,
        avatarUrl: user.avatarUrl,
        };
        return { userInfo,  userPosts: user.posts, isCurrentUserPage};
      } else {
        return Boom.notFound('Пользователь не найден');
      }} catch(e) {
        console.log(e);
        return Boom.badImplementation('Произошла ошибка , попробуйте позднее'); 
    }
  },
  getNextUserPost: async (request, h) => {
    try {
      const postNumber = +request.headers.postnumber;
      const queryUserId = request.params.userId;
      const user = await database.user
                .findOne({_id: queryUserId})
                .populate({
                  path: 'posts',
                  options: { 
                    limit: 4, 
                    skip: postNumber, 
                    sort: { 'createdAt': -1 } 
                  },
                  populate: {
                    path: 'postAuthor',
                    select: [ '_id', 'name', 'surname'],
                  }
                });
        
    if(user) {
      const userInfo = {
        posts: user.posts
      }
      return userInfo;
    } else {
      return null
    }} catch (e){
      console.log(e);
      return Boom.badImplementation('Произошла ошибка , попробуйте позднее'); 
    }
  }
}