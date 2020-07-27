import React, { Component } from 'react'
// import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div class="nav">
        {/* <input type="button" onClick={document.getElementById('enroll').scrollIntoView(true)} >Enroll</input> */}
        <a class='link' href='#enroll'>Enroll</a>
        <a class='link' href='#dates'>Dates</a>
        <a class='link' href='#location'>Location</a>
        <a class='link' href='#pricing'>Pricing</a>
        <a class='link' href='#coaches'>Meet the Coaches</a>
        <a class='link' href='#contact'>Contact</a>
      </div>
    )
  }
}
