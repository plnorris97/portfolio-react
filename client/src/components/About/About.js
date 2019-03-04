import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function About() {
  return (
    <Card>
      <CardBody >
        <CardImg src="" alt="Tricia Norris"></CardImg>
        <CardTitle>About</CardTitle>
        <CardSubtitle>From Marketer to Developer - My Career Change Story</CardSubtitle>
        <CardText>For nearly 20 years, I provided marketing support for sales and product development teams in the financial and insurance industries for large Fortune 200 and 500 companies. As a member of these fast-paced teams, I managed all marketing aspects of my clients’ projects – from the strategic to the tactical.
          <br />
          This experience afforded me the ability to manage the redesign, development and deployment of two B2B websites. During this time, I learned many aspects of front end and back end development alongside IT consultants and internal teams.
          <br />
          While considering a new career in early 2018, I discovered the University of Richmond Coding Bootcamp, an intensive 24-week certificate program. In July 2018, I began my journey to becoming a web developer. This part-time course is offered through the School of Professional and Continuing Studies.
          </CardText>
        <CardText>
          I have learned the following techniques and frameworks:
          <ul>
            <li>HTML5, CSS3, JavaScript and jQuery</li>
            <li>Java and Bootstrap</li>
            <li>Express.js, React.js, Node.js</li>
            <li>Database Theory</li>
            <li>Bookshelf.js</li>
            <li>MongoDB, MySQL</li>
            <li>Command Line</li>
            <li>Git, Github</li>
          </ul>
          As a marketing manager, I became highly organized and acquired strong project management skills from the traditional to working in Agile Scrum. I am a Certified Scrum Product Owner® as well as a Certified Scrum Master®. I also hold a Master in Business Administration from VCU (2014). I look forward to bringing this experience to a future developer role.
          </CardText>
      </CardBody>
    </Card>
  )
}
export default About;
