import React from 'react'
import {info} from './headerData'

class Header extends React.Component{
    
    render()  {
        return (
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              {/*<li><a className="smoothscroll" href="#projects">Highlighted Projects</a></li>*/}
            </ul> 
          </nav>
          <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">I'm {info.name}</h1>
                <h2><em>Full stack developer</em> experienced in React, Rails, and Node.js based <span>web development.</span>
                  <br></br>
                  Background in <span>computer science</span> and experience in <span>pet care</span>, <em>finance</em>, and <span>fitness</span>. 
                  <br></br>
                  Strong <em>business and product understanding</em> along with <em>people and project management</em> skills to help small teams drive <span>growth</span> and <span>success.</span>
                </h2>
                <br></br>
                <h3>Start scrolling to learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                <hr />
                <ul className="social">
                    <li><a target="_blank" rel="noopener noreferrer" href={info.links.linkedin}><i className="fab fa-linkedin" /></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={info.links.github}><i className="fab fa-github" /></a></li>
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