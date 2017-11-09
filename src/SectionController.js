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
    console.log(this)
    switch (this.props.section) {
      case Section.Home:
        return <HomeController />;
      default:
        return <div>Unknown section: {this.props.section}</div>
    }
  }
}

export default SectionController;
