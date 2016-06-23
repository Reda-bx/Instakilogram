import React, { Component } from 'react'
import axios from 'axios'

export default class FormSignup extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      fullname: '',
      email: '',
      password: '',
      responeMsg: ''
    }
  }
  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }
  handleFullnameChange(e) {
    this.setState({fullname: e.target.value})
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }
  handleRegistration(e) {
    e.preventDefault()
    const username = this.state.username.trim()
    const fullname = this.state.fullname.trim()
    const email = this.state.email.trim()
    const password = this.state.password.trim()

    axios({
      method: 'post',
      url: '/registration',
      data: {
        username: username,
        fullname: fullname,
        email: email,
        password: password
      }
    })
    .then(response => {
      if(response.data.error)
        return this.setState({responeMsg: response.data.error})
      console.log('redirect the shit.')
      // this.setState({responeMsg: response.data.success})
    })
    .catch(err => console.error(err))
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleRegistration.bind(this)}>
          <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} required/>
          <input type="text" name="fullname" placeholder="fullname" value={this.state.fullname} onChange={this.handleFullnameChange.bind(this)} required/>
          <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} required/>
          <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} required/>
          <input type="submit" />
        </form>
        <h4>{this.state.responeMsg}</h4>
      </div>
    )
  }
}
