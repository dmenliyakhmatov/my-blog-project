import React from 'react';
import RegistrationForm from './RegistrationForm';
import LigInForm from './LogInForm'
import './authStyle.css';

const AuthForm = (props: any) => {
  const { handleClick, activeTab } = props;

  return (<>
    <section className="auth__wrapper">
      <div className="auth__container">
        <div className="auth_btn">
          <button className={`logIn_btn auth__btn ${ activeTab==='logIn'? 'auth_btn_active' : ''}`}  onClick={()=>handleClick('logIn')} >Вход</button>
          <button className={`registration_btn auth__btn ${ activeTab==='registration'? 'auth_btn_active' : ''}`} onClick={()=>handleClick('registration')} >Регистрация</button>
        </div>
      {
        activeTab === 'registration' ? (
        <RegistrationForm />
        ) : (
      <LigInForm /> )
    }
      </div>

    </section>
    </>
  )
}
export default AuthForm;