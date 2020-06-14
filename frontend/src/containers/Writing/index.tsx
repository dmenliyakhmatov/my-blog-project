import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../router/routes';
import WritingContainer from './WritingContainer'

const Writing = () => {
  const WritingPages = {
      component: WritingContainer,
      path: routes.WRITING_PATH,
      exact: true,
    };

  return (
    <Switch>
      <Route {...WritingPages} />
    </Switch>
  )
}
export default Writing;