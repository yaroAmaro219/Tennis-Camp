import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Login = (props) => {
  
 

  const { handleLogin, authFormData, handleChange, error } = props

  return (
    
      <div className='show-page'>
        <div class='login'>
        <form  onSubmit={handleLogin}>
          <h1 className='sign-in-title'>SIGN IN</h1>
          <div className='input-container'>
            <input name="email" type="text" placeholder='Email' value={authFormData.email} onChange={handleChange} className='input-style' />
            <input name="password" type="password" placeholder='Password' value={authFormData.password} onChange={handleChange} className='input-style' />
            </div>
          
          {/* <label htmlFor="basic-url">Email*</label>
          <InputGroup>
          <FormControl   placeholder='Email' as="input" />
            </InputGroup>
            <label htmlFor="basic-url">Name*</label>
          <InputGroup>
    <FormControl  onChange={this.handleChange} placeholder='Password' as="input" />
          </InputGroup> */}
          <button className='submit-button'> Login</button>
          </form>
          {error
            ?
            <h4>{error}</h4>
            :
            null
          }
          <a href='#'>Forgot Password?</a>
          <div className="need-account">
            <h1 className='account-title' >Need An Account?</h1>
            <Button onClick={() => { props.history.push('/register') }} className='register-button'>Register</Button>
          </div>
        </div>
      </div>

    )
  }
  
export default withRouter(Login);
