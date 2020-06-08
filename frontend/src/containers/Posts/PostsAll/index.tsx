import React from 'react';
import avatar from '../../../img/defaultAvatar.png';


export default class LiveBlock extends React.Component {
  constructor(props:{}){
    super(props);
    this.state={

    }
  }

  render() {
    return(
      <div className='live_container'>
        <div className='live_comment'>
          <span className='live__fullName'>Имя Фамилия</span>
          <img src={avatar} width='300px' alt=''/>
          <p className='live__comment-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, magnam!</p>
        </div>
        <div className='live_comment'>
          <span className='live__fullName'>Имя Фамилия</span>
          <img src={avatar} width='300px' alt=''/>
          <p className='live__comment-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, magnam!</p>
        </div>
      </div>
    )
  }
}