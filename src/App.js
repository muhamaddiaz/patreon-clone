import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import Mainpage from './components/Mainpage';
import {withCookies} from 'react-cookie';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    loggedIn: true,
    user: {}
  }

  handleLogin = ({username, password}, e) => {
    e.preventDefault();
    const {cookies} = this.props;
    axios.post('http://localhost/patreon-api/api/auth/login', {
      username: username,
      password: password
    }).then(({data}) => {
      cookies.set('token', data.message.token)
      axios.post('http://localhost/patreon-api/api/auth/decode', {
        token: cookies.get('token')
      }).then(({data}) => {
        console.log(data);
        this.setState({
          loggedIn: true,
          user: data.message
        })
      }).catch(err => {
        console.log("Error: " + err);
      })
    }).catch(err => {
      console.log(err);
    })
  }

  componentDidMount() {
    const {cookies} = this.props;
    const token = cookies.get('token');
    if(token) {
      axios.post('http://localhost/patreon-api/api/auth/decode', {
        token
      }).then(({data}) => {
        console.log(data);
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
          <Navbar loggedIn={this.state.loggedIn} />
          {this.state.loggedIn ? (
            <Mainpage 
              cookies={this.props.cookies}
              user={this.state.user}
            />
          ) : (
            <Frontpage 
              cookies={this.props.cookies}
              handleLogin={this.handleLogin}
            />
          )}
        </React.Fragment>
      </Router>
    );
  }
}

export default withCookies(App);
