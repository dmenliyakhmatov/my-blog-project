import React from 'react';
import {Link} from 'react-router-dom';
import './postPage.css'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

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
} = props;

  return (
    <article className='layout-center' >
      <section className="post__header-wrapper">
          <ul className="post__header-information_row">
            <li className="post__header__info-item">
              <Link to={`user/${''}`} className='category-link'>Категория </Link>
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
            <li className="post__header__info-item">
              <Link to={{
                    pathname:`/writing/${_id}/edit`,
                    state: { title, shortDiscription, textContent}
                    }} >
                <EditOutlinedIcon />
              </Link>
            </li>
          </ul>
        <div className="post_title-container">
          <h1 className="post_title">
            {title}
          </h1>
        </div>
        <div className="post__short">
      <p className="short-decription"> {shortDiscription}</p>
        {
          coverUrl && <img src={`http://localhost:5000/cover/${coverUrl}`} width='600' height='400' alt="post picture"/>
        }
      </div>
      </section>
      <div className="btn-block">
        <Link to="coment" className='btn_comment'>
          <ModeCommentOutlinedIcon />
          Комментарии
        </Link>
        <button className='btn_favorite'>
          <BookmarkBorderOutlinedIcon />
        </button>
        <button className="btn btn__like">
          {likesCount && likesCount}
          <FavoriteBorderIcon />
        </button>
      </div>
      <section className='post__content'>
        {textContent}
      </section>
    </article>

   
  );
};

export default PostPage;