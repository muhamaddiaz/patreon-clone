import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Explore from './Explore'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'

export class Frontpage extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </div>
    )
  }
}

export default Frontpage