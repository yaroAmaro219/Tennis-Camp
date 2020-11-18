import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div class="contact-page">
        <h1 class='title2'>Awesomeness Awaits!</h1>
        <input class='input' placeholder='First Name'></input>
        <input class='input' placeholder='Last Name'></input>
        <textarea
              class="input"
              type="text"
              name="question"
              onChange={this.handleChange}
            />
        <button>Submit</button>
        <h1><a href='tel:3474006623'>347-400-6623</a></h1>
        <h3><a href="mailto:tenniscoachesofnyc@gmail.com">TenniscoachesofNYC@gmail.com</a></h3>
      </div>
    )
  }
}
