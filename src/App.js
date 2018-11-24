import React, { Component } from 'react';
import Header from './components/header';
import Welcome from './components/welcome';
import Experience from './components/experience';
import Skills from './components/skills'
import Footer from './components/footer'
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
        <Footer />
      </div>
    );
  }
}

export default App;
