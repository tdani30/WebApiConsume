import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import  {getCurrentUser} from '../ExternalConnectivity/AuthenticationService';


// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getCurrentUser() ? <Component {...props} /> : <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />}
    />
  )
}

export default PrivateRoute;