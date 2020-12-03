import React, { Component } from 'react'

export default class Users extends Component {
  constructor() {
    super() 

    this.state = {
      users: ''
    }
  }

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const { users } = this.props
    console.log(users)
    const user =
      users
      &&
      this.props.users.map((user, index) => {
        return (
          <div class='enroll-one'>
            <h2>{user.first_name} {user.last_name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.phone}</h2>
            </div>
      )
    })
    return (
      <div class='users-container'>
        <h1>Hello</h1>
        {user}
      </div>
    )
  }
}
