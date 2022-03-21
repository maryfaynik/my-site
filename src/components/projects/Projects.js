import React, { Component } from 'react'
import {projects} from './projectData'

class Projects extends Component {
    
    renderProjects = () =>{
      return projects.map((project, index) => {
        return (
          <div className="columns project-item" key={project.id}>
            <div className="item-wrap">
              <a href={`#modal-${index}`}>
                <img alt="" src={project.image}/>
                <div className="overlay">
                  <div className="project-item-meta">
                    <h5>{project.title}</h5>
                    <p>{project.short_description}</p>
                  </div>
                </div>
                <div className="link-icon"><i className="icon-plus" /></div>
              </a>
            </div>
          </div>
        )
      })

    }

    renderModals = () => {
      return projects.map((project, index) => {
        return (
          <div key={project.id} id={`modal-${index}`} className="popup-modal mfp-hide">
            <div className="description-box">
              <h4>{project.title}</h4>
              <p>{project.long_description}</p>
              <span className="categories"><i className="fa fa-tag" />{project.tags}</span>
            </div>
          </div>
        )
      })

    }

    render() {
      return (
        <section id="projects">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Highlighted Projects</h1>
              {/* project-wrapper */}
              <div id="project-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {this.renderProjects()}
              </div> {/* project-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup---------------------------------- */}
            {this.renderModals()}
            
        
          </div> {/* row End */}
          
        </section>
      )
    }
}

export default Projects