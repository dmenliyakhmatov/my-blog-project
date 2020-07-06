import React from 'react';
import avatar from '../../../assets/img/defaultAvatar2.png';
import './commentStyle.css'
import { Link } from 'react-router-dom';
import { API_PATH } from '../../../constants/apiPath';

const Comment = (props: any) => {
  console.log(props)
  const { commentBody, commentAuthor } = props;
    return(
      <div className='comment_item__container'>
        <div className='comment__wrapper'>
          {commentAuthor ? (
            <div className="comment__header">
            <Link to={`/user/${commentAuthor._id}`} className="comment__avatar-link"> 
              <img src={`${API_PATH}${commentAuthor.avatarUrl}`} alt='user avatar' className="comment__user-avatar"/> 
              <span className='comment__fullName'> {`${commentAuthor.name} ${commentAuthor.surname}`} </span>
             </Link>
          </div>
          ) : (
            <div className="comment__header">
            <span className="comment__avatar-link"> 
              <img src={`${API_PATH}/avatar/defaultAvatar.png`} alt='user avatar' className="comment__user-avatar"/> 
              <span className='comment__fullName'> {`Пользователь удален`} </span>
             </span>
          </div>
          )
        }
          <div className="comment-text__wrapper">
            <p className='comment-text'>{commentBody} </p>
          </div>
        </div>
      </div>
    );
};

export default Comment;