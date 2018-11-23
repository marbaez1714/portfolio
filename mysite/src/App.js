import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/header';
import Welcome from './components/welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
      </div>
    );
  }
}

export default App;
