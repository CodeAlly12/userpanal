import React from 'react';
import "./widgetX.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function WidgetX() {
  return (
    <div className="WidgetX">
        <span className='WidgetXTitle'>New Users</span>
        <ul className='WidgetXList'>
            <li className='WidgetXListItem'>
                <img src="images/user1.jpeg" alt="" className="widgetXImg"/>
                <div className='WidgetXUser' >
                    <span className='WidgetXUsername'>Carol Clod
                    </span>
                    <span className='WidgetXJobTitle'>Sales Rep
                    </span>
                </div>
                <button className='WidgetXButton'>
                <FontAwesomeIcon className="widgetXButtonIcon" icon={faEye} /> Active
                </button>
            </li>
            <li className='WidgetXListItem'>
                <img src="images/user2.jpeg" alt="" className="widgetXImg"/>
                <div className='WidgetXUser' >
                    <span className='WidgetXUsername'>James Kevin
                    </span>
                    <span className='WidgetXJobTitle'>Designer
                    </span>
                </div>
                <button className='WidgetXButton'>
                <FontAwesomeIcon className="widgetXButtonIcon" icon={faEye} /> Active
                </button>
            </li>
            <li className='WidgetXListItem'>
                <img src="images/user3.jpeg" alt="" className="widgetXImg"/>
                <div className='WidgetXUser' >
                    <span className='WidgetXUsername'> Sofia Jean
                    </span>
                    <span className='WidgetXJobTitle'> social worker
                    </span>
                </div>
                <button className='WidgetXButton'>
                <FontAwesomeIcon className="widgetXButtonIcon" icon={faEye} /> Active
                </button>
            </li>
            <li className='WidgetXListItem'>
                <img src="images/user4.jpeg" alt="" className="widgetXImg"/>
                <div className='WidgetXUser' >
                    <span className='WidgetXUsername'>Andrew Cliff
                    </span>
                    <span className='WidgetXJobTitle'>Retired
                    </span>
                </div>
                <button className='WidgetXButton'>
                <FontAwesomeIcon className="widgetXButtonIcon" icon={faEye} /> Active
                </button>
            </li>
            <li className='WidgetXListItem'>
                <img src="images/user5.jpeg" alt="" className="widgetXImg"/>
                <div className='WidgetXUser' >
                    <span className='WidgetXUsername'>Sasha Gold
                    </span>
                    <span className='WidgetXJobTitle'>Gym instructor
                    </span>
                </div>
                <button className='WidgetXButton'>
                <FontAwesomeIcon className="widgetXButtonIcon" icon={faEye} /> Active
                </button>
            </li>

        </ul>
    </div>
  )
}
