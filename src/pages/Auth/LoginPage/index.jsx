import React, { useContext, useState } from 'react';
// import {FaUser} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import "../auth.css";
import { Constants } from '../../../helpers';
import { UserContext } from '../../../contexts';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const LoginPage = () => {
    const navigate = useNavigate();
    
    const [userType,setUserType] = useContext(UserContext);

    const handleOnchange = (e)=>{
        console.log(e.target.value);
        let roleUser = Constants.app_users.filter(user=>user.alias==e.target.value);
        setUserType(roleUser[0]);

        //navigate("/");
    }

    const [user,setUser] = useState({
        email:"",
        password:""
    });

    const handleSubmit = (e)=>{
        e.preventDefault();

    }
    const handleLogin = ()=>{
        if(user.email == ""){
            alert("Please provide an email.")
            return;
        }
        if(user.password == ""){
            alert("Please provide a password.")
            return;
        }
        if(userType == null){
            alert("Please select a user type.")
            return;
        }

        let storedUser = window.localStorage.getItem("user");
        if(storedUser){
            storedUser = JSON.parse(storedUser);
            if(user.email == storedUser.email){
                if(user.password == storedUser.password){
                    window.localStorage.setItem("userData",JSON.stringify({loggedIn:true,data:storedUser}));
                    // Use the navigate functionality to navigate to the home page if all fields have been filled
                    navigate("/");  
                }else{
                    alert("Wrong password");
                }
                
            }else{
                alert("No such user. Consider signing up.");
            }

        }else{
            alert("No such user. Consider signing up.");
        }

        
        
    }
  return (
    <div className='container' >
        <div className='left' >
            <Link to={"/"} className='go-home' >
                <AiOutlineArrowLeft/>
            </Link>
            <h2>SMART HEALTH HUB</h2>
            <h1>Login</h1>
            <div>
                <input onChange={(e)=>setUser({...user,email:e.target.value})} type='email' placeholder='email...' />
            </div>
            <div>
            <select onChange={handleOnchange} >
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
            <button className='btn' onClick={handleLogin} >Login</button>
            <div className='auth-footer' >
                <div>
                    <input type='checkbox' />
                    <label>Remember me</label>
                </div>
                <Link to={"/forgot-password"}>Forgot password?</Link>
            </div>
            <Link to={"/register"}>Dont have an account?Register</Link>
        </div>
    </div>
  )
}

export default LoginPage