import React, { Component } from 'react'

export default class Reviews extends Component {
  render() {
    return (
      <div class="enroll-page">
        <h1>Reviews</h1>
        <h3>We value your input. </h3>
        <h3>Let us know what you think about your experince with us!</h3>
        <textarea placeholder='Review'></textarea>
        <button>Submit</button>
      </div>
    )
  }
}
