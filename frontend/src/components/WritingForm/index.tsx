import React from 'react';
import { reduxForm } from 'redux-form';
import {Field} from 'redux-form';
import InputFile from './InputFile';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './writingFormStyle.css';
import categories from '../../constants/categories';

const WritingFormComponent = (props:any) => {
  const {
    handleSubmit,
    fileRef,
    onDelete,
    userData:{
      currentName,
      currentSurname,
    }} = props;
    const isEdit = props.initialValues;

  return (
    <section className="writing_form-wrapepr">
    <form onSubmit={handleSubmit} className="writing_form">
      <div className="writing_form-header">
        <div className="category-container">
          <label htmlFor="category">Выберете категорию</label>
          <Field id='category' name='category' component='select' className="writing_select" >
            {
            Object.entries(categories).map(([key, label]) => (
              <option value={key} key={`writing_category_${label}`}>{label}</option>
            ))
            }
          </Field>
        </div>
        
        <div className="author">
          <span>{`${currentName} ${currentSurname}`}</span>
        </div>
      </div>
      <Field name='title' component='input' type='text' placeholder='Заголовок' className="writing_field writing_form_title"/>
      <Field name='shortDiscription' component='textarea' cols='76' rows='5' type='text' placeholder='Краткое описание' className="writing_field writing_form_discription"/>
      <Field name='textContent' component='textarea' type='text' cols='76' rows='15' placeholder='Основной текст' className="writing_field writing_form_content"/>
      <div className="btn_file">
      <Field fileRef={fileRef} name='cover' component={InputFile} />
      </div>
      <div className="writing__bth_block">
      <Button type='submit' color='primary' variant="contained" size="large" className="writing_submit-btn">Опубликовать</Button> 
      <Button type='button' color='secondary' variant="contained">Отмена</Button>
      { isEdit && 
      <Button type='button' color='secondary' variant="outlined" onClick={onDelete}>
        <DeleteForeverIcon />
      </Button>
      }
      </div>
      
    </form>
    </section>
    
  );
};

const WritingForm = reduxForm({
  form: 'writing',
})(WritingFormComponent);

export default WritingForm;