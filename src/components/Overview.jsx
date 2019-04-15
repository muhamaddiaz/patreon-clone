import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { FaCommentDots } from 'react-icons/fa'
import { Modal, Button, Card } from 'react-bootstrap'

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`

const Recent = styled.div`
  color: grey;
  padding-top: 30px;
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
`

const PatreonButton = styled.button`
  padding: 10px 40px;
  border-radius: 20px;
  margin: 12px;
`

export class Overview extends Component {

  state = {
    show: false,
    post_title: '',
    post_body: '',
    posts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8888/patreon-clone-api/api/posts?username=${this.props.pathParam}`)
      .then(({data}) => {
        this.setState({
          posts: data.message
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleModal = () => {
    this.setState((state) => ({
      show: !state.show
    }))
  }

  handleChange = (e) => {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  handleCreatePost = ({post_title, post_body}, e) => {
    e.preventDefault()
    const id_user = this.props.user.id
    axios.post("http://localhost:8888/patreon-clone-api/api/posts", {
      id_user,
      post_title,
      post_body
    })
      .then(() => {
        axios.get(`http://localhost:8888/patreon-clone-api/api/posts?username=${this.props.pathParam}`)
          .then(({data}) => {
            this.setState({
              posts: data.message,
              show: false
            })
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleDeletePost = () => {
    
  }

  render() {
    const posts = this.state.posts.map((value) => {
      return (
        <React.Fragment>
          <Card className="mt-3" key={value.id}>
            <Card.Body>
              <Card.Title>{value.post_title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{value.created_at}</Card.Subtitle>
              <Card.Text>
                {value.post_body}
              </Card.Text>
              <Card.Link href={`#post${value.id}`} data-toggle="collapse">
                <FaCommentDots />
                &nbsp; comments
              </Card.Link>
              <Card.Link href={`#action${value.id}`} data-toggle="modal">action</Card.Link>
              <div id={`post${value.id}`} className="collapse">
                hello {value.id}
              </div>
            </Card.Body>
          </Card>

          <div className="modal" id={`action${value.id}`}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Action</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href={`#updatepost${value.id}`}>Update Post</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href={`#deletepost${value.id}`}>Delete Post</a>
                    </li>
                  </ul>
                  <div className="tab-content pt-4">
                    <div className="tab-pane container active" id={`updatepost${value.id}`}>
                      <form action="">
                        <div className="form-group">
                          <label htmlFor="Title" className="sr-only">Title</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            onChange={this.handleChange} 
                            name="post_title" 
                            placeholder="Post Title"
                            value={value.post_title}/>
                        </div>
                        <div className="form-group">
                          <textarea 
                            name="post_body" 
                            placeholder="Post Body" 
                            className="form-control" 
                            onChange={this.handleChange}>
                            {value.post_body}
                          </textarea>
                        </div>
                        <div className="form-group">
                          <Button variant="danger" type="submit">
                            Update
                          </Button>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane container fade" id={`deletepost${value.id}`}>
                      <Button variant="danger" type="submit">
                        Delete Post
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    })
    return (
      <Wrapper>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <p className="card-title">
                  <b>0</b> 
                  <br /> 
                  patrons
                </p>
                <p className="card-title">
                  <b>$0</b> 
                  <br /> 
                  per month . public
                </p>
                <button className="text-danger btn">Share</button>
              </div>
            </div>
            <a href="/edit/tiers" className="card text-center mt-3">
              <div className="card-body">
                <h5 style={{color: 'black', margin: 0}}>Add Goals</h5>
              </div>
            </a>
          </div>
          <div className="col-md-6" style={{opacity: '1'}}>
            <Recent>
              <h6>Recent post by {this.props.pathParam}</h6>
            </Recent>
            {
              this.state.posts.length > 0 ? (
                posts
              ) : (
                <div className="card">
                  <div className="card-body text-center">
                    <h6 style={{color: 'grey'}}>You haven't posted anything yet!</h6>
                    {
                      this.props.user.username === this.props.pathParam &&
                      <PatreonButton 
                        className="btn btn-danger" 
                        onClick={this.handleModal}>
                        Make your first post
                      </PatreonButton>
                    }
                  </div>
                </div>
              )
            }
            
          </div>
          <div className="col-md-3">
            <a href="/edit/tiers" className="card text-center">
              <div className="card-body">
                <h5 style={{color: 'black', margin: 0}}>Add Tiers</h5>
              </div>
            </a>
          </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="" method="POST" onSubmit={this.handleCreatePost.bind(this, this.state)}>
              <div className="form-group">
                <label htmlFor="Title" className="sr-only">Title</label>
                <input type="text" className="form-control" onChange={this.handleChange} name="post_title" placeholder="Post Title"/>
              </div>
              <div className="form-group">
                <textarea name="post_body" placeholder="Post Body" className="form-control" onChange={this.handleChange}>
                </textarea>
              </div>
              <div className="form-group">
                <Button variant="danger" type="submit">
                  Create
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </Wrapper>
    )
  }
}

export default Overview
