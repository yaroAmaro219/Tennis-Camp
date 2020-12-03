import React, { Component } from 'react';

class AddSession extends Component {
  render() {
    const {addSession, handleChange, time, age, dates, location, title} = this.props
    return (
      <div class='show-page'>
        <h1>Add Session</h1>
        <form  onSubmit={(e) => {
          e.preventDefault();
          addSession(this.props.match.params.id)
        }}>
          <h2 class='session-welcome'>Dates</h2>
            <input 
            class='session-input'
            placeholder='Dates'
            value={dates}
            name='dates'
            onChange={handleChange} />
          <h2 class='session-welcome'>Location</h2>
            <textArea
            class='session-input'
            placeholder='Location'
            value={location}
            name='location'
            onChange={handleChange} />
          <h2 class='session-welcome'>Ages</h2>
            <input 
            class='session-input'
            placeholder='Ages'
            value={age}
            name='age'
            onChange={handleChange}/>
          <h2 class='session-welcome'>Time</h2>
            <input 
            class='session-input'
            placeholder='Time'
            value={time}
            name='time'
            onChange={handleChange} />
            <h2 class='session-welcome'>Title</h2>
            <input 
            class='session-input'
            placeholder='Title'
            value={title}
            name='title'
            onChange={handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddSession;