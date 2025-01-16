import React, { Component } from 'react';

import Header from './components/header/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';
import Projects from "./components/projects/Projects";

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Projects />
        <Footer />
      </div>
    );
  }
}
export default App;