import React, { Component } from 'react'
import '../stylesheets/MainFooter.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import packageJson from '../../package.json';

class MainFooter extends Component {
  
  componentDidMount () {
  }

  render () {
    return (
        <div className="footer">
          <a href={packageJson.homepage} target="_blank">
            <FontAwesomeIcon icon={faGithub} color="white" size="lg" />
          </a>
          Version : {packageJson.version}
        </div>
    )
  }
}

export default MainFooter
