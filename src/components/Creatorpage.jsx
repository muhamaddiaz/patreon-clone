import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Mainpage from './Mainpage'
import Dashboard from './Dashboard'

export class Creatorpage extends Component {
  render() {
    return (
      <div>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/:username" render={({match}) => (
          <Mainpage 
            pathParam={match.params.username} 
            cookies={this.props.cookies} 
            user={this.props.user} />
        )} />
      </div>
    )
  }
}

export default Creatorpage
