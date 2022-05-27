import React from 'react';
import "./featuredInfo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function FeaturedInfo() {
  return (
      
    <div className="featured">
        <div className='featuredItem'>
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4 <FontAwesomeIcon className="featuredIcon negative" icon={faArrowDown} /> 
            </span>
        </div>
        <span className="featuredSub">compared to last month</span>
    </div>   
     <div className='featuredItem'>
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate">-1.4 <FontAwesomeIcon className="featuredIcon negative" icon={faArrowDown} /> 
            </span>
        </div>
        <span className="featuredSub">compared to last month</span>
    </div>   
    <div className='featuredItem'>
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">+2.4 <FontAwesomeIcon className="featuredIcon" icon={faArrowUp} /> 
            </span>
        </div>
        <span className="featuredSub">compared to last month</span>
    </div>   
    </div>
  )
}
