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
        <div class='coach-page'>
        <h1>Coaches</h1>
        <div class='coaches'>
          {coaches}
        </div>
          {this.props.currentUser
            &&
            this.props.currentUser.admin
            ?
            <button>Create New Coach</button>
            :
            null
          }
          </div>
      </div>
    );
  }
}

export default Coaches;