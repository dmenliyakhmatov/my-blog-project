import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../router/routes';
import PostContainer from './PostContainer'

const Posts = () => {
  const PostPages = {
      component: PostContainer,
      path: routes.POSTS_ALL_PATH,
      exact: true,
    };

  return (
    <Switch>
      <Route {...PostPages} />
    </Switch>
  )
}
export default Posts;