import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <>
      <div class="nav">
          {/* <input type="button" onClick={document.getElementById('enroll').scrollIntoView(true)} >Enroll</input> */}
          <div class='nav-text'>
        <a class='link' href='#enroll'>Enroll</a>
        <a class='link' href='#dates'>Dates</a>
        <a class='link' href='#location'>Location</a>
        <a class='link' href='#pricing'>Pricing</a>
        <a class='link' href='#coaches'>Meet the Coaches</a>
            {/* <a class='link' href='#contact'>Contact</a> */}
            </div>
          <div class="hamburger">
        <input type="checkbox" id="nav-toggle"/>
          <label for="nav-toggle">
            <span class="toggle-words"><i class="fa fa-bars" id="bar"><svg viewBox="0 0 100 80" width="40" height="40">
    <rect width="100" height="15"></rect>
    <rect y="30" width="100" height="15"></rect>
    <rect y="60" width="100" height="15"></rect>
</svg></i></span>
          </label>
      <div class="menu">
            <ul>
              <li><a href='#dates' class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>Date</a></li>
                <li><a href="#location" class="nav-link"
                  onClick={() => document.getElementById("nav-toggle").checked = false}>Location</a></li>
                 <li><a href="#pricing" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>Pricing</a></li>
                <li><a href="#coaches" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>Meet the Coaches</a></li>
                 <li><a href="#enroll" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>Enroll</a></li>
                 {/* <li><a href="#contact" class="nav-link"
                onClick={() => document.getElementById("nav-toggle").checked = false}>Contact</a></li> */}
        </ul>
      </div>
      </div>
      </div>
        </>
    )
  }
}
