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
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
    </Router>
    </Provider>,
  document.getElementById('root')
);

