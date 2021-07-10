import React from "react"
import Dashboard from './commponents/Dashboard';
import Login from './commponents/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
      <>
    
    <Router>
        <Switch>
          <Route path='/' exact={true} component={Dashboard}/>
          <Route path='/Dashboard' exact={true} component={Dashboard}/>
          <Route path='/Login' exact={true} component={Login}/>
        </Switch>
      </Router>
      </>
      
    );
  }
export default App