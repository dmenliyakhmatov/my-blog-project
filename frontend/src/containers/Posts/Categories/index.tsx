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
  match: {
    params: {
      category: string;
    }
  }
}
class Categories extends React.Component<IPostProps,{} > {
  constructor(props:IPostProps){
    super(props);
    this.handleLikeButton = this.handleLikeButton.bind(this);
  }

componentDidMount() {
  const category = this.props.match.params.category;
  this.props.actions.fetchCategoriesPosts(category);
}

showMore = () => {
  const category = this.props.match.params.category;
  this.props.actions.fetchNextCategoriesPosts(this.props.postNumber, category);
}

componentWillUnmount() {
  this.props.actions.resetPostCounter();
}

handleLikeButton(postId: string) {
  this.props.actions.createLike(postId);
}

  render() {
    {console.log('category')}
    return(
      <>
        {
          this.props.postsList?.map((post) => (
            <PostItem handleLikeButton={this.handleLikeButton} {...post} key={`Post_${post._id}`} />)
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories)