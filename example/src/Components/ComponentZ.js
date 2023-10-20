import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentZ extends Component {
  render() {
    return (
      <UserConsumer>
        {username => {
            return <div>yello {username}</div>
        }}
      </UserConsumer>
    )
  }
}

export default ComponentZ