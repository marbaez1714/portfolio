import React, { Component } from 'react';
import { Grid, Row, Col, } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (

      <Grid className="App">
        <Row>
          <Col md={8} className="introduction">
            <h1>Hello</h1>
          </Col>
          <Col md={4} className="projects">
            <h1>Projects</h1>

          </Col>
          <Col md={4} className="contactMe">
            <h1>How to contact me</h1>


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
