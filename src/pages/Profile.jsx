import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Unmatch from '../components/Unmatch'

const Profile = () => {
    const profile = useLoaderData()
    let myProfile = false
    const token = localStorage.getItem('token')
    if (profile._id === token){
        myProfile = true
    }
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
  return (
    <div style={{backgroundImage:'linear-gradient(white, pink, lightcoral, red)', minHeight:'1000px', padding:'50px 200px 0px 200px',}}>
        <div style={{
            backgroundColor:'#202124',
            border:'20px',
            borderRadius:'50px',
            paddingBottom:'50px',
            paddingLeft:'80px',
            paddingRight:'80px',
        }}>
        {myProfile ? <Link to="/editprofile"><button className='profileButton'>Update Profile</button></Link> : 
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Link to={`/messages/${profile._id}`}><button className='profileButton'>Message</button></Link>
            <Unmatch profileId={profile._id} name={profile.firstName}></Unmatch>
        </div>}
        <div style={{
          backgroundColor:'#D6D6D7',
          padding:'25px',
          color:'#202124',
          borderRadius:'50px',
        }}>
          <img style={{
            borderRadius:'50%',
          }} src={profile.profilePic} alt={profile.username} />
          <div style={{fontSize:'40px'}}>{profile.firstName+' '+profile.lastName}</div>
          <div style={{fontSize:'20px'}}>{profile.age} years old</div>
          <div style={{fontSize:'20px'}}>{profile.job}</div>
          <div style={{fontSize:'30px', marginTop:'20px'}}>{questions[profile.promptChoices[0]]}</div>
          <div style={{fontSize:'20px'}}>{profile.promptAnswers[0]}</div>
          <img style={{height:'350px', width:'350px', marginTop:'20px', border:'2px solid black', padding:'10px'}} src={profile.pictures[0]} alt={profile.username+'pic 1'} />
          <div style={{fontSize:'30px', marginTop:'20px'}}>{questions[profile.promptChoices[1]]}</div>
          <div style={{fontSize:'20px'}}>{profile.promptAnswers[1]}</div>
          <img style={{height:'350px', width:'350px', marginTop:'20px', border:'2px solid black', padding:'10px'}} src={profile.pictures[1]} alt={profile.username+'pic 1'} />
          <div style={{fontSize:'30px', marginTop:'20px'}}>{questions[profile.promptChoices[2]]}</div>
          <div style={{fontSize:'20px'}}>{profile.promptAnswers[2]}</div>
          <img style={{height:'350px', width:'350px', marginTop:'20px', border:'2px solid black', padding:'10px'}} src={profile.pictures[2]} alt={profile.username+'pic 1'} />
        </div>
        </div>
    </div>
  )
}

export default Profile

{/* <div>{user.username}</div>
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
        <div>Age: {user.age}</div>
        <div>Job: {user.job}</div>
        <div>Gender: {genders[user.gender]}</div>
        <div>Interested In:</div>
        {user.interestedIn.map(i=>{return genders[i]})} */}