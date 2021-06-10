import React, { Component, useState } from "react";
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router';
import About from './components/About'
import Camps from './components/Camps'
import Cart from './components/Cart'
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
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'
import Questions from "./components/Questions";
import Totally from './images/Totally Tennis Logo.png'
import CheckOut from './components/CheckOut'
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import { connect } from 'react-redux'
import { getProfileFetch, fetchSessions, fetchCart} from './redux/actions';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faKey, faShoppingCart, faBook, faTimes, faArrowRight, faSignInAlt, faUserPlus, faCheck, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { verifyUser, loginUser, registerUser } from './services/auth'
import {
  newOrder,
  newOrderItem,
  showLocations,
  showUser,
  postEnroll,
  showEnroll,
  postState,
  showState,
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
  putUser,
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
      profile_picture: [],
      kids: [],
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
      states: '',
      sessions: '',
      cart: [
         {
          price: '',
          age: '',
          time: '',
          dates: '',
          location: '',
          kids: '',
          id: '',
          location_id: ''
        }],
      order: '',
      users: '',
      error: '',
      title: '',
      registerFormData: {
        first_name: "",
        last_name: "Q",
        email: "",
        classes: "k",
        child_name: "k",
        admin: false,
        password: ""
      },
      authFormData: {
        email: '',
        password:''
      },
    }
  }

  library() { library.add(faEnvelope, faKey, faShoppingCart, faBook, faTimes, faArrowRight, faSignInAlt, faUserPlus, faCheck, faAngleDoubleRight, faAngleDoubleLeft); }

  componentDidMount = async () => {
    this.props.fetchSessions()
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      });
      this.library()
      this.props.fetchCart(this.props.current_user)
    }
    if (localStorage.token) {
      this.props.getProfileFetch()
      this.props.fetchCart(this.props.current_user)
    }
    this.getLocations();
    // this.getStates();
  }

  getUser = async () => {
    const user = await showUser();
    if (user) {
      this.setState({ user })
    }
  }

  

  addToCart = async (sessionId) => {
    console.log(this.state.currentUser.current_order)
    const  current_order  = this.state.currentUser && this.state.currentUser.current_order
    if (current_order === null) {
      const startOrder = await newOrder({
        session_id: sessionId,
        quantity: this.state.kids,
        user_id: this.state.currentUser.id,
      });
     this.setState({ order: startOrder });
   }
       await newOrderItem({
        order_id: current_order,
        session_id: sessionId,
        quantity: this.state.kids
      });
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
      price: this.state.price,
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

  getState = async (id) => {
    const state = await showState(id);
    if (state) {
      this.setState({ state })
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
      title: this.state.title,
      price: this.state.price
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
  
  addState = async (title, time, image) => {
    await postState({
      title: title,
      time: time, 
      image: image,
    })
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
      this.setState({ error: 'The email or password you are trying to use isn\'t valid.' })
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


  handleImage = async (picture) => {
    this.setState({
      profile_picture:  picture 
    })
  }

  submitImage = async (e) => {
    e.preventDefault();
    await putUser(this.state.currentUser && this.state.currentUser.id, { 'profile_picture': this.state.profile_picture })
  }

  TestNav = () => {
    const [change, setChange] = useState(false);
    const changePosition = 10;
    
    let position = useWindowScrollPosition();
    // position == { x: 0, y: 0 }
  
    if (position.y > changePosition && !change) {
      setChange(true);
    }
  
    if (position.y <= changePosition && change) {
      setChange(false);
    }
  
    let style = {
      backgroundColor: change ? "#ABDB8F" : "transparent",
      transition: ".3s ease",
      height: "93px",
      position: "fixed",
      right: 0,
      left: 0,
      top: 0,
    };
   
   let style2 = {
     color: change ? "#464646" : "#ABDB8F", 
   }

   let navtext = {
     width: '100%',
     display: 'flex',
     margin: ' 0 0 0 auto',
  }
  
    return (
      <div style={style} id='nav-container'>
        
          
          
          <a href='/'>
             <img class='ball2' src={Totally} />
            </a>
          <MobileNav/>
          <Nav/>
        </div>
    );
  }
  
  render() {
    return (
      <div class="App">
        {/* <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"/> */}
        {/* <div class="nav-container"> */}
          
          {/* <Nav
            currentUser={this.state.currentUser}
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            formData={this.state.authFormData}
            user={this.state.user}
          /> */}
            
          <this.TestNav/>
        {/* </div> */}
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
          )} />
            <Route exact path="/cart" render={(props) => (
            <Cart
              {...props}
              cart={this.state.cart}
            />
          )} />
          < Route exact path = '/checkout'
          component = {
            CheckOut
          }
          />
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
              handleImage={this.handleImage}
              profile_picture={this.state.profile_picture}
              submitImage={this.submitImage}
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
          <Route exact path="/private" render={(props) => (
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
              price={this.state.price}
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
              addToCart={this.addToCart}
              kids={this.state.kids}
              handleChange={this.handleChange}
              session={this.state.session}
              getSession={this.getSession}
              deleteSession={this.deleteSession}
              updateSession={this.updateSession}
              cart={this.state.cart}
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
            <Route exact path="/questions" render={(props) => (
            <Questions
              
            />
            )} />
        </Switch>
        <div class='footer-container'>
         <Footer />
      </div>
  </div>
    );
  }
}

const mapStateToProps = state => ({
  current_user: state.current_site_user
})

const mapDispatchToProps = {
  getProfileFetch: getProfileFetch,
  fetchSessions: fetchSessions,
  fetchCart: fetchCart
  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));

