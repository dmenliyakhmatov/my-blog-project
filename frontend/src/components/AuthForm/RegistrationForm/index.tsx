import React from 'react';
import { reduxForm } from 'redux-form';
import {Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import RegistrationImg from '../../../assets/img/auth_img.png';

const RegistrationFormComponent = (props:any) => {
  const { handleSubmit } = props;
  return (
    <section className="auth-inputbox_form-wrapepr">
      <div className="auth-inputbox_img-container">
        <img src={RegistrationImg} width='50' alt=""/>
        <span>Введите свои данные</span>
      </div>
    <form onSubmit={handleSubmit} className="auth-inputbox_form">
      <div className='input_group'>
        <Field id='name' name='name' component='input' type='text' placeholder='Имя' className="auth-inputbox_field "/>
        <label htmlFor="name" className='auth-inputbox_label' >Имя</label>
      </div>
      <div className='input_group'>
        <Field name='surname' id='surname' component='input' type='text' placeholder='Фамилия' className="auth-inputbox_field "/>
        <label htmlFor="surname" className='auth-inputbox_label' >Фамилия</label>
      </div>
      <div className='input_group'>
       <Field name='birthDate' id='birthDate' component='input' type='text' placeholder='Дата рождения' className="auth-inputbox_field "/>
       <label htmlFor="birthDate" className='auth-inputbox_label' >Дата рождения</label>
      </div>
      <div className='input_group'>
        <Field name='email' id='reg_email' component='input' type='email' placeholder='Email' className="auth-inputbox_field "/>
        <label htmlFor="reg_email" className='auth-inputbox_label' >Email</label>
      </div>
      <div className='input_group'>
        <Field name='password' id='reg_password' component='input' type='password' placeholder='Пароль' className="auth-inputbox_field "/>
        <label htmlFor="reg_password" className='auth-inputbox_label' >Пароль</label>
      </div>
      <div className='input_group'></div>
      <div className="auth-inputbox__bth_block">
      <Button type='submit' color='primary' variant="contained" size="large" className="auth-inputbox_submit-btn">Зарегистрироваться</Button> 
      </div>
      
    </form>
    </section>
    
  );
};

const RegistrationForm = reduxForm({
  form: 'auth-inputbox',
})(RegistrationFormComponent);

export default RegistrationForm;