import React, { Component } from 'react';
import Welcome from './components/Welcome/Welcome';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
// import Resume from './components/resume';
// import Work from './components/work';
// import Contact from './components/contact';
import FooterPage from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Welcome /> 
        <About />
        {/* <Resume />
        <Work />
        <Contact /> */}
        <FooterPage />
      </div>
    );
  }
}

export default App;
