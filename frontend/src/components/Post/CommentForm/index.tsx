import React from 'react';
import { reduxForm } from 'redux-form';
import {Field} from 'redux-form';

const CommentFormComponent = (props:any) => {
  const {handleSubmit, initialValues} = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name='postComment' component='input' type='text' placeholder='Введите комментарий...'/>
      <button type='submit' >Отправить</button>
    </form>
  );
};

const CommentForm = reduxForm({
  form: 'comment',
})(CommentFormComponent);

export default CommentForm;