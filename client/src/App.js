import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './components/Welcome/Welcome';
import Navigation from './components/Nav/Nav';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import FooterPage from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
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
      </Router>
    );
  }
}

export default App;
