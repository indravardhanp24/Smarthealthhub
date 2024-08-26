import React, { useEffect, useRef, useState } from 'react'
import { Footer, Header } from '../../components';
import "./index.css";
import { Link } from 'react-router-dom';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"

let images = [
  '/assets/images/hospital2.jpg',
  '/assets/images/hospital1.jpg',
  '/assets/images/doctor.jpg'
];
const HomePage = () => {
  let [count,setCount] = useState(0);
  
  //let count = 0;
  const imagesRef = useRef();
  const [activeTab,setActiveTab] = useState(0);
  useEffect(()=>{
    let id = setInterval(()=>{
      if(count<images.length-1){
        setCount(count+1);
       // count++;
      }else{
        setCount(0);
        //count = 0;
      }
      
    },3000);
    return ()=>clearInterval(id);
  },[count])
  return (
    <div className='body'
    style={{
      backgroundImage:`url('${images[count]}')`,
      transition:"background .5s ease-in-out"
    }}
    >
      <Header/>
      <div className='home' >
        <div className='left' >
          {/* <p>WELCOME</p>
          <p>to</p> */}
          <p>Smart Health Hub</p>
          <p>Medical operations  made easier. Book a an appointment </p>
          
          <Link to={"/login"} className='book-now'>Book Now</Link>
        </div>
        <div className='right' >
          
          <AiOutlineArrowLeft onClick={()=>{
            setActiveTab(prev=>prev>=2?2:prev+1);
            let dimensions = imagesRef.current.getBoundingClientRect();
            imagesRef.current.scrollLeft += dimensions.width;
          }} size={40} className='arrow arrow-left' />
          <AiOutlineArrowRight onClick={()=>{
            setActiveTab(prev=>prev<=0?0:prev-1);
            let dimensions = imagesRef.current.getBoundingClientRect();
            imagesRef.current.scrollLeft -= dimensions.width;
          }} size={40} className='arrow arrow-right'/>

          <div className='dots' >
            {[1,2,3].map((item,index)=>{
              return<div onClick={()=>{
                setActiveTab(index);
                  let dimensions = imagesRef.current.getBoundingClientRect();
                  imagesRef.current.scrollLeft = dimensions.width*index;
              }} key={index} className={`dot ${index==activeTab?"dot-active":null}`}  />
            })}
          </div>
          
          <div 
          ref={imagesRef}
          className='images'
          >
              <img src='/assets/images/hospital1.jpg' />
              <img src='/assets/images/doctor.jpg' />
              <img src='/assets/images/hospital.png' />

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage