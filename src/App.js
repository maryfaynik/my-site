import React, { Component } from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import resumeData from './components/resume/resumeData'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About />
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}
export default App;