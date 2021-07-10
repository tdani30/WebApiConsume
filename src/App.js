import React, { useEffect } from "react"
import Dashboard from './commponents/Dashboard';
import Login from './commponents/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Common/PrivateRoute';
import PublicRoute from './Common/PublicRoute';
import AppNavBar from './commponents/AppNavbar';
import {getCurrentUser} from './ExternalConnectivity/AuthenticationService';
import CallExternalService from './commponents/CallExternalService';

function App() {

  useEffect(() => { 
    if (!getCurrentUser()) {
      return;
    }
  });
    return (
      <>
      <BrowserRouter>
       <div className="content">
       <AppNavBar></AppNavBar>
       <Switch>
          <PrivateRoute path='/' exact={true} component={Dashboard}/>
          <PrivateRoute path='/Dashboard' exact={true} component={Dashboard}/>
          <PublicRoute path='/Login' exact={true} component={Login}/>
          <PrivateRoute path='/CallExternalService' exact={true} component={CallExternalService}/>
            </Switch>
       </div>
       </BrowserRouter>
      </> 
    );
  }
export default App