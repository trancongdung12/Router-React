import React, { useState, Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from "react-router-dom";

class TopMenu extends Component {
    render(){
        return (
            <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">DungxReact</NavbarBrand>
                <NavbarToggler  />
                <Collapse  navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink>
                        <Link to="/">Home</Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink>
                    <Link to="/products">Product</Link>  
                    </NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
        );
}
}

export default TopMenu;