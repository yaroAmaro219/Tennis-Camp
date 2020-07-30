import React, { Component } from 'react'
import DatePicker from "react-date-picker";

export default class Enroll extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      childname: '',
      date: '',
      question: ''
    }
  }

  render() {
    return (
      <div class='enroll-page'>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
        <h1>Enroll</h1>
        <form class='form'>
          First Name:
          <input class='input' type='text' name='name'/>
          Last Name:
          <input class='input' type='text' name='name' />
          Phone Number:
          <input class='input' type='text' name='name' />
          Email:
          <input class='input' type='text' name='name' />
          Child's Name:
          <input class='input' type='text' name='name' />
          Child's Age:
          <input class='input' type='text' name='name' />
          Dates:
          {/* <SimpleReactCalendar  /> */}
          <>
      <DatePicker class='date'
        // selected={startDate}
        // onChange={date => setStartDate(date)}
        // selectsStart
        // startDate={startDate}
        // endDate={endDate}
      />
      {/* <DatePicker class='date'
        // selected={endDate}
        // onChange={date => setEndDate(date)}
        // selectsEnd
        // startDate={startDate}
        // endDate={endDate}
        // minDate={startDate}
      /> */}
    </>
          Any Questions?
          <input class='input' type='text' name='name'/>
          <button class='submit' type='subimt' name='submit'><a class='payment' href='/payment'>Continue to payment</a></button>
        </form>
      </div>
    )
  }
}
