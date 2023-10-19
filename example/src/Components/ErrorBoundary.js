import React, { Component } from 'react'
//import StudentList from './StudentList'

class ErrorBoundary extends Component {

constructor(props) {
  super(props)

  this.state = {
     hasError: false
  }
}

static getDerivedStateFromError(error) {
    return {
        hasError: true
    }
}

  render() {
    if(this.state.hasError) {
        return <h1> does not belong to this class</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary