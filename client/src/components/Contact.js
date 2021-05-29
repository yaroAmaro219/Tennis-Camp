import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default class Contact extends Component {
  render() {
    return (
      <div class="contact-page">
        <div class="contact">
        <h1 class='title2'>Awesomeness Awaits!</h1>
        {/* <input class='input-style' placeholder='Name'></input>
          <input class='input-style' placeholder='Email'></input> */}
          <label htmlFor="basic-url">Name*</label>
          <InputGroup>
    <FormControl  onChange={this.handleChange} placeholder='Name' as="input" />
          </InputGroup>
          <label htmlFor="basic-url">Email*</label>
          <InputGroup>
          <FormControl  onChange={this.handleChange} placeholder='Email' as="input" />
          </InputGroup>
        {/* <textarea
              class="input"
              type="text"
              name="question"
              onChange={this.handleChange}
          /> */}
          <label htmlFor="basic-url">Message*</label>
          <InputGroup>
    <FormControl  onChange={this.handleChange} placeholder='Message' as="textarea" />
          </InputGroup>
          <br/>
          <Button>Submit</Button>
        </div>
        <div class='contact-info'>
        {/* <h1><a class='contact-phone' href='tel:3474006623'>347-400-6623</a></h1> */}
        <h3><a class='contact-email' href="mailto:contact@totallytennis.io">contact@totallytennis.io</a></h3>
        </div>
        </div>
    )
  }
}
