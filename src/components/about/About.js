import React, { Component } from 'react'

class About extends Component {
    
    state = {
            
    }

    render() {
        return (
            <section id="about">
              <div className="row">
                <div className="three columns">
                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                </div>
                <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p> I grew up in Kalamazoo, Michigan, before heading out East to go to Yale. I walked on to the Women's Varsity Crew Team and majored in Computer Science and Math.
                      After four years of problem sets and <a href="https://en.m.wikipedia.org/wiki/Indoor_rower">erg</a> tests, I've spent my time in New York State. From CS to Finance, 
                      I enjoy running and all other forms of exercise, and have completed multiple marathons and one IRONMAN 70.3 race to date. When I'm not working or working out, I'm 
                      usually hanging out with my dog, Oberon. 
                  </p>
                  <div className="row">
                    <div className="columns contact-details">
                      <h2>Contact Details</h2>
                      <p className="address">
                        <span>(269)267-1193</span><br />
                        <span><a href="mailto: maryfarner@gmail.com">maryfarner@gmail.com</a></span>
                      </p>
                    </div>
                    <div className="columns download">
                      <p>
                        <a href="./files/resume.pdf" download="maryfarner_resume"className="button"><i className="fa fa-download" />Download Resume</a>
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
