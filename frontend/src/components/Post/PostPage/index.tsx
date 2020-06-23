import React from 'react';
import {Link} from 'react-router-dom';
import './postPage.css'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

const PostPage = (props: any) => {
  console.log('PostPage',props)
  const {
    title, 
    textContent, 
    category, 
} = props;

  return (
    <article className='layout-center' >
      <section className="post__header-wrapper">
          <ul className="post__header-information_row">
            <li className="post__header__info-item">
              <Link to={`posts/${category}`} className='category-link'>Категория </Link>
            </li>
            <li className="post__header__info-item">
              <Link to={`posts/`} className='author-link'>Автор </Link>
            </li>
            <li className="post__header__info-item">
              <span className="create-data">Дата создания</span> 
            </li>
            <li className="post__header__info-item">
              <VisibilityOutlinedIcon className="views" fontSize="small" />
              <span className="views-value"> Просмотры</span> 
            </li>
          </ul>
        <div className="post_title-container">
          <h1 className="post_title">
            {title}
          </h1>
        </div>
      </section>
      <div className="btn-block">
          <Link to="coment" className='btn_comment'>
          <ModeCommentOutlinedIcon />
          Комментарии</Link>
          <button className='btn_favorite'>
            <BookmarkBorderOutlinedIcon />
            </button>
      </div>
      <section className='post__content'>
        {textContent}
      </section>
    </article>

   
  );
};

export default PostPage;