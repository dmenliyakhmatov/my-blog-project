import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../../store/user/actions';
import UserEditForm from '../../../components/User/UserEditForm'

class UserEdit extends React.Component<{},{}> {
 render() {
   return (
      <UserEditForm />
   )
 }
}

const mapStateToProps = (state: any) => ({ ...state.user });

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);