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
    // this.ProjectClasses = ['project-container'];
    // if (props.show) {
    //     this.ProjectClasses.push("show")
    // }
  }

  render() {
    return (
      <div className="project-container"> 
        <div className="row">
          <h2> My Projects </h2>
        </div>
        <div className="row">
          <Card>
            <img alt="picture for project" src={admin}/>
            <h3> Admin Page</h3>
          </Card>
          <Card>
            <img alt="picture for project" src={dress} />
             <h3> Maison-Autelier </h3>
          </Card>
          <Card>
            <img alt="picture for project" src={library}  />
             <h3> Project-Clio </h3>
          </Card>
        </div>
        <div className="row">
        <Card>
          <img alt="picture for project" src={weather} />
           <h3> Weather Forecast </h3>
        </Card>
        <Card>
        <img alt="picture for project" src={piano}  />
           <h3> Pianoo </h3>
        </Card>
        <Card>
        <img alt="picture for project" src={react_logo} />
           <h3> React China </h3>
        </Card>
        </div>
      </div>
    );
  }
}

export default Project;
