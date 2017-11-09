import Footer from './Footer.js'
import SectionController from './SectionController.js'
import HomeController from './HomeController.js'
import './MainHeader.css'
import MainHeader from './MainHeader.js'
import React, {Component} from 'react';
import Section from './Section.js'
import SubHeader from './SubHeader.js'

class MainController extends Component {
  render() {
    return (
      <div className='MainController-root'>
        <MainHeader />
        <SubHeader />
        <SectionController section={Section.Home}/>
        <Footer />
      </div>
    );
  }
}

export default MainController;
