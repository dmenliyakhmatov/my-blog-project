import React from 'react';
import './userCardStyle.css'
import defaultAvatar from '../../../assets/img/defaultAvatar.png'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Button from '@material-ui/core/Button';

const UserCard = (props: any) => {
  const {userData :{
    name,
    surname,
  },
  isCurrentUserPage,
  } = props;
  return (
    <section className="user-card__wrapper">
      <div className="user-card_top">
        <img width="55" height="55" src={defaultAvatar} alt="user avatar" className="user-card__avatar"/>
        <div className="user-card__setting-area">
        {isCurrentUserPage && 
          <Button variant="outlined">
            <SettingsOutlinedIcon />  
          </Button>
        }
          
        </div> 
      </div>
      <div className="user-card__name-wrapper">
      <h2 className="user-card__name" >{`${name} ${surname}`}</h2>
      </div>
      <div className="content_row">
        <p className="user-card__about">
          Немного о себе
        </p>
      </div>
      <div className="content_row">
        <span className="register-data"> Дата регистрации</span>
      </div>
    </section>
  )
}

export default UserCard;