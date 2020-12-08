import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
import './styles/Reviews.css'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

