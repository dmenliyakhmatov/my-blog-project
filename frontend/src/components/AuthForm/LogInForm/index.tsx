import React from 'react';
import { reduxForm } from 'redux-form';
import {Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import RegistrationImg from '../../../assets/img/auth_img.png';

const LogInFormComponent = (props:any) => {
  const { handleSubmit } = props;
  return (
    <section className="auth-inputbox_form-wrapepr">
      <div className="auth-inputbox_img-container">
        <img src={RegistrationImg} width='50' alt=""/>
        <span>Введите логин и пароль</span>
      </div>
    <form onSubmit={handleSubmit} className="auth-inputbox_form">
      <div className='input_group'>
        <Field name='email' id='logIn_email' component='input' type='email' placeholder='Email' className="auth-inputbox_field "/>
        <label htmlFor="logIn_email" className='auth-inputbox_label' >Email</label>
      </div>
      <div className='input_group'>
        <Field name='password' id='logIn_password' component='input' type='password' placeholder='Пароль' className="auth-inputbox_field "/>
        <label htmlFor="logIn_password" className='auth-inputbox_label' >Пароль</label>
      </div>
      <div className='input_group'></div>
      <div className="auth-inputbox__bth_block">
      <Button type='submit' color='primary' variant="contained" size="large" className="auth-inputbox_submit-btn">Войти</Button> 
      </div>
      
    </form>
    </section>
    
  );
};

const LogInForm = reduxForm({
  form: 'logIn',
})(LogInFormComponent);

export default LogInForm;