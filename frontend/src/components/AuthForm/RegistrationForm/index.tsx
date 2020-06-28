import React from 'react';
import { reduxForm } from 'redux-form';
import {Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import RegistrationImg from '../../../assets/img/auth_img.png';
import { required } from '../../../validators';
import RenderField from '../RenderField';


const RegistrationFormComponent = (props:any) => {
  const { handleSubmit } = props;
  return (
    <section className="auth-inputbox_form-wrapepr">
      <div className="auth-inputbox_img-container">
        <img src={RegistrationImg} width='50' alt=""/>
        <span>Введите свои данные</span>
      </div>
    <form onSubmit={handleSubmit} className="auth-inputbox_form">
        <Field 
          name='name' 
          component={RenderField}
          type='text' 
          placeholder='Имя' 
          className="auth-inputbox_field"
          label='Имя'
          validate={required}
          />

        <Field 
          name='surname' 
          component={RenderField}
          type='text' 
          placeholder='Фамилия' 
          className='auth-inputbox_field'
          validate={required}
          label='Фамилия'
        />
       <Field 
        name='birthDate' 
        component={RenderField}
        type='text' 
        placeholder='Дата рождения' 
        className='auth-inputbox_field'
        validate={required}
        label='birthDate'
       />

        <Field 
          name='email' 
          component={RenderField}
          type='email' 
          placeholder='Email' 
          className='auth-inputbox_field'
          validate={required}
          label='email' 
          />
        <Field 
          name='password'  
          component={RenderField}
          type='password' 
          placeholder='Пароль' 
          className='auth-inputbox_field'
          validate={required}
          label='password'
          />
      <div className="auth-inputbox__bth_block">
      <Button 
        type='submit' 
        color='primary' 
        variant="contained" 
        size="large" 
        className="auth-inputbox_submit-btn">
        Зарегистрироваться
        </Button> 
      </div>
      
    </form>
    </section>
    
  );
};

const RegistrationForm = reduxForm({
  form: 'auth-inputbox',
})(RegistrationFormComponent);

export default RegistrationForm;