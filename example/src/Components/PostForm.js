import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body: ''
      }
    }

    changehandler =(e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

  render() {
    const {userId, title, body} = this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type="text" name="userId" value={userId} onChange={this.changehandler}/>
            </div>
            <div>
                <input type="text" name="title" value={title} onChange={this.changehandler}/>
            </div>
            <div>
                <input type="text" name="body" value={body} onChange={this.changehandler}/>
            </div>
            <button type="submit">SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default PostForm