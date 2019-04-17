import React, { Component } from 'react'
import styled from 'styled-components'
import Footer from './Footer'

import {Card, Form, Row, Col, Button} from 'react-bootstrap'

const ContextText = styled.div`
  margin: 15px 0;
  text-align: center;
  h1 {
    font-weight: 700;
  }
`

export class Dashboard extends Component {
  
  state = {
    oldusername: this.props.pathParam,
    full_name: '',
    create: '',
    creating: ''
  }

  handleChange = (e) => {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  handleRadioChange = (e) => {
    this.setState({
      creating: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div className="container pt-5">
            <ul className="nav nav-tabs mt-5">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#home">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu1">Tiers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu2">Goals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu3">Thanks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu4">Payments</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#menu5">Preview</a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane container active" id="home">
                <About 
                  handleChange={this.handleChange}
                  handleUpdate={this.props.handleUpdate}
                  handleChecked={this.handleChecked}
                  handleRadioChange={this.handleRadioChange}
                  data={this.state}
                  user={this.props.user}
                />
              </div>
              <div className="tab-pane container fade p-5" id="menu1"><h1>Coming Soon!</h1></div>
              <div className="tab-pane container fade p-5" id="menu2"><h1>Coming Soon!</h1></div>
              <div className="tab-pane container fade p-5" id="menu3"><h1>Coming Soon!</h1></div>
              <div className="tab-pane container fade p-5" id="menu4"><h1>Coming Soon!</h1></div>
              <div className="tab-pane container fade p-5" id="menu5"><h1>Coming Soon!</h1></div>
            </div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

function About(props) {
  return (
    <div className="about">
      <ContextText>
        <h1>About</h1>
        <p>Set your creator details and make a great first impression</p>
      </ContextText>
      <Form action="" onSubmit={props.handleUpdate.bind(this, props.data)}>
        <div className="row">
          <div className="col-md-8">
            <Card>
              <Card.Body>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={4}>
                    <b>Your full name</b> <br/>
                    <span className="text-muted">Required</span>
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control 
                      type="text" 
                      name="full_name" 
                      onChange={props.handleChange} 
                      className="p-4" 
                      required />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                  <Form.Label column sm={4}>
                    <b>What are you creating?</b> <br/>
                    <span className="text-muted">Required</span>
                  </Form.Label>
                  <Col sm={8}>
                    <Form.Control 
                      type="text" 
                      name="create"
                      onChange={props.handleChange} 
                      className="p-4" 
                      required />
                  </Col>
                </Form.Group>
                <fieldset>
                  <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={4}>
                      <b>Which sounds more correct ?</b>
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Check
                        type="radio"
                        label={`${props.user.username} is creating ${props.data.create}`}
                        onChange={props.handleChange}
                        value={`${props.user.username} is creating ${props.data.create}`}
                        name="creating"
                        id="creatingRadios1"
                        required
                      />
                      <Form.Check
                        type="radio"
                        label={`${props.user.username} are creating ${props.data.create}`}
                        onChange={props.handleChange}
                        name="creating"
                        id="creatingRadios2"
                        value={`${props.user.username} are creating ${props.data.create}`}
                        required
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
              </Card.Body>
            </Card>
            <Card className="mt-3 mb-5">
              <Card.Body>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={4}>
                    <b>Profile picture</b> <br/>
                    <span className="text-muted">Required</span>
                    <span className="text-muted d-block mt-1">This will appear on your Patreon page and in messages, lists, and search</span>
                  </Form.Label>
                  <Col sm={8}>

                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={4}>
                    <b>Cover image</b> <br/>
                    <span className="text-muted">Required</span>
                    <span className="text-muted d-block mt-1">
                      This will appear on your Patreon page. We recommend the image be at least 1200px wide.
                    </span>
                  </Form.Label>
                  <Col sm={8}>

                  </Col>
                </Form.Group>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Button variant="info" size="lg" type="submit" block>
              Save changes
            </Button>
            <Card className="mt-3">
              <Card.Body>
                <Card.Text>
                  <b>Learn More:</b>
                </Card.Text>
                <ul>
                  <li>
                    <a href="#membership">Membership 101: Best Practices</a>
                  </li>
                  <li>
                    <a href="#a">How to choose your business model</a>
                  </li>
                  <li>
                    <a href="#a">How to talk about Patreon to your audience</a>
                  </li>
                  <li>
                    <a href="#a">Knowing your worth as a creator</a>
                  </li>
                  <li>
                    <a href="#a">Cover photo best practices</a>
                  </li>
                  <li>
                    <a href="#a">Profile photo best practices</a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Form>
      
    </div>
  )
}


export default Dashboard
