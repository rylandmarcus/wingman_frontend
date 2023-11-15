import React from 'react'
import Logout from './Logout'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const token = localStorage.getItem('token')
    const loaded = ()=>{
        return(
            <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'space-around',
                // alignItems:'space-around',
                marginRight:'20px',
                width:'100%',
                height:'100px',
                backgroundColor:'#202124',
            }}>
                <Link to={`/profiles/${token}`}>
                <button className='navButton'>My Profile</button>
                </Link>
                <Link to="/messages/none">
                <button className='navButton'>Messages</button>
                </Link>
                <Link to="/matches">
                <button className='navButton'>Matches</button>
                </Link>
                <Link to="/findmatches">
                <button className='navButton'>Find Matches</button>
                </Link>
                <Logout></Logout>
            </div>
        )
    }
  return localStorage.getItem('token') ? loaded() : null
}

export default NavBar