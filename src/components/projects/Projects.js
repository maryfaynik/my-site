import React, { Component } from 'react'
import {projects} from './projectData'

class Projects extends Component {
    
    renderProjects = () =>{
      return projects.map((project, index) => {
        return (
          <div className="columns portfolio-item" key={project.id}>
            <div className="item-wrap">
              <a href={`#modal-${index}`}>
                <img alt="" src={project.image}/>
                <div className="overlay">
                  <div className="portfolio-item-meta">
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
            <img className="scale-with-grid" src={project.image} alt="" />
            <div className="description-box">
              <h4>{project.title}</h4>
              <p>{project.long_description}</p>
              <span className="categories"><i className="fa fa-tag" />{project.tags}</span>
            </div>
            <div className="link-box">
              <a href={project.link}>Check It Out</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>
        )
      })

    }

    render() {
      return (
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects</h1>
              {/* portfolio-wrapper */}
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {this.renderProjects()}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
            {/* Modal Popup---------------------------------- */}
            {this.renderModals()}
            
        
          </div> {/* row End */}
          
        </section>
      )
    }
}

export default Projects