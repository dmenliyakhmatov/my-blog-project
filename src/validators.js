import JoiBase from '@hapi/joi';
import JoiDate from '@hapi/joi-date';

const Joi = JoiBase.extend(JoiDate);

export default {
  registerData:{
    payload: Joi.object({
     name: Joi.string().required(),
     surname: Joi.string().required(),
     email: Joi.string().email().required(),
     password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/),
     birthDate: Joi.date().format("DD/MM/YYYY"),
   })
 },
  loginData:{
    payload: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/),
    })
  },
  getInfo: {
    query: Joi.object({
      userId: Joi.string().required()
    })
  },
  changeUserData:{
    payload: Joi.object({
     name: Joi.string().optional(),
     surname: Joi.string().optional(),
     birthDate: Joi.date().format("DD/MM/YYYY").optional(),
   })
 },
 postData: {
   payload: Joi.object({
    title: Joi.string().min(10).required(),
    textContent: Joi.string().min(50).required()
   })
 },
 commentData: {
  payload: Joi.object({
    commentBody: Joi.string().min(1).required()
  })
 },
 changeCommentData: {
  payload: Joi.object({
    _id: Joi.string().required(),
    commentBody: Joi.string().min(1).required(),
    authorUserId: Joi.string().required()
   })
 }
}