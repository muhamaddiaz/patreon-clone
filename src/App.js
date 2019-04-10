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
    loggedIn: true
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
          loggedIn: true
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
            <Mainpage cookies={this.props.cookies}/>
          ) : (
            <Frontpage cookies={this.props.cookies}/>
          )}
        </React.Fragment>
      </Router>
    );
  }
}

export default withCookies(App);
