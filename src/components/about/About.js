import React, { Component } from 'react'

class About extends Component {
    
    state = {
            
    }

    render() {
        return (
            <section id="about">
              <div className="row">
                <div className="three columns">
                  <img className="profile-pic" src="images/me.jpeg" alt="me!"/>
                </div>
                <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p> I grew up in Kalamazoo, Michigan, before heading to the East Coast to go to Yale. I walked on to the Women's Varsity Crew Team and majored in Computer Science and Math.
                      After four years of problem sets and <a href="https://en.m.wikipedia.org/wiki/Indoor_rower">erg</a> tests, I moved from Connecticut to New York City, where I spent most of my professional career — working across Pet Care, Finance, Fitness, and Tech, and gaining experience in software development, devops, markets, finance, operations, project management, and business development.
                      After nearly a decade in New York, I made my way back home to Kalamazoo, where I now work remotely as a Staff Engineer at Bond Vet. My husband runs a bike shop in town, which means the bike-to-person ratio in our household is, let's say, ambitious.
                      Outside of work, I enjoy cycling, running, and all other forms of exercise, and I've completed multiple marathons and one IRONMAN 140.6 race to date. These days I'm mostly focused on gravel cycling and running races — not for podiums, just for the love of it, and the occasional excuse to be outside without a toddler or a dog attached.
                  </p>
                  <div className="row">
                    <div className="columns contact-details">
                      <br></br>
                      <h2>Contact Details</h2>
                      <p className="address">
                        <span><a href="mailto: maryfaynik@gmail.com">maryfaynik@gmail.com</a></span>
                      </p>
                    </div>
                    <div className="columns download">
                      <br></br><br></br>
                      <p>
                        <a href="./files/resume.pdf" download="maryfaynik_resume"className="button"><i className="fa fa-download" />Download Resume</a>
                      </p>
                    </div>
                  </div> {/* end row */}
                </div> {/* end .main-col */}
                <p className= "scrolldown">
                  <a className="smoothscroll" href="#resume"><i className="icon-down-circle" /></a>
                </p>
              </div>
            </section>
          )
    }
}

export default About
