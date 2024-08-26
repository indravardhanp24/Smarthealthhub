import React, { useState } from 'react'
import { Header, HeaderHero } from '../../components';
import "./index.css";

const ChatPage = () => {
  const [activeTab,setActiveTab] = useState(0);
  return (
    <div className='body' >
        <Header/>
        <div className='wrapper' >
          <HeaderHero heading={"Chat with other contact"} />
          <div className='chat'>
            {
              activeTab==0?
              <div className='contacts' >
              <h2>Contacts (Select contact to start chat)</h2>
              <div className='chat-user chat-active'
              onClick={()=>setActiveTab(1)}
              >
                <p>User User</p>
                
              </div>

            </div>:
            <Chat setActiveTab={setActiveTab} />
            }
            
          </div>
        </div>
        
    </div>
  )
}

const Chat = ({setActiveTab})=>{
  return(
    <div className='chat-messages'>
              <button className='back'  onClick={()=>setActiveTab(0)} >Back</button>
              <h2>User User</h2>
              <div className='all-messages' >
                <div className='chat-message received'  >
                  <p>User User</p>
                  <label  >Hello</label>
                  <div className='curve' />
                </div>
                <div className='chat-message sent'  >
                  <p>User User</p>
                  <label style={{
                    color:"#ffffff"
                  }} >Hello</label>
                  <div className='curve' />
                </div>

                <div className='chat-message sent'  >
                  <p>Us</p>
                  <label style={{
                    color:"#ffffff"
                  }} >Hello</label>
                  <div className='curve' />
                </div>
              </div>
              <div className='chat-message-input' >
                  <textarea className='input' placeholder='Type message...'/>
                  <button>Send</button>
              </div>
            </div>
  )
}

export default ChatPage;