import React, { useEffect, useState } from 'react'
import { Header, HeaderHero, Modal } from '../../components';
import "./index.css";
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [show,setShow] = useState(false);
    const [user,setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        let userData = localStorage.getItem("userData");
        if(userData){
            userData = JSON.parse(userData);
            setUser(userData.data);
        }else{
            navigate("/");
        }

    },[]);
  return (
    <div className='body'>
        <Header/>
        <div className='wrapper' >
        <HeaderHero heading={"My Profile"} />
        <div className='profile' >
            
            <div>
            
            
                <img src='/assets/images/hospital1.jpg' />
                <p>Name: {user?.name}</p>
                <p>Email : {user?.email}</p>
                <p></p>
                <button  onClick={()=>setShow(true)}>Edit profile</button>
            </div>
        </div>
        </div>
        
        

        <Modal show={show} setShow={setShow} heading={"Update profile"}>
            <input placeholder='name...' />
            <input placeholder='email...' />
            <button>Update</button>
        </Modal>
        </div>
  )
}

export default ProfilePage