import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavbarText, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import AuthenticationService from '../ExternalConnectivity/AuthenticationService';

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

  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();

    if (user) {
      const roles = [];

      // user.authorities.forEach(authority => {
      //   roles.push(authority.authority)
      // });
      // roles.push("ROLE_PM");
      // roles.push("ROLE_ADMIN");
      // roles.push("ROLE_ADMIN");
  
      this.setState({
        showUser: true,
        // showPM: roles.includes("ROLE_PM") || roles.includes("ROLE_ADMIN"),
        // showAdmin: roles.includes("ROLE_ADMIN"),
        login: true,
        username: user.username
      });
    }
  }

  signOut = () => {
    AuthenticationService.signOut();
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
      <Nav className="mr-auto">
        <NavLink href="/Dashboard">Dashboard</NavLink>
        {this.state.showUser && <NavLink href="/Dashboard">Dashboard</NavLink>}
        {/* {this.state.showPM && <NavLink href="/pm">PM</NavLink>}
        {this.state.showAdmin && <NavLink href="/admin">Admin</NavLink>} */}
      </Nav>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        {
          this.state.login ? (
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavbarText>
                    Signed in as: <a href="/Dashboard">{this.state.username}</a>
                  </NavbarText>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={this.signOut}>SignOut</NavLink>
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