import React, { useEffect, useState } from 'react'

const Home = () => {
    const [user, setUser] = useState({})
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            window.location.href = '/login'
        }
        async function fetchData(){
            const response = await fetch(process.env.REACT_APP_URL+'users/'+token)
            const data = await response.json()
            setUser(data)
        }
        fetchData()
    },[])
    // going to make it a fill in more info form if it is user first time logging in
    // if not first time logging in, then it will be a dashboard
    
  return (
    <div>
        <h1>Home</h1>
        <div>{user.username}</div>
    </div>
  )
}

export default Home