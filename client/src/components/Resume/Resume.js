// this component is a container component and will have state to walk the visitor through
// my employment timeline

// i'll use a vertical timeline component to show dynamically my experience over the years
// and where technology/web/dev was a part of my responsibilities

import React, { Fragment } from "react";
import { render } from "react-dom";

import { Timeline, Event } from "react-timeline-scribble";

const App = () => (
    <Fragment>
      <h1>Work Experience</h1>
      <Timeline>
        <Event interval={"2016 – 2018"} title={"Lorem"} subtitle={"Ipsum"}>
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </Event>
        <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </Event>
      </Timeline>
      <h1>Education</h1>
      <Timeline>
          <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
          </Event>
      </Timeline>
    </Fragment>
  );
  
  render(<App />, document.getElementById("root"));