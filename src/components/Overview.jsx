import React, { Component } from 'react'
import styled from 'styled-components'

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
  render() {
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
          <div className="col-md-6" style={{opacity: '.4'}}>
            <Recent>
              <h6>Recent post by superduperdiaz</h6>
            </Recent>
            <div className="card">
              <div className="card-body text-center">
                <h6 style={{color: 'grey'}}>You haven't posted anything yet!</h6>
                <PatreonButton className="btn btn-danger">Make your first post</PatreonButton>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <a href="/edit/tiers" className="card text-center">
              <div className="card-body">
                <h5 style={{color: 'black', margin: 0}}>Add Tiers</h5>
              </div>
            </a>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default Overview
