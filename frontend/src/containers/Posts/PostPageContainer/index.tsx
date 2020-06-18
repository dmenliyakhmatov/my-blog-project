import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../actions/post';
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
}
class PostPageContainer extends React.Component<IPostProps,{}> {
  constructor(props:IPostProps){
    super(props);
  }

  componentDidMount() {
    console.log("!!!")
    this.props.actions.fetchOnePost(this.props.match.params.postId)
  }

  render() {
    
    return(
      <>
      {this.props.isPostLoading && <span>Загрузка...</span>}
      {console.log(this.props)}
      { this.props.postData && <>
        <PostPage {...this.props.postData} />
        <CommentBlock />
        <CommentFormContainer postId={this.props.match.params.postId} />
        </>
        }
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({ ...state.post });

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPageContainer)