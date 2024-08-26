import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SideBar = ({userType,setUserType,isOpen,setIsOpen}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        window.addEventListener("resize",(e)=>{
            //console.log(e);
        })
    },[window.innerWidth])
  return (
    <div className={`side-header-links ${isOpen?"open":"closed"}`} >
        <Link onClick={()=>setIsOpen(false)} className={`link ${window.location.pathname=="/"?"active":null}`} to={"/"}>Home</Link>
            {
                userType?.routes.map((route,index)=>{
                    return <Link onClick={()=>setIsOpen(false)} className={`link ${window.location.pathname == `/${userType.name}/${route}`?"active":null}`} to={`/${userType.name}/${route}`} key={index}>{route[0].toUpperCase()+route.slice(1)}</Link>
                })
            }
            
            {
                userType == null?
                <>
                    <Link onClick={()=>setIsOpen(false)} className={`link ${window.location.pathname=="/services"?"active":null}`} to={"/services"}>Services</Link>
                    <Link onClick={()=>setIsOpen(false)} className={`link ${window.location.pathname=="/about-us"?"active":null}`} to={"/about-us"}>About us</Link>
                    <Link onClick={()=>setIsOpen(false)} className={`link ${window.location.pathname=="/contact-us"?"active":null}`} to={"/contact-us"}>Contact us</Link>
                    <Link onClick={()=>setIsOpen(false)} className={`link ${window.location.pathname=="/login"?"active":null}`} to={"/login"}>Login</Link>
                    <Link onClick={()=>setIsOpen(false)} className={`link ${window.location.pathname=="/register"?"active":null}`} to={"/register"}>Register</Link>
                </>:
                <button onClick={()=>{
                    setUserType(null);
                    setIsOpen(false);
                    localStorage.removeItem("userData");
                    navigate("/");
                }} >Logout</button>
            }
        </div>
  )
}

export default SideBar;