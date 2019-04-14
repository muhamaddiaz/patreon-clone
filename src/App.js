import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import Creatorpage from './components/Creatorpage';
import {withCookies} from 'react-cookie';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    loggedIn: false,
    user: {},
    redirect: false
  }

  handleLogin = ({username, password}, e) => {
    e.preventDefault();
    const {cookies} = this.props;
    axios.post('http://localhost:8888/patreon-clone-api/api/auth/login', {
      username,
      password
    }).then(({data}) => {
      cookies.set('token', data.message.token)
      axios.post('http://localhost:8888/patreon-clone-api/api/auth/decode', {
        token: cookies.get('token')
      }).then(({data}) => {
        this.setState({
          loggedIn: true,
          user: data.message,
          redirect: true
        })
      }).catch(err => {
        console.log("Error: " + err);
      })
    }).catch(err => {
      console.log(err);
    })
  }

  handleLogout = (e) => {
    e.preventDefault()
    const {cookies} = this.props
    cookies.remove('token')
    this.setState({
      loggedIn: false,
      user: {}
    })
  }

  handleRegister = (data, e) => {
    e.preventDefault()
    
  }

  componentDidMount() {
    const {cookies} = this.props;
    const token = cookies.get('token');
    if(token) {
      axios.post('http://localhost:8888/patreon-clone-api/api/auth/decode', {
        token
      }).then(({data}) => {
        this.setState({
          loggedIn: true,
          user: data.message
        })
      }).catch(err => {
        console.log("Error: " + err);
      })
    } else {
      this.setState({
        loggedIn: false
      })
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar loggedIn={this.state.loggedIn} handleLogout={this.handleLogout} />
          {this.state.loggedIn ? (
            <React.Fragment>
              <Creatorpage 
                cookies={this.props.cookies}
                user={this.state.user}
              />
            </React.Fragment>
          ) : (
            <Frontpage 
              cookies={this.props.cookies}
              handleLogin={this.handleLogin}
              loggedIn={this.state.loggedIn}
            />
          )}
        </React.Fragment>
      </Router>
    );
  }
}

export default withCookies(App);
