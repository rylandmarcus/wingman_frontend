import React, { useEffect, useState } from 'react'
import Chatdisplay from './Chatdisplay'
import { io } from 'socket.io-client'


const Conversation = ({convo}) => {
    const socket = io.connect('http://localhost:4000')
    const token = localStorage.getItem('token')
    const [chat, setChat] = useState(convo)
    const [chatCopy, setChatCopy] = useState(chat)
    // console.log(chat);
    useEffect(()=>{
        async function fetchConversation (){
            const response = await fetch(process.env.REACT_APP_URL+'chats/'+token+'/chat/'+convo._id);
            const data = await response.json()
            setChat(data)
            setChatCopy(data)
            console.log('test');
            // console.log(chat.users[0]);
        }
        fetchConversation()
        // setChat({...convo})
        // console.log(convo);
        return ()=>{
            // socket.emit('leaveChatRooms', chat._id)
            // setChat({})
            // setChatCopy({})
            console.log('unmounting: ', chat.users[0].firstName);
        }
    },[convo])
    useEffect(()=>{
        socket.emit('joinChatRoom', chat._id)
        console.log('joined chat room: ', chat.users[0].firstName);
        return ()=>{
            socket.emit('leaveChatRooms', chat._id)
            console.log('left chat room: ', chat.users[0].firstName);
        }
    },[chat])
    const send = (e)=>{
        e.preventDefault()
        const message = document.querySelector('input[type=text]').value
        socket.emit('message', message, chat._id, token)
    }
    const typing = (e)=>{
        e.preventDefault()
        socket.emit('typing', chat._id, token)
    }
    useEffect(()=>{
        socket.on("receive_message", (msg, userid)=>{
            let copyCopy = {...chatCopy}
            copyCopy.authors.push(userid)
            copyCopy.messages.push(msg)
            setChatCopy(copyCopy)
        })
        socket.on("receive_typing", (userid)=>{
            if (userid!==token){
                document.querySelector('.typing').innerHTML = 'They are typing...'
                setTimeout(function(){
                    document.querySelector('.typing').innerHTML = ''
                }, 600)
            }
        })
    }, [socket])
    return (
        <div>
            <div>Conversation with {chat.users[0].firstName}</div>
            {chatCopy.messages.length==0 ? <div>Start the conversation!</div> : <Chatdisplay chat={chatCopy}></Chatdisplay>}
            <p className='typing'></p>
            <input onChange={typing} type="text" />
            <button onClick={send}>Send</button>
            <div className='receive'></div>
        </div>
        
    )
}

export default Conversation