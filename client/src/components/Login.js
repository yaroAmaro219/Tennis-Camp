import React from 'react'
import {withRouter} from 'react-router-dom'

const Login = (props) => {
  
  // myFunction = () => {
  //   let x = document.getElementById("myInput");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }

    const { handleLogin, authFormData, handleChange } = props
  return (
      <>
      <div className='show-page'>
        <div class='login'>
        <form  onSubmit={handleLogin}>
          <h1 className='sign-in-title'>SIGN IN</h1>
          <div className='input-container'>
            <input name="email" type="text" placeholder='Email' value={authFormData.email} onChange={handleChange} className='input-style' />
            <input name="password" type="password" placeholder='Password' value={authFormData.password} onChange={handleChange} className='input-style' />
          </div>
          <button className='submit-button'> Login</button>
          </form>
        
        
          <div className="need-account">
            <h1 className='account-title' >Need An Account?</h1>
            <button onClick={() => { props.history.push('/register') }} className='register-button'>Register</button>
          </div>
        </div>
      </div>
      </>
    )
  }



  
export default withRouter(Login);
