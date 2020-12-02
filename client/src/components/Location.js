import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      sessions: null
    }
  }

  componentDidMount() {
    this.props.getLocation(this.props.match.params.id);
    this.props.getSessions()
  }

  render() {
    console.log(this.props.sessions)
    console.log(this.props.match.params.id)
    // const session = this.props.sessions 
    //   &&
    //   this.props.sessions.find((session) => session.location_id === parseInt(props.match.params.id))
    
    const session = this.props.sessions
      &&
      this.props.sessions.map((session, index) => {
        if (session.location_id === parseInt(this.props.match.params.id))
          return (
          <>
          <Link class='sessions-link' to={`/locations/${this.props.match.params.id}/sessions/${session.id}`} >
                <div class='session'>
                  <h2 class='location-h2'>Location</h2>
                  <iframe class='map' src={session.location} width="400" height="300" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  <h2 class='location-h2'>Ages: {session.age}</h2>
                  <h2 class='location-h2'>Time: {session.time}</h2>
                  <h2 class='location-h2'>Dates: {session.dates}</h2>
              </div>
              </Link>
              </>
        )
      })

    return (
      <div class="show-page">
        <div class='location-page'>
        <div class="profile-top">
        <h1 class="profile-welcome"> {this.props.place
          &&
              this.props.place.title}</h1>
            <div class='supervisor'>
          <h2 class='supervisor'>Area Supervisor: 
          </h2>
              <h2 class='supervisor-name'>{` ${this.props.place && this.props.place.coach}`}</h2>
          </div>
        </div>
          <div class='sessions-offered'>
            <div class='location-sessions'>
              <h2>Our sessions here include</h2>
              {this.props.currentUser
                &&
                this.props.currentUser.admin
                ?
                <Link to={`/locations/${this.props.match.params.id}/sessions`}class='add-session'>Add Session</Link>
                :
                null
              }
            </div>
          <div class='sessions'>
          {session}
          </div>
          </div>
          </div>
      </div>
    )
  }
}

export default Location;