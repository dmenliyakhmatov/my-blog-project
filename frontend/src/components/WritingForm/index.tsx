import React from 'react';
import { reduxForm } from 'redux-form';
import {Field} from 'redux-form';
import InputFile from './InputFile';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import './writingFormStyle.css';

const WritingFormComponent = (props:any) => {
  const {handleSubmit, fileRef} = props;
  console.log(props)
  return (
    <section className="writing_form-wrapepr">
    <form onSubmit={handleSubmit} className="writing_form">
      <div className="writing_form-header">
        <Field name='category' component='select' className="writing_select"> 
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </Field>
        <div className="author">
          <span>Дмитрий Менлияхматов</span>
        </div>
      </div>
      <Field name='title' component='input' type='text' placeholder='Заголовок' className="writing_field writing_form_title"/>
      <Field name='shortDiscription' component='textarea' type='text' placeholder='Краткое описание' className="writing_field writing_form_discription"/>
      <Field name='textContent' component='textarea' type='text' placeholder='Основной текст' className="writing_field writing_form_content"/>
      <div className="btn_file">
      <Field fileRef={fileRef} name='cover' component={InputFile} />
      </div>
      <div className="bth_block">
      <Button type='submit' color='primary' variant="contained" size="large" className="writing_submit-btn">Опубликовать</Button> 
      <Button type='button' color='secondary' variant="contained">Отмена</Button>
      </div>
      
    </form>
    </section>
    
  );
};

const WritingForm = reduxForm({
  form: 'writing',
})(WritingFormComponent);

export default WritingForm;