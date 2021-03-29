import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

  

const NavBar = () => {

    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top" >
            <Navbar.Brand href="#home">StoofChella</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/details">Details</Nav.Link>
                </Nav>
                <Nav.Link href="https://github.com/stephaniezou1/fun-site">Source</Nav.Link>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;
