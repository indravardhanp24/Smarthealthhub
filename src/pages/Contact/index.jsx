import React from 'react'
import { Header, HeaderHero } from '../../components';

const ContactPage = () => {
  return (
    <div className='body' >
        <Header/>
        <div className='wrapper' >
          <HeaderHero heading={"Contact us"} />
          <div style={{
            width:"100%",
            display:"flex",
            flexDirection:"column",
            gap:10
          }} >
          
          <input type='text' placeholder='name...' />
          <input type='text' placeholder='email...' />
          <textarea>
            Message
          </textarea>
          <button>Send</button>
          </div>
        </div>
      </div>
  )
}

export default ContactPage;