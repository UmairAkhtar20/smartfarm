import React from 'react'
import './Navbar.css'
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {SettingsOutlined,AccountCircleOutlined} from '@mui/icons-material';
function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
function Navbar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(event);
      setValue(newValue);
    };
    return (
        <div className='topbar1'>
        <div className="topbarWrapper1">
        <span className="featuredTitle1">
       
    
      <span className="featuredTitle1"><LinkTab label="All Livestock" href="/drafts" /> </span>
      <span className="featuredTitle1">  <LinkTab label="Goats" href="/trash" /></span>
      <span className="featuredTitle1">   <LinkTab label="Cattle" href="/spam" /> </span>
      <span className="featuredTitle1">    <LinkTab label="Archived" href="/spam" /></span>
      <span className="featuredTitle1">          
    <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
      /> </span>    
    
          <span className="featuredTitle1">Save</span>
          <span className="featuredTitle1">Save Filter</span>
          <span className="featuredTitle1">Clear All</span>
       
      
     
                  
    
     
     
   
    
    </span>
                
        </div>
    </div>
    )
}

export default Navbar
