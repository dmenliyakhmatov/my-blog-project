import React from 'react';
import WritingForm from '../../../components/WritingForm'
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../store/post/actions'

interface WritingProps {
  actions: any;
  history?: any;
  match: any;
  id: string
}
 class WritingEditContainer extends React.Component<WritingProps,{}> {
  constructor(props:WritingProps){
    super(props);
  }

  fileRef= React.createRef<HTMLInputElement>();

  onSubmit = (formData: any) => {
    const postId = this.props.match.params.postId

    if (this.fileRef.current?.files!==null) {
      this.props.actions.editPost(formData, postId, this.fileRef.current?.files[0])
    } else {
      this.props.actions.editPost(formData, postId)
    }
}

formProps = {
  fileRef: this.fileRef
}

  editProps ={
    ...this.props.history.location.state,
  }

  render() {
    console.log('!!!!!!!!!!', this.props.match.params.userId)
    return (
          <WritingForm {...this.formProps} initialValues={this.editProps} onSubmit={this.onSubmit} />
     
    )

  }
 }



 const mapDispatchToProps = (dispatch: any) => ({
     actions: bindActionCreators(actions, dispatch),
 });
 
 export default connect(null, mapDispatchToProps)(WritingEditContainer);