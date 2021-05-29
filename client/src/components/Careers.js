import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Careers extends Component {
  render() {
    return (
      <div class='show-page'>
        <div class='show-page-top'>
          <div>
          <h1>Get in touch!</h1>
        <h3>We are looking for coaches</h3>
          </div>
          <div>
          <img />
          </div>
        </div>
    
        <div>
          <label htmlFor="basic-url">Name*</label>
          <InputGroup>
          <FormControl  onChange={this.handleChange} placeholder='Name' as="input" />
          </InputGroup>
        </div>
        <div class='career-input'>
        <label htmlFor="basic-url">Phone*</label>
          <InputGroup>
          <FormControl  onChange={this.handleChange} placeholder='Phone' as="input" />
          </InputGroup>
          </div>
        <div class='career-input'>
        <label htmlFor="basic-url">Email*</label>
          <InputGroup>
          <FormControl  onChange={this.handleChange} placeholder='Email' as="input" />
          </InputGroup>
        </div>
        <div class='career-input'>
        <label htmlFor="basic-url">Location*</label>
          <InputGroup>
          <FormControl  onChange={this.handleChange} placeholder='Location' as="input" />
          </InputGroup>
          </div>
        <div class='career-input'>
        <label htmlFor="basic-url">Tell us a bit a bout you!</label>
          <textarea  class="form-control" id="exampleFormControlTextarea1" placeholder='' rows="3">
          {/* <FormControl  onChange={this.handleChange} placeholder='' as="input" /> */}
          </textarea>
        </div>
        <Button class=''>Submit</Button>
      </div>
    );
  }
}

export default Careers;