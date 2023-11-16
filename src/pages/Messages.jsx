import React, { useEffect, useState } from 'react'
import Conversation from '../components/Conversation'
import { Link, useLoaderData, useParams } from 'react-router-dom'

const Messages = () => {
    const token = localStorage.getItem('token')
    const openChatIdParam = useParams()
    const data = useLoaderData()
    const chats = [...data]
    // const [openChatId, setOpenIdChat] = useState(openChatIdParam)
    // const [openChat, setOpenChat] = useState('none')
    const oChat = chats.find(chat=>chat._id==openChatIdParam.id) ? 
      chats.find(chat=>chat._id==openChatIdParam.id) : 
        chats.find(chat=>chat.users[0]._id==openChatIdParam.id) ? chats.find(chat=>chat.users[0]._id==openChatIdParam.id) : null
    // console.log(oChat);
    // // setOpenChat(oChat)
    // if (!oChat){
    //     setOpenChat({id:'none'})
    // }
    // console.log(openChat);
  return (
    <div style={{backgroundImage:'linear-gradient(white, pink, lightcoral, red)', minHeight:'1000px', padding:'50px 150px 0px 150px',}}>
        <h2>Messages</h2>
        <div style={{
          display:'flex', 
          flexDirection:'row', 
          justifyContent:'space-around', 
          // alignItems:'center',
        }}>
        <div className='messagesBigContainer' style={{
          backgroundColor:'#202124',
          border:'20px',
          borderRadius:'50px',
          paddingBottom:'50px',
          paddingLeft:'60px',
          paddingRight:'60px',
          width: '20%',
          height: '650px',
          overflowY:'scroll',
          color:'#D6D6D7',
        }}>
          <h3>Select a Conversation to Open</h3>
            {chats.map(chat=>{
              return <div key={chat._id}>
                {/* return <div key={chat.users[0]._id}> */}
                    <div className='messageUser' style={{
                        display:'flex', 
                        flexDirection:'row', 
                        justifyContent:'space-between', 
                        alignContent:'center',
                        marginBottom:'20px',
                        border:'2px solid lightcoral',
                        borderRadius:'50px',
                        padding:'10px',
                      
                        backgroundColor: oChat ? oChat._id==chat._id ? 'lightcoral' : null : null,
                    }}>
                    <Link to={`/messages/${chat._id}`} style={{
                      textDecoration:'none', 
                      color:'#D6D6D7',
                      display:'flex',
                      flexDirection:'row',
                      alignItems:'center',
                      fontSize:'20px',
                      }}>
                      <img style={{
                          width:'75px',
                          height:'75px',
                          borderRadius:'50%',
                          marginRight:'10px',
                      
                      }} src={chat.users[0].profilePic} alt={chat.users[0].username} />
                    {chat.users[0].firstName+' '+chat.users[0].lastName}
                    </Link>
                    </div>
                    </div>
            })}
        </div>
        <div style={{
          backgroundColor:'#202124',
          border:'20px',
          borderRadius:'50px',
          paddingBottom:'50px',
          paddingLeft:'80px',
          paddingRight:'80px',
          width: '50%',
          height: '650px'
        }}>
        {oChat ? <Conversation convo={oChat}></Conversation> : <div style={{
          marginTop: '200px',
          color:'#D6D6D7',
          fontSize:'30px',
        }}>There is no conversation open</div>}
        </div>
          </div>
    </div>
  )
}

export default Messages