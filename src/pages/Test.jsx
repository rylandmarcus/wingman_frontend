import React, { useEffect } from 'react'
import { io } from 'socket.io-client'
import Logout from '../components/Logout'
import { useNavigate } from 'react-router-dom'

const socket = io.connect('http://localhost:4000')

const Test = () => {
    const navigate = useNavigate()
    const [user, setUser] = React.useState({})
    useEffect(()=>{
        const token = localStorage.getItem('token')
        async function fetchData(){
            const response = await fetch(process.env.REACT_APP_URL+'users/'+token, {
                headers: {
                    'Authorization': 'Bearer '+token,
                }
            })
            const data = await response.json()
            if(data.error){
                window.location.href = '/login'
            }
            setUser(data)
        }
        if(!token){
            // navigate('/login')
            window.location.href = '/login'
        } else{
            fetchData()
        }
    }
    ,[])
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
        <div>{user.username}</div>
        <Logout></Logout>
    </div>
  )
}

export default Test