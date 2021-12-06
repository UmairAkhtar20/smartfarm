

import React, { useEffect } from 'react';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
  
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
import LiveStock from "./pages/Livestock/Livestock.jsx";
import Finance from "./pages/Finance/Finance.jsx";
import Genetics from "./pages/Genetics/Genetics.jsx";
import Group from "./pages/GroupManagment/Group.jsx";
import Milking from "./pages/Milking/Milking.jsx";
import Planning from "./pages/Planning/Planning.jsx";
import Reporting from "./pages/Reporting/Reporting.jsx";
import Reproduction from "./pages/Reproduction/Reproduction.jsx";
import Events from "./pages/Sesssions-Events/Events.jsx";
import Task from "./pages/TaskManager/Task.jsx";
import Treatment from "./pages/Treatment/Treatment.jsx";
import Weather from "./pages/Weather/Weather.jsx";
import Feed from "./pages/FeedManagement/Feed.jsx";
import Farm from "./pages/FarmSetup/Farm.jsx";
import Animal from "./pages/AnimalMovement/Animal.jsx";
import Add from './pages/Add/Add.jsx';
import AnimalList from './pages/AnimalList/AnimalList.jsx';

function App() {
  
  
  return (
      <Routes>
         <Route path="/" element={<Login />} />
         
         <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/livestock" element={<LiveStock />} />
            <Route path="/dashboard/Finance" element={<Finance />} />
            <Route path="/dashboard/Genetics" element={<Genetics />} />
            <Route path="/dashboard/Group" element={<Group />} />
            <Route path="/dashboard/Add" element={<Add/>} />
            <Route path="/dashboard/list" element={<AnimalList/>} />
            <Route path="/dashboard/Milking" element={<Milking />} />
            <Route path="/dashboard/Planning" element={<Planning />} />
            <Route path="/dashboard/Reporting" element={<Reporting />} />
            <Route path="/dashboard/Reproduction" element={<Reproduction />} />
            <Route path="/dashboard/Events" element={<Events />} />
            <Route path="/dashboard/Task" element={<Task />} />
            <Route path="/dashboard/Treatment" element={<Treatment />} />
            <Route path="/dashboard/Weather" element={<Weather />} />
            <Route path="/dashboard/Feed" element={<Feed />} />
            <Route path="/dashboard/Farm" element={<Farm />} />
            <Route path="/dashboard/Animal" element={<Animal />} />
         </Route>
     
      </Routes>
      
        
    );
  
  
}

export default App;
