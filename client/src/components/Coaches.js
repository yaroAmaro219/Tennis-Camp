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
        return (<>
            <Link to={`/coaches/${coach.id}`}>
          <div class='coach-one'>
              <h2 class='coach-name'>{coach.name}</h2>
              <img class='coaches-img' src={coach.image}/>
          </div>
          </Link>
          </>
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