// this component will act as the container for portfolio card items (Portfolio.js)

import React from 'react';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Container, Col, Row } from 'mdbreact';
import Portfolio from '../Portfolio/Portfolio';
import LazyHero from 'react-lazy-hero';
import '../Work/Work.css';

// Change this to a class component as it needs props and state - we need to map through the database of portfolio items.
function Work() {
    return (
        <Container>
            <LazyHero opacity={0.1} color="lightgray" minHeight="65vh" isCentered={true} imageSrc={'../../images/150x150.png'} parallaxOffset={3}>
                <Row>
                    <Col>
                        <h2>Work</h2>
                        <p>Access my featured projects and check out my code or the live application itself.</p>
                    </Col>
                </Row>
            </LazyHero>
            <Row>
                {/* Add filter/button option to select the work you want to see (Javascript, React, PHP) */}
            </Row>
            <Row>
                <Col>
                {/* Portfolio component will render however many items are available based on the filter selection. */}
                    <Portfolio />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Grow your Brand</h2>
                    <p>Some text here about how I can help you grow your brand personal or professional.</p>
                </Col>
                <Col>
                    {/* Supportive image */}
                </Col>
            </Row>
        </Container>
    )
}
export default Work;