import React from 'react';
import { Link } from 'react-router-dom';
import './postItemStyle.css'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { API_PATH } from '../../../constants/apiPath';

const PostItem = (props: any) => {
  const {
    _id,
    title, 
    shortDiscription,
    coverUrl,
    postAuthor,
    handleLikeButton,
    likesCount,
    } = props;

  return (
    <section className="post__wrapper">
      <div className="post-header">
        <Link to="#" className="category post-header__item"> 
          <div>Категория</div>
        </Link>
        <Link to={`/user/${postAuthor._id}`} className="author post-header__item"> 
          {`${postAuthor.name} ${postAuthor.surname}`}
        </Link>
      </div>
      <h2 className="post__title">{title}</h2>
      <div className="post__short">
      <Link to={`/post/${_id}`} > <p className="short-decription"> {shortDiscription}</p> </Link>
        {
          coverUrl && <img src={`${API_PATH}${coverUrl}`} width='600' height='400' alt="post picture"/>
        }
      </div>
     
      <div className="post-footer">
        <div className="post-footer_left">
          <Link to="#" className="post__comment post-footer__item"> 
            <ModeCommentOutlinedIcon />
          </Link>
          <button className="btn btn__favorite">
            <BookmarkBorderOutlinedIcon className="icon" />
          </button>
        </div>
       <div className="post-footer_right">
        <button className="btn btn__like" onClick={()=> handleLikeButton(_id)}>
          <span> { likesCount} </span>
          <FavoriteBorderIcon className="icon" />
        </button>
       </div>
      </div>
    </section>
  )
} 

export default PostItem;