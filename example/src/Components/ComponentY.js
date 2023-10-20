import React, { Component } from 'react'
import ComponentZ from './ComponentZ'
import UserContext from './userContext'

class ComponentY extends Component {
  render() {
    return (
        <div>
            Component E context {this.context}
      <ComponentZ />
      </div>
    )
  }
}

ComponentY.contextType = UserContext

export default ComponentY

