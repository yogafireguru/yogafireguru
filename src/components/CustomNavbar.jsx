import React, { Component } from 'react';
import {Navbar, Nav, NavItem,NavDropdown, MenuItem, Image} from 'react-bootstrap'; 
import {Link} from 'react-router-dom';

class CustomeNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                         <Navbar.Brand>
                            <Link to="/"><Image src="assets/logo.jpeg" width="100px"responsive circle/></Link>
                         </Navbar.Brand>
                         <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/">Home</NavItem>
                            <NavItem eventKey={2}  href="/problem">Problem</NavItem>
                            <NavDropdown eventKey={3} title="Solution" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} href="/solution">Cell Network</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.2} href="/getstarted">How You Can Contribute</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={4} title="Vision" id="basic-nav-dropdown">
                                <MenuItem eventKey={4.1} href="/vision">Our Vision</MenuItem>
                                <NavItem eventKey={4.2} href="/values">Our Values & Principles</NavItem>
                                <NavItem eventKey={4.3} href="/story">Our Story</NavItem>
                                <MenuItem divider />
                            </NavDropdown>
                            <NavItem eventKey={5} href="/team">Contact Us</NavItem>
                        </Nav>       
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default CustomeNavbar;