import React from 'react';
import WritingForm from '../../../components/WritingForm'
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../store/post/actions'

interface WritingProps {
  actions: any;
  currentUser: {},
  match: {
    params:{
      postId: string;
    }
  },
  history: any;
  postData: any;
  redirect:boolean
}
 class WritingContainer extends React.Component<WritingProps,{}> {
  constructor(props:WritingProps){
    super(props);
  }

  fileRef= React.createRef<HTMLInputElement>();



  onSubmit = async (formData: any) => {
    if (this.fileRef.current?.files!==null) {
      await this.props.actions.publishPost(formData, this.fileRef.current?.files[0])
    } else {
      await this.props.actions.publishPost(formData)
    }

  }

  formProps = {
    fileRef: this.fileRef,
    userData: this.props.currentUser,
  }

  render() {
    return (
          <WritingForm {...this.formProps} onSubmit={this.onSubmit} />
    )

  }
 }


 const mapStateToProps = (state: any) => ({...state.user, ...state.post });

 const mapDispatchToProps = (dispatch: any) => ({
     actions: bindActionCreators(actions, dispatch),
 });
 
 export default connect(mapStateToProps, mapDispatchToProps)(WritingContainer);