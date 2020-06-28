import React from 'react';
import {Link} from 'react-router-dom';
import './postPage.css'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { API_PATH } from '../../../constants/apiPath';

const PostPage = (props: any) => {
  console.log('PostPage',props)
  const {
    _id,
    title, 
    shortDiscription,
    coverUrl,
    textContent, 
    category, 
    postAuthor,
    likesCount,
    pageViews,
    createdData,
    userId, 
    handleLikeButton
} = props;

  const isOwner = postAuthor._id === userId;

  return (
    <article className='layout-center' >
      <section className="post__header-wrapper">
          <ul className="post__header-information_row">
            <li className="post__header__info-item">
              <Link to={`posts/categories/${category}`} className='category-link'>{category} </Link>
            </li>
            <li className="post__header__info-item">
              <Link to={`user/${postAuthor._id}`} className='author-link'>{`${postAuthor.name} ${postAuthor.surname}`} </Link>
            </li>
            <li className="post__header__info-item">
              <span className="create-data">{createdData}</span> 
            </li>
            <li className="post__header__info-item">
              <VisibilityOutlinedIcon className="views" fontSize="small" />
              <span className="views-value"> {pageViews} </span> 
            </li>
            {isOwner &&
            <li className="post__header__info-item">
              <Link to={{
                    pathname:`/writing/${_id}/edit`,
                    state: { title, shortDiscription, textContent}
                    }} >
                <EditOutlinedIcon />
              </Link>
            </li>
            }
          </ul>
        <div className="post_title-container">
          <h1 className="post_title">
            {title}
          </h1>
        </div>
        <div className="post__short">
      <p className="short-decription"> {shortDiscription}</p>
        {
          coverUrl && <img src={`${API_PATH}${coverUrl}`} width='600' height='400' alt="post picture"/>
        }
      </div>
      </section>
      <div className="btn-block">
        <Link to="coment" className='btn_comment'>
          <ModeCommentOutlinedIcon />
          Комментарии
        </Link>
        <button className="btn btn__like" onClick={handleLikeButton} >
          <span> {likesCount} </span> 
          <FavoriteBorderIcon className="icon" />
        </button>
      </div>
      <section className='post__content'>
        {textContent}
      </section>
    </article>

   
  );
};

export default PostPage;