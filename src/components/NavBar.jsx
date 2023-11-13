import React from 'react'
import Logout from './Logout'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const token = localStorage.getItem('token')
    const loaded = ()=>{
        return(
            <div>
                <Logout></Logout>
                <Link to={`/profiles/${token}`}>
                <button>My Profile</button>
                </Link>
                <Link to="/messages/none">
                <button>Messages</button>
                </Link>
                <Link to="/matches">
                <button>Matches</button>
                </Link>
                <Link to="/findmatches">
                <button>Find Matches</button>
                </Link>
            </div>
        )
    }
  return localStorage.getItem('token') ? loaded() : null
}

export default NavBar