import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
// import Creatorpage from './components/Creatorpage';
import {withCookies} from 'react-cookie';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    loggedIn: false,
    user: {},
    isError: false
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
          isError: false
        })
      }).catch(err => {
        console.log("Error: " + err);
        this.setState({
          isError: true
        })
      })
    }).catch(err => {
      console.log(err);
      this.setState({
        isError: true
      })
    })
  }

  handleLogout = (e) => {
    const {cookies} = this.props
    cookies.remove('token')
    this.setState({
      loggedIn: false,
      user: {},
      isError: false
    })
  }

  handleRegister = ({full_name, username, email, password}, e) => {
    e.preventDefault()
    const {cookies} = this.props;
    axios.post('http://localhost:8888/patreon-clone-api/api/auth/register', {
      full_name,
      username,
      email,
      password
    }).then(({data}) => {
      cookies.set('token', data.message.token)
      axios.post('http://localhost:8888/patreon-clone-api/api/auth/decode', {
        token: cookies.get('token')
      }).then(({data}) => {
        this.setState({
          loggedIn: true,
          user: data.message,
          isError: false
        })
      }).catch(err => {
        console.log("Error: " + err);
        this.setState({
          isError: true
        })
      })
    }).catch(err => {
      console.log(err);
      this.setState({
        isError: true
      })
    })
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
          <Navbar 
            loggedIn={this.state.loggedIn} 
            handleLogout={this.handleLogout} 
            user={this.state.user} 
          />
          {/* <Creatorpage 
            cookies={this.props.cookies}
            user={this.state.user}
          /> */}
          <Frontpage 
            cookies={this.props.cookies}
            handleLogin={this.handleLogin}
            handleRegister={this.handleRegister}
            loggedIn={this.state.loggedIn}
            isError={this.state.isError}
            user={this.state.user}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default withCookies(App);
