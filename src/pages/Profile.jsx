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
        {myProfile ? <Link to="/editprofile"><button>Update Profile</button></Link> : 
        <div>
            <Link to={`/messages/${profile._id}`}><button>Message</button></Link>
            <Link><button>Unmatch</button></Link>
        </div>}
    </div>
  )
}

export default Profile