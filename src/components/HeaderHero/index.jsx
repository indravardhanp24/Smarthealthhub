import React from 'react'
import "./index.css";
const HeaderHero = ({heading}) => {
  return (
    <div className='header-hero' >
        <div className='header-hero-title' >
            <p>{heading}</p>
            <div/>
        </div>
    </div>
  )
}

export default HeaderHero;