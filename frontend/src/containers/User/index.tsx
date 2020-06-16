import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../router/routes';
import UsersContainer from './UserContainer'

const Users = () => {
  const UserPages = {
      component: UsersContainer,
      path: routes.USER_PROFILE_PATH,
      exact: true,
    };

  return (
    <Switch>
      <Route {...UserPages} />
    </Switch>
  )
}
export default Users;