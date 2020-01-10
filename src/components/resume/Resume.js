import React, { Component } from 'react'
import resumeData from './resumeData'
import { Label, Icon } from 'semantic-ui-react'

class Resume extends Component {
    
    renderEducation = () =>{
      return resumeData.education.map(edu => {
        return (
            <div className="row item" key={edu.id}>
              <div className="twelve columns">
                <h3>{edu.university}</h3>
                <p className="info">{edu.degree} in {edu.major}<span>•</span> <em className="date">{edu.graduation}</em></p>
              </div>
          </div>
        )
      })
    }

    renderWork = () => {
      return resumeData.work_experience.map(exp => {
        return (
          <div className="row item" key={exp.id}>
            <div className="twelve columns">
              <h3>{exp.company}</h3>
              <p className="info">{exp.position}<span>•</span> <em className="date">{exp.start} - {exp.end}</em></p>
              <p className="description">{exp.description}</p>
              <p></p><br></br>
            </div>
          </div> 
        )
      })
    }

    renderSkills = (key) => {
      return resumeData.skills[key].map(skill => {
        return  <Label key={skill}>{skill}</Label>
      })
    }

    render() {
        return (
            <section id="resume">
            {/* Education----------------------------------------------- */}
            <div className="row education">
              <div className="three columns header-col">
                <h1><span>Education</span></h1>
              </div>
              <div className="nine columns main-col">
                {this.renderEducation()}
              </div> {/* main-col end */}
            </div> {/* End Education */}
            {/* Work
          ----------------------------------------------- */}
            <div className="row work">
              <div className="three columns header-col">
                <h1><span>Work</span></h1>
              </div>
              <div className="nine columns main-col">
                {this.renderWork()}
              </div> {/* main-col end */}
            </div> {/* End Work */}
            {/* Skills
          ----------------------------------------------- */}
            <div className="row skill">
              <div className="three columns header-col">
                <h1><span>Skills & Interests</span></h1>
              </div>
              <div className="nine columns main-col">
                <h6 className="info">Technical Skills</h6>
                <div className="skills">
                  {this.renderSkills("tech")}
                </div>
                <h6 className="info">Interests and Hobbies</h6>
                <div className="skills">
                  {this.renderSkills("interests")}
                </div>

              </div>
            </div>
            <br></br><br></br>
            <p className= "scrolldown">
                <a className="smoothscroll" href="#projects"><i className="icon-down-circle" /></a>
            </p>
          </section>
        )
    }
}

export default Resume