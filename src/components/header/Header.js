import React from 'react'

class Header extends React.Component{
    
    render()  {
        let info = this.props.resumeData
        return (
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> 
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {info.name}</h1>
              <h3>I'm a NYC based <span>software developer</span>, <span>problem solver</span> and <span>fitness finatic</span> DOING SOME AWESOME STUFF... Let's <a className="smoothscroll" href="#about">start scrolling</a>
                and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href="https://www.linkedin.com/in/mary-farner/"><i className="fab fa-linkedin" /></a></li>
                <li><a href="https://github.com/maryfarner18"><i className="fab fa-github" /></a></li>
                <li><a href="https://medium.com/@maryfarner"><i className="fab fa-medium" /></a></li>
                <li><a href="https://www.instagram.com/maryfarner/"><i className="fab fa-instagram" /></a></li>
                <li><a href="https://www.facebook.com/mary.farner"><i className="fab fa-facebook" /></a></li>
                
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      );
    }
  }

  export default Header