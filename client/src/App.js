import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router';
import About from './components/About'
import Camps from './components/Camps'
import Child from './components/Child'
import Coaches from './components/Coaches'
import Coach from './components/Coach'
import Nav from "./components/Nav";
import Show from './components/Show'
import AddSession from './components/AddSession'
import Enroll from './components/Enroll'
import Home from './components/Home'
import Payment from './components/Payment'
import Locations from './components/Locations'
import Location from './components/Location'
import Users from './components/Users'
import Stringing from "./components/Stringing";
import Private from './components/Private'
import Register from './components/Register'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import List from './components/List'
import Careers from './components/Careers'
import Login from './components/Login'
import Profile from './components/Profile'
import Session from './components/Session'
import insta from './images/instagram1.svg'
import Totally from './images/Totally Tennis Logo.png'
import './styles/Nav.css'
import './styles/Enroll.css'
import './styles/Payment.css'
import "./App.css";
import './styles/Show.css'
import './styles/Users.css'
import './styles/Modal.css'
import './styles/Contact.css'
import './styles/Location.css'
import './styles/Profile.css'
import './styles/Coach.css'
import './styles/Sessions.css'
import { verifyUser, loginUser, registerUser } from './services/auth'
import {
  showLocations,
  showUser,
  postEnroll,
  showEnroll,
  destroyEnroll,
  postLocation,
  showLocation,
  destroyLocation,
  putCoach,
  destroyCoach,
  showCoaches,
  showCoach,
  showUsers,
  showSession,
  getSession,
  postSession,
  putSession,
  destroySession,
  showChild
} from './services/api-helper'


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      user: [],
      name: '',
      age: '',
      bio: '',
      image: '',
      coachLocation: '',
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      coaches: '',
      coach: '',
      child: '',
      childname: '',
      childage: '',
      startdate: new Date(),
      enddate: new Date(),
      question: '',
      consent: false,
      modal: false,
      toggle: false,
      location:'',
      enroll: '',
      session: '',
      time: '',
      dates: '',
      age_group: '',
      coach: '',
      typeofday: '',
      locations: '',
      sessions: '',
      users: '',
      error: '',
      title: '',
      registerFormData: {
        first_name: "",
        last_name: "yo",
        email: "",
        classes: "doodle",
        child_name: "noodle",
        admin: false,
        password: ""
      },
      authFormData: {
        email: '',
        password:''
      },
    }
  }

  componentDidMount = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
    }
    this.getLocations();
  }

  getUser = async () => {
    const user = await showUser();
    if (user) {
      this.setState({ user })
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

  addSession = async (id) => {
    await postSession(id, {
      time: this.state.time,
      age: this.state.age,
      title: this.state.title,
      location_id: id
    })
    this.props.history.push(`/locations/${id}`)
  }

  getSessions = async () => {
    const sessions = await showSession();
    if (sessions) {
      this.setState({sessions})
    }
  }

  getSession = async (id) => {
    const session = await getSession(id);
    if (session) {
      this.setState({session})
    }
  }

  deleteSession = async (id) => {
    await destroySession(id);
    this.props.history.push("/locations") 
  }

  getEnroll = async () => {
    const enroll = await showEnroll();
    if (enroll) {
      this.setState({ enroll })
    }
  }

  getLocation = async (id) => {
    const location = await showLocation(id);
    if (location) {
      this.setState({ location })
    }
  }

  updateCoach = async (id) => {
    await putCoach(id, {
      name: this.state.name,
      age: this.state.age,
      location: this.state.coachLocation,
      bio: this.state.bio,
      image: this.state.image,
    })
    this.props.history.push(`/coaches`)
  }

  updateSession = async (id) => {
    await putSession(id, {
      age: this.state.age,
      location: this.state.location,
      dates: this.state.dates,
      time: this.state.time,
      title: this.state.title
    })
    this.props.history.push(`/locations`)
  }

  getCoach = async (id) => {
    const coach = await showCoach(id);
    if (coach) {
      this.setState({coach})
    }
  }

  getChild = async (id, child_id) => {
    const child = await showChild(id, child_id);
    if (child) {
      this.setState({child})
    }
  }

  getLocations = async () => {
    const locations = await showLocations();
    if (locations) {
      this.setState({ locations })
    }
  }

  getCoaches = async () => {
    const coaches = await showCoaches();
    if (coaches) {
      this.setState({ coaches})
    }
  }

  getUsers = async () => {
    const users = await showUsers();
    if (users) {
      this.setState({users})
    }
  }

  deleteLocation = async (id) => {
    await destroyLocation(id);
    this.props.history.push("/locations") 
  }

  deleteCoach = async (id) => {
    await destroyCoach(id);
    this.props.history.push('/coaches')
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

  addLocation = async (title, time, age_group, image, coach) => {
    await postLocation({
      title: title,
      time: time, 
      age_group: age_group,
      image: image,
      coach: coach
    })
     this.props.history.push("/")
   }

  handleLogin = async (e) => {
    e.preventDefault();
    const currentUser = await loginUser({ 'email': this.state.authFormData.email, 'password': this.state.authFormData.password });
    if (currentUser) {
      this.setState({
        currentUser
      })
      this.setState({error: ''})
      this.props.history.push("/")
    } else {
      this.setState({ error: 'The email or password you are trying to use isn\'t valid. Please try again' })
      this.props.history.push("/login")
    }
  }
  

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.registerFormData);
    this.setState({
      currentUser
    })
    this.props.history.push("/")
  }

  handleLogout = () => {
    this.setState({currentUser: null})
    localStorage.removeItem("authToken");
    this.props.history.push("/")
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  registerHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value
      }
    }));
  }
  
  render() {
    console.log(this.state.error)
    return (
      <div class="App">
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
        <div class="nav-container">
          <a class='a' href='/'>
            <img class='ball' src={Totally} />
          </a>
          <Nav
            currentUser={this.state.currentUser}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            formData={this.state.authFormData}
            user={this.state.user}
          />
        </div>
        <Switch>
        <Route exact path="/about" render={(props) => (
            <About
              addEnroll={this.addEnroll}
            />
          )}/>
          <Route exact path="/camps" render={(props) => (
            <Camps
              addEnroll={this.addEnroll}
            />
          )}/>
          <Route exact path="/users/:user_id/children/:id" render={(props) => (
            <Child
              children={this.state.children}
              getChild={this.getChild}
              {...props}
            />
            )} />
          <Route exact path="/coaches" render={(props) => (
            <Coaches
              getCoaches={this.getCoaches}
              coaches={this.state.coaches}
            />
            )} />
            <Route exact path="/coaches/:id" render={(props) => (
            <Coach
              deleteCoach={this.deleteCoach}
              updateCoach={this.updateCoach}
              currentUser={this.state.currentUser}
              getCoach={this.getCoach}
              coach={this.state.coach}
              name={this.state.name}
              age={this.state.age}
              bio={this.state.bio}
              image={this.state.image}
              location={this.state.coachLocation}
              handleChange={this.handleChange}
              {...props}
            />
            )} />
          <Route exact path="/enrolls" render={(props) => (
            <Enroll
              addEnroll={this.addEnroll}
            />
          )}/>
          <Route exact path="/" render={(props) => (
            <Home
              locations={this.state.locations}
            />
          )}/>
           <Route exact path="/payment" render={(props) => (
            <Payment
            />
          )} />
          <Route exact path="/users/:id" render={(props) => (
            <Profile
              handleLogout={this.handleLogout}
              getUser={this.getUser}
              showUser={this.showUser}
              getPersonalPost={this.getPersonalPost}
              {...props}
              personalPost={this.state.personalPost}
              deletePost={this.deletePost}
              updatePost={this.updatePost}
              user_id={this.state.user_id}
              user={this.state.currentUser}
            />
          )}/>
          <Route exact path="/show" render={(props) => (
            <Show
              getEnroll={this.getEnroll}
              enroll={this.state.enroll}
              destroyEnroll={this.destroyEnroll}
            />
          )}/>
           <Route exact path="/users" render={(props) => (
            <Users
              getUsers={this.getUsers}
              users={this.state.users}
            />
          )}/>
          <Route exact path="/private-lessons" render={(props) => (
            <Private
              
            />
          )} />
          <Route exact path="/stringing" render={(props) => (
            <Stringing
              
            />
          )}/>
          <Route exact path="/locations" render={(props) => (
            <Locations
              getLocations={this.getLocations}
              getSessions={this.getSessions}
              locations={this.state.locations}
              addLocation={this.addLocation}
              deleteLocation={this.deleteLocation}
              currentUser={this.state.currentUser}
            />
          )} />
          <Route exact path="/locations/:id" render={(props) => (
             <Location
              // session={session}
              getLocation={this.getLocation}
              place={this.state.location}
              currentUser={this.state.currentUser}
              showSession={this.showSession}
              addSession={this.addSession}
              handleChange={this.handleChange}
              sessions={this.state.sessions}
              getSessions={this.getSessions}
              {...props}
            />
          )} />
          <Route exact path="/locations/:id/sessions" render={(props) => (
            <AddSession
              getLocation={this.getLocation}
              place={this.state.location}
              currentUser={this.state.currentUser}
              showSession={this.showSession}
              addSession={this.addSession}
              handleChange={this.handleChange}
              session={this.state.session}
              location={this.state.location}
              dates={this.state.dates}
              age={this.state.age}
            title={this.state.title}
              {...props}
            />
          )} />
          <Route exact path="/locations/:location_id/sessions/:id" render={(props) => (
            <Session
              getLocation={this.getLocation}
              place={this.state.location}
              currentUser={this.state.currentUser}
              showSession={this.showSession}
              addSession={this.addSession}
              handleChange={this.handleChange}
              session={this.state.session}
              getSession={this.getSession}
              deleteSession={this.deleteSession}
              updateSession={this.updateSession}
              {...props}
            />
          )} />
          <Route exact path="/Login" render={(props) => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              authFormData={this.state.authFormData}
              error={this.state.error}
              {...props}
            />
          )} />
          <Route exact path="/register" render={(props) => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.registerHandleChange}
              registerFormData={this.state.registerFormData} /> )} />
          <Route exact path="/reviews" render={(props) => (
            <Reviews
              
            />
          )}/>
          <Route exact path="/contact" render={(props) => (
            <Contact
              
            />
          )} />
          <Route exact path="/list" render={(props) => (
            <List
              
            />
            )} />
            <Route exact path="/careers" render={(props) => (
            <Careers
              
            />
            )} />
        </Switch>
        <div class='footer'>
          <h2 class='footer-copyright'>Tennis Coaches of NYC © </h2>
            <div class='footer-glasstop'>
              <h4>Made with ♡ by <a class='web-a' href='https://www.glasstop.io/'>Glass Top Web Developers</a></h4>
            </div>
            <div class='social-container'>
              <a class='social' href='https://www.instagram.com/tenniscoachesofnyc/' target="_blank" rel="noopener noreferrer" ><img src={insta} /></a>
              <a class='social' target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/TennisNYC'><svg width="35" height="25" viewBox="0 0 35 35" fill="white" xmlns="http://www.w3.org/2000/svg" weight='900' viewBox="0 0 50 50" width="35px" height="35px"><path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z" /></svg></a>
            </div>
        </div>
      </div>
  
    );
  }
}

export default withRouter(App);

