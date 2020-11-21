import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../../index.css'


function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='fixed-top'>
            <Navbar.Brand href="/">Ryan Drachenberg</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/contributions">Contributions</Nav.Link>
                    <Nav.Link href="/contact-me">Contact Me</Nav.Link>
                </Nav>
                <Button href="https://github.com/rdrachenberg" target="_blank" variant="outline-info"><i className="fab fa-github"></i> Github</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}




export default NavBar