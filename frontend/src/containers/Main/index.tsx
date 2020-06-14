import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../router/routes';
import MainContainer from './MainContainer'

const Main = () => {
  const mainPage = {
      component: MainContainer,
      path: routes.MAIN_PAGE_PATH,
      exact: true,
    };

  return (
    <Switch>
      <Route {...mainPage} />
    </Switch>
  )
}
export default Main;