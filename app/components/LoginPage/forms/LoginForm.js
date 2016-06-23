import React, { Component } from 'react'
import axios from 'axios'

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }
  handleLogin(e) {
    e.preventDefault()
    const username = this.state.username.trim()
    const password = this.state.password.trim()

    axios({
      method: 'post',
      url: '/login',
      data: {
        username: username,
        password: password
      }
    })
    .then(response => console.log(response))
    .catch(err => console.error(err))
  }
  render(){
    return(
      <form onSubmit={this.handleLogin.bind(this)}>
        <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} required/>
        <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} required/>
        <input type="submit" />
      </form>
    )
  }
}
