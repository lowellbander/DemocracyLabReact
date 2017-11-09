import FindProjectsController  from './FindProjectsController.js'
import HomeController from './HomeController.js'
import React, {Component} from 'react';
import Section from './Section.js'

class SectionController extends Component {
  render() {
    return (
      <div>
        {this._getController()}
      </div>
    );
  }

  _getController() {
    switch (this.props.section) {
      case Section.Home:
        return <HomeController />;
      case Section.FindProjects:
        return <FindProjectsController />;
      default:
        return <div>Unknown section: {this.props.section}</div>
    }
  }
}

export default SectionController;
