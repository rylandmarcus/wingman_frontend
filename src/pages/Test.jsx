import React, { useEffect } from 'react'
import { io } from 'socket.io-client'

const socket = io.connect('http://localhost:4000')

const Test = () => {
    const send = (e) => {
        const message = document.querySelector('.message').value
        socket.emit('message', message)
    }
    useEffect(()=>{
        socket.on("receive_message", (data)=>{
            console.log(data)
            document.querySelector('.receive').innerHTML = data
        })
      }, [socket])
  return (
    <div>
        <h1>Test</h1>
        <input type="text" placeholder='message' className='message'/>
        <button onClick={send}>send</button>
        <div className='receive'></div>
    </div>
  )
}

export default Test