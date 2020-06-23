import React from 'react';
import { reduxForm } from 'redux-form';
import {Field} from 'redux-form';
import DropzoneComponent from 'react-dropzone-component';
import InputFile from './InputFile';

var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};
var djsConfig = { autoProcessQueue: false }
var eventHandlers = { addedfile: (file:any) => console.log(file) }

const WritingFormComponent = (props:any) => {
  const {handleSubmit, initialValues} = props;
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="formHeader">
        <Field name='category' component='select' > 
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </Field>
        <div className="author">
          <span>Дмитрий Менлияхматов</span>
        </div>
      </div>
      <Field name='title' component='input' type='text' placeholder='Заголовок'/>
      <Field name='shortDiscription' component='textarea' type='text' placeholder='Краткое описание'/>
      <Field name='postContent' component='textarea' type='text' placeholder='Краткое описание'/>
      {/* <Field name='file' component='input' type='file' accept='.jpg, .png, .jpeg' /> */}
      <Field name='cover' component={InputFile} />
      {/* // <input type="file" name='cover'/> */}
      {/* <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} /> */}
      <button type='submit' >Отправить</button>
    </form>

    </>
  );
};

const WritingForm = reduxForm({
  form: 'writing',
})(WritingFormComponent);

export default WritingForm;