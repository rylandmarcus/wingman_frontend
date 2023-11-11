import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const questions = [
        'What is your favorite color?',
        'What is your favorite animal?',
        'What is your favorite food?',
        'What is your favorite movie?',
        'What is your favorite song?',
        'What is your favorite book?',
    ]
    const genders = [
        'Man', 'Woman', 'Non-Binary'
    ]
    const userData = useLoaderData()
    const [user, setUser] = useState(userData)
    if (!user.firstName){
        console.log('first time');
        window.location.href = '/firsttime'
    }
    // useEffect(()=>{
    //     const token = localStorage.getItem('token')
    //     if(!token){
    //         window.location.href = '/login'
    //     }
    //     async function fetchData(){
    //         const response = await fetch(process.env.REACT_APP_URL+'users/'+token)
    //         const data = await response.json()
    //         setUser(data)
    //     }
    //     fetchData()
    // },[])
    // going to make it a fill in more info form if it is user first time logging in
    // if not first time logging in, then it will be a dashboard
    const pictureStyle = {
        width: '200px',
        height: '200px',
        // borderRadius: '50%',
    }
  return (
    <div>
        <h1>Home</h1>
        <div>{user.username}</div>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <img style={pictureStyle} src={user.profilePic} alt={user.username} />
            <h2>{user.firstName+' '+ user.lastName}</h2>
        </div>
        {user.pictures.map(p=>{
            return <img key={p} style={pictureStyle} src={p} alt={user.username} />
        })}
        <div>{questions[user.promptChoices[0]]}</div>
        <div>{user.promptAnswers[0]}</div>
        <div>{questions[user.promptChoices[1]]}</div>
        <div>{user.promptAnswers[1]}</div>
        <div>{questions[user.promptChoices[2]]}</div>
        <div>{user.promptAnswers[2]}</div>
        <div>Gender: {genders[user.gender]}</div>
        <div>Interested In:</div>
        {user.interestedIn.map(i=>{return genders[i]})}
    </div>
  )
}

export default Home