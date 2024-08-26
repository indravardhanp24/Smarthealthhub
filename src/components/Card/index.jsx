import React from 'react'
import "./index.css";
const Card = ({children,image}) => {
  return (
    <div className='card' style={{
      backgroundImage:`url(${image})`,
    }}>
        {children}
    </div>
  )
}

export default Card