import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }

    //greetParent() {
        //alert(`hello ${this.state.parentName}`)
    //}

    greetParent(childName) {
        alert(`hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
