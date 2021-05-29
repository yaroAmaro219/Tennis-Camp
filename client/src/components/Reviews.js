import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default class Reviews extends Component {
  render() {
    return (
      <div class="enroll-page">
        <div class='review-page'>
        <h1>Reviews</h1>
        <h3>We value your input. </h3>
        <h3>Let us know what you think about your experince with us!</h3>
        <div class='review-input'>
          <textarea  class="form-control" id="exampleFormControlTextarea1" placeholder='' rows="6">

          </textarea>
        {/* <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Review</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="Review" />
          </InputGroup> */}
          </div>
          <div class='review-submit-btn'>
            <Button>Submit</Button>
            </div>
        </div>
        </div>
    )
  }
}
