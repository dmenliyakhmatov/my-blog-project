import React from 'react';
import { Route } from 'react-router-dom';

const RouteWrapper = ({ ...props }) => {
  
  return <Route {...props} />;

};
export default RouteWrapper;