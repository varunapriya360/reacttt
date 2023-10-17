import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }

  //componentDidMount() {
    //this.inputRef.current.focus()
    //console.log(this.inputRef)
  //}

  //clickhandler = () => {
    //alert(this.inputRef.current.value)
  //}

  focusInput() {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        {/*<button onClick={this.clickhandler}>refButton</button>*/}
      </div>
    )
  }
}

export default RefsDemo