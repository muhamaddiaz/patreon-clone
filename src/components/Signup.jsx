import React from 'react'
import styled from 'styled-components'

import PatreonTop from '../assets/img/step3-top.svg'
import PatreonBottom from '../assets/img/step3-bottom.svg'

import Alert from './Fragments/Alert'


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  label {
    margin: 15px 0 0;
  }
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
  margin: 0px 0;
`

const LoginComponent = ({children}) => (
  <LoginText>
    {children}
  </LoginText>
)

class Signup extends React.Component {
  state = {
    full_name: '',
    username: '',
    email: '',
    password: '',
    profile_photo: 'foto1.jpg',
    profile_background: 'foto2.jpg'
  }

  handleChange = (e) => {
    let target = e.target.name;
    this.setState({
      [target]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <Wrapper>
          <BoxWrapper>
            <LoginComponent>
              <div className="m-5"></div>
              <h1>Signup</h1>
              <p>Join with patreon</p>
              <form action="" onSubmit={this.props.handleRegister.bind(this, this.state)}>
                <div style={{width: '80%'}} className="text-left">
                  {
                    this.props.isError && 
                    (
                      <Alert status="danger">
                        <span>Username or email already taken!</span>
                      </Alert>
                    )
                  }
                  <span>
                    <label htmlFor="">Your name</label>
                    <Input onChange={this.handleChange.bind(this)} name="full_name" required/>
                  </span>
                  <span>
                    <label htmlFor="">Username</label>
                    <Input onChange={this.handleChange.bind(this)} name="username" required/>
                  </span>
                  <span>
                    <label htmlFor="">Email</label>
                    <Input onChange={this.handleChange.bind(this)} name="email" type="email" required/>
                  </span>
                  <span>
                    <label htmlFor="">Password</label>
                    <Input onChange={this.handleChange.bind(this)} name="password" type="password" required/>
                  </span>
                  <span className="mb-3 mt-3">
                    <input type="checkbox" name="term" id="term" required />&nbsp;
                    <label htmlFor="">Agree with all terms</label>
                  </span>
                  <br/>
                  <button 
                    type="submit" 
                    className="btn btn-danger mt-3" 
                    style={{width: '100%', borderRadius: '20px', padding: '10px'}}>
                    Signup
                  </button>
                </div>
              </form>
            </LoginComponent>
          </BoxWrapper>
          <BoxWrapper>
            <div className="text-center">
              <ImageLogin src={PatreonTop} />
              <ImageLogin src={PatreonBottom} />
            </div>
          </BoxWrapper>
        </Wrapper>
      </div>
    )
  }
}

export default Signup