import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavbarText, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import {getCurrentUser,signOut} from '../ExternalConnectivity/AuthenticationService';

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);

    this.state = {
      showUser: false,
      showPM: false,
      showAdmin: false,
      username: undefined,
      login: false
    };
  }

  componentDidMount() 
  {
    const user = getCurrentUser();
    if (user) {
  
      this.setState({
        showUser: true,
        login: true,
        username: user.username
      });
    }
  }

  signOut = () => {
    signOut();
    this.props.history.push('/Login');
    window.location.reload();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar color="dark" dark expand="md">
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        {
          this.state.login ? (
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink href="#" onClick={this.signOut}>SignOut</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/CallExternalService" >External Service</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Dashboard">Signed in as: <b>{this.state.username}</b></NavLink>
              </NavItem>
              
            </Nav>                 
          ) : (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Login">Login</NavLink>
              </NavItem>
            </Nav>
          )
        }
      </Collapse>
    </Navbar>;
  }
}

export default withRouter(AppNavbar);