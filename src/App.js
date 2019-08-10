import React, { Component } from 'react';
import './App.css';

import Typist from 'react-typist';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container">
          <Typist>
            &nbsp;
            <Typist.Delay ms={2700} />
            Hillo
            <Typist.Backspace count={5} />
            Hello, I am Jialin Wu.
            <Typist.Backspace count={22} delay={1800} />
            I am a web developer and a student at berkeley.
          </Typist>
        </div>
      </div>
    );
  }
}

export default App;
