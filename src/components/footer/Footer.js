import React, { Component } from 'react'

class Footer extends Component {
    
    state = {
            
    }

    render() {
        return (
            <footer>
            <div className="row">
              <div className="twelve columns">
                <ul className="copyright">
                  <li>© Copyright 2014 CeeVee</li>
                  <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
                </ul>
              </div>
              <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
            </div>
          </footer>
        )
    }
}

export default Footer