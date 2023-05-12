import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeContent from '../HomeContent/HomeContent';




const Body = () => {

    return (
        <div fluid='true'>
            
            <Jumbotron id='jumbotron'>
                <Container id='jumbo-container'>
                    <Row>
                        <Col md={4} id='bio-image-col'>
                            <img src='https://avatars1.githubusercontent.com/u/31778670?s=460&v=4' alt='Ryan Drachenberg' width='200px' id='bio-pic'/>
                            <p>
                                <Button href="/contact-me" variant="info" to='/contact-me' id='jumbo-button'>Contact me</Button>
                            </p>
                        </Col>
                        <Col>
                            
                        </Col>
                        <Col md={6}></Col>
                    </Row>
                </Container>
            </Jumbotron>
            <HomeContent />
            
        </div>
    )
}

export default Body; 
