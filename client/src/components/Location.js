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
    const location = this.props.sessions && this.props.sessions.location_id
    const session = this.props.sessions
      &&
      this.props.sessions.map((session, index) => {
        if (session.location_id === parseInt(this.props.match.params.id)) {
          return (
            
              <Link class='sessions-link' to={`/locations/${this.props.match.params.id}/sessions/${session.id}`} >
                <div class='session'>
                  <div class='session-left'>
                    <h2 class='location-h2'>Ages {session.age}</h2>
                    <h2 class='location-h2'> {session.time}</h2>
                    <h2 class='location-h2'> {session.dates}</h2>
                    <h2 class='location-h2'>from ${session.price}</h2>
                  </div>
                  <div class='session-right'>
                    <h2 class='location-h2'>{session.title}</h2>
                    <iframe class='map' src={session.location} width="100%" height="222" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
                </div>
              </Link>
            
          )
        } else {
          return (undefined)
        }
      })
    const pic = this.props.place && this.props.place.image
    return (
        <div class='location-page'>
          <div class="location-top" style={{ 'background-image': `url(${pic})`, 'background-position': '100% 43%'}}>
            <div class='title-background'>
        <h1 class="location-welcome"> {this.props.place
          &&
                this.props.place.title}</h1>
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
              {
                session 
                  ?
                 session 
                  :
                  <h3>No sessions currently available here. Check back soon!</h3>
              }
          </div>
          </div>
          </div>
    )
  }
}

export default Location;