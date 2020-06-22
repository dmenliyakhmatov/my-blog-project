import React from 'react';
import avatar from '../../../assets/img/defaultAvatar.png';
import './comment.css'
import { Link } from 'react-router-dom';

const Comment = (props: any) => {
    const comment = 'Lorem ipsum, dolor sit ameum, um, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametdolor sit ametum, dolor sit ametum, dolor sit amett consectetur adipisicing elit. Sint, magnam!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, magnam!'

    const cutText = (comment:string):string => {
      const size: number = 130;
      if(comment.length > size) {
        return comment.substr(0, size) + '...';
      }
      return comment
    }

    return(
      <div className='live_container'>
        <div className='live_comment'>
          <div className="live__comment__header">
            <Link to='#' className="live_user__avatar-link"> 
              <img src={avatar} width='20px' alt='' className="live_user__avatar-img"/> 
              <span className='live__fullName'>Имя Фамилия</span>
             </Link>
          </div>
          <Link to='#' className='live__comment-link'>
            <p className='live__comment-text'>{cutText(comment)} </p>
          </Link>
          <Link to='#'>
            <p className='live__post-link'> Post title</p>
          </Link>
          
        </div>
      </div>
    );
};

export default Comment;