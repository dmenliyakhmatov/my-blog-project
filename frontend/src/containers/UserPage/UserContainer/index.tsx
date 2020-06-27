import React from 'react';
import UserCard from '../../../components/User/UserCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostItem from '../../../components/Post/PostItem'
import actions from '../../../store/user/actions';
// 'HelloWorldProps' describes our props structure.
// For the state, we use the '{}' type.

interface UserProps {
  actions: any;
  isCurrentUserPage: boolean;
  userData:{
    _id: string;
    name: string;
    surname: string;
    about: string;
    birthDate: string;
    avatarUrl: string;
  };
  userPosts: [{
    _id:string
  }]
  isUsersLoading: boolean;
  postNumber: number;
  match: {
    params: {
      userId: string;
    }
  };
}

class UsersContainer extends React.Component<UserProps, {}> {
  constructor(props:UserProps) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.fetchUser(this.props.match.params.userId);
  }

  showMore = () => {
    this.props.actions.fetchNextPosts(this.props.postNumber, this.props.match.params.userId);
  }



  render() {
    const {userData, userPosts, isCurrentUserPage} = this.props;
    console.log('!!!', userData)
    return (<>
     {this.props.isUsersLoading && <span>Загрузка...</span>}
      {userData && <div>
        <UserCard userData={userData} isCurrentUserPage={isCurrentUserPage}  />
        {userPosts && userPosts.map((post, index) => (
          <PostItem 
          {...post} key={`PostItem_${post._id}`} />
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