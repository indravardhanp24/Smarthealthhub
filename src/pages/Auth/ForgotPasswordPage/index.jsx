import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "../auth.css";
import { AiOutlineArrowLeft } from 'react-icons/ai';

const ForgotPasswordPage = () => {
    const navigate = useNavigate();
  return (
    <div className='container' >
        <div className='left' >
        <Link to={"/"} className='go-home' >
            <AiOutlineArrowLeft/>
        </Link>
        <h2>SMART HEALTH HUB</h2>
            <h1>Reset password</h1>
            <div>
                <input type='email' placeholder='email...' />
            </div>
            <button>Submit</button>
            <div className='auth-footer' >
                <div>
                </div>
                <Link to={"/login"}>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default ForgotPasswordPage