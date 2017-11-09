import Footer from './Footer.js'
import HomeController from './HomeController.js'
import './MainHeader.css'
import MainHeader from './MainHeader.js'
import React, {Component} from 'react';
import SubHeader from './SubHeader.js'

class MainController extends Component {
  render() {
    return (
      <div className='MainController-root'>
        <MainHeader />
        <SubHeader />
        <HomeController />
        <Footer />
      </div>
    );
  }
}

export default MainController;
