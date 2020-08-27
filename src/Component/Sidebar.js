import React from 'react';
import {
    Link
  } from "react-router-dom";

const Sidebar = (props) => (
    <div>
        <div className="Sidebar__container">
            <div className="Sidebar__item"> <Link className="Sidebar__item__link" to="/"> About </Link> </div>
            <div className="Sidebar__item"> <Link className="Sidebar__item__link" to="/craft"> Craft </Link>  </div>
            <div className="Sidebar__item"> <Link className="Sidebar__item__link" to="/culture"> Culture </Link>  </div>
            <div className="Sidebar__item"> <Link className="Sidebar__item__link" to="/knowledge"> Knowledge </Link> </div>
            {/* <div className="Sidebar__item"> <Link className="Sidebar__item__link" to="/attribute"> Attribute </Link> </div> */}
        </div>
    </div>
)

export default Sidebar;