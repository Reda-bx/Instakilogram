import React, { Component } from 'react'

import LoginForm from './forms/LoginForm'
import FormSignup from './forms/FormSignup'

export default class LoginPage extends Component {
  render(){
    return(
      <div className="container">
        <div className="singup">
          <h3>New Member ? Singup</h3>
          <FormSignup />
        </div>
        <div className="login">
          <h3>Already Member ? Login</h3>
          <LoginForm />
        </div>
      </div>
    )
  }
}
