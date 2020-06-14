import React from 'react';
import { Route } from 'react-router-dom';

const RouteWrapper = ({ ...props }) => {
  console.log(props)
  return <Route {...props} />;

};
export default RouteWrapper;