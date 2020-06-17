import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../router/routes';
import PostsAll from './PostsAll';
import PostCategories from './Categories';
import PostPageContainer from './PostPageContainer';

const Posts = () => {

  return (
    <Switch>
      <Route component={PostsAll} path={routes.POSTS_ALL_PATH} exact />
      <Route component={PostCategories} path={routes.POST_CATEGORIES} exact />
      <Route component={PostPageContainer} path={routes.POST_PAGE} exact />
      
    </Switch>
  )
}
export default Posts;