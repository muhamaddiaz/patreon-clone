import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import styled from 'styled-components'
import PatreonRae from '../assets/img/issa-rae.png'

import Footer from './Footer'
import Posts from './Posts'
import Community from './Community'
import Overview from './Overview'

const BackgroundCover = styled.div`
  width: 100%;
  height: 70vh;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 70vh;
`

const Profile = styled.div`
  width: 100%;
  padding: 20px 0;
`

const ProfileText = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  padding-top: 40px;
  color: white;
`

const CoverFade = styled.div`
  width: 100%;
  height: 70vh;
  background-image: linear-gradient(transparent 50%, grey);
`

const Nav = styled.nav`
  width: 100%;
  box-shadow: 0 0 3px grey;
`

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    float: left;
  }

  li a {
    position: relative;
    display: inline-block;
    padding: 23px;
    color: grey;
  }
`

const PatreonButton = styled.button`
  padding: 10px 50px;
  border-radius: 20px;
  margin: 12px;
`

export class Mainpage extends Component {
  render() {
    return (
      <React.Fragment>
        <BackgroundCover>
          <CoverFade>
            <div className="container">
              <Wrapper>
                <Profile>
                  <div className="row">
                    <div className="col-md-2 text-center">
                      <img src={PatreonRae} alt="profile" style={{width: '120px'}} />
                    </div>
                    <div className="col-md-10">
                    <ProfileText>{this.props.user.username} is creating programming tutorial</ProfileText> 
                    </div>             
                  </div>
                </Profile>
              </Wrapper>
            </div>   
          </CoverFade>
        </BackgroundCover>
        <Nav>
          <div className="container d-flex justify-content-between">
            <NavMenu>
              <li>
                <Link to="/">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/posts">
                  Posts
                </Link>
              </li>
              <li>
                <Link to="/community">
                  Community
                </Link>
              </li>
            </NavMenu>
            <NavMenu>
              <li>
                <PatreonButton className="btn btn-danger">Become a Patreon</PatreonButton>
              </li>
            </NavMenu>
          </div>
        </Nav>
        <div className="container">
          <Route path="/" exact component={Overview} />
          <Route path="/posts" component={Posts} />
          <Route path="/community" component={Community} />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Mainpage
