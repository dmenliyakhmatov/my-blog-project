import React from 'react';
import './userCardStyle.css'
import defaultAvatar from '../../../assets/img/defaultAvatar.png'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Button from '@material-ui/core/Button';
import { API_PATH } from '../../../constants/apiPath';
import { Link } from 'react-router-dom';

interface IUserCardProps {
  userData: {
    _id: string;
    name: string;
    surname: string;
    birthDate: string;
    about: string;
    avatarUrl: string;
  }
  isCurrentUserPage: boolean;
}

const UserCard = (props: IUserCardProps) => {
  const {userData :{
    _id,
    name,
    surname,
    birthDate,
    about,
    avatarUrl,
  },
  isCurrentUserPage,
  } = props;
  return (
    <section className="user-card__wrapper">
      <div className="user-card_top">
        <img src={`${API_PATH}${avatarUrl}`} alt="user avatar" className="user-card__avatar"/>
        <div className="user-card__setting-area">
        {isCurrentUserPage && 
          <Link to={`/user/edit/${_id}`}>
            <Button variant="outlined">
              <SettingsOutlinedIcon />  
            </Button>
          </Link>

        }
          
        </div> 
      </div>
      <div className="user-card__name-wrapper">
      <h2 className="user-card__name" >{`${name} ${surname}`}</h2>
      </div>
      <div className="content_row">
        <p className="user-card__about">
          {about}
        </p>
      </div>
      <div className="content_row">
      <span className="register-data"> {`Дата рождения: ${birthDate}`}</span>
      </div>
    </section>
  )
}

export default UserCard;