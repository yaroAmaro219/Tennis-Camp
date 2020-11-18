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
    console.log(this.props.match.params.id)
    console.log(this.props.user)
    // const user =
    //   this.props.user
    //   &&
    //   this.props.user.map((data, index) => {
    //     return (
    //       <div class='location-one'>
    //       <Link to={`/users/${data.id}/children/${data.children_id}`}>
    //         <h2>{`${data.child_name}`}</h2>
    //       </Link>
           
    //         </div>
    //     )
    //   })
    return (
      <div class="show-page">
        <div class="profile-top">
        <h1 class="profile-welcome">Hello {this.props.user
          &&
            this.props.user.first_name}</h1>
          <div class='location-one'>
            <Link to={`/users/${this.props.match.params.id}/children/${this.props.user && this.props.user.children_id}`}>
          <h1 class='child-name'>{this.props.user
          &&
                this.props.user.child_name}</h1>
              </Link>
       
          </div>
         
          <h3>Add a child</h3>
          <input />
          <button>Submit</button>
            <h1>email: {this.props.user
          &&
            this.props.user.email}</h1>
          <button class="logout-button" onClick={this.props.handleLogout}>Logout</button>
          </div>
       
      </div>
    )
  }
}

export default Profile;