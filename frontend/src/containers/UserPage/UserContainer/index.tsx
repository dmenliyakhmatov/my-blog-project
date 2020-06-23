import React from 'react';
import UserCard from '../../../components/User/UserCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostItem from '../../../components/Post/PostItem'
import actions from '../../../store/user/actions';
// 'HelloWorldProps' describes our props structure.
// For the state, we use the '{}' type.
interface UserState {
  isLoggedIn: boolean;
  userData: {}
}

interface UserProps {
  actions: any;
  isCurrentUserPage: boolean;
  userData:{
    userId: string;
  };
  userPosts: [{
    _id:string
  }]
  isUsersLoading: boolean;
  postNumber: number;
}

class UsersContainer extends React.Component<UserProps, UserState> {
  constructor(props:UserProps) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.fetchUser();
  }

  showMore = () => {
    console.log(this.props.postNumber)
    const postNumber = this.props.postNumber
    this.props.actions.fetchNextPosts(postNumber);
  }



  render() {
    return (<>
     {this.props.isUsersLoading && <span>Загрузка...</span>}
      {this.props.userData && <div>
        <UserCard userData={this.props.userData} isCurrentUserPage={this.props.isCurrentUserPage}  />
        {this.props.userPosts && this.props.userPosts.map((post, index) => (
          <PostItem {...post} key={`PostItem_${post._id}`} />
        ))}
        <button type='button' onClick={this.showMore}> Показать еще</button>
      </div>
      }
      </>
    )
  }
};

const mapStateToProps = (state: any) => ({ ...state.user });

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);