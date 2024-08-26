import React from 'react'
import { Header, HeaderHero } from '../../components';

const ServicesPage = () => {
  return (
    <div className='body' >
        <Header/>
        <div className='wrapper' >
          <HeaderHero heading={"Services"}/>
          <h2>Primary Care</h2>
          Establish a trusting relationship with a dedicated physician who provides routine checkups, preventive screenings, and manages chronic conditions.
          <h2>Specialty Care</h2>
          Access a team of highly-qualified specialists in areas like cardiology, dermatology, ophthalmology, and more.
        <h2>Preventative Health</h2> 
        Focus on proactive wellness with services like nutrition counseling, fitness consultations, and mental health screenings.
        <h2>Diagnostic Services</h2>
        Benefit from advanced technology and on-site labs for accurate and timely diagnoses.
        <h2>Treatment & Management</h2>
        Receive personalized treatment plans for a wide range of health conditions, with a focus on holistic well-being.
        
        </div>
        
        
    </div>
  )
}

export default ServicesPage;