import './HomeController.css';
import React, { Component } from 'react';

class HomeController extends Component {
  render() {
    return (
      <div>
        <div className="HomeController-supremeCourtBanner">
          <div className="HomeController-landingTextContainer">
            <p className="HomeController-landingText">
              Use your skills to make a difference and change the world,
              one project at a time.
            </p>
            <p className="HomeController-landingText">{"LET\'S GET STARTED."}</p>
            <button className="HomeController-landingText">Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeController;
