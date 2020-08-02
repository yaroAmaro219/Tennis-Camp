import React, {Component} from "react";
import Nav from "./components/Nav";
import { Route, Switch } from 'react-router-dom'
import Show from './components/Show'
import Enroll from './components/Enroll'
import Home from './components/Home'
import Payment from './components/Payment'
import insta from './images/instagram1.svg'
import './styles/Nav.css'
import './styles/Enroll.css'
import './styles/Payment.css'
import "./App.css";
import './styles/Show.css'

import {
  postEnroll,
  showEnroll,
  destroyEnroll
} from './services/api-helper'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      childname: '',
      childage: '',
      startdate: new Date(),
      enddate: new Date(),
      question: '',
      consent: false,
      modal: false,
      toggle: false,
      enroll: '',
      typeofday: ''
    }
  }

  addEnroll = async (firstname, lastname, phone, email, childname, childage, question, consent, startdate, enddate, typeofday) => {
   const newEnroll = await postEnroll({
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      childname: childname,
      childage: childage,
      question: question,
      consent: consent,
      startdate: startdate,
      enddate: enddate,
      typeofday: typeofday
   })
    this.setState(prevState => ({
      enroll: newEnroll,
    }))
  }

  getEnroll = async () => {
    const enroll = await showEnroll();
    if (enroll) {
      this.setState({ enroll })
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value
    })
  }

  deleteEnroll = async (id) => {
    await destroyEnroll(id);
    this.setState(prevState => ({
      personalPost: {
        ...prevState.personalPost,
        posts: prevState.personalPost.posts.filter((post) => {
          return post.id !== id 
        })
      }
    }))
  }

  render() {
    console.log(this.state.enroll)
    return (
      <div class="App">
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
        <div class="nav-container">
          <Nav />
        </div>
        <Switch>
          <Route exact path="/enrolls" render={(props) => (
            <Enroll
              addEnroll={this.addEnroll}
              // handleChange={this.handleChange}
              // firstname={this.state.firstname}
              // lastname={this.state.lastname}
              // phone={this.state.phone}
              // email={this.state.email}
              // childname={this.state.childname}
              // childage={this.state.childage}
              // startdate={this.state.startdate}
              // enddate={this.state.enddate}
              // question={this.state.question}
              // consent={this.state.consent}
            />
          )}/>
          <Route exact path="/" render={(props) => (
            <Home
            />
          )}/>
           <Route exact path="/payment" render={(props) => (
            <Payment
            />
          )}/>
          <Route exact path="/show" render={(props) => (
            <Show
              getEnroll={this.getEnroll}
              enroll={this.state.enroll}
              destroyEnroll={this.destroyEnroll}
            />
          )}/>
        </Switch>
        <div class='contact' id='contact'>
          <h1>Contact</h1>
          <h1>-</h1>
        <h1><a class='phone' href='tel:3474006623'>347-400-6623</a></h1>
        <h3>or email:</h3>
        <h3><a class='phone' href="mailto:tenniscoachesofnyc@gmail.com">TenniscoachesofNYC@gmail.com</a></h3>
        </div>
        <div class='footer'>
          <h2>Tennis Coaches of NYC</h2>
          <div class='social-container'>
          <a class='social' href='https://www.instagram.com/tenniscoachesofnyc/' target="_blank" rel="noopener noreferrer" ><img src={insta} /></a>
            <a class='social' target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/TennisNYC'><svg width="35" height="25" viewBox="0 0 35 35" fill="white" xmlns="http://www.w3.org/2000/svg" weight='900' viewBox="0 0 50 50" width="35px" height="35px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z" /></svg></a>
            </div>
        </div>
      </div>
  
    );
  }
}

export default App;

