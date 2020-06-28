import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../store/post/actions';
import PostPage from '../../../components/Post/PostPage';
import CommentBlock from '../../../components/Post/CommentBlock';
import CommentFormContainer from '../CommentFormContainer';

interface IPostProps {
  isLoggedIn: boolean;
  isPostLoading: boolean;
  errMsg: string;
  actions: any;
  match: {
    params: {
      postId: string
    }
  };
  postData: any;
  currentUser:{
    currentId:string;
  }
}
class PostPageContainer extends React.Component<IPostProps,{}> {
  constructor(props:IPostProps){
    super(props);
    this.handleLikeButton = this.handleLikeButton.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchOnePost(this.props.match.params.postId)
  }

  handleLikeButton() {
    this.props.actions.createLike(this.props.match.params.postId, true);
  }

  render() {
    const userId = this.props.currentUser.currentId;
    return(
      <>
      {this.props.isPostLoading && <span>Загрузка...</span>}
      { this.props.postData && <div>
        <PostPage {...this.props.postData} userId={userId}  handleLikeButton={this.handleLikeButton} />
        <CommentBlock  {...this.props.postData} />
        <CommentFormContainer postId={this.props.match.params.postId} />
        </div>
        }
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({ ...state.post, ...state.user });

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPageContainer)