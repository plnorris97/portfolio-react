// this component is a container component and will have state to walk the visitor through
// my employment timeline

// i'll use a vertical timeline component to show dynamically my experience over the years
// and where technology/web/dev was a part of my responsibilities

import React, { Fragment } from "react";
// import { render } from "react-dom";
import { Col, Container, Row } from "mdbreact";
import { Timeline, Event } from "react-timeline-scribble";
import './Resume.css';

const Resume = () => (
  <Container>
    <Row>
      <Col className="skills">
      <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      </Col>
    <Col className="work">
    <Fragment>
      <h2>Work Experience</h2>
      <Timeline>
      <Event interval={"4/2018 – Present"} title={"Technology Apprentice"} subtitle={"Maxx Potential"}>
        Work directly with clients to complete projects on time and within budget. Projects include quality assurance and testing, information security, web design and development, and mobile app development.
        </Event>
        <Event interval={"7/2018 – 12/2018"} title={"Marketing Manager"} subtitle={"Talking Monkey Media"}>
        Managed client website and social media projects while coordinating with company design and development resources.
        </Event>
        <Event interval={"3/2016 – 11/2018"} title={"Principal, Head Marketer"} subtitle={"Norris Consulting, LLC"}>
        I connect small businesses with the creatives resources they need to help grow their bottom line. I provide marketing management support for any type of project. I am also an effective long-term strategic partner and an extension of your business. I will be your brand ambassador. Together, we'll build your marketing roadmap and consider the tactics that will work for you. 
        </Event>
        <Event interval={"6/2016 – 12/2017"} title={"Marketing Manager"} subtitle={"Profiles (Capital One)"}>
        Supported the Spark Small Business card LOB in requests related to the client development and trade show channels.
        </Event>
        <Event interval={"12/2011 – 4/2016"} title={"Marketing Specialist"} subtitle={"Genworth Financial"}>
        Marketing and sales support for the Annuity & Life LOB including but not limited to email campaign promotion & analytics, printed marketing material, websites and overall strategy. I am the Product Owner for three Producer-facing websites within two LOBs managing strategy and implementation including editing and updating the site in CQ5 and monitoring and analyzing site analytics. I successfully drove and launched a redesign of one website using the Agile methodology while coordinating with developers, designers, architects, copywriter and ScrumMaster.
        </Event>
        <Event interval={"12/2013 – 5/2015"} title={"LGBT Forum President"} subtitle={"Genworth Financial"}>
        Lead the company's LGBT employee organization to drive awareness of the LGBT community. Helped promote Genworth's products which provide life insurance and retirement solutions to this unique and underserved community.
        </Event>
        <Event interval={"10/2010 – 12/2011"} title={"Premier Sales Associate"} subtitle={"Genworth Financial"}>
        I provided pre-sales and marketing suport for high performing Retail long term care insurance agents based out of three California offices (150 agents). Using traditional business & sales growth methods, I helped agents grow their business through referrals, client database mining, centers of influence, networking, social marketing, seminars & workshops, product knowledge and competitive positioning.
        </Event>
      </Timeline>
      </Fragment>
    </Col>
    <Col className="education">
    <Fragment>
      <h2>Education</h2>
      <Timeline>
          <Event interval={"7/2018 – 2/2019"} title={"Full Stack Web Developer Certificate"} subtitle={"University of Richmond"}>
          <ul>
          <li>Intensive 24-week part-time professional certificate</li> 
          <li>Technologies and frameworks covered during the program include, among others:
          HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, Bookshelf.js, MongoDB, MySQL, Command Line, Git, Heroku, Homebrew, MAMP</li>
          </ul>
          </Event>
          <Event interval={"8/2012 – 5/2014"} title={"Master of Business Administration"} subtitle={"Virginia Commonwealth University"}>
          text here.
          </Event>
          <Event interval={"8/1993 – 5/1997"} title={"Bachelor of Arts"} subtitle={"Elon University"}>
          <ul>
            <li>Majors: Spanish and International Studies</li>
            <li>Sport: Women's Cross Country | 1994-1997</li>
            <li>Activities: Alpha Sigma Alpha social sorority (Intramural Chair, Membership Chair)</li>
            <li>Study Abroad: Costa Rica | Winter 1994; Ecuador | Spring 1997</li>
          </ul>
          </Event>
      </Timeline>
    </Fragment>
    </Col>
    </Row>
    </Container>
  );

  export default Resume;