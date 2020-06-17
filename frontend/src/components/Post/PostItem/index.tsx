import React from 'react';
import './postItemStyle.css'

const PostItem = (props: any) => {
  const {title, textContent} = props;
  console.log(props)
  return (
    <section className="post-wrapper">
      <div className="post__header">
        <a href="#" className="category">Категория</a>
        <a href="#" className="author"> Автор</a>
        <p className="post_data">Дата публикации</p>
      </div>
      <h2 className="post__title">{title}</h2>
  <p className="short-decription"> {textContent}</p>
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