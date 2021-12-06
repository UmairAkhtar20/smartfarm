import React from 'react'
import Featureinfo from '../../components/Featuredinfo/Featureinfo'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LiveStock from "../Livestock/Livestock";
import "./Dashboardcontainer.css"
function Dashboardcontainer() {
    return (
        <div className='home'>
            <Featureinfo />
         
        </div>
    )
}

export default Dashboardcontainer
