import React, { Component } from 'react';
import './Project.css';

import Card from '../Card/Card'

import admin from './img/admin.png'
import dress from './img/dress.png'
import library from './img/library.png'
import weather from './img/weather.png'
import piano from './img/piano.png'
import react_logo from './img/react_logo.png'

class Project extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: null
    }
  }

  onMouseEnter = (id) => {
    this.setState({
      show: id
    })
    console.log("show");
  }

  onMouseLeave = (id) => {
    this.setState({
      show: null
    })
    console.log("not show");
  }

  render() {
    return (
      <div className="project-container"> 
        <div className="row">
          <h2> My Projects </h2>
        </div>
        <div className="row">
          <Card>
            <Card.Front show={this.state.show == 0}>
              <img alt="" src={admin}/>
              <h3> Admin Page</h3>
            </Card.Front>
            <Card.Back               
              onMouseEnter={() => this.onMouseEnter(0)} 
              onMouseLeave={() => this.onMouseLeave(0)}>
              <p> La Promesse's internal admin page built by React, Redux, and Express. </p>
            </Card.Back>
          </Card>

          <Card>
          <Card.Front show={this.state.show == 1}>
            <img alt="" src={dress} />
             <h3> Maison-Autelier </h3>
          </Card.Front>
          <Card.Back               
              onMouseEnter={() => this.onMouseEnter(1)} 
              onMouseLeave={() => this.onMouseLeave(1)}>
              <p> A domestic violence prevention web app that is disguised as a fashion website. </p>
            </Card.Back>
          </Card>

          <Card>
          <Card.Front show={this.state.show == 2}>
            <img alt="" src={library}  />
             <h3> Project-Clio </h3>
          </Card.Front>
          <Card.Back       
              style={{
                padding: "62px 20px"
              }}        
              onMouseEnter={() => this.onMouseEnter(2)} 
              onMouseLeave={() => this.onMouseLeave(2)}>
              <p> Personal React UI Library </p>
            </Card.Back>
          </Card>
        </div>

        <div className="row">
        <Card>
        <Card.Front show={this.state.show == 3}>
        <img alt="" src={weather} />
           <h3> Weather Forecast </h3>
        </Card.Front>
        <Card.Back        
          onMouseEnter={() => this.onMouseEnter(3)} 
          onMouseLeave={() => this.onMouseLeave(3)}>
          <p> A web app that use D3 to visualize weather data for a given location. </p>
        </Card.Back>
        </Card>
        <Card>
        <Card.Front show={this.state.show == 4}>
        <img alt="" src={piano}  />
           <h3> Pianoo </h3>
        </Card.Front>
        <Card.Back       
          style={{
            padding: "62px 20px"
          }}          
          onMouseEnter={() => this.onMouseEnter(4)} 
          onMouseLeave={() => this.onMouseLeave(4)}>
          <p> An online piano simulator built by React. </p>
        </Card.Back>
        </Card>

        <Card>
        <Card.Front show={this.state.show == 5}>
          <img alt="" src={react_logo} />
          <h3> React China </h3>
        </Card.Front>
        <Card.Back               
          style={{
            padding: "62px 20px"
          }}  
          onMouseEnter={() => this.onMouseEnter(5)} 
          onMouseLeave={() => this.onMouseLeave(5)}>
          <p> Translation for React China. </p>
        </Card.Back>
        </Card>
        </div>
      </div>
    );
  }
}

export default Project;
