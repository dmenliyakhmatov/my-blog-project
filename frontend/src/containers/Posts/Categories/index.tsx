import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../actions/post';
import PostItem from '../../../components/Post/PostItem';

interface IPostProps {
  isLoggedIn: boolean;
  isPostLoading: boolean;
  errMsg: string;
  postsList: [];
  actions: any;
  match: {
    params: {
      category: string
    }
  };
}
class Categories extends React.Component<IPostProps,{} > {
  constructor(props:IPostProps){
    super(props);
  }

// componentDidMount() {
//   this.props.actions.fetchAllPosts(this.props.match.params.category);
// }

  render() {
    return(
      <>
        {/* {
          this.props.postsList?.map((post, i) => (
            <PostItem {...post} key={`Post_${i}`} />)
          )
        } */}
        <div>Категории</div>
        </>
    )
  }
}

const mapStateToProps = (state: any) => ({ ...state.post });

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories)