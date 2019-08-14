import React, { Component } from 'react';
import './Card.css';

class Front extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let frontClass = [];
    frontClass.push("Front-container");
    if (this.props.show) {
        frontClass.push("blur");
    }
    return (
        <div className={frontClass.join(" ")}> 
            {this.props.children}
        </div>
    );
  }
}

export default Front;
