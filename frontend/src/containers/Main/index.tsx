import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../router/routes';
import MainContainer from './MainContainer'

const Main = () => {
  return (
    <Switch>
      <Route component={MainContainer} path={routes.MAIN_PAGE_PATH} exact />
    </Switch>
  )
}
export default Main;