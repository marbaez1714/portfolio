import React, { Component } from 'react';
import Header from './components/header';
import Welcome from './components/welcome';
import Experience from './components/experience';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import Block from './images/questionBlock.svg';
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsState: {
        JavaScript: Block,
        React: Block,
        Redux: Block,
        Git: Block,
        Nodejs: Block,
        HTML: Block,
        CSS: Block,
        SASS: Block,
        Jest: Block,
        Python: Block,
        SolidWorks: Block,
        AutoCAD: Block,
      }
    }

    this.removeBlock = this.removeBlock.bind(this);
  }

  removeBlock(skill, logo) {
    let currentState = this.state.skillsState;
    currentState[skill] = logo;
    this.setState({ skillsState: currentState })

  }

  render() {
    return (

      <div className="App">
        {ReactGA.initialize('UA-130106600-1')}
        <Header />
        <Welcome />
        <Experience id="experience" />
        <Skills id="skills" imageState={this.state.skillsState} changeImage={this.removeBlock} />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
