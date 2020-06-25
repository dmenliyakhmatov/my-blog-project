import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../store/post/actions';
import PostItem from '../../../components/Post/PostItem';
interface IPostProps {
  isLoggedIn: boolean;
  isPostLoading: boolean;
  errMsg: string;
  postsList: [{_id:string}];
  actions: any;
  postNumber: number;
}

class PostsAll extends React.Component<IPostProps,{} > {
  constructor(props:IPostProps){
    super(props);
  }

componentDidMount() {
  this.props.actions.fetchAllPosts(this.props.postNumber);
}

showMore = () => {
  this.props.actions.fetchNextPosts(this.props.postNumber);
}

componentWillUnmount() {
  this.props.actions.resetPostCounter();
}

  render() {
    return(
      <>
      {console.log(this.props.postsList)}
        {
          this.props.postsList?.map((post, i) => (
            <PostItem {...post} key={`Post_${post._id}`} />)
          )
        }
        <button type='button' onClick={this.showMore} >Жмяк</button>
        </>
    )
  }
}

const mapStateToProps = (state: any) => ({ ...state.post });

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsAll)