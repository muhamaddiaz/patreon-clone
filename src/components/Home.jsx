import React, { Component } from 'react'
import PatreonHello from '../assets/img/patreon-hero-illustration.png'
import PatreonPredictable from '../assets/img/patreon-predictablerevenue.png'
import PatreonConnection from '../assets/img/patreon-fanconnection.png'
import PatreonBenefits from '../assets/img/patreon-exclusivebenefits.png'
import PatreonRae from '../assets/img/issa-rae.png'

export class Home extends Component {
  getStyle = {
    fontHello: {
      fontWeight: '900',
      fontSize: '3rem'
    },
    fontParagraph: {
      fontSize: '1.4rem',
      color: 'grey'
    },
    helloButton: {
      borderRadius: '20px',
      padding: '10px 20px'
    },
    fontCreator: {
      fontWeight: '700',
      fontSize: '2.5rem'
    },
    cardSmoke: {
      backgroundColor: 'whitesmoke',
      border: 'none'
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container pt-3">
          <div className="row pt-5">
            <div className="col-md-6"><br/>
              <SectionHello getStyle={this.getStyle}/>
            </div>
            <div className="col-md-6">
              <img src={PatreonHello} alt="imagehello" style={{maxWidth: '100%'}}/>
            </div>
          </div>
          <div className="text-center mt-5">
            <h2 style={this.getStyle.fontCreator}>In the words or our creators</h2>
          </div>
          <CreatorCards style={this.getStyle} />
        </div>
        <MembershipBenefits />
      </React.Fragment>
    )
  }
}

function SectionHello(props) {
  return (
    <React.Fragment>
      <h2 style={props.getStyle.fontHello}>CREATE ON YOUR OWN TERMS</h2>
      <p style={props.getStyle.fontParagraph} className="mt-5">
        Start a membership business to develop a direct relationship with your 
        biggest fans and generate predictable, recurring revenue from your creative work.
      </p>
      <button className="btn btn-danger mt-2" style={props.getStyle.helloButton}>Get Started</button>
    </React.Fragment>
  )
}

function CreatorCards(props) {
  return (
    <React.Fragment>
      <div className="card-deck mt-5 mb-5">
        <Card style={props.style} />
        <Card style={props.style} />
        <Card style={props.style} />
      </div>
    </React.Fragment>
  )
}

function Card(props) {
  return (
    <div className="card">
      <div className="card-body" style={props.style.cardSmoke}>
        <p className="card-text p-3">
          "Membership is a relationship between you and your most engaged fans — 
          the ones that choose to go a level deeper than just following you on 
          social media. They become paying patrons in exchange for exclusive benefits you offer."
        </p>
      </div>
      <div className="card-footer" style={props.style.cardSmoke}>
        <div className="card-text p-3">
          <img src={PatreonRae} alt="Rae" style={{width: '15%'}}/> &nbsp;
          <strong>Issa Belle</strong>
          , Video Creator
        </div>
      </div>
    </div>
  )
}

function MembershipBenefits() {
  return (
    <div style={{backgroundColor: 'whitesmoke'}}>
      <div className="container mt-3 p-5">
        <div className="text-center mt-5 mb-5">
          <h1>Why Membership?</h1>
          <p>
            Patreon is a creator-founded company, helping creators build membership <br/>
            businesses that empower them to create on their own terms.
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 p-4 text-center">
            <img src={PatreonPredictable} alt=""/>
            <div className="text-center">
              <h4><b>Predictable Revenue</b></h4>
              <p>Generate predictable, recurring revenue from your work through fans who pay you monthly</p>
            </div>
          </div>
          <div className="col-md-4 p-4 text-center">
            <img src={PatreonConnection} alt=""/>
            <div className="text-center">
              <h4><b>Fan Connection</b></h4>
              <p>Connect with your biggest fans directly, free from the ads and algorithms that drive social media</p>
            </div>
          </div>
          <div className="col-md-4 p-4 text-center">
            <img src={PatreonBenefits} alt=""/>
            <div className="text-center">
              <h4><b>Exclusive Benefits</b></h4>
              <p>Give your fans what they want: a peek behind the scenes, extras they can’t get elsewhere, and the pride of fueling what you do</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home