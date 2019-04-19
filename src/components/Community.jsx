import React, { Component } from 'react'

import {Card} from 'react-bootstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  width: 50%;
  text-align: center;
`

const PatreonButton = styled.button`
  padding: 10px 40px;
  border-radius: 20px;
  width: 50%;
  margin-top: 15px;
`

export class Community extends Component {
  render() {
    return (
      <div>
        <Card className="mb-3 mt-3">
          <Card.Body>
            <Card.Title className="text-center">
              <h1>Welcome to Community</h1>
            </Card.Title>
            <Card.Text>
              <Wrapper>
                <span className="text-muted">
                  There are thousand of the creator can create community
                  to interact each other with the coolest feature on the planet
                </span>
                <PatreonButton className="btn btn-danger">
                  See others creator
                </PatreonButton>
              </Wrapper>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Community
