import React, { Component } from 'react'
import styled from 'styled-components'

import {Row, Col} from 'react-bootstrap'

// const PatreonButton = styled.button`
//   padding: 10px 40px;
//   border-radius: 20px;
//   margin: 12px;
// `

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`

export class Posts extends Component {
  render() {
    return (
      <Wrapper>
        <Row>
          <Col md={8}>

          </Col>
          <Col md={4}>

          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default Posts
