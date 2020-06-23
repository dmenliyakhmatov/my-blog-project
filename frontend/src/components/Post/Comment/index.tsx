import React from 'react';
import avatar from '../../../assets/img/defaultAvatar2.png';
import './commentStyle.css'
import { Link } from 'react-router-dom';

const Comment = (props: any) => {
    const comment = 'Lorem ipsum, dolor sit ameum, um, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametdolor sit ametum, dolor sit ametum, dolor sit amett consectetur adipisicing elit. Sint, magnam!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, magnam!'

    return(
      <div className='comment_item__container'>
        <div className='comment__wrapper'>
          <div className="comment__header">
            <Link to='#' className="comment__avatar-link"> 
              <img src='http://localhost:5000/avatar/defaultAvatar.png' alt='' className="comment__user-avatar"/> 
              <span className='live__fullName'>Имя Фамилия</span>
             </Link>
          </div>
          <div className="comment-text__wrapper">
            <p className='comment-text'>{comment} </p>
          </div>
        </div>
      </div>
    );
};

export default Comment;