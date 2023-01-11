import './App.css'
import React, { useState } from 'react';

import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/SideBar/SideBar';
import Customers from './components/Customers/CustomerView'
import Orders from './components/Orders/Orders';
import Analysis from './components/Analytics/Analysis';

import CarView from "./components/Cars/CarsList"
import Driver from "./components/Drivers/Drivers"
import ViewTrucks from "./components/Trucks/TrucksList"

function App() {
  const [tab, setTab] = useState("Dashboard")
  
  const conditionalRender = () => {
    if (tab === "Dasgboard") {
      return<MainDash/>
    }
    else if (tab === "Customers") {
      console.log("hello")
      return<Customers/>
    }
    else if (tab === "Drivers") {
       
      return<Driver/>
    }
    else if (tab==="Orders") {
      
      return<Orders/>
    }
    else if (tab==="Cars") {
      
      return<CarView/>
    }
    else if (tab === "Trucks") {
      
      return<ViewTrucks/>
    }
    else if (tab === "Analytics") {
      
      return<Analysis/>
    }
    else {
      return<MainDash/>
    }
  }

  return (
    <div className="App">
      <div className="AppGlass">

        <Sidebar tab={tab} setTab={setTab} />
        <div>{conditionalRender()}</div>
      </div>
    </div>
  );
}

export default App;
