import React, { Component } from 'react';
import './Project.css';

import Card from '../Card/Card'

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
            <img src="/img/admin.png"/>
            <h3> Admin Page</h3>
          </Card>
          <Card>
            <img src="/img/dress.png" />
             <h3> Maison-Autelier </h3>
          </Card>
          <Card>
            <img src="/img/library.png" />
             <h3> Project-Clio </h3>
          </Card>
        </div>
        <div className="row">
        <Card>
          <img src="/img/weather.png" />
           <h3> Weather Forecast </h3>
        </Card>
        <Card>
        <img src="/img/piano.png"  />
           <h3> Pianoo </h3>
        </Card>
        <Card>
        <img src="/img/react_logo.png" />
           <h3> React China </h3>
        </Card>
        </div>
      </div>
    );
  }
}

export default Project;
