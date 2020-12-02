import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }


  render() {
    return (
      <div class="show-page">
        <div class="profile-top">
          <div class="profile-welcome">
        <h1 class='profile-name'>Hello {this.props.user
          &&
            this.props.user.first_name}</h1>
            <button class="logout-button" onClick={this.props.handleLogout}>Logout</button>
          </div>
          </div>
          <div class='location-one'>
            <Link to={`/users/${this.props.match.params.id}/children/${this.props.user && this.props.user.children_id}`}>
          <h1 class='child-name'>{this.props.user
          &&
                this.props.user.child_name}</h1>
              </Link>
       
          </div>
         
          <h3>Add a child</h3>
          <input class="input-style"/>
          <button>Submit</button>
          </div>
    )
  }
}

export default Profile;