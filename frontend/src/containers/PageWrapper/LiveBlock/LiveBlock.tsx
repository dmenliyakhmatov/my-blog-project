import React from 'react';
import avatar from '../../../img/defaultAvatar.png';
import Comment from '../../../components/Post/LiveComment'
import './LiveBlock.css'

export default class LiveBlock extends React.Component {
  constructor(props:{}){
    super(props);
    this.state={

    }
  }

  render() {
    return(
      <Comment />
    )
  }
}