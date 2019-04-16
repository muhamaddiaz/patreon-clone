import React, { Component } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Explore from './Explore'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import NotFound from './Notfound'
import Dashboard from './Dashboard'
import Mainpage from './Mainpage'

export class Frontpage extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => (
          this.props.loggedIn ? (
            <Redirect to={`/users/${this.props.user.username}`} />
          ) : (
            <Home />
          )
        )}/>

        <Route exact path="/explore" render={() => (
          this.props.loggedIn ? (
            <Redirect to={`/users/${this.props.user.username}`} />
          ) : (
            <Explore />
          )
        )}/>

        <Route exact path="/signup" render={() => (
          this.props.loggedIn ? (
            <Redirect to={`/users/${this.props.user.username}`} />
          ) : (
            <Signup 
              handleRegister={this.props.handleRegister}
              isError={this.props.isError}
            />
          )
        )}/>

        <Route 
          path="/login" 
          render={() => (
            <Login 
              cookies={this.props.cookies}
              handleLogin={this.props.handleLogin}
              loggedIn={this.props.loggedIn}
              isError={this.props.isError}
              user={this.props.user}
            />
          )} 
        />

        <Route path="/users/:username/dashboard" render={({match}) => (
          <Dashboard 
            pathParam={match.params.username}
            handleUpdate={this.props.handleUpdate}
            user={this.props.user}
          />
        )}/>
        <Route path="/users/:username" render={({match}) => (
          <Mainpage 
            pathParam={match.params.username} 
            cookies={this.props.cookies} 
            user={this.props.user} />
        )} />

        <Route exact render={() => (
          <NotFound message="Page not found" />
        )}/>

      </Switch>
    )
  }
}

export default Frontpage
