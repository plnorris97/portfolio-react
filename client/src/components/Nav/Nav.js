import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './Nav.css';


export default class Navigation extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Tricia Norris</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/components/">About Me</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/components/resume">Resume</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/components/work/work.js">Work</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/components/contact">Contact</NavLink>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Options
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
        </div>
        )
    }
}
