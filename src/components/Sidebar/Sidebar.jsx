import React from 'react'
import {useNavigate } from "react-router-dom";
import "./sidebar.css"
import { DashboardOutlined} from "@mui/icons-material"
function Sidebar() {
    let navigate=useNavigate();
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
              <div className="sidebarMenu"> 
                  <ul className="sidebarList">
                      <li className="sidebarListItem " onClick={()=>{navigate("/dashboard")}}>
                      <img className="sidebarIcon" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/30/000000/external-dashboard-blogger-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"/><span>Dashboard</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/livestock")}}>
                      <img className="sidebarIcon" src="https://img.icons8.com/office/30/000000/cow-breed.png"/><span>Livestock</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Farm")}}>
                      <img className="sidebarIcon" src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/30/000000/external-location-water-park-inipagistudio-mixed-inipagistudio.png"/><span>Farm Setup</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Milking")}}>
                      <img className="sidebarIcon" src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/30/000000/external-milk-supermarket-photo3ideastudio-lineal-color-photo3ideastudio.png"/><span>Milking</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Group")}}>
                      <img className="sidebarIcon"src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/30/000000/external-plant-nature-resource-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/><span>Group Management</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Events")}}>
                      <img className="sidebarIcon"src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/30/000000/external-event-advertising-kiranshastry-lineal-color-kiranshastry.png"/><span>Sessions / Events</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Add")}}>
                      <img className="sidebarIcon" src="https://img.icons8.com/ios-filled/30/000000/add--v1.png"/><span>Add</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/list")}}>
                      <img className="sidebarIcon"  src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/000000/external-list-multimedia-kiranshastry-gradient-kiranshastry.png"/><span>List</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Animal")}}>
                      <img className="sidebarIcon"src="https://img.icons8.com/external-wanicon-two-tone-wanicon/30/000000/external-sheep-butcher-wanicon-two-tone-wanicon.png"/><span> Animal Movement</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Feed")}}>
                      <img className="sidebarIcon"src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/30/000000/external-animal-feed-farming-and-agriculture-wanicon-lineal-color-wanicon.png"/><span>Feed Management</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Treatment")}}>
                      <img className="sidebarIcon"src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/30/000000/external-medicine-science-and-technology-icongeek26-linear-colour-icongeek26.png"/><span>Treatment and Medication</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Planning")}}>
                      <img className="sidebarIcon"src="https://img.icons8.com/external-ddara-lineal-color-ddara/30/000000/external-planning-digital-marketing-ddara-lineal-color-ddara.png"/><span>Planning</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Task")}}>
                      <img className="sidebarIcon" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/30/000000/external-event-camping-kiranshastry-lineal-color-kiranshastry.png"/><span>Task Manager</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Reproduction")}}>
                      <img className="sidebarIcon"src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/30/000000/external-leaves-tropical-icongeek26-linear-colour-icongeek26.png"/><span>Reproduction</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Genetics")}}>
                      <img className="sidebarIcon"src="https://img.icons8.com/external-ddara-lineal-color-ddara/30/000000/external-genetics-genetics-ddara-lineal-color-ddara-1.png"/><span>Genetics/pedigree</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Finance")}}>
                      <img className="sidebarIcon"src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/30/000000/external-business-and-finance-currency-icongeek26-outline-colour-icongeek26-2.png"/><span>Finance</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Weather")}}>
                      <img className="sidebarIcon"src="https://img.icons8.com/clouds/30/000000/storm.png"/><span>Weather</span>
                      </li>
                      <li className="sidebarListItem" onClick={()=>{navigate("/dashboard/Reporting")}}>
                      <img  className="sidebarIcon" src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/30/000000/external-report-digital-marketing-itim2101-lineal-color-itim2101.png"/><span>Reporting</span>
                      </li>

                  </ul>
                </div>  
            </div>
        </div>
    )
}

export default Sidebar
