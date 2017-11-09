import Footer from './Footer.js'
import SectionController from './SectionController.js'
import './MainHeader.css'
import MainHeader from './MainHeader.js'
import React, {Component} from 'react';
import Section from './Section.js'
import SubHeader from './SubHeader.js'

class MainController extends Component {
  state = {
    section: Section.Home,
  };

  render() {
    return (
      <div className='MainController-root'>
        <MainHeader />
        <SubHeader onChangeSection={this._onChangeSection.bind(this)}/>
        <SectionController section={this.state.section}/>
        <Footer />
      </div>
    );
  }

  _onChangeSection(section) {
    this.setState({section});
  }
}

export default MainController;
