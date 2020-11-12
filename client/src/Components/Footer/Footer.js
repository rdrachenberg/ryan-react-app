import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../../index.css'


const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='fixed-bottom'>
        <Col md={4}></Col>
        <Col md={4}>
            <Row id='footer-buttons'>
                <Button href="/" variant="outline-info" className="footer-buttons"><i className="fas fa-home"></i></Button>
                <Button href="/portfolio" variant="outline-info" className="footer-buttons"><i className="fas fa-server"></i></Button>
                <Button href="https://github.com/rdrachenberg" target="_blank" variant="outline-info" className="footer-buttons"><i className="fab fa-github"></i></Button>
                <Button href="/contact-me" variant="outline-info" className="footer-buttons"><i className="fas fa-phone-square"></i></Button>
            </Row>
        </Col>
        <Col md={4}></Col>
        </Navbar>
    );
}

export default Footer