import React, { Component } from 'react';
import './Card.css';
import Front from './Front.js';
import Back from './Back.js';

class Card extends Component {

  constructor(props) {
    super(props);
  }

  blur = () => {
    
  }

  render() {
    return (
        <div     
        onMouseEnter={this.blur}
        onMouseLeave={this.unblur}
        className="Card-container"> 
            {this.props.children}
        </div>
    );
  }
}

Card.Front = Front;
Card.Back = Back;

export default Card;
