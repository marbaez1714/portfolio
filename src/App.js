import React, { Component } from 'react';
import Header from './components/header';
import Welcome from './components/welcome';
import Experience from './components/experience';
import Skills from './components/skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Welcome />
        <Experience id="experience" />
        <Skills id="skills" />
      </div>
    );
  }
}

export default App;
