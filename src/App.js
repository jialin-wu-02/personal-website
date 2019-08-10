import React, { Component } from 'react';
import './App.css';

import Title from "./Component/Title"

class App extends Component {

  constructor(props) {
    super(props);
  }

  projectMountHandler = (line, lineIdx) => {
    if (lineIdx == 7) {
      console.log("project");
    }
    if (lineIdx == 12) {
      console.log("scroll down");
    }
  }

  render() {
    return (
      <div className="main">
        <Title onLineTyped={this.projectMountHandler}/>
      </div>
    );
  }
}

export default App;
