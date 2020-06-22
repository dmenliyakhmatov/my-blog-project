import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../router/routes';
import PostsAll from './PostsAll';
import PostCategories from './Categories';
import PostPageContainer from './PostPageContainer';

const Posts = () => {

  return (
    <Switch>
      <Route path={routes.POSTS_ALL_PATH} exact={true} component={PostsAll}  />
      {/* <Route component={PostCategories} path={routes.POST_CATEGORIES} exact={true} />  */}
      <Route component={PostPageContainer} path={routes.POST_PAGE} exact={true} />
      
    </Switch>
  )
}
export default Posts;
// {routes.POSTS_ALL_PATH}