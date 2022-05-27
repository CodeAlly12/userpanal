import Toolbar from "./components/Toolbar/Toolbar";
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./components/pages/home/Home";


function App() { 
    return ( <div > <Toolbar/>
    <div className= "container">
        <Sidebar/>
        <Home/>
    
        
    </div>
   
    </div>);
  
}

export default App;
