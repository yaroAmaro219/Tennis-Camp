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
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
        <div class="nav-container">
          {/* <input type="button" onClick={document.getElementById('enroll').scrollIntoView(true)} >Enroll</input> */}
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
          <img class="profile-img" src={artemie} />
        </div>
        <div class='pricing' id='pricing'>
          <h1>Pricing:</h1>
          <h1>-</h1>
          <h2>Full day (9am - 4pm): $100/day per child</h2>
          <h2>Half day (9am - 12pm or 1pm - 4pm): $55/day per child</h2>
        </div>
        <div class='fifth' id='coaches'>
          <h1>Meet our coaches</h1>
          <img class="profile-img" src={jacob} />
          <h5>Artemie Amari</h5>
        <p>City, State and National Champion</p>
        <h5>Marrisa Cole</h5>
        <p>Meditation Instructor</p>
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

