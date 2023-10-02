import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

  render() {
    return this.state.isLoggedIn && <div>welcome varuna</div>

    //return this.state.isLoggedIn ? (
      //  <div>welcome varuna</div>
    //) : (
    //<div>welcome guest</div>
    //)
  

    //let message
    //if (this.state.isLoggedIn) {
      //  message = <div>welcome varuna</div>
    //} else {
      //  message = <div>welcome guest</div>
    //}

    //return <div>{message}</div>

    //if (this.state.isLoggedIn) {
      //  return <div>welcome varuna</div>
    //} else {
      //return <div>welcome guest</div>
    //}
    //return (
      //<div>Welcome varuna
        //<div>Welcome guest</div>
      //</div>
    //)
  }
}

export default UserGreeting