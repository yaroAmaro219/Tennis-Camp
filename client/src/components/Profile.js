import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Search from '../services/Search'




const Profile = (props) => {
  const { user, getUsers, profile_picture, componentDidMount, handleChange, handleLogout, handleImage, submitImage } = this.props;

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     user: null,
  //   }
  // }

  // function componentDidMount(props) {
  //   this.props.getUser(this.props.match.params.id);
  // }
 
  // componentDidMount() {
  //   this.props.getUsers()
  // };
 
    const uploadedImage = React.useRef(null);
    const handleImageUpload = e => {
    const [file] = e.target.files;
      if (file) {
    const reader = new FileReader();
    const {current} = uploadedImage;
    current.file = file;
    reader.onload = (e) => {
        current.src = e.target.result;
    }
        reader.readAsDataURL(file);
        handleImage(file)
        console.log(file)
      }
    }
    const { search } = window.location;
  const query = new URLSearchParams(search).get('s');

  const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};
  const posts =
    [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
  ];
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);
  return (
      <div class="show-page">
        <div class='profile-page'>
        <div class="profile-top">
          <div class="profile-welcome">
        <h1 class='profile-name'>Hello {user
          &&
                user.first_name}</h1>
              <div class='logout-div'>
                <Button class="logout-button" onClick={handleLogout}>Logout</Button>
                </div>
          </div>
          <div>
            <h3>Classes Near You</h3>
          </div>
          </div>
        <div>
          {user && user.picture
            ?
            user.picture
            :
            <div>
            <h3>Profile Picture</h3>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
              {/* <Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Profile Picture" />
  </Form.Group>
    </Form> */}
      <div
        style={{
          height: "90px",
          width: "90px",
          border: "1px  black"
        }}
      >
        <img class='pro-pic'
          ref={uploadedImage}
          style={{
            width: "200px",
            height: "200px",
            position: "absolute",
            borderRadius: "100px 100px"
          }}
            />
            </div>
            <div class='add-photo'>
            <Button  onClick={submitImage}>Submit</Button>
              </div>
              </div>
          }
            </div>

          <div class='add-child'>
            <Button>Add Children</Button>
            </div>
          </div>
          {/* <div class='location-one'>
            <Link to={`/users/${this.props.match.params.id}/children/${this.props.user && this.props.user.children_id}`}>
          <h1 class='child-name'>{this.props.user
          &&
                this.props.user.child_name}</h1>
              </Link>
          </div>
          <h3>Add a child</h3>
          <input class="input-style"/>
          <button>Submit</button> */}
      <div>
        <Search
           searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ul>
                {filteredPosts.map(post => (
                    <li key={post.key}>{post.name}</li>
                ))}
            </ul>
        </div>
        </div>
    )
  }


export default Profile;