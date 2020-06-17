import React from 'react';
import {Link} from 'react-router-dom';

const PostPage = (props: any) => {
  const {
    title, 
    textContent, 
    category, 
    author:{
    userId,
  }} = props;

  return (
    <article className='layout-center' >
      <section className="post__header-wrapper">
        <div className="post__header-information">
          <ul className="post__header-information_row">
            <li className="info-item">
              <Link to={`posts/${category}`} className='category-link'>Категория </Link>
            </li>
            <li className="info-item">
              <Link to={`posts/${userId}`} className='author-link'>Автор </Link>
            </li>
            <li className="info-item">
              <span className="create-data">Дата создания</span> 
            </li>
            <li className="info-item">
              <span className="views-value"> Просмотры</span> 
            </li>
          </ul>
        </div>
        <div>
          <h1 className="post_title">
            {title}
          </h1>
        </div>
      </section>
      <div className="btn-block">
          <Link to="coment" className='btn_comment'> Комментарии</Link>
          <button className='btn_favorite'>В избранное</button>
      </div>
      <section className='post__content'>
        {textContent}
      </section>
    </article>

   
  );
};

export default PostPage;