import React from 'react'
import './Topbar.css'
import { Divider } from '@mui/material';
import {SettingsOutlined,AccountCircleOutlined} from '@mui/icons-material';
function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                    Smart Farm
                </span></div>
                
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <SettingsOutlined className='s' fontSize="large"/>
                    
                    
                        
                    <AccountCircleOutlined className='s1' fontSize="large"/>
                        
                    
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
