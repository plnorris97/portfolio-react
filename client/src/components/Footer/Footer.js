import React from "react";
import './Footer.css';
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer fixed="bottom" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="4">
              <h5 className="name">Tricia Norris, MBA, CSPO, CSM</h5>
              <p className="title">Full Stack Web Developer</p>
            </Col>
            <Col md="2">
            </Col>
            <Col md="3">
              <ul>
                <h6 className="list-unstyled">
                  <a href="/about">About</a>
                </h6>
                <h6 className="list-unstyled">
                  <a href="/resume">Resume</a>
                </h6>
                <h6 className="list-unstyled">
                  <a href="/work">Work</a>
                </h6>
                <h6 className="list-unstyled">
                  <a href="/contact">Contact</a>
                </h6>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <p>Tricia Norris</p>
            <a href="https://www.tricianorris.tech"> TriciaNorris.tech </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterPage;