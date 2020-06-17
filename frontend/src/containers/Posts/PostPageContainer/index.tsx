import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../actions/post';
import PostPage from '../../../components/Post/PostPage';
import CommentBlock from '../../../components/Post/CommentBlock';

class PostPageContainer extends React.Component<{},{}> {
  constructor(props:{}){
    super(props);
  }

  render() {
    const id = +this.props.match.params.postId;
    
    return(
      <>
        <PostPage {...this.props} />
        <CommentBlock />
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({ ...state.post });

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPageContainer)