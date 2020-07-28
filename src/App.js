import React, {Component} from "react";
import artemie from "./images/jacob.jpg";
import jacob from './MTenn.JPG'
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Link from '@material-ui/core/Link';
import Nav from "./components/Nav";
import './styles/Nav.css'
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  
  
  


  render() {
    return (
      <div class="App">
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
        <div class="nav-container">
          <Nav />
        </div>
        <div class='first'>
          <div class='left-container'>
            <img src={artemie} class="home-img"  >
              {/* <div class='social'>
                <div class='social-link'>

                </div>
                <div class='social-link'>
                  
                  </div>
              </div> */}
          </img>
        </div>
          <div class='right-container'>
            <div class='text-container'>
              <div class='title-container'>
                <h1 class='title'>Prospect Park Tennis Camp</h1>
                </div>
              <p class='sub-title'>Weekdays</p>
              <p class='sub-title'>August 3-28</p>
              <div class='enroll-button-container'>
                <button class='enroll-button'><a class='enroll-home' href='#enroll'>Enroll</a></button>
                <h2 class='enroll-sub'>Spots are still available!</h2>
            </div>
            </div>
          
          </div>
        </div>
        <div class='second' id='dates'>
          <div class='second-text-container'>
          <h1 class='sub-title'>Date + Time:</h1>
          <p>-</p>
          <h2>Weekdays</h2>
          <h2>August 3 - 28</h2>
            <h2>9am - 12pm + 1pm - 4pm</h2>
            </div>
        </div>
        <div class="third" id='location'>
          <h1>Meet us here</h1>
          <iframe class='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1513.387199122326!2d-73.97101520488035!3d40.65690319826187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b179d62b029%3A0xea721f8f25d45234!2sProspect%20Park%20Well%20House!5e0!3m2!1sen!2sus!4v1595889963417!5m2!1sen!2sus"
            width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false"
          />
          
        </div>
        <div class='pricing' id='pricing'>
          <h1>Pricing:</h1>
          <h1>-</h1>
          <h2>Full day (9am - 4pm): $100/day per child</h2>
          <h2>Half day (9am - 12pm or 1pm - 4pm): $55/day per child</h2>
        </div>
        <div class='fifth' id='coaches'>
          <h1>Meet our coaches!</h1>
          <h2>Heade Coach, Artemie Amari</h2>
          <p>​
            Coach Artemie is one of the top ranked Tennis Pros in the U.S.A. Artemie has a passion for all things tennis; with over 8 years of coaching experience, Artemie has shown hundreds of players how to make the most of their game while having an awesome time!</p>
          <h1>-</h1>
          <img class="profile-img" src={jacob} />
        <p>City, State and National Champion</p>
        {/* <h5>Marrisa Cole</h5>
        <p>Meditation Instructor</p> */}
        </div>
        <div class="enroll" id='enroll'>
          <h1>Enroll</h1>
        </div>
        <div class='contact' id='contact'>
          <h2>347-400-6623</h2>
        </div>
      </div>
  
    );
  }
}

export default App;

