import React from 'react'
import { withRouter } from 'react-router-dom'


const Register = (props) => {
  const { handleRegister, registerFormData, handleChange } = props
  return (
    <>
      <div className='show-page'>

        <form className="register-right-container" onSubmit={handleRegister}>
          <h1 className='register-title' >Register</h1>
          <div className='register-input-container'>

            <input className='register-input-style' name='first_name' type='text' placeholder='Full Name' value={registerFormData.first_name} onChange={handleChange} />
            <input className='register-input-style' name='email' type='text' placeholder='Email' value={registerFormData.email} onChange={handleChange} />
            <input className='register-input-style' name='password' type='password' placeholder='Password' value={registerFormData.password} onChange={handleChange} />
          </div>
          <button className='register-submit-button'>Register</button>

        </form>
        <div className='register-signin-container'>
              <h1 className='have-account-title'>Already have an account?</h1>
              <button className='register-signin-redirect-button' onClick={() => { props.history.push('/login') }}>Sign In</button>
            </div>
      </div>
    </>
  )
}

export default withRouter(Register);
