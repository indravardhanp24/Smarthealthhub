import React from 'react'
import { Header, HeaderHero } from '../../components'
import "./index.css";
const Exams = () => {
  return (
    <div className='body'>
        <Header/>
        <div className='wrapper' >
          <HeaderHero heading={"Symptoms checker"}/>
        <div className='symptoms-input'>
          <input placeholder='search symptoms...' />
        </div>
        <div>
          <p>
            <h1>Disease 1</h1>
            <h4>Symptoms</h4>
            <ol>
              <li>Symptom 1</li>
              <li>Symptom 2</li>
              <li>Symptom 3</li>
            </ol>
          </p>
        </div>
        </div>
    </div>
  )
}

export default Exams