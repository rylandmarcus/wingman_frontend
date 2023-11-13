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
    const oChat = chats.find(chat=>chat._id==openChatIdParam.id)
    console.log(oChat);
    // // setOpenChat(oChat)
    // if (!oChat){
    //     setOpenChat({id:'none'})
    // }
    // console.log(openChat);
  return (
    <div>
        <h2>Messages</h2>
        <div>
            {chats.map(chat=>{
                return <div key={chat._id}>
                {/* return <div key={chat.users[0]._id}> */}
                    <div>
                    <Link to={`/messages/${chat._id}`} style={{textDecoration:'none',color:'black'}}>
                    {chat.users[0].firstName+' '+chat.users[0].lastName}
                    </Link>
                    </div>
                    </div>
            })}
        </div>
        {oChat ? <Conversation convo={oChat}></Conversation> : <div>There is no conversation open</div>}
    </div>
  )
}

export default Messages