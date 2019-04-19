import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import styled from 'styled-components'
import PatreonRae from '../assets/img/issa-rae.png'

import Footer from './Footer'
import Posts from './Posts'
import Community from './Community'
import Overview from './Overview'
import NotFound from './Notfound'

import axios from 'axios';

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

  state = {
    isFound: false,
    localUser: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/patreon-clone-api/api/users/${this.props.pathParam}`)
      .then(({data}) => {
        this.setState({
          isFound: true,
          localUser: data.message
        })
        console.log(this.state.localUser)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (

      <React.Fragment>
        {this.state.isFound ? (
          <div>
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
                        {
                          this.state.localUser.creating ? (
                            <ProfileText>{this.state.localUser.creating}</ProfileText>
                          ) : (
                            <ProfileText>Edit this text on dashboard menu</ProfileText>
                          )
                        } 
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
                    <Link to={`/users/${this.props.pathParam}`}>
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to={`/users/${this.props.pathParam}/posts`}>
                      Posts
                    </Link>
                  </li>
                  <li>
                    <Link to={`/users/${this.props.pathParam}/community`}>
                      Community
                    </Link>
                  </li>
                </NavMenu>
                <NavMenu>
                  <li>
                    {
                      this.props.user.username === this.props.pathParam &&
                      <PatreonButton className="btn btn-danger">Become a Patreon</PatreonButton>
                    }
                  </li>
                </NavMenu>
              </div>
            </Nav>
            <div className="container">
              <Route path={`/users/${this.props.pathParam}`} exact render={() => (
                <Overview 
                  pathParam={this.props.pathParam} 
                  user={this.props.user}
                />
              )} />
              <Route path={`/users/${this.props.pathParam}/posts`} component={Posts} />
              <Route path={`/users/${this.props.pathParam}/community`} component={Community} />
            </div>
            <Footer />
          </div>
        ) : (
          <NotFound message="User not found" />
        )}
      </React.Fragment>
    )
  }
}

export default Mainpage
