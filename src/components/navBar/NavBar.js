import React, {Component} from 'react';

import firebase from 'firebase';
import 'firebase/auth';

import {
  Navbar, Collapse, NavbarBrand, Nav, NavbarText,
  NavbarToggler, Button
} from 'reactstrap';

class NavBar extends Component {

  state = {
    isOpen: false
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => this.setIsOpen(!this.state.isOpen);

  render(){
    const { authed } = this.props;
    // const authed = this.props.auth;
    // const setUser = this.props.setUser;

    return(
      <>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MyPinStuff</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>

            </Nav>
            <NavbarText>
              {authed ? (
                <Button color="danger" onClick={this.logMeOut}>Logout</Button>
              ) : (
                  'Need a loginbutton'
                )}</NavbarText>
          </Collapse>
        </Navbar>
      </>
    )
  }

}

export default NavBar;