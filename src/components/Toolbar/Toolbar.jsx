

import React from "react";
import "./Toolbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell,faGlobe,faTools} from '@fortawesome/free-solid-svg-icons';



export default function Toolbar(){
  return (
    <div className="toolbar">
    <div className="toolbarWrapper">
    <div className="topLeft"><span className='logo'>USER PANEL</span></div>
    <div className='topRight'>
      <div className="toolbarIconContainer">
      <FontAwesomeIcon className="i" icon={faBell} /> 
        <span className="toolbarIconBadge">2

        </span>
      </div>
      <div className="toolbarIconContainer">
      <FontAwesomeIcon className="i" icon={faGlobe} /> 
        {/* <span className="toolbarIconBadge">En
  
        </span> */}
      </div>
      <div className="toolbarIconContainer">
      <FontAwesomeIcon className="i" icon={faTools} /> 
        {/* <span className="toolbarIconBadge">2

        </span> */}
      </div>
      <img src="images/work.jpg" alt=""  className="topAvatar"/>
    </div>
    </div>
    </div>
    
  );
}

