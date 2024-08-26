import React, { useContext, useEffect, useRef, useState } from 'react'
import { ThemeContext, UserContext } from '../../contexts'
import { Link, useNavigate } from 'react-router-dom';
import { Constants } from '../../helpers';
import "./index.css";
import SideBar from '../Sidebar';

const Header = () => {
    const [userType,setUserType] = useContext(UserContext);
    const [appTheme,setAppTheme] = useContext(ThemeContext);
    const navigate = useNavigate();

    

    const menuRef = useRef();
    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }

    const handleLogout = ()=>{
      localStorage.removeItem("userData");
      navigate("/");
    }
    useEffect(()=>{
        
    },[userType]);
  return (
    <div className='header' 
    style={{
        backgroundColor:`${appTheme=="light"?"#ffffff":"#000000"}`,
        color:`${appTheme=="light"?"#000000":"#ffffff"}`,
        transition:"all .5s ease-in-out"
      }}
    >
        
        <Link 
        style={{
        color:`${appTheme=="light"?"#000000":"#ffffff"}`,
        transition:"all .5s ease-in-out"
      }}
      className='logo' to={"/"}
        onClick={()=>setIsOpen(false)}
        ><p className='logo' style={{
          color:`${appTheme=="light"?"#000000":"#ffffff"}`,
          transition:"all .5s ease-in-out"
        }} >SMARTHEALTH HUB</p></Link>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} userType={userType} setUserType={setUserType}/>

        <div className='header-links ' ref={menuRef}  >
        <Link 
        style={{
        // color:`${appTheme=="light"?"#000000":"#ffffff"}`,
        transition:"all .5s ease-in-out"
      }}
        className={`link ${window.location.pathname=="/"?"active":null}`} to={"/"}
        onClick={()=>setIsOpen(false)}
        >Home</Link>
        <Link to={"/blog"} className={`link ${window.location.pathname=="/blog"?"active":null}`}
            onClick={()=>setIsOpen(false)}
            style={{
              // color:`${appTheme=="light"?"#000000":"#ffffff"}`,
              transition:"all .5s ease-in-out"
            }}
            >Blog</Link>
        {
            userType?
            <Link 
            style={{
        // backgroundColor:`${appTheme=="light"?"#ffffff":"#000000"}`,
        // color:`${appTheme=="light"?"#000000":"#ffffff"}`,
        transition:"all .5s ease-in-out"
      }}
            className={`link ${window.location.pathname==`/${userType.name}/profile`?"active":null}`} to={`/${userType.name}/profile`}>
                {userType.name[0].toUpperCase()+userType.name.slice(1)}
            </Link>:<></>
        }
            {/* {
                userType?.routes.map((route,index)=>{
                    return <Link 
                    style={{
        backgroundColor:`${appTheme=="light"?"#ffffff":"#000000"}`,
        color:`${appTheme=="light"?"#000000":"#ffffff"}`,
        transition:"all .5s ease-in-out"
      }}
                    className={`link ${window.location.pathname == `{route[0].toUpperCase()+route.slice(1)}`?"active":null}`} to={`/${userType.name}/${route}`} key={index}>

                            {route[0].toUpperCase()+route.slice(1)}
                    </Link>
                })
            } */}
            
            {
                userType == null?
                <>
                    {/* <Link 
                    style={{
        backgroundColor:`${appTheme=="light"?"#ffffff":"#000000"}`,
        color:`${appTheme=="light"?"#000000":"#ffffff"}`,
        transition:"all .5s ease-in-out"
      }}
                    className={`link ${window.location.pathname=="/services"?"active":null}`} to={"/services"}>Services</Link>
                    <Link 
                    style={{
        backgroundColor:`${appTheme=="light"?"#ffffff":"#000000"}`,
        color:`${appTheme=="light"?"#000000":"#ffffff"}`,
        transition:"all .5s ease-in-out"
      }}
                    className={`link ${window.location.pathname=="/about-us"?"active":null}`} to={"/about-us"}>About us</Link>
                    <Link 
                    style={{
        backgroundColor:`${appTheme=="light"?"#ffffff":"#000000"}`,
        color:`${appTheme=="light"?"#000000":"#ffffff"}`,
        transition:"all .5s ease-in-out"
      }}
                    className={`link ${window.location.pathname=="/contact-us"?"active":null}`} to={"/contact-us"}>Contact us</Link> */}
                    <Link 
                    style={{
        backgroundColor:`${appTheme=="light"?"#ffffff":"#000000"}`,
        color:`${appTheme=="light"?"#000000":"#ffffff"}`,
        transition:"all .5s ease-in-out"
      }}
                    className={`link ${window.location.pathname=="/login"?"active":null}`} to={"/login"}>Login</Link>
                    <Link 
                    style={{
        backgroundColor:`${appTheme=="light"?"#ffffff":"#000000"}`,
        color:`${appTheme=="light"?"#000000":"#ffffff"}`,
        transition:"all .5s ease-in-out"
      }}
                    className={`link ${window.location.pathname=="/register"?"active":null}`} to={"/register"}>Register</Link>
                </>:
                <button onClick={()=>{
                    setUserType(null);
                    setIsOpen(false);
                    localStorage.removeItem("userData");
                    navigate("/");

                }} >Logout</button>
            }

            
            {/* <button onClick={()=>setAppTheme(appTheme=="light"?"dark":"light")} >{appTheme=="light"?"Dark":"Light"}</button> */}
            
            <button 
            onClick={toggleMenu} 
            style={{
              transition:"width .5s ease-in-out",
              width:isOpen?50:100,
              

            }}
            >{isOpen?<label>&#10005;</label>:<label style={{flex:"0 0 auto"}}>&#9776; Menu</label>}</button>
        
        
        </div>
        


    </div>
  )
}

export default Header