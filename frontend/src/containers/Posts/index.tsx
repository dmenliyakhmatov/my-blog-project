import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../router/routes';
import PostContainer from './PostContainer'
import PostCategories from './Categories'

const Posts = () => {
  const postPages = [
    {
      component: PostContainer,
      path: routes.POSTS_ALL_PATH,
      exact: true,
    },
    {
      component: PostCategories,
      path: routes.POST_CATEGORIES,
      exact: true,
    },
  ];

  return (
    <Switch>
      {
        postPages.map((page, index) => (
          <Route {...page} key={`PostPage_${index}`}/>
        ))
      }
    </Switch>
  )
}
export default Posts;