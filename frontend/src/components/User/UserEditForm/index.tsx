import React from 'react';
import { reduxForm } from 'redux-form';
import {Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './userEditFormStyle.css';

const UserEdit = (props:any) => {
  const { handleSubmit, onDelete } = props;
  console.log('userForm', props)

  return (
    <section className="writing_form-wrapepr">
    <form onSubmit={handleSubmit}  className="writing_form">
      <div className="writing_form-header">
      </div>
      <Field name='name' component='input' type='text' placeholder='Имя' className="user-edit_field writing_form_name"/>
      <Field name='surname' component='input' type='text' placeholder='Фамилия' className="user-edit_field writing_form_name"/>
      <Field name='birthDate' component='input' type='text' placeholder='Дата рождения' className="user-edit_field writing_form_input"/>
      <Field name='email' component='input' type='email' placeholder='email' className="user-edit_field writing_form_input"/>
      <Field name='about' component='textarea' type='text' cols='76' rows='15' placeholder='Немного о себе' className="user-edit_field writing_form_about"/>
      
      <div className="bth_block">
      <Button type='submit' color='primary' variant="contained" size="large" className="writing_submit-btn">Опубликовать</Button> 
      <Button type='button' color='secondary' variant="contained">Отмена</Button>
      <Button type='button' color='secondary' variant="outlined" onClick={onDelete}>
        <DeleteForeverIcon />
      </Button>
      </div>
      
    </form>
    </section>
    
  );
};

const UserEditForm = reduxForm({
  form: 'userForm',
})(UserEdit);

export default UserEditForm;