import React from 'react';
import  Main  from '../../containers/Main'
import Posts from '../../containers/Posts';
import Users from '../../containers/User'
import Writing from '../../containers/Writing'

const Pages = () => {
  console.log("1231")
  return (
    <>
      <Main />
      <Posts />
      <Users />
      <Writing />
    </>
  );
};

export default Pages;