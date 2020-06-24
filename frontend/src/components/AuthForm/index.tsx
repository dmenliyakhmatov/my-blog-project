import React from 'react';
import RegistrationForm from './RegistrationForm';
import './authStyle.css';

const AuthForm = (props: any) => {
  return (<>
    <div className="popup"></div>
    <div className="auth__wrapper">
      <div className="auth__container">
      <RegistrationForm />
      </div>

    </div>
    </>
  )
}
export default AuthForm;