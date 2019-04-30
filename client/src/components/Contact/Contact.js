// this will be a standard contact page and (potentially container component if form) with information on how to contact me
// the visitor can also schedule an appointment, interview or chat
// this will be intended for other developers as well as hiring managers.
// create a UI component to welcome the visitor to the site.
import React from 'react';
import { Col, Container, Row } from "mdbreact";
import { Button } from "reactstrap";
import '../Contact/Contact.css';
import LazyHero from 'react-lazy-hero/lib/LazyHero';

class Contact extends React.Component {
    render () {
        return (
            <Container>
                <LazyHero opacity={0.1} color="lightgray" minHeight="65vh" isCentered={true} imageSrc={'../../images/150x150.png'} parallaxOffset={3}>
                    <Row>
                        <h1>Contact Me</h1>
                        <h5>You're here so let's chat!</h5>
                    </Row>
                </LazyHero>
                <Row>
                    <Col className="col-md-8 mb-4" id="contact-text">
                        <h3>If you have discovered this page, then you must want to chat!</h3>
                        <p>I am interested in hearing from employers or colleagues regarding job opportunities, either freelance, contract
                            or permanent. You may contact me via email or social media.</p>
                        <p>If you have questions or would like to chat, I am available to grab a cup of coffee.</p>
                    </Col>
                    <Col className="col-md-4 mb-4" id="contact-info">
                        <h5>My Contact Information</h5>
                        <p>Email: <a href="mailto:tricianorris97@gmail.com">tricianorris97@gmail.com</a></p>
                        <p>Phone: 804.614.6547</p>
                        <p><a href="https://github.com/plnorris97" target="_blank" rel="noopener noreferrer">Github</a></p>
                        <p><a href="https://www.linkedin.com/in/tricianorris/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-4 mb-4" id="partner-button">
                        <Button color="primary" size="lg">Let's Talk!</Button>
                    </Col>
                    <Col className="col-md-8 mb-8" id="contact-info">
                    <h5>Are you a developer and looking to partner?</h5>
                    <p>As Aristotle said, I believe the whole is greater than the sum of its parts. Do you have a project you're working on and need a helping hand? Maybe you're looking to partner to develop something new and amazing? I would love to help! </p>
                    </Col>
                    <br />
                </Row>
            </Container>
        )
    }; 
}

export default Contact;