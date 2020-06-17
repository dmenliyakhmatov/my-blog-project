import React from 'react';
import './PageHeader.css';
import logo from '../../../img/logoza.png';
import {Link} from 'react-router-dom';
import { routes } from '../../../router/routes'
export interface UserData{
  name:string;
  surname?:string;
  birthDate?:string;
  userId?: string;
  avatarUrl:string
}

export interface HeaderProps {
  user?: UserData;
  isLoggedIn?: boolean;
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
      {
        props.isLoggedIn ?
        <div className={"header__user-menu"}>
          <button className={"header__user-menu_messages"}>Messages</button>
          <button className={"header__user-menu_notice"}>Notice</button>
          <div>
            <a href="#">
              <img src={props.user?.avatarUrl} alt="Avatar"/>
            </a>
          </div>
        </div>
        :
        <div className={"header__login-menu"}>
        <button className={"header__user-menu_notice"} name={'Notice'}></button>
        <button className={"header__button login"}>Войти</button>
      </div>
    
      }

      </div>

    </div>
  )
}
