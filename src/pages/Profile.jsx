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
  return (
    <div>
        <div>
        {profile.username}
        </div>
        {myProfile ? <Link to="/editprofile"><button>Update Profile</button></Link> : 
        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
            <Link to={`/messages/${profile._id}`}><button>Message</button></Link>
            <Unmatch profileId={profile._id} name={profile.firstName}></Unmatch>
        </div>}
    </div>
  )
}

export default Profile