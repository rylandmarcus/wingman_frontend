import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='needsFontHeading' style={{
        backgroundImage:'linear-gradient(lightcoral, red)', 
        height:'1000px',
        display:'flex',
        justifyContent:'center',
        }}>
        <div style={{
            height: '300px',
            width: '600px',
            backgroundColor:'#202124',
            borderRadius:'50px',
        }}>
            <div style={{height:'50px'}}>
            <img style={{
                height:'100px',
                width:'100px',                    
            }} src='/wingmanLogo.png' alt="Wingman Logo" />            
            </div>
                <h1 style={{textAlign:'center', marginTop:'15px', marginBottom:'10px', color:'#D6D6D7'}}>Welcome to Wingman</h1>
                <h3 style={{textAlign:'center', margin:'0px 0px 10px 0px', color:'#D6D6D7'}}>The dating app that has got your back</h3>
                <h3 style={{textAlign:'center', margin:'0px 0px 10px 0px', color:'#D6D6D7'}}>Already have an account?</h3>
                <Link to='/login'>
                <button className='welcomePageButton'>Click Here to Login</button>
                </Link>
                <h3 style={{textAlign:'center', margin:'10px', color:'#D6D6D7'}}>Don't have an account?</h3>
                <Link to='/signup'>
                <button className='welcomePageButton'>Click Here to Sign Up</button>
                </Link>
        </div>
    </div>
  )
}

export default Welcome