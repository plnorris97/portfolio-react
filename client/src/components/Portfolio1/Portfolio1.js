// make about me message less conversational. This should be something someone can read and get high level info about me.
// add a blog feature and tell my career change story there. I can always blog about things I am learning and overcoming with regards to technology/coding.

import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio1.css';

function About1() {
  return (
    <div class="container">
      <div class="row">
    <Card id="block">
      <CardTitle>
        <h3>Corporate Clients</h3>
      </CardTitle>
    </Card>
    <Card id="block">
    <CardTitle>
      <h3>Agency Clients</h3>
    </CardTitle>
  </Card>
  <Card id="block">
    <CardTitle>
      <h3>Small Business/Non-Profit Clients</h3>
    </CardTitle>
  </Card>
  </div>
  </div>
  )
}
export default About1;
