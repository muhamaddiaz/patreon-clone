import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class Navbar extends Component {
  getStyle = {
    navbar: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      boxShadow: '0px 0px 2px grey'
      // backgroundColor: 'blue'
    },
    navbarBrand: {
      padding: '20px',
      letterSpacing: '4px'
      // backgroundColor: 'red'
    },
    navbarMenu: {
      display: 'flex',
      margin: '0',
      padding: '0',
      listStyle: 'none',
      // backgroundColor: 'yellow'
    },
    navbarItem: {
      textDecoration: 'none',
      display: 'inline-block',
      padding: '20px',
      color: 'black',
      // backgroundColor: 'teal'
    }
  }

  render() {
    return (
      <nav style={this.getStyle.navbar}>
        <div style={this.getStyle.navbarBrand}>
          PATREON
        </div>
        <ul style={this.getStyle.navbarMenu}>
          <li>
            <Link style={this.getStyle.navbarItem} to="/">
              Start my page
            </Link>
          </li>
          <li>
            <Link style={this.getStyle.navbarItem} to="/explore">
              Explore creators
            </Link>
          </li>
          <li>
            <Link style={this.getStyle.navbarItem} to="/signup">
              Sign up
            </Link>
          </li>
          <li>
            <Link style={this.getStyle.navbarItem} to="/login">
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar