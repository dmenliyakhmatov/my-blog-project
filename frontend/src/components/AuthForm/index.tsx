import React from 'react';
import RegistrationForm from './RegistrationForm';
import LogInForm from './LogInForm'
import './authStyle.css';
import { ILoginForm } from '../../interfaces';

interface IAuthFormProps {
  activeTab: string;
  loginSubmit: any;
  registrationSubmit: any;
  handleClick: (arg0: string) => void
}

const AuthForm = (props: IAuthFormProps) => {
  const { handleClick, activeTab, loginSubmit, registrationSubmit } = props;

  console.log(props)
  return (<>
    <section className="auth__wrapper">
      <div className="auth__container">
        <div className="auth_btn">
          <button className={`logIn_btn auth__btn ${ activeTab==='logIn'? 'auth_btn_active' : ''}`}  onClick={()=> handleClick('logIn')} >Вход</button>
          <button className={`registration_btn auth__btn ${ activeTab==='registration'? 'auth_btn_active' : ''}`} onClick={()=>handleClick('registration')} >Регистрация</button>
        </div>
      {
        activeTab === 'registration' ? (
        <RegistrationForm onSubmit={registrationSubmit} />
        ) : (
      <LogInForm onSubmit={loginSubmit} /> )
    }
      </div>

    </section>
    </>
  )
}
export default AuthForm;