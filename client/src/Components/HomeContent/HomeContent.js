import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import MostLanguages from '../MostLanguages/MostLanguages'

const HomeContent = () => {

    return (
        <Container id='home-content-container'>
            <Row id='gif-row'>
            <Col></Col>
            <img src={'/ryan-drac-bio.gif'} alt='Ryan Drachenber bio gif' id='ryan-drac-gif' />
            <Col></Col>
            </Row>
            <Row>
            {/* <!-- first paragraph --> */}
            <Col>
                <p id='text-to-wrap'> Ever since I can remember I’ ve been fascinated by technology. This fascination has led me to pursue a career in IT and given me the drive to become a full stack web developer. I believe the future is in web development and it is thrilling to see applications come to life.</p>
            </Col>
            </Row>
            <Row>
            {/* <!-- second paragraph --> */}
            <Col>
                <p> Finance and Technology have been prevalent throughout my life. I've had the fortune to run multiple companies and freelanced IT services before really diving into computer programming. Being experienced in both fields has been extremely valuable and gives me insight that most devs don't have. I take extreme ownership in my work and take challenges with stride. I love that we actually get to solve real world problems. The best way to predict the future is to invent it.</p>
                <blockquote><i>"An engineer is someone who can make for a Dollar<br/> what any fool could make for two".</i><cite>Alan Kay</cite></blockquote>
                
                <p><strong>Let’s build something awesome together!</strong></p>
            </Col>
                <Col md='4'><MostLanguages /></Col>
            </Row>
            {/* <!-- third paragraph --> */}
            <Row>
            <Col>
                <p> Im currently working on my blockchain developer certification through Kingsland University. I am always looking for new opportunities. Feel free to contact me via e-mail at <a href='mailto:ryandrachenberg@gmail.com'>ryandrachenberg@gmail.com</a> or phone <a href='tel:1-407-341-1162'>407-341-1162</a>. I look forward to meeting you. 
                </p>
            </Col>
            </Row>
            <h2>Applications Built</h2>
            <hr />
            <Row className='built-apps'>
            <Col md={6}>
                <h4>
                <a href="/" target="_Blank" rel="noopener noreferrer" className="app-links">
                    <strong>Ryan's Awesome App</strong>
                </a>
                </h4>
                <h5>
                    I built this React site to display my portfolio.
                </h5>
            </Col>
            <Col></Col>
            <Col></Col>
                
            </Row>
            <Row>
                <h5> 
                    <ul>
                        <li>The front end is React. </li>
                        <li>The backend is Node.js, Express for routing, and MongoDB for my database</li>
                        <li>Mobile friendly, responsive design</li>
                        <li>Tech Stack - React, Node.js, Express, MongoDB</li>
                    </ul>
                </h5>
            </Row>
            <Container>
                <Row>
                    <Col xs={3} md={2}>
                        <Image src='https://cdn3.icicletech.com/media/react-logo.png' alt='react' width={'100%'} rounded/>
                    </Col>
                    <Col xs={3} md={2}>
                        <Image src='https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png' width={'100%'}alt='node' rounded/>
                    </Col>
                    <Col xs={3} md={2}>

                        <Image src='https://vegibit.com/wp-content/uploads/2018/05/expressjs.png' alt='express' width={'100%'} rounded/> 
                    </Col>
                    
                    <Col xs={3} md={2}>
                        <Image src='https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png' alt='mongodb' width={'100%'} rounded/>
                    </Col>
                </Row>
            </Container>
            <Col md={3}></Col>
            <hr/>
            <Row className='built-apps'>
            <Col md={6}>
                <h4>
                    <a href="https://rdrachenberg.github.io/gifTastic/" target="_Blank" rel="noopener noreferrer" className="app-links">
                        <strong>Gif-tastic</strong>
                    </a>
                </h4>
                <h5>
                    This app allows you to pull the top 10 gifs for any keyword search.
                </h5>
            </Col>
            <Col></Col>
            <Col></Col>
                
            </Row>
            <Row>
                <h5> 
                    <ul>
                        <li>The front end is HTML5, CSS3, & JavaScript. </li>
                        <li>The backend I'm using Firebase for my database</li>
                        <li>Tech Stack - HTML5, CSS3, jQuery, JavaScript, Bootstrap, API, Firebase.</li>
                    </ul>
                </h5>
            </Row>
            <Container>
                <Row>
                    <Col xs={3} md={2}>
                        <Image src='https://designhooks.com/wp-content/uploads/2016/04/html5-and-css3.png' alt='HTM5-CSS3' width={'100%'} rounded/>
                    </Col>
                    <Col xs={3} md={2}>
                        <Image src='https://3wga6448744j404mpt11pbx4-wpengine.netdna-ssl.com/wp-content/uploads/2012/10/jquery.jpg' width={'100%'} alt='jquery' rounded/>
                    </Col>
                    <Col xs={3} md={2}>
                        <Image src='https://uploads.getpop.org/wp-content/uploads/2017/12/js-480x480.png' alt='javascript' width={'100%'} rounded/> 
                    </Col>
                    <Col xs={3} md={2}>
                        <Image src='https://cdn-images-1.medium.com/max/1200/1*lAR9Uh_gJ7dp23e0vhy5Hg.png' alt='api' width={'100%'} rounded/>
                    </Col>
                    <Col xs={3} md={2}>
                        <Image src='https://cdn-images-1.medium.com/max/1600/1*0BZJ4ayeNrs0uACvzXgk0w.png' alt='api' width={'100%'} rounded/>
                    </Col>
                </Row>
            </Container>
            <Col md={3}></Col>
            <hr/>
            <br/>
            <h3>Experience</h3>
                <h4>TSS Investment Group, Inc</h4>
                <h4><i>Web Development</i></h4>
                <h5>
                    <ul>
                    <li>Developed multiple websites for clients.</li>
                    <li>Projects included digital campaigns, on site banners, websites and/or landing pages, segmented
                        email, social media, & print for clients in the medical, investment, and real estate professions.</li>
                    </ul>
                </h5>
                <hr/>
                <br/>
                <h3>Additional Work Experience</h3>
                    <h5>
                        <ul>
                        <li>President at TSS Investment Group Inc.				5/2015 - Present</li>
                        <li>Consultant at The Smile Studio™, Inc.				12/2010 - Present</li>
                        <li>Director at The Florida Gulf Coast REIA, LLC 			12/2013 - 12/2016</li>
                        <li>Acquisitionist at USA M & D, LLC 		9/2012 - 12/2013</li>
                        <li>Real Estate Acquisitionist Forever Wealth Club, LLC 		1/2006 - 2/2008</li>
                        <li>Currency Trader at Premiere Trade, LLC 				1/2004 - 5/2005 </li>
                        </ul>
                    </h5>
                <hr/>
                <br/>
                <h3>Education</h3>
                <h4>Kingsland University</h4>
                <i>
                    <h5>Blockchain Development</h5>
                </i>
                <div className="wrap-container">
                    <div className="col-md-8">
                        <p>Currently enrolled in Kingsland University Blockchain Developer program. I have completed the 9 month full stack developer portion of the program and am now in the final Blockchain Certification portion of it. I should have this completed in by next quarter. More information can be found <a href="https://kingslanduniversity.com/zero-to-blockchain-developer-program/" target="_blank" rel="noreferrer">here</a></p>
                    </div>
                    <div id="img-div-one" className="col-md-2">
                        <a href="https://blockchaincertificate-verify.kingsland.io/certificate/5fcdf04e686adb11255ebbab" target="_blank" rel="noreferrer">
                            <img src="https://github.com/rdrachenberg/Bootstrap-Portfolio/blob/master/public/assets/images/Valid_Badge.4f9193d8.jpg?raw=true" alt="badge" width="180px"/>
                        </a>
                    </div>
                    <div className="col-md-8">
                        <p>My full stack developer certificate, which is logged and verified on the Ethereum Blockchain, can be found <a href="https://blockchaincertificate-verify.kingsland.io/certificate/5fcdf04e686adb11255ebbab" target="_blank" rel="noreferrer">here.</a></p>
                    </div>
                    
                </div>
                <br/>
                <h4>University of Central Florida</h4>
                <i>
                    <h5>Full Stack Web Development</h5>
                </i>
                <div className="wrap-container">
                    <div className="col-md-8">
                        <p>Those who receive this badge have demonstrated a fundamental working knowledge of HTML, CSS, JavaScript, jQuery, Firebase, Node.js, Express.js, MySQL, MongoDB, Mongoose, & React.js. They have displayed their ability to work with diverse teams on demanding time-lines to build fully functional web applications from start to finish. In addition, they have exhibited the skills necessary to learn new technologies & resolve issues independently.</p>
                    </div>
                    <div id="img-div-two" className="col-md-2">
                        <a href="https://www.credly.com/credit/14881985">
                            <img src="https://credlyapp.s3.amazonaws.com/badges/71f74aa24f3b222aebc92bb9f9c61b18_17.png" alt="badge" width="180px"/>
                        </a>
                    </div>
                </div>
                
                <p>Completion of the following: 24-week program, 250 contact hours plus individual & group projects utilizing HTML, CSS, JavaScript, jQuery, Firebase, Node.js, MySQL, MongoDB, Mongoose, and React.js.</p>
                <h5>Best Regards,</h5>
                <h5>Ryan Drachenberg</h5>
        </Container>
    )
}

export default HomeContent; 
