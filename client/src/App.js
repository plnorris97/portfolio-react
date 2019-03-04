import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Welcome from './components/Welcome/Welcome';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import FooterPage from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
        </Switch>
        <FooterPage />
      </div>
    );
  }
}

export default App;
