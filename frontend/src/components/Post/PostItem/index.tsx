import React from 'react';
import './postItemStyle.css'
import { Link, Switch, Route } from 'react-router-dom';
import { routes } from '../../../router/routes';
import PostPageContainer from '../../../containers/Posts/PostPageContainer';

const PostItem = (props: any) => {
  const {title, textContent, _id} = props;
  // console.log(props)
  return (
    <section className="post-wrapper">
      <div className="post__header">
        <a href="#" className="category">Категория</a>
        <a href="#" className="author"> Автор</a>
        <p className="post_data">Дата публикации</p>
      </div>
      <h2 className="post__title">{title}</h2>
      <Link to={`/post/${_id}`} > <p className="short-decription"> {textContent}</p> </Link>
  
      {
        props.img && <img src="#" alt="post picture"/>
      }
      <div className="post__footer">
        <a href="#" className="post__comment"> Комментарии</a>
        <button className="btn__favorite">Закладки</button>
        <button className="btn__like">Лайк</button>
      </div>
    </section>
  )
} 

export default PostItem;