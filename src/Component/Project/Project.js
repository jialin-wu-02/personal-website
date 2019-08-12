import React, { Component } from 'react';
import './Project.css';

import Card from '../Card/Card'

import admin from '../../Asset/img/admin.png'
import dress from '../../Asset/img/dress.png'
import library from '../../Asset/img/library.png'
import weather from '../../Asset/img/weather.png'
import piano from '../../Asset/img/piano.png'
import react_logo from '../../Asset/img/react_logo.png'



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
            <img src={admin}/>
            <h3> Admin Page</h3>
          </Card>
          <Card>
            <img src={dress}/>
             <h3> Maison-Autelier </h3>
          </Card>
          <Card>
            <img src={library}/>
             <h3> Project-Clio </h3>
          </Card>
        </div>
        <div className="row">
        <Card>
          <img src={weather}/>
           <h3> Weather Forecast </h3>
        </Card>
        <Card>
        <img src={piano}/>
           <h3> Pianoo </h3>
        </Card>
        <Card>
        <img src={react_logo} />
           <h3> React China </h3>
        </Card>
        </div>
      </div>
    );
  }
}

export default Project;
