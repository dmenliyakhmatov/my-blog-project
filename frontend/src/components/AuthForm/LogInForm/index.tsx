import React from 'react';
import { reduxForm } from 'redux-form';
import {Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import RegistrationImg from '../../../assets/img/auth_img.png';
import { required } from '../../../validators';
import RenderField from '../RenderField';

const LogInFormComponent = (props:any) => {
  const { handleSubmit } = props;
  return (
    <section className="auth-inputbox_form-wrapepr">
      <div className="auth-inputbox_img-container">
        <img src={RegistrationImg} width='50' alt=""/>
        <span>Введите логин и пароль</span>
      </div>
    <form onSubmit={handleSubmit} className="auth-inputbox_form">
        <Field 
          name='email' 
          id='logIn_email' 
          component={RenderField}
          type='email' 
          placeholder='Email' 
          className="auth-inputbox_field "
          validate={required}
          label='Email'
          />
        <Field 
          name='password' 
          id='logIn_password' 
          component={RenderField}
          type='password' 
          placeholder='Пароль' 
          className="auth-inputbox_field"
          validate={required}
          label='Пароль'
          />
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