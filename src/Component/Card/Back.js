import React, { Component } from 'react';
import './Card.css';

class Back extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div 
        style={this.props.style}
        onMouseEnter={this.props.onMouseEnter} 
        onMouseLeave={this.props.onMouseLeave} 
        className="Back-container"> 
            {this.props.children}
        </div>
    );
  }
}

export default Back;
