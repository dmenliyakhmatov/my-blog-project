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
    this.avatarUpload = this.avatarUpload.bind(this);
  }

  avatarRef= React.createRef<HTMLInputElement>();

  avatarUpload () {
    const userId = this.props.match.params.userId;
    if (this.avatarRef.current?.files!==null) {
    this.props.actions.uploadAvatar(userId, this.avatarRef.current?.files[0])
    }
  }

  componentDidMount() {
    this.props.actions.fetchUser(this.props.match.params.userId);
  }
  showMore = () => {
    this.props.actions.fetchNextPosts(this.props.postNumber, this.props.match.params.userId);
  }

  componentWillUnmount() {
    this.props.actions.resetPostCounter();
  }

  render() {
    const {
      userData,
      userPosts,
      isCurrentUserPage,
      match:{
        params: {
          userId
        }
      }
    } = this.props;
    
    return (<>
     {this.props.isUsersLoading && <span>Загрузка...</span>}
      {userData && <div>
        <UserCard avatarUpload={this.avatarUpload} avatarRef={this.avatarRef} userId={userId} userData={userData} isCurrentUserPage={isCurrentUserPage}  />
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