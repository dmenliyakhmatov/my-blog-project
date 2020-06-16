import React from 'react';

export default class PostCategories extends React.Component<{}, {}> {
  render() {
    return (
      <div className='live_container'>
      <div className='live_comment'>
        <span className='live__fullName'>Имя Фамилия</span>
        <p className='live__comment-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, magnam!</p>
      </div>
      <div className='live_comment'>
        <span className='live__fullName'>Имя Фамилия</span>
        <p className='live__comment-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, magnam!</p>
      </div>
    </div>
    )
  }
}