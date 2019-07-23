import React from "react";
import './Social.css';
// import { FaFacebookSquare, FaGithubSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Col, Row } from "mdbreact";

class SocialWidget extends React.Component {
    render() {
      return (
          <Row>
            <Col>
                {/* <ul>
                    <div id="icon"><FaGithubSquare /></div>
                        <i href="https://github.com/plnorris97" src="../../images/004-github.png"></i>
                    <div id="icon"><FaLinkedin /></div>
                    <div id="icon"><FaFacebookSquare /></div>
                    <div id="icon"><FaInstagram /></div>
                </ul> */}
            </Col>
          </Row>
      );
    }
}
export default SocialWidget;