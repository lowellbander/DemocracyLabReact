import React, { Component } from 'react';
import Section from './Section.js'
import './SubHeader.css'

class SubHeader extends Component {
  render() {
    return (
      <div className="SubHeader-root">
        <span onClick={() => this.props.onChangeSection(Section.FindProjects)}>FIND PROJECTS</span>
        <span>MY PROJECTS</span>
        <span>PROFILE</span>
        <span>INBOX</span>
        <span className="SubHeader-rightContent">
          <button>Create A Project</button>
        </span>
      </div>
    );
  }
}

export default SubHeader;
