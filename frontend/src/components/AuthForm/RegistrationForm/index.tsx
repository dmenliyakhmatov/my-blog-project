import React from 'react';
import { reduxForm } from 'redux-form';
import {Field} from 'redux-form';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import './registrationFormStyle.css';

const RegistrationFormComponent = (props:any) => {
  const {handleSubmit, fileRef} = props;
  return (
    <section className="registration_form-wrapepr">
    <form onSubmit={handleSubmit} className="registration_form">
      <Field name='name' component='input' type='text' placeholder='Заголовок' className="registrationfield "/>
      <Field name='surname' component='input' type='text' placeholder='Краткое описание' className="registration_field "/>
      <Field name='email' component='input' type='password' placeholder='Основной текст' className="registration_field "/>
      <Field name='birthDate' component='input' type='text' placeholder='Основной текст' className="registration_field "/>
      <div className="registration__bth_block">
      <Button type='submit' color='primary' variant="contained" size="large" className="registration_submit-btn">Зарегистрироваться</Button> 
      </div>
      
    </form>
    </section>
    
  );
};

const RegistrationForm = reduxForm({
  form: 'registration',
})(RegistrationFormComponent);

export default RegistrationForm;