import React, { memo, useEffect, useRef, useState } from 'react';
import "./index.css";

const Modal = ({children,show=false,setShow,heading}) => {
  const dataRef = useRef();
  const [count,setCount] = useState(-100);
  const slideIn = ()=>{
    setCount(prev=>prev+5);

  }

  useEffect(()=>{
    let id = setInterval(()=>{
      slideIn()

      
    },10);

    if(count >= 50){
      clearInterval(id);
    }
    console.log(count);
    dataRef.current.style.transform = `translateX(-50%) translateY(${count}%)`;
    return ()=>clearInterval(id);

  },[count]);
  return (
    <div className={`modal ${show?"shown":"hidden"}`} >
        <div className='items' ref={dataRef}
        >
            <div className='heading'>
                <p>{heading}</p>
                <button onClick={()=>setShow(false)} className='close-btn' >&#10005;</button>
            </div>
            {children}
        </div>
    </div>
  )
}

export default memo(Modal)