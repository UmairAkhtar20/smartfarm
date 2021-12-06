import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Topbar from './Topbar/Topbar'
import "./Dashboard.css"
import Dashboardcontainer from '../pages/Dashboardcontainer/Dashboardcontainer'
import { BrowserRouter as Router, Routes, Route, Link, Outlet,useLocation } from "react-router-dom";
import LiveStock from "../pages/Livestock/Livestock";

function Dashboard() {
    let location = useLocation();
    console.log(location.pathname);
    return (
        
        <div >
           <Topbar/>
           <div className="container">
               <Sidebar />
               {location.pathname === "/dashboard" ? <Dashboardcontainer/> : "" }
              
              <Outlet/>
           </div>
        </div>
    )
}

export default Dashboard
