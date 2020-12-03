import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import artemie from "../images/650178022-huge.jpg";
import jacob from '../MTenn.JPG'
import Andrew from '../images/Screen Shot 2020-03-23 at 11.55.30 AM.jpeg'
import John from '../images/output.jpg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
  }
  play() {
    this.slider.slickPlay();
  }
  render() {
    const locations =
      this.props.locations
      &&
      this.props.locations.map((location, index) => {
        return (
          <>
            <Link to={`/locations/${location.id}`}>
              <div class='location-one' style={{ 'background-image': `url(${location.image})` }}>
                <div class='location-background'>
                  <h2 class='location-title'>{`${location.title}`}</h2>
                  </div>
              </div>
            </Link>
          </>
        )
      })
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true
      };
    return (
      <div class="home">
         <div class='first'>
          {/* <div class='left-container'> */}
            {/* <img src={artemie} class="home-img">
            </img> */}
            
        {/* </div> */}
          {/* <div class='right-container'> */}
            <div class='text-container'>
              <div class='title-container'>

                {/* <h1 class='title9'>Tennis Coaches Of NYC</h1> */}
                <h1 class='title'>Totally Tennis</h1>
              </div>
              {/* <div class='sub-container'>
                <div class='sub2-container'>
                  <h2 class='sub-title4'>New York</h2>
                  <h2 class='sub-title4'>New Jersey</h2>
                  <h2 class='sub-title4'>California</h2>
                  </div>

                </div> */}
              <div class='enroll-button-container'>
                
                <div class='button2'>
                <p class='enroll-button1'>
                <a class='enroll-home' href='/locations'>Find a class</a></p>
                </div>
                <div class='button2'>
                <p class='enroll-button1'>
                <a class='enroll-home' href='/contact'>Contact</a></p>
                </div>
            </div>
          </div>
          {/* </div> */}
          <div class='slider'>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div class='review'>
            <h3>"I Love Tennis!" -Jacob</h3>
          </div>
          <div class='review'>
            <h3>"Totally Tennis is the best!" -Wyatt</h3>
          </div>
          <div class='review'>
            <h3>"Tennis is totally fun!" -Maya</h3>
          </div>
          <div class='review'>
            <h3>"Our kids love it!" -Alex</h3>
          </div>
          <div class='review'>
            <h3>"I've seen my daughter improve immensly just over the course of 6 classes" -Daniel</h3>
          </div>
          <div class='review'>
            <h3>"Totally Tennis is amazing!" -Artemie</h3>
          </div>
            </Slider>
            </div>
        </div>
        <div class='second' id='dates'>
          <div class='second-text-container'>
          <h1 class='title2'>Date + Time:</h1>
          <h1>-</h1>
          <h2>Weekdays</h2>
          <h3>May - October 2021</h3>

            </div>
        </div>
        <div class="third" id='location'>
          <div class='location-head'>
          <h1>Find Your Location</h1>
         
            <h1>-</h1>
            </div>
          <div class='home-locations'>
            {
              locations 
                ?
                locations
                :
                <div class="loader"></div>
            }
            </div>
          {/* <h2 class='place'><a href='/locations/{id}'>Prospect Park</a></h2> */}
          {/* <iframe class='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.479706453371!2d-73.97883028491002!3d40.66339814852492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b1b652da915%3A0x4f03686bcb67e3c8!2sProspect%20Park%20Bandshell!5e0!3m2!1sen!2sus!4v1597753402904!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          <h1>-</h1> */}
          {/* <h2 class='place'><a href='/locations/{id}'>Edmonds Playground</a></h2> */}
      
          {/* <iframe class='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.309789296307!2d-73.97358248490923!3d40.6891744469491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bb754b76a89%3A0x55b92fe1024bbc4c!2sEdmonds%20Playground!5e0!3m2!1sen!2sus!4v1597689115314!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          <h1>-</h1> */}
          {/* <h2 class='place'>Peter's Field</h2>
          <iframe class='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1764346562486!2d-73.9839861845943!3d40.73614307932937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590aeb13d0fd%3A0xe897a7b7da5ef3dc!2sPeter&#39;s%20Field!5e0!3m2!1sen!2sus!4v1600358656241!5m2!1sen!2sus" width="600" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}

        </div>
        {/* <div class='pricing' id='pricing'>
          <h1 class='title2'>Pricing:</h1>
          <h1>-</h1>
          <h2>Fall (3:30pm - 5pm): $55/session per child</h2>
        </div> */}
        {/* <div class='fifth' id='coaches'>
          <h1>Meet the team!</h1>
          <h1>-</h1>
          <h2 class='artemie'>Head Coach,  Artemie </h2>
          <h4 class='beacon'>(Prospect Park)</h4>
          <div class='bio-info'>
       
            <img class="profile-img" src={jacob} />
            <div class='bio'>
          <h5 class='blurb'>​Coach Artemie is one of the top ranked Tennis Pros in the U.S.A. Artemie has a passion for all things tennis; with over 8 years of coaching experience, Artemie has shown hundreds of players how to make the most of their game while having an awesome time!</h5>
              <h4 class='acalades'>City, State & National Champion (2014)</h4>
              <h4 class='acalades2'>#2 in the country USTA (2011)</h4>
              <h5 class='beacon'>All-American & Wingate Award Recepient, Beacon HS (2014)</h5>
              </div>
            </div>
          <h1>-</h1>
          <h2 class='artemie'>Head Coach,  Andrew </h2> 
          <h4 class='beacon'>(Fort Greene)</h4>
          <div class='bio-info'>
            <img class="profile-img" src={Andrew} />
            <div class='bio'>
          <h5 class='blurb'>​Andrew Finkelman grew up in Portland, OR and is a student and All-American honored tennis player at Wesleyan University pursuing a double major in sociology and Hispanic literatures and cultures. Andrew appreciates how tennis gives space for players to creatively problem-solve while learning to shape their self-dialogue to be one of encouragement and optimism. Beyond the running, hitting, and jumping, what inspires him the most is how the skills and lessons that we learn through our sport such as patience, discipline, fearlessness, and sportsmanship, help us to achieve our off-court goals. He’s grown to accept that learning is a never-ending process, and is excited to share this passion for growth with students.
            </h5>
            <h4 class='acalades'>NCAA DIII All American (2019)</h4>
              <h4 class='acalades'>Oregon State Champion (2015)</h4>
              </div>
            </div>
          <h1>-</h1>
         
          <h2 class='artemie'>Head Coach,  John </h2> 
            <h4 class='beacon'>(Peter's Field)</h4>
            <div class='bio-info'>
            <img class="profile-img" src={John} />
            <div class='bio'>
          <h5 class='blurb'>​John is a local Manhattan tennis coach with over 21 years of playing experience and over 11 years of teaching experience! As a life long tennis player, his unique and fun view of the game and teaching style will surely enhance any player’s game.
            </h5>
              <h4 class='acalades'>PTR Certified Tennis Coach (2020)</h4>
              </div>
            </div>
        </div>
        <div class="enroll" id='enroll'>
          <h1 class='title2'>Ready to Enroll?</h1>
          <h1>-</h1>
          <a class='enroll-button2' href='/enrolls'>Enroll</a>
        </div>
        <div class="private" id='private'>
          <h1>Private Lessons</h1>
          <h1>-</h1>
          <h3>Private: $100/hour</h3>
          <h3>Semi-Private: $75/hour</h3>
          <h3>Private-Group: $65/hour</h3>
          <h3>*Location flexible</h3>
        </div> */}
        <div class='enroll' id='string'>
          <h1 class='title2'>Racket Stringing</h1>
          <h1>-</h1>
          <h3>We offer racket stringing!</h3>
          <h3>$25/racket</h3>
          <h4>We use a <a class='machine' target="_blank" rel="noopener noreferrer" href='https://www.wilson.com/en-us/badminton/stringing-machine/baiardo-l-stringing-machine'>Baiardo L Stringing Machine</a></h4>
          <h4>*String sold seperately</h4>
        </div>
        <div class='bring' id='bring'>
          <h1>What to Bring?</h1>
          <h1>-</h1>
          <h3 class='bring-h3'>A Racket! We will have extras for those that need them.</h3>
          <h3 class='bring-h3'>Running shoes</h3>
          <h3 class='bring-h3'>A water bottle!</h3>
        </div>
      </div>
    )
  }
}
