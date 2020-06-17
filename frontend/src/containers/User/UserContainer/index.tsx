import React from 'react';
import UserCard from '../../../components/User/UserCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostItem from '../../../components/Post/PostItem'
import actions from '../../../actions/user';
// 'HelloWorldProps' describes our props structure.
// For the state, we use the '{}' type.
interface UserState {
  isLoggedIn: boolean;
  userData: {}
}

interface UserProps {
  actions: any,
  userData:{
    posts: []
  },
  isUsersLoading: boolean

}

class UsersContainer extends React.Component<UserProps, UserState> {
  constructor(props:UserProps) {
    super(props);
  }
 

  componentDidMount() {
    this.props.actions.fetchUser();
  }

  render() {
    return (<>
      {!this.props.isUsersLoading && <div>
        <UserCard userData={this.props.userData} />
        {this.props.userData.posts.map((post, index) => (
          <PostItem {...post} key={`PostItem_${index}`} />
        ))}
      </div>
      }
      </>
    )
  }
}

const mapStateToProps = (state: any) => ({ ...state.user });

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);