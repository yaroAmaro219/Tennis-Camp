import React, {Component} from "react";
import artemie from "./images/jacob.jpg";
import jacob from './MTenn.JPG'
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
                <p class='enroll-button'><a class='enroll-home' href='#enroll'>Enroll</a></p>
                <h2 class='enroll-sub'>Spots are still available!</h2>
            </div>
            </div>
          
          </div>
        </div>
        <div class='second' id='dates'>
          <div class='second-text-container'>
          <h1 class='sub-title'>Date + Time:</h1>
          <h1>-</h1>
          <h2>Weekdays</h2>
          <h2>August 3 - 28</h2>
            <h2>9am - 12pm + 1pm - 4pm</h2>
            </div>
        </div>
        <div class="third" id='location'>
          <h1>Meet us here!</h1>
          <h1>-</h1>
          <iframe class='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.429845963309!2d-73.97954418489897!3d40.664496979337144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b1b5a024031%3A0x85d936291c15cad!2sLafayette%20Memorial!5e0!3m2!1sen!2sus!4v1595932673358!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <div class='pricing' id='pricing'>
          <h1>Pricing:</h1>
          <h1>-</h1>
          <h2>Full day (9am - 4pm): $100/day per child</h2>
          <h2>Half day (9am - 12pm or 1pm - 4pm): $55/day per child</h2>
        </div>
        <div class='fifth' id='coaches'>
          <h1>Meet our coaches!</h1>
          <h1>-</h1>
          <h2>Head Coach,  Artemie Amari</h2>
          <p class='blurb'>​
            Coach Artemie is one of the top ranked Tennis Pros in the U.S.A. Artemie has a passion for all things tennis; with over 8 years of coaching experience, Artemie has shown hundreds of players how to make the most of their game while having an awesome time!</p>
          <img class="profile-img" src={jacob} />
        <h4>City, State and National Champion (2014, Beacon HS)</h4>
        </div>
        <div class="enroll" id='enroll'>
          <h1>Ready to Enroll?</h1>
          <h1>-</h1>
          <h3>Call this number to enroll: </h3>
          <h1><a class='phone' href='tel:3474006623'>347-400-6623</a></h1>
          <h3>or email:</h3>
          <h3><a class='phone' href="mailto:tenniscoachesofnyc@gmail.com">TenniscoachesofNYC@gmail.com</a></h3>
        </div>
        <div class='bring' id='bring'>
          <h1>What to Bring?</h1>
          <h1>-</h1>
          <h3>A Racket! We will have extras for those that need.</h3>
          <h3>Lunch, for those doing full sessions.</h3>
          <h3>A water bottle!</h3>
        </div>
      </div>
  
    );
  }
}

export default App;

