import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../router/routes';
import WritingContainer from './WritingContainer'
import WritingEdit from './WritingEdit';

const Writing = () => {

  return (
    <Switch>
      <Route component={WritingContainer} path={routes.WRITING_CREATE_PATH} exact />
      <Route component={WritingEdit} path={routes.WRITING_EDIT_PATH} exact />
    </Switch>
  )
}
export default Writing;