import React, { useEffect, useState } from 'react'
import Chatdisplay from './Chatdisplay'
import { io } from 'socket.io-client'


const Conversation = ({convo}) => {
    const socket = io.connect('http://localhost:4000')
    const token = localStorage.getItem('token')
    const [chat, setChat] = useState(convo)
    const [chatCopy, setChatCopy] = useState(chat)
    const [answer, setAnswer] = useState('')
    const ask = async (e)=>{
        e.preventDefault()
        setAnswer('Loading...')
        let convoString = ''
        chatCopy.messages.forEach((message, i)=>{
            if (chatCopy.authors[i]==token){
                convoString += 'User: '+message+', '
            } else {
                convoString += 'Them: '+message+', '
            }
        })
        console.log(convoString);
        // const question = document.querySelector('.question').value
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_GPT_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'system', content: 'You are a helpful assistant, helping people respond to messages in a dating app. you will receive a conversation between the user and someone they are flirting with, you must respond with what the user should send next. Be flirtatious. respond with just the body of the message, no user header. Only give suggestions from the users perspective for what they can say next.' }, { role: 'user', content: convoString }]
                // messages: [{ role: 'system', content: 'You are a helpful assistant, helping people respond to messages in a dating app. you will receive a message, you must respond how you would if it were someone flirting with you. Be flirtatious' }, { role: 'user', content: question }]
            })
        })
        const data = await response.json()
        console.log(data);
        console.log(data.choices[0].message.content);
        setAnswer(data.choices[0].message.content)
    }
    useEffect(()=>{
        async function fetchConversation (){
            const response = await fetch(process.env.REACT_APP_URL+'chats/'+token+'/chat/'+convo._id);
            const data = await response.json()
            setChat(data)
            setChatCopy(data)
            console.log('test');
            document.querySelector('.messageText').value = ''
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
        const message = document.querySelector('.messageText').value
        socket.emit('message', message, chat._id, token)
        document.querySelector('.messageText').value = ''
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
                }, 2000)
            }
        })
    }, [socket])
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            color:'#D6D6D7',
        }}>
            <div style={{
                fontSize:'50px',
                marginBottom:'20px',
                marginTop:'20px',
            }}>Conversation with {chat.users[0].firstName}</div>
            <div style={{
                display:'flex',
                flexDirection:'column',
                // justifyContent:'flex-start',
                height:'450px',
                overflowY:'scroll',
                // marginBottom:'10px',
                border:'2px solid lightcoral',
                backgroundColor:'#454851',
                // width:'400px',
            }}>
            {chatCopy.messages.length==0 ? <div>Start the conversation!</div> : <Chatdisplay chat={chatCopy}></Chatdisplay>}
            </div>
            <p className='typing' style={{
                margin:'0px',
                height:'25px',
            }}></p>
            <div style={{
                backgroundColor:'#D6D6D7',
                height:'40px',
                width:'700px',
                borderRadius:'25px',
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                border:'2px solid lightcoral',
                margin: 'auto',
                // padding:'3px 3px 3px 5px',
            }}>
            <input style={{
                height:'40px',
                width:'600px',
                borderRadius:'20px',
                backgroundColor:'#454851',
                outline:'none',
                border:'none',
                fontSize:'20px',
                paddingLeft:'10px',
                color:'#D6D6D7',
            }} className='messageText' onChange={typing} type="text" placeholder='Type Message Here' />
            <button style={{
                height:'40px',
                width:'40px',
                borderRadius:'50%',
                fontSize:'20px',
                backgroundColor:'lightcoral',
            }} onClick={send}>⬆︎</button>
            <button style={{
                height:'40px',
                width:'60px',
                borderRadius:'20px',
            
            }} onClick={ask}>
                {/* <div style={{height:'20px', width:'20px'}}> */}
                <img style={{
                    height:'50px',
                    width:'50px',
                    borderRadius:'50%',
                
                }} src='/wingmanLogo.png' alt="Wingman Logo" />
                {/* </div> */}
            </button>
            </div>
            <div className='gpt'>{answer}</div>
            {/* <input type="text" className='question'/> */}
        </div>
        
    )
}

export default Conversation