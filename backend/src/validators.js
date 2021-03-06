import JoiBase from '@hapi/joi';
import JoiDate from '@hapi/joi-date';

const Joi = JoiBase.extend(JoiDate);

export default {
  registerData:{
    payload: Joi.object({
     name: Joi.string().required(),
     surname: Joi.string().required(),
     email: Joi.string().email().required(),
     password: Joi.string(),
     birthDate: Joi.date().format("DD.MM.YYYY").required(),
   })
 },
  loginData:{
    payload: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string(),
    })
  },
  getInfo: {
    params: Joi.object({
      userId: Joi.string().required()
    })
  },
  changeUserData:{
    payload: Joi.object({
     name: Joi.string().optional(),
     surname: Joi.string().optional(),
     email: Joi.string().email().optional(),
     birthDate: Joi.date().format("DD.MM.YYYY").optional(),
     about: Joi.string().optional(),
   })
 },
 postData: {
   payload: Joi.object({
     _id: Joi.string().optional(),
    title: Joi.string().required(),
    shortDiscription: Joi.string().optional(),
    textContent: Joi.string().required(),
    category: Joi.string().required(),
   })
 },
 allPostsData: {
  payload: Joi.object({
   title: Joi.string().min(10).required(),
   textContent: Joi.string().min(50).required(),
   imageUrl: Joi.string().optional()
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
 },
 deletePostData: {
   params: Joi.object({
     postId: Joi.string().required(),
   })
 }
}