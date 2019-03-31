import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import Mainpage from './components/Mainpage';
import './App.css';

class App extends Component {
  state = {
    loggedIn: false
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar loggedIn={this.state.loggedIn} />
          {this.state.loggedIn ? (
            <Mainpage />
          ) : (
            <Frontpage />
          )}
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
