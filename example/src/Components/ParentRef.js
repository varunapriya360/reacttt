import React, { Component } from 'react'
import RefsDemo from './RefsDemo'

class ParentRef extends Component {
    constructor(props) {
      super(props)
        this.componentRef=React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }

  render() {
    return (
      <div>
        <RefsDemo ref={this.componentRef}/>
      <button onClick={this.clickHandler}>focus input</button>
      </div>
    )
  }
}

export default ParentRef