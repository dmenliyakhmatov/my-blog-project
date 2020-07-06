import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../router/routes';
import UsersContainer from './UserContainer';
import UserEdit from './UserEdit';

const UserPage = () => {

  return (
    <Switch>
        <Route component={UsersContainer} path={routes.USER_PROFILE_PATH} exact/>
        <Route component={UserEdit} path={routes.USER_PROFILE_EDIT} exact/>
      </Switch>
  )
}
export default UserPage;