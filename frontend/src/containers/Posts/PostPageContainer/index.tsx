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
  postsList: [];
  actions: any;
  match: {
    params: {
      postId: string
    }
  };
  postData: {};
  currentUser:{
    currentId:string;
  }
}
class PostPageContainer extends React.Component<IPostProps,{}> {
  constructor(props:IPostProps){
    super(props);
  }

  componentDidMount() {
    this.props.actions.fetchOnePost(this.props.match.params.postId)
  }

  render() {
    const userId = this.props.currentUser.currentId;
    return(
      <>
      {console.log('!!!', this.props.postData)}
      {this.props.isPostLoading && <span>Загрузка...</span>}
      { this.props.postData && <div>
        <PostPage {...this.props.postData} userId={userId} />
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