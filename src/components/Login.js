import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link,useNavigate } from "react-router-dom";
import './bootstrap.css.map';
import "./Login.css"

import axios from 'axios';

function Login() {
const [username, setusername] = useState("")
const [Password, setPassword] = useState("")
 // useEffect(() => {
 //   console.log(username)
 //   console.log(Password)
    
 // }, [])
 const handleChange1=(e)=>{
    const name=e.target.value
    setusername(name)
    
 }
 const handleChange2=(e)=>{
  const Pass=e.target.value
  setPassword(Pass)
 
}
let navigate=useNavigate();
  const api=()=>{
    console.log(username)
    console.log(Password)
    var params = new URLSearchParams();
    params.append("user", username);
    params.append("pass", username);
    var request = {
      params: params
    };
    axios.get("https://smart-serverapi.herokuapp.com/api/admin",request)
    .then(function (response) {
      if(response.data.success === true){
        alert("thek hn")
        
        navigate("/dashboard")
        
        
      }else{
        alert("wrong credentials")
      }
     
      
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
    return (
        <div className="base-container" >
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img  />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={handleChange1}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={handleChange2}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={()=>{api()}}>
            Login
          </button>
        </div>
      </div>
    )
}

export default Login
