import React, { useEffect, useState } from 'react'
import Chatdisplay from './Chatdisplay'

const Conversation = ({convo}) => {
    //socket time...good luck haahha ok i think to start join a room and just send an unsaved message back and forth to other people
    const token = localStorage.getItem('token')
    const [chat, setChat] = useState(convo)
    console.log(chat);
    useEffect(()=>{
        async function fetchConversation (){
            const response = await fetch(process.env.REACT_APP_URL+'chats/'+token+'/chat/'+convo._id);
            const data = await response.json()
            setChat({...data})
            console.log(chat.users[0]);
        }
        fetchConversation()
        // setChat({...convo})
        // console.log(convo);
        // return ()=>{
        //     setChat({})
        //     console.log('unmounting');
        // }
    },[convo])
    return (
        <div>
            <div>Conversation with {chat.users[0].firstName}</div>
            {chat.messages.length==0 ? <div>Start the conversation!</div> : <Chatdisplay></Chatdisplay>}
            <input type="text" />
            <button>Send</button>
        </div>
        
    )
}

export default Conversation