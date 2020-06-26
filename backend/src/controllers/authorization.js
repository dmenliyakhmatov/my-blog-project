import Boom from 'boom';
import uuid from 'uuid';
import database from '../database/connection.js';
import { generateHash } from '../helpers.js';
import mongoose from 'mongoose';

const uuidv4 = uuid.v4;

export default {
  registration: async (request,h) => {
  try{
      const userData = request.payload;
      const foundUser = await database.user.findOne({email: userData.email}).exec();
      const passwordHash = generateHash(userData.password);

      if(foundUser === null) {
        let newUser = new database.user({
          _id: new mongoose.Types.ObjectId(),
          name: userData.name,
          surname: userData.surname,
          email: userData.email,
          password: passwordHash,
          birthDate: userData.birthDate,
          token: uuid.v4(),
        });
        await newUser.save(function (err) {
          if (err) throw err;
        })
        return newUser.token;
      } else {
        return Boom.badRequest("Пользователь с таким логином уже существует")
      }
    } catch(e) {
      console.log(e);
        return Boom.badImplementation('Произошла ошибка при регистрации, попробуйте позднее');
    }
  },

  login: async (request, h) => {
    try {
        const { email, password } = request.payload;
        const passwordHash = generateHash(password);
        const foundUser = await database.user.findOne({email:email, password: passwordHash});

        if(foundUser) {
            return foundUser.token;
          } else {
            return Boom.unauthorized('Неверный логин или пароль');
          }
    } catch(e) {
      console.log(e)
      return 'ошибка'
    }
  }
}