import React, { Component } from 'react'
import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: black;
`

const FlexItem = styled.div`
    font-size: 3rem;
    color: white;
`

export class Notfound extends Component {
  render() {
    return (
      <FlexContainer>
          <FlexItem>
              <h1>404 Error</h1>
              <h3>Users Not Found</h3>
          </FlexItem>
      </FlexContainer>
    )
  }
}

export default Notfound
