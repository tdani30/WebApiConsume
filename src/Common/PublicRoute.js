import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {getCurrentUser} from '../ExternalConnectivity/AuthenticationService';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) 
{
  return (
    <Route
      {...rest}
      render={(props) => !getCurrentUser()? <Component {...props} /> : <Redirect to={{ pathname: '/Dashboard' }} />}
    />
  )
}

export default PublicRoute;