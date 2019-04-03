import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class Navbar extends Component {
  getStyle = {
    navbar: {
      position: 'fixed',
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      boxShadow: '0px 0px 2px grey',
      zIndex: 100,
      backgroundColor: 'white'
    },
    navbarBrand: {
      padding: '20px',
      letterSpacing: '2px',
      fontWeight: '700',
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
          {this.props.loggedIn ? (
            <LoggedInLink getStyle={this.getStyle} />
          ) : (
            <NotLoggedInLink getStyle={this.getStyle} />
          )}
        </ul>
      </nav>
    )
  }
}

function NotLoggedInLink(props) {
  return (
    <React.Fragment>
      <NavLink to="/" getStyle={props.getStyle}>
        Start my page
      </NavLink>
      <NavLink to="/explore" getStyle={props.getStyle}>
        Explore
      </NavLink>
      <NavLink to="/signup" getStyle={props.getStyle}>
        Sign up
      </NavLink>
      <NavLink to="/login" getStyle={props.getStyle}>
        Log in
      </NavLink>
    </React.Fragment>
  )
}

function LoggedInLink(props) {
  return (
    <React.Fragment>
      <NavLink to="/home" getStyle={props.getStyle}>
        Home
      </NavLink>
    </React.Fragment>
  )
}

function NavLink(props) {
  return (
    <li>
      <Link style={props.getStyle.navbarItem} to={props.to}>
        {props.children}
      </Link>
    </li>
  )
}

export default Navbar