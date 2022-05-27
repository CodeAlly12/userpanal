import React from 'react';
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAddressBook, faArrowTrendUp,  faComments, faDollarSign, faDollyBox,  faFileLines,  faList,faMessage,faSuitcase,faUser} from '@fortawesome/free-solid-svg-icons';
import { faBarChart, faEnvelope } from '@fortawesome/free-regular-svg-icons';



export default function Sidebar() {
  return (
    <div className="sidebar"> 
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className ="sidebarList">
                <li className="sidebarListItems active">
                <FontAwesomeIcon className="sidebarIcon" icon={faList} /> Home </li>
                <li className="sidebarListItems">
                <FontAwesomeIcon className="sidebarIcon" icon={faBarChart} />Analytic</li> 
                <li className="sidebarListItems">
                <FontAwesomeIcon className="sidebarIcon" icon={faArrowTrendUp} /> Sales</li>
            </ul>
        
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className ="sidebarList">
                <li className="sidebarListItems ">
                <FontAwesomeIcon className="sidebarIcon" icon={faUser} /> users</li>
                <li className="sidebarListItems">
                <FontAwesomeIcon className="sidebarIcon" icon={faDollyBox} />products </li> 
                <li className="sidebarListItems">
                <FontAwesomeIcon className="sidebarIcon" icon={faDollarSign} /> Transactions </li>
                <li className="sidebarListItems">
                <FontAwesomeIcon className="sidebarIcon" icon={faFileLines} />Reports </li>
            </ul>
        
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className ="sidebarList">
                <li className="sidebarListItems ">
                <FontAwesomeIcon className="sidebarIcon" icon={faEnvelope} />Mail</li>
                <li className="sidebarListItems">
                <FontAwesomeIcon className="sidebarIcon" icon={faComments} />Feedback</li> 
                <li className="sidebarListItems">
                <FontAwesomeIcon className="sidebarIcon" icon={faMessage} />Messages</li>
            </ul>
        
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className ="sidebarList">
                <li className="sidebarListItems ">
                <FontAwesomeIcon className="sidebarIcon" icon={faSuitcase} /> Manage </li>
                <li className="sidebarListItems">
                <FontAwesomeIcon className="sidebarIcon" icon={faBarChart} />Analytic</li> 
                <li className="sidebarListItems">
                <FontAwesomeIcon className="sidebarIcon" icon={faAddressBook} /> Reports</li>
            </ul>
        
        </div>
        
        
    </div>


    </div>
  )
}
