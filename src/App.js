import React, { Component } from 'react';
import './App.css';

import Title from "./Component/Title/Title"
import Project from "./Component/Project/Project"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projectDisplay: false
    }
  }

  projectMountHandler = (line, lineIdx) => {
    if (lineIdx == 7) {
      console.log("project");
      this.setState({
        projectDisplay: true
      })
    }
    if (lineIdx == 12) {
      console.log("scroll down");
    }
  }

  render() {
    return (
      <div className="main">
        <Title onLineTyped={this.projectMountHandler}/>
        {this.state.projectDisplay ? <Project /> : <div className="empty-container"></div>}
      </div>
    );
  }
}

export default App;
