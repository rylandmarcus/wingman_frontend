import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

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
        {myProfile ? <Link to="/editprofile"><button>Update Profile</button></Link> : null}
    </div>
  )
}

export default Profile