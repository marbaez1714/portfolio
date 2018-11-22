import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import Pipe from './images/pipe.svg';
import './App.css';

function AppHeader(props) {
  return (
    <Col xs={12} md={12} className="header">
      <Col xs={12} md={6} className="header-link-title">
        <h2 style={{ fontWeight: '800' }}>Mar.io</h2>
      </Col>
      <Col xs={4} md={2} className="header-link">
        <h3 style={{ fontWeight: '800' }}>About</h3>
      </Col>
      <Col xs={4} md={2} className="header-link">
        <h3 style={{ fontWeight: '800' }}>Projects</h3>
      </Col>
      <Col xs={4} md={2} className="header-link">
        <h3 style={{ fontWeight: '800' }}>Contact</h3>
      </Col>
    </Col>

  )

}



class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Grid >
          <Col md={4} mdOffset={4} className="itsMe">
            <h1 style={{ fontSize: "5vh", fontWeight: '800' }}>It's me! Mario!</h1>
            <h3>
              I’m a passionate learner devoted to using technology to improve the lives of others.
            </h3>
            <h3>Learn More!</h3>
          </Col>
          <img src={Pipe} className="pipeImage" />
        </Grid >
      </div>

    );
  }
}

export default App;
