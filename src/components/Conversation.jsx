import React, { useEffect, useState } from 'react'
import Chatdisplay from './Chatdisplay'
import { io } from 'socket.io-client'


const Conversation = ({convo}) => {
    const socket = io.connect(process.env.REACT_APP_URL)
    const token = localStorage.getItem('token')
    const [chat, setChat] = useState(convo)
    const [chatCopy, setChatCopy] = useState(chat)
    const [answer, setAnswer] = useState('Your wingman is here to help if you need it!')
    const ask = async (e)=>{
        e.preventDefault()
        setAnswer('Loading...')
        let convoString = ''
        chatCopy.messages.forEach((message, i)=>{
            if (chatCopy.authors[i]==token){
                convoString += 'I said: '+message+'\n'
            } else {
                convoString += 'They said: '+message+'\n'
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
                // model: 'gpt-3.5-turbo',
                // model: 'gpt-4',
                model: 'gpt-4-1106-preview',
                messages: [{ role: 'system', content:'You are a helpful assistant, helping someone flirt on a dating app. Emphasize the importance of context and make responses coherent. Your response should be in the form of a text message ready to send, do not include any commentary or headers.'}, 
                { role: 'user', content: 'You are a helpful assistant. Your task is to help me brainstorm my next message I will send to someone I am flirting with. You will receive a conversation string. Please pay attention and be careful about who sent which messages, to insure you have the context of the conversation. Please brainstorm and respond with what I should say next. Please make sure your response is only the message i should reply with. \nConversation string: \n'+ convoString+'\nI said:'}],
                // { role: 'user', content: 'You are a helpful assistant. Your task is to brainstorm a new message to send from user to receiver. You will be receive a conversation string. If a line starts with User:, that is your own perspective, if a line starts with Receiver:, that is who you are talking to. There can be multiple messages in a row from the same perspective. Please pay attention and be careful about who sent which messages, to insure you have the context of the conversation. Please brainstorm and respond with what the user should say next.\nConversation string: '+ convoString+ '  User:' }]
                temperature: 0.2,
                max_tokens: 70
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
            setAnswer('Your wingman is here to help if you need it!')
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
        setAnswer('Your wingman is here to help if you need it!')
        socket.emit('message', message, chat._id, token)
        console.log(chat.users[0].firstName)
        socket.emit('notify', chat.users[0]._id, 'message')
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
    const useGPT = (e)=>{
        e.preventDefault()
        document.querySelector('.messageText').value = answer
    }
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
            {chatCopy.messages.length==0 ? <div className='needsFontHeading' style={{margin:'auto', fontSize:'30px'}}>Start the conversation!</div> : <Chatdisplay chat={chatCopy}></Chatdisplay>}
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
            <div style={{fontFamily: "'Inter', sans-serif"}} className='gpt'>{answer}</div>
            {answer=='Your wingman is here to help if you need it!' || answer=='Loading...' ? <div></div> : <button onClick={useGPT} className='gptUseButton'>Use</button>}
            {/* <input type="text" className='question'/> */}
        </div>
        
    )
}

export default Conversation