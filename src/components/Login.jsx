import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


import PatreonHello from '../assets/img/patreon-hero-illustration.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`

const BoxWrap = styled.div`
  width: 100%;
`

const ImageLogin = styled.img`
  width: 90%;
`

const BoxWrapper = (props) => (
  <BoxWrap>
    {props.children}
  </BoxWrap>
)

const LoginText = styled.div`
  h1 {
    font-weight: 600;
    font-size: 3.5rem;  
  }
  p {
    font-size: 2rem;
  }
`

const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 2px grey;
  background-color: whitesmoke;
  border: none;
  margin: 10px 0;
`

const LoginComponent = ({children}) => (
  <LoginText>
    {children}
  </LoginText>
)

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    let target = e.target.name;
    this.setState({
      [target]: e.target.value
    })
    console.log(this.state.username)
  }

  render() {
    return (
      <div className="container">
        <Wrapper>
          <BoxWrapper>
            <LoginComponent>
              <h1>Login</h1>
              <p>Welcome to patreon</p>
              <form action="" onSubmit={this.props.handleLogin.bind(this, this.state)}>
                <div style={{width: '80%'}} className="text-center">
                  <Input placeholder="Username" name="username" onChange={this.handleChange.bind(this)} required />
                  <Input type="password" name="password" placeholder="Password" onChange={this.handleChange.bind(this)} required />
                  <div className="text-right m-3">
                    <Link 
                      to='/signup' 
                      className="text-danger"
                      style={{textDecoration: 'underline'}}
                      >
                      Forgot Password?
                    </Link>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-danger mt-3" 
                    style={{width: '100%', borderRadius: '20px', padding: '10px'}}>
                    Login
                  </button>
                </div>
              </form>
            </LoginComponent>
          </BoxWrapper>
          <BoxWrapper>
            <div className="text-center">
              <ImageLogin src={PatreonHello} />
            </div>
          </BoxWrapper>
        </Wrapper>
      </div>
    )
  }
}

export default Login;