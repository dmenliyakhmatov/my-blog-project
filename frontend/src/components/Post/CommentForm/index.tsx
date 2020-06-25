import React from 'react';
import { reduxForm } from 'redux-form';
import {Field} from 'redux-form';
import './commentFormStyle.css';
import Button from '@material-ui/core/Button';

const CommentFormComponent = (props:any) => {
  const {handleSubmit, initialValues} = props;
  return (
    <section className="comment-form_wrapper">
      <form onSubmit={handleSubmit} className="comment-form_container">
        <Field name='postComment' component='textarea' cols='86' rows='4' placeholder='Введите комментарий...' className='comment_input' />
        <div className="comment-form_btn">
          <Button color="primary" size="small" type='submit' variant="outlined" >Отправить</Button>
        </div>


      </form>
    </section>


  );
};

const CommentForm = reduxForm({
  form: 'comment',
})(CommentFormComponent);

export default CommentForm;