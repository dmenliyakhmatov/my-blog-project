import React from 'react';
import './PageHeader.css';
import logo from '../../../assets/img/logoza.png';
import {Link} from 'react-router-dom';
import { routes } from '../../../router/routes'
import defaultAvatar from '../../../assets/img/defaultAvatar.png'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
export interface UserData{
  name:string;
  surname?:string;
  birthDate?:string;
  userId?: string;
  avatarUrl:string;
}

export interface HeaderProps {
  user?: UserData;
  isLoggedIn: boolean;
  handleLogInButton: () => void;
}

export default function Header(props:HeaderProps) {
  return (
    <div className={"main_header"}>  
      <div className={'header__containter'}>
        <h1 className={'visually-hidden'}>biter's blogs</h1>

        <a href="#" className={'header__logo'}>
          <img src={logo} width={50} alt="Biter's blogs"/>
        </a>
        <a href="#" className={"newPost"}>Новая запись</a>
        < Link to="/user" >user</Link>
        < Link to="/writing" >writing</Link>
        < Link to={routes.POSTS_ALL_PATH} >posts</Link>
        < Link to={'/posts/5eea6bc8d0f47467271de27f'} >poasds</Link>

      {
        props.isLoggedIn ?
        <div className={"header__user-menu"}>
          <button className={"header__user-menu_messages"}>Messages</button>
          <button className={"header__user-menu_notice"}>Notice</button>
          <div>
            <a href="#">
              <img src={props.user?.avatarUrl || defaultAvatar} width="30" alt="Avatar"/>
            </a>
          </div>
        </div>
        :
        <div className={"header__login-menu"} onClick={() => props.handleLogInButton()}>
          <AccountCircleOutlinedIcon />
          <span>Войти</span>
      </div>
    
      }

      </div>

    </div>
  )
}
