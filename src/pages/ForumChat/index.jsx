import React, { useState } from 'react'
import { Header, HeaderHero } from '../../components'
import "../Chat/index.css";
const ForumChatPage = () => {
  const [activeTab,setActiveTab] = useState(0);
  const [topics,setTopics] = useState([
    "Topic 1",
    "Topic 2",
  ]);

  return (
    <div className='body' >
        <Header/>
        <div className='wrapper' >
          <HeaderHero heading={"Forum chat"}/>
          <div className='chat'>
            
            {
              activeTab==0?
              <div className='contacts' >
              <h2>Topics</h2>
                {
                  topics.map((topic,index)=>{
                    return <div 
                              className={`chat-user ${index==0?"chat-active":null}`} key={index} 
                              onClick={()=>setActiveTab(1)}
                              >
                            <p>{topic}</p>
                          </div>
                  })
                }
              
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
              <button className='back' onClick={()=>setActiveTab(0)} >Back</button>
              <h2>Topic</h2>
              <div className='all-messages' >
                <div className='chat-message received'  >
                  <p>User User</p>
                  <label  >Which medicine works best in the above conditions?</label>
                </div>
                <div className='chat-message sent'  >
                  <p>User User</p>
                  <label  >Which medicine works best in the above conditions?</label>
                </div>

                <div className='chat-message sent'  >
                  <p>User User</p>
                  <label  >Which medicine works best in the above conditions?</label>
                </div>
              </div>
              <div className='chat-message-input' >
                  <textarea className='input' placeholder='Type message' />
                  <button>Send</button>
              </div>
            </div>
  )
}

export default ForumChatPage