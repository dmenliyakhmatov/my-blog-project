import React from 'react';
import  Main  from '../../containers/Main'
import Posts from '../../containers/Posts';
import Users from '../../containers/UserPage'
import Writing from '../../containers/Writing'
import PageWrapper from '../../containers/PageWrapper'

const Pages = () => {
  return (
      <PageWrapper >
        <Main />
        <Posts />
        <Users />
        <Writing />
      </PageWrapper>
  );
};

export default Pages;