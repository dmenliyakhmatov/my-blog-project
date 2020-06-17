import React from 'react';
import  Main  from '../../containers/Main'
import Posts from '../../containers/Posts';
import Users from '../../containers/User'
import Writing from '../../containers/Writing'
import PageWrapper from '../../containers/PageWrapper'

const Pages = () => {
  return (
      <PageWrapper >
                  {console.log('24214')}
        <Main />
        <Posts />
        <Users />
        <Writing />
      </PageWrapper>
  );
};

export default Pages;