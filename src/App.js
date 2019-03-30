import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Frontpage />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
