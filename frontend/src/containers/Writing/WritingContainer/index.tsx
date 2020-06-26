import React from 'react';
import WritingForm from '../../../components/WritingForm'
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../store/post/actions'

interface WritingProps {
  actions: any;
  history?: any
}
 class WritingContainer extends React.Component<WritingProps,{}> {
  constructor(props:WritingProps){
    super(props);
    // const { isEdit, _id, title, shortDiscription, textContent } = this.props.history.location.state;
  }

  fileRef= React.createRef<HTMLInputElement>();

  onSubmit = (formData: any) => {
    if (this.fileRef.current?.files!==null) {
      this.props.actions.publishPost(formData, this.fileRef.current?.files[0])
    } else {
      this.props.actions.publishPost(formData)
    }
}
  onSubmitEdit = (formData: any) => {
    if (this.fileRef.current?.files!==null) {
      this.props.actions.publishPost(formData, formData._id, this.fileRef.current?.files[0])
    } else {
      this.props.actions.publishPost(formData, formData._id)
    }
  }
  formProps = {
    fileRef: this.fileRef
  }

  editProps ={
     ...this.props.history?.location.state,
  }

  render() {
    {console.log(this.props)}
    return (
          <WritingForm {...this.formProps} onSubmit={this.onSubmit} />
     
    )

  }
 }



 const mapDispatchToProps = (dispatch: any) => ({
     actions: bindActionCreators(actions, dispatch),
 });
 
 export default connect(null, mapDispatchToProps)(WritingContainer);