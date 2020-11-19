import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div class="contact-page">
        <div class="contact">
        <h1 class='title2'>Awesomeness Awaits!</h1>
        <input class='input-style' placeholder='Name'></input>
        <input class='input-style' placeholder='Email'></input>
        <textarea
              class="input"
              type="text"
              name="question"
              onChange={this.handleChange}
            />
          <button>Submit</button>
        </div>
        <div class='contact-info'>
        <h1><a class='contact-phone' href='tel:3474006623'>347-400-6623</a></h1>
        <h3><a class='contact-email' href="mailto:tenniscoachesofnyc@gmail.com">TenniscoachesofNYC@gmail.com</a></h3>
        </div>
        </div>
    )
  }
}
