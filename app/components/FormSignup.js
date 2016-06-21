import React, { Component } from 'react'

export default class FormSignup extends Component {
  render(){
    return(
      <form action="/signup" method="post">
        <input type="text" name="username" placeholder="username"/>
        <input type="text" name="fullname" placeholder="fullname" />
        <input type="text" name="emaill" placeholder="email"/>
        <input type="text" name="password" placeholder="password"/>
        <input type="submit" />
      </form>
    )
  }
}
