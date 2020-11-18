import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Coaches extends Component {
  constructor(props) {
  super(props)
    this.state = {
      coaches: null
    }
  }


  componentDidMount() {
    this.props.getCoaches()
  }

  render() {
    console.log(this.props.coaches)
    const coaches =
      this.props.coaches
      &&
      this.props.coaches.map((coach, index) => {
        return (
          <div class='location-one'>
            <Link to={`/coaches/${coach.id}`}>
              <h2>{coach.name}</h2>
              </Link>
            </div>
        )
      })
        
    return (
      <div class='show-page'>
        <div class='coaches'>
        <h1>Coaches</h1>
          {coaches}
        </div>
        <h3>Add Coach</h3>
        <input />
        <button>Submit</button>
      </div>
    );
  }
}

export default Coaches;