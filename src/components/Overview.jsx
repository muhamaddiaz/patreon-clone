import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { FaCommentDots } from 'react-icons/fa'
import { Modal, Button, Card, InputGroup, FormControl } from 'react-bootstrap'

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
    posts: [],
    comments: [],
    comment_body: ''
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

  handleChangePost = (e) => {
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

  handleUpdatePost = (id, e) => {
    e.preventDefault()
    const {
      post_title,
      post_body
    } = this.state
    axios.put(`http://localhost:8888/patreon-clone-api/api/posts/${id}`, {
      post_title,
      post_body
    }).then(() => {
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

  handleDeletePost = (id, e) => {
    if(window.confirm("Are you sure? ")) {
      axios.delete(`http://localhost:8888/patreon-clone-api/api/posts/${id}`)
        .then(() => {
          this.setState(({posts}) => ({
            posts: posts.filter((value) => (
              id !== value.id
            ))
          }))
        })
    }
  }

  handleFetchComments = (id, e) => {
    axios.get(`http://localhost:8888/patreon-clone-api/api/comments/?post=${id}`)
      .then(({data}) => {
        this.setState({
          comments: data.message
        })
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          comments: []
        })
      })
  }

  handleCreateComment = (id, e) => {
    e.preventDefault()
    const id_post = id
    const id_user = this.props.user.id
    const comment_body = this.state.comment_body
    axios.post(`http://localhost:8888/patreon-clone-api/api/comments/`, {
      id_post,
      id_user,
      comment_body
    })
      .then(({data}) => {
        this.setState(({comments}) => ({
          comments: [...comments, {id: data.message, id_post, id_user, comment_body}]
        }))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleDeleteComment = (id, e) => {
    if(window.confirm("Are you sure? ")) {
      axios.delete(`http://localhost:8888/patreon-clone-api/api/comments/${id}`)
        .then(() => {
          this.setState(({comments}) => ({
            comments: comments.filter((value) => (
              id !== value.id
            ))
          }))
        })
    }
  }

  render() {
    const posts = this.state.posts.map((value) => {
      return (
        <React.Fragment key={value.id}>
          <Card className="mt-3" >
            <Card.Body>
              <Card.Title>{value.post_title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{value.created_at}</Card.Subtitle>
              <Card.Text>
                {value.post_body}
              </Card.Text>
              <Card.Link 
                href={`#post${value.id}`} 
                data-toggle="collapse" 
                onClick={this.handleFetchComments.bind(this, value.id)}>
                <FaCommentDots />
                &nbsp; comments
              </Card.Link>
              {
                this.props.user.username === this.props.pathParam &&
                <Card.Link href={`#action${value.id}`} data-toggle="modal">action</Card.Link>
              }
              
              <div id={`post${value.id}`} className="collapse mt-3" data-parent="#accordion">
                {
                  this.state.comments.length > 0 ? (
                    this.state.comments.map((v) => (
                      <Card key={v.id} className="mt-2">
                        <Card.Body>
                          <Card.Text>
                            {v.comment_body}
                          </Card.Text>
                        </Card.Body>
                        {
                          this.props.user.id === v.id_user &&
                          <Card.Footer>
                            <Card.Link 
                              href="#" 
                              className="text-danger" 
                              onClick={this.handleDeleteComment.bind(this, v.id)}>
                              Delete Comment
                            </Card.Link>
                          </Card.Footer>
                        }
                      </Card>
                    ))
                  ) : (
                    <p>no comments yet</p>
                  )
                }
                
                <form className="mt-2" action="" method="POST" onSubmit={this.handleCreateComment.bind(this, value.id)}>
                  <InputGroup className="mb-3 mt-5">
                    <FormControl
                      placeholder="Comment on this post"
                      aria-label="Comment on this post"
                      aria-describedby="basic-addon2"
                      onChange={this.handleChangePost}
                      name="comment_body"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-danger" type="submit">
                        <FaCommentDots />
                        &nbsp; comment
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </form>
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
                      <form action="" method="POST" onSubmit={this.handleUpdatePost.bind(this, value.id)}>
                        <div className="form-group">
                          <label htmlFor="Title" className="sr-only">Title</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            onChange={this.handleChangePost} 
                            name="post_title" 
                            placeholder="Post Title"
                            required/>
                        </div>
                        <div className="form-group">
                          <textarea 
                            name="post_body" 
                            placeholder="Post Body" 
                            className="form-control" 
                            onChange={this.handleChangePost}
                            required>
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
                      <Button 
                        variant="danger" 
                        type="submit" 
                        data-dismiss="modal"
                        onClick={this.handleDeletePost.bind(this, value.id)}>
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
                <div id="accordion">
                  {posts}
                </div>
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
                <textarea name="post_body" placeholder="Post Body" className="form-control" onChange={this.handleChangePost}>
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
