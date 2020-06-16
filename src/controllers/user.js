import database from '../database/connection.js';
import Boom from 'boom';

export default {
  changeProfile: async (request, h) => {
    try {
      const authUser = request.auth.credentials;
      const profileId = request.params.userId;
      
      if(authUser.userId === profileId) {
        const changeData = request.payload;
        await database.user.findOneAndUpdate({userId:profileId}, changeData, { 
          new: true
        }, function(err, user){
          if(err) return console.log(err);
        })
      } else {
        return Boom.forbidden('Отсутвует разрешение на данное действие')
      }
      
      return 'ok'
    } catch (err) {
      console.log(err)
      return Boom.badImplementation('Произошла ошибка, попробуйте позднее');
    }
  },

  deleteUser: async (request, h) => {
    try {
      const authUser = request.auth.credentials;
      const profileId = request.params.userId;
      
      if(authUser.userId === profileId) {
        await database.user.deleteOne({userId:profileId})
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
    try {const queryUserId = request.params.userId;
    const user = await database.user
        .findOne({userId: queryUserId})
        .populate({
          path: 'posts',
          perDocumentLimit: 4
        });
    if(user) {
      const userInfo = {
        name: user.name,
        surname: user.surname,
        birthDate: user.birthDate,
        posts: user.posts
      }
      return userInfo;
    } else {
      return null
    }} catch {
      console.log(e);
      return Boom.badImplementation('Произошла ошибка , попробуйте позднее'); 
    }
  }
}