import React from 'react';
import {Navbar, Nav} from 'reactstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#home">StoofChella</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/details">Details</Nav.Link>
                <Nav.Link href="https://github.com/stephaniezou1/fun-site">GitHub</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )

}

export default NavBar
