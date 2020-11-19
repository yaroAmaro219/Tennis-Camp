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
    // this.props.getSessions(this.props.match.params.id);
  }




  render() {
    console.log(this.props.place)
    console.log(this.props.match.params.id)
    // const place = 
    //   this.props.place
    //   && 
    //   this.props.place.map((e, index) => {
    //     return (
    //       <>
    //         <h2>{e.title}</h2>
    //       </>
          
    //   )
    // })
    return (
      <div class="show-page">
        <div class='location-page'>
        <div class="profile-top">
        <h1 class="profile-welcome"> {this.props.place
          &&
            this.props.place.title}</h1>
          <h2 class='supervisor'>Area Supervisor 
             {/* <Link to={`/coaches/${this.props.place.coach.id}`}> */}
               {` ${this.props.place && this.props.place.coach}`}
            {/* </Link> */}
          </h2>
        </div>
        
        <div class='sessions-offered'>
        <h2>Our sessions offered are</h2>
          <div class='session'>
           {/* <Link to={`/locations/${this.props.match.params.id}/sessions/${session.id}`}>
            </Link> */}
          </div>
          </div>
          </div>
      </div>
    )
  }
}

export default Location;