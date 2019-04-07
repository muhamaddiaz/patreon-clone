import React, { Component } from 'react'
import styled from 'styled-components'
import PatreonRae from '../assets/img/issa-rae.png'

const BackgroundCover = styled.div`
  width: 100%;
  height: 70vh;
  background-color: red;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 70vh;
  
`

export class Mainpage extends Component {
  render() {
    return (
      <div>
        <BackgroundCover>
          <div className="container">
            <Wrapper className="bg-primary">
              <div className="row bg-secondary">
                <div className="col-md-2 text-center">
                  <img src={PatreonRae} className="img-circle"/>
                </div>
                <div className="col-md-10 ">
                  <h2>Superduperdiaz is creating programming tutorial</h2>
                </div>
              </div>
            </Wrapper>
          </div>         
        </BackgroundCover>
      </div>
    )
  }
}

export default Mainpage
