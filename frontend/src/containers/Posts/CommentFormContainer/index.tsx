import React from 'react';
import CommentForm from '../../../components/Post/CommentForm';
import axios from 'axios';

interface ICommentProps {
  postId: string;
}

export default class CommentFormContainer extends React.Component<ICommentProps,{}> {
  constructor(props: ICommentProps) {
    super(props);
  };

  handleSubmit = (formData: any) => {
    console.log("!2sdd")

        axios({
        method: 'POST',
        url: `http://localhost:5000/api/${this.props.postId}/comments`,
        headers: {Authorization: 'Bearer e98649fd-c5fd-4471-a7f8-bb6de401d689'},
        data: {commentBody:formData.postComment}
      }).then((response) => {console.log(response)}).catch((error) => {console.log(error)})
      // console.log(response);
  }

  render() {
    return (
        <CommentForm onSubmit={this.handleSubmit} />
    )
  }
}
