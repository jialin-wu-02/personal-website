import React, { Component } from 'react';
import './App.css';

import Title from "./Component/Title/Title"
import Project from "./Component/Project/Project"
import Arrow from './Component/Arrow/Arrow'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projectDisplay: false
    }
  }

  onTypingDone = () => {
    this.setState({
      projectDisplay: true
    })
  }

  render() {
    return (
      <div className="main">
        <div className="row">
          <Title onTypingDone={this.onTypingDone}/>
        </div>
        <div className="row">
          <Arrow show={this.state.projectDisplay}/>
        </div>
        <div className="row">
          {this.state.projectDisplay ? <Project /> : null }
        </div>
      </div>
    );
  }
}

export default App;
