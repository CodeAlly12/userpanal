import React from 'react';
import "./home.css";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import Chart from "../../chart/Chart";
import { data } from "../../../data";
import WidgetL from '../../widgetL/WidgetL';
import WidgetX from '../../widgetX/WidgetX';


export default function Home() {
  return (
    <div className="home ">
        <FeaturedInfo/>
        <Chart data={data}title="USER ANALYTICS" grid dataKey="Users" 
        />
        <div className="widgets">
          <WidgetX/>
          <WidgetL/>
        </div>
    </div>
  );
}
