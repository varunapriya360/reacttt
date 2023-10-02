import React, { Component } from 'react';

class Welcome extends Component {
    render() { 
        const {name, fname} = this.props
        return <h1> welcome {name} {fname}</h1>
    }
}

export default Welcome