import React from 'react';
import './PageHeader.css';
import logo from '../../../assets/img/logoza.png';
import {Link} from 'react-router-dom';
import { routes } from '../../../router/routes'
import defaultAvatar from '../../../assets/img/defaultAvatar.png'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { API_PATH } from '../../../constants/apiPath';
export interface UserData{
  name:string;
  surname?:string;
  birthDate?:string;
  userId?: string;
  avatarUrl:string;
}

export interface HeaderProps {
  currentUser?: {
    currentId:string,
    currentName: string,
    currentSurname: string,
    avatarUrl?: string;
  }
  isLoggedIn: boolean;
  logoutMenu: boolean;
  handleLogInButton: () => void;
  onLogoutArrowClick: () => void;
  onBlurLogout: () => void;
  onLogout: () => void;
}

export default function Header(props:HeaderProps) {
  const { 
    currentUser,
    isLoggedIn,
    logoutMenu,
    onLogoutArrowClick,
    onBlurLogout,
    onLogout,
    handleLogInButton,
  } = props;
  console.log(props)
  return (
    <div className={"main_header"}>  
      <div className={'header__containter'}>
        <h1 className={'visually-hidden'}>biter's blogs</h1>

        <Link to="/" className={'header__logo'}>
          <img src={logo} width={50} alt="Biter's blogs"/>
        </Link>
        <Link to="/writing" className={"newPost"}>Новая запись</Link>
      {
        isLoggedIn ?
        <div className="header__user-menu" >
            <Link to={`/user/${currentUser?.currentId}`} className={"header__user-menu_link"} >
              <span className="user-menu_text" >{ currentUser?.currentName } </span>
              <span className="user-menu_text" >{ currentUser?.currentSurname} </span>
              <img src={`${API_PATH}${currentUser?.avatarUrl}`} alt="Avatar" className="header__avatar" />
            </Link>
            <button className={`logout-menu_arrow ${logoutMenu ? 'isActive' : ''}`} onClick={onLogoutArrowClick}>
                <ArrowDropDownOutlinedIcon />
              </button>
            { logoutMenu &&
              <div className="logout-menu_wrapper">
              <button className="logout-menu_btn" onClick={onLogout} >
                <span> Выйти </span> 
                <ExitToAppOutlinedIcon />
              </button>
            </div>}
          </div>
        :
        <div className={"header__login-menu"} onClick={handleLogInButton}>
          <AccountCircleOutlinedIcon />
          <span>Войти</span>
      </div>
    
      }

      </div>

    </div>
  )
}
