import React from 'react';
import avatar from '../../../img/defaultAvatar.png';


const Comment = (props: any) => {

    return(
      <div className='live_container'>
        <div className='live_comment'>
          <img src={avatar} width='20px' alt=''/>
          <span className='live__fullName'>Имя Фамилия</span>
          <p className='live__comment-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, magnam!</p>
          <span className='live__post-title'>Post title</span>
        </div>
      </div>
    );
};

export default Comment;