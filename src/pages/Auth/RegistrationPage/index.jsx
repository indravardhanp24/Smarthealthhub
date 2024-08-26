import React, { useState } from 'react';
// import {FaUser} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import "../auth.css";
import { Constants } from '../../../helpers';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [user,setUser] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    role:null
  });

  const handleRegister = ()=>{
    if(user.name == ""){
        alert("Name is required");
        return 
    }
    if(user.email == ""){
        alert("Email is required");
        return 
    }
    if(user.password == ""){
        alert("Password is required");
        return 
    }

    window.localStorage.setItem("user",JSON.stringify(user));
    navigate("/login");
  }
  return (
    <div className='container' >
        <div className='left' >
          {/* <Link to={"/"}>Home</Link> */}
          <Link to={"/"} className='go-home' ><AiOutlineArrowLeft/></Link>
          <h2>SMART HEALTH HUB</h2>
            <h1>Register</h1>
            <div>
                <input onChange={(e)=>setUser({...user,name:e.target.value})} type='text' placeholder='name...' />
            </div>
            <div>
                <input onChange={(e)=>setUser({...user,email:e.target.value})} type='email' placeholder='email...' />
            </div>
            <div>
                <input onChange={(e)=>setUser({...user,phone:e.target.value})} type='text' placeholder='phone...' />
            </div>
            <div>
            <select >
            <option>--Select role--</option>
            {
                Constants.app_users.map((user,index)=>{
                    return <option  key={index} value={user.alias}>{user.alias[0].toLocaleUpperCase()+user.alias.slice(1)}</option>
                })
            }
            </select>
            </div>
            <div>
                <input onChange={(e)=>setUser({...user,password:e.target.value})} type='password' placeholder='password...' />
            </div>
            <button onClick={handleRegister} >Register</button>
            <div className='auth-footer' >
                <div>
                    
                </div>
                <Link to={"/login"}>Have an account?Login</Link>
            </div>
        </div>
    </div>
  )
}

export default RegistrationPage