import React, { useState, useEffect } from 'react';
import Sidebar from './Component/Sidebar'
import Body from './Component/Thumbnail'

import About from './Page/About/About'
import Attribute from './Page/Attribute/Attribute'
import Culture from './Page/Culture'
import Craft from './Page/Craft/Craft'
import Knowledge from './Page/Knowledge'

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  
const App = (props) => {
  
  const trackMouseMovement = (e) => {
    let cursor = document.querySelector('#cursor');
    cursor.style.left = e.screenX + "px";
    cursor.style.top = (e.screenY - 102 + window.scrollY) + "px";
  }

  // // Trying to make cursor transition smoother while scrolling, but failed.
  // useEffect(() => {
  //   window.addEventListener('scroll', (event) => {
  //     let cursor = document.querySelector('#cursor');
  //     console.log("original:", cursor.style.top)
  //     console.log(parseInt(cursor.style.top.slice(0, -2)) + window.scrollY)
  //     cursor.style.top = (parseInt(cursor.style.top.slice(0, -2)) + window.scrollY) + "px";
  //   });
  // }, [])

  return (
    <div className="App__mouseplayground" onMouseMove={trackMouseMovement}>
      <div className="cursor" id="cursor">  </div>
      <Router>
        <div className="App__wrapper">
          <div className="App__container__left">
            <Sidebar />
          </div>
          <div className="App__container__right">
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/craft">
                <Craft />
              </Route>
              <Route path="/culture">
                <Culture />
              </Route>
              <Route path="/knowledge">
                <Knowledge />
              </Route>
              <Route path="/attribute">
                <Attribute />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App;