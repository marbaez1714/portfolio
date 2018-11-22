import React, { Component } from 'react';
import { Grid, Row, Col, } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (

      <Grid className="App">
        <Row>
          <Col md={8} className="introduction">

            <Col md={12}>
              <h1>Welcome!</h1>
              <h2>My name is Mario!</h2>
              <h3>I'm a curios problem solver, devoted to finding new and innovative solutions that improve the lives of others. </h3>
            </Col>

          </Col>
          <Col md={4} className="projects">
            <h1>Projects</h1>

          </Col>
          <Col md={4} className="contactMe">
            <h1>Get in contact!</h1>
            <h1><i className="fas fa-phone"></i></h1>



          </Col>
          <Col md={8} className="resume">
            <h1>Summary and resume</h1>

          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
