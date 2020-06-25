import React from 'react';
import avatar from '../../../assets/img/defaultAvatar2.png';
import './commentStyle.css'
import { Link } from 'react-router-dom';

const Comment = (props: any) => {
  console.log(props)
  const { commentBody, author: {
    userId,
    name,
    surname,
    avatarUrl
  } } = props;
    return(
      <div className='comment_item__container'>
        <div className='comment__wrapper'>
          <div className="comment__header">
            <Link to={`/user/${userId}`} className="comment__avatar-link"> 
              <img src='http://localhost:5000/avatar/defaultAvatar.png' alt='' className="comment__user-avatar"/> 
              <span className='live__fullName'> {`${name} ${surname}`} </span>
             </Link>
          </div>
          <div className="comment-text__wrapper">
            <p className='comment-text'>{commentBody} </p>
          </div>
        </div>
      </div>
    );
};

export default Comment;