import React, { Component } from 'react';

class Coach extends Component {
  constructor(props){
    super(props)
    this.state = {
      coach: null
    }
  }

  componentDidMount() {
    this.props.getCoach(this.props.match.params.id);
    // this.props.getSessions(this.props.match.params.id);
  }

  render() {
    return (
      <div class='show-page'>
        <h1>Coach</h1>
        <h1 class="profile-welcome"> {this.props.coach
          &&
            this.props.coach.name}</h1>
            <h1 class="profile-welcome"> {this.props.coach
          &&
            this.props.coach.age}</h1>
            <h1 class="profile-welcome"> {this.props.coach
          &&
            this.props.coach.bio}</h1>
      </div>
    );
  }
}

export default Coach;