import React, { Component } from 'react'
import PatreonHello from '../assets/img/patreon-hero-illustration.png'
import PatreonPredictable from '../assets/img/patreon-predictablerevenue.png'
import PatreonConnection from '../assets/img/patreon-fanconnection.png'
import PatreonBenefits from '../assets/img/patreon-exclusivebenefits.png'
import PatreonRae from '../assets/img/issa-rae.png'
import Step1 from '../assets/img/step1.svg'
import Step2 from '../assets/img/step2.svg'
import Step3 from '../assets/img/step3-top.svg'
import Step3Bottom from '../assets/img/step3-bottom.svg'

export class Home extends Component {
  state = {
    linkVideoHover: 'red'
  }

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
    },
    backgroundVideoImage: {
      backgroundImage: 'url(https://c5.patreon.com/external/marketing/vertical_images/video-v4-issarae.jpg)',
      width: '100%',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    },
    videoImageLink: {
      display: 'block',
      padding: '5px',
      fontSize: '1.5rem',
      fontWeight: '700',
      color: 'black'
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
        <WhoUse getStyle={this.getStyle} />
        <HowDoes />
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

function WhoUse(props) {
  return (
    <div className="container mt-5 mb-5 pb-5">
      <div className="text-center pt-5 pb-5">
        <h1><b>Who uses Patreon</b></h1>
      </div>
      <div className="row">
        <div className="col-md-6" style={props.getStyle.backgroundVideoImage}></div>
        <div className="col-md-6">
          <a href="/" style={props.getStyle.videoImageLink}>Podcaster</a>
          <a href="/" style={props.getStyle.videoImageLink}>Video Creators</a>
          <a href="/" style={props.getStyle.videoImageLink}>Musicians</a>
          <a href="/" style={props.getStyle.videoImageLink}>Visual Artists</a>
          <a href="/" style={props.getStyle.videoImageLink}>Communities</a>
          <a href="/" style={props.getStyle.videoImageLink}>Writers & Journalists</a>
          <a href="/" style={props.getStyle.videoImageLink}>Creators-of-all-kinds</a>
        </div>
      </div>
    </div>
  )
}

function HowDoes(props) {
  return (
    <div style={{backgroundColor: 'whitesmoke'}} className="p-5">
      <div className="container">
        <div className="text-center pt-5">
          <h1>How does it work?</h1>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 mt-4">
              <p>Membership is a relationship between you and your most engaged fans 
                — the ones that choose to go a level deeper than just following you 
                on social media. They become paying patrons in exchange for exclusive 
                benefits you offer.
              </p>
            </div>
          </div>
        </div>
        <Step />
      </div>
    </div>
  )
}

function Step(props) {

  const stepStyle = {
    stepText: {
      padding: '40px',
      marginTop: '10px'
    }
  }

  function LeftStep(props) {
    return (
      <div className="row mt-4 mb-4">
        <div className="col-md-6 text-center">
          <img src={props.image} alt="step_1_image" style={{maxWidth: '100%'}}/>
          {props.image2 ? (
            <img src={props.image2} alt="second_image" />
          ) : (
            null
          )}
        </div>
        <div className="col-md-6">
          <div style={stepStyle.stepText}>
            {props.children}
          </div>
        </div>
      </div>
    )
  }

  function RightStep(props) {
    return (
      <div className="row mt-4 mb-4">
        <div className="col-md-6">
          <div style={stepStyle.stepText}>
            {props.children}
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src={props.image} alt="step_1_image" style={{maxWidth: '100%'}}/>
        </div>
      </div>
    )
  }

  return (
    <React.Fragment>
      <LeftStep image={Step1}>
        <React.Fragment>
          <p>STEP 1</p>
          <h2><b>Tell your fans you're launching on Patreon.</b></h2>
          <p>Reach out to fans on your social channels to find out more about 
            what kind of membership benefits they’d be interested in.
          </p>
        </React.Fragment>
      </LeftStep>
      <RightStep image={Step2}>
          <p>STEP  2</p>
          <h2><b>Set up your page and membership tiers, and launch!</b></h2>
          <p>Each tier has different benefits for different levels of engagement 
            with you. When you’re ready, launch your membership and tell your fans.
          </p>
      </RightStep>
      <LeftStep image={Step3} image2={Step3Bottom}>
        <React.Fragment>
          <p>STEP 3</p>
          <h2><b>Develop relationships by taking them along on the journey.</b></h2>
          <p>Share updates, deliver benefits, and build community. Keep up the momentum 
            by sharing on your social channels to bring more fans to Patreon.
          </p>
        </React.Fragment>
      </LeftStep>
    </React.Fragment>
  )
}

export default Home