import React from 'react';
import WritingForm from '../../../components/WritingForm'
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../store/post/actions'

interface WritingProps {
  actions: any;
}
 class WritingContainer extends React.Component<WritingProps,{}> {
    fileRef= React.createRef<HTMLInputElement>();
  constructor(props:WritingProps){
    super(props);
  }
  onSubmit = (formData: any) => {
    if (this.fileRef.current?.files!==null) {
      this.props.actions.publishPost(formData, this.fileRef.current?.files[0])
    }
}
  formProps = {
    fileRef: this.fileRef
  }
  render() {
    return (
      <WritingForm {...this.formProps} onSubmit={this.onSubmit} />
    )

  }
 }



 const mapDispatchToProps = (dispatch: any) => ({
     actions: bindActionCreators(actions, dispatch),
 });
 
 export default connect(null, mapDispatchToProps)(WritingContainer);