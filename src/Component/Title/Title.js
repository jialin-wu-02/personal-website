import React, { Component } from 'react';
import './Title.css';

import Typist from 'react-typist';

class Title extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="title-container">
            <Typist startDelay={1900}
            onLineTyped={this.props.onLineTyped} 
            cursor={{hideWhenDone: true}}>
            Hwllo, I am
            <Typist.Backspace count={10} />
            ello, I am Jialin Wu.
            <Typist.Delay ms={1800}/>
            <br></br>
            <br></br>
            I am a web developer 🖥 and a student 👨‍🎓 at berkeley.
            <Typist.Delay ms={1800} />
            <br></br>
            &nbsp;
            <Typist.Delay ms={200} />
            <br></br>
            Here, you can find projects 🗂 that I have been working on and things  ✏️ that I have written.
            <Typist.Delay ms={1800} />
            <br></br>
            <br></br>
            To know more about me, scroll down. ⬇️
            <Typist.Delay ms={1800} />
            <br></br>
            <br></br>
            Thanks for visiting.
            </Typist>
        </div>
      </div>
    );
  }
}

export default Title;
