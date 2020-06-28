import React from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../../store/post/actions';
import CommentForm from '../../../components/Post/CommentForm';
import store from '../../../store';
import { change } from 'redux-form';

interface ICommentProps {
  postId: string;
  actions?: any;
}

class CommentFormContainer extends React.Component<ICommentProps,{}> {
  constructor(props: ICommentProps) {
    super(props);
  };

  inputRef= React.createRef<HTMLInputElement>();

  handleSubmit = (formData: any) => {
    this.props.actions.createComment( this.props.postId, formData);
    store.dispatch(change('comment', 'postComment', ''))
  }

  formProps ={
    inputRef: this.inputRef
  }

  render() {
    return (
        <CommentForm {...this.formProps} onSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = (state: any) => ({ ...state.post, ...state.user });

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentFormContainer)
