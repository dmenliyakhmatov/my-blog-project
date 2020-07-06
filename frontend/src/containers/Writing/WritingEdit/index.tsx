import React from 'react';
import WritingForm from '../../../components/WritingForm'
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../store/post/actions'
import { Redirect } from 'react-router-dom';

interface WritingProps {
  actions: any;
  history?: any;
  match: any;
  id: string;
  currentUser: {};
  isDeleted: boolean;
}
 class WritingEditContainer extends React.Component<WritingProps,{}> {
  constructor(props:WritingProps){
    super(props);
    this.onDelete = this.onDelete.bind(this);
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

  componentWillUnmount() {
    this.props.actions.resetDelete();
  }

  onDelete = () => {
    const postId = this.props.match.params.postId
    this.props.actions.deletePost(postId)
  }

  formProps = {
    fileRef: this.fileRef,
    userData: this.props.currentUser,
    onDelete: this.onDelete,
  }

  editProps ={
    ...this.props.history.location.state,
  }

  render() {
    if (this.props.isDeleted) {
      return (<Redirect to='/' />)
    }
     
    return (
          <WritingForm {...this.formProps} initialValues={this.editProps} onSubmit={this.onSubmit} />
    )
  }
 }

 const mapStateToProps = (state: any) => ({...state.user, ...state.post });

 const mapDispatchToProps = (dispatch: any) => ({
     actions: bindActionCreators(actions, dispatch),
 });
 
 export default connect(mapStateToProps, mapDispatchToProps)(WritingEditContainer);