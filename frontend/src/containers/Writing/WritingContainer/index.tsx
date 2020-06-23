import React from 'react';
import WritingForm from '../../../components/WritingForm'
import axios from 'axios';

 class WritingContainer extends React.Component<{}, {}> {

onSubmit = (formData: any) => {
  
  console.log(formData)
}
init = {
  postComment:'sda',
  file:'',
}
  render() {
    return (
      <WritingForm onSubmit={this.onSubmit} initialValues={this.init}/>
    )

  }
 }



export default WritingContainer;