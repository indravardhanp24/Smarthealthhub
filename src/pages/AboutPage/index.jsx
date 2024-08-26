import React from 'react'
import { Header, HeaderHero } from '../../components';

const AboutPage = () => {
  return (
    <div className='body' >
      <Header/>
      <div className='wrapper' >
      <HeaderHero heading={"About us"} />
      <h2>Our Philosophy</h2>

We believe in a holistic approach to healthcare, focusing on preventive care, early intervention, and personalized treatment plans. We empower our patients by providing them with the knowledge and resources they need to make informed decisions about their health.
        </div>
      </div>
  )
}

export default AboutPage;