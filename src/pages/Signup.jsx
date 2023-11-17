import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const signUp = async (e) => {
        e.preventDefault()
        const username = document.querySelector('input[name="username"]').value
        const password = document.querySelector('input[name="password"]').value
        try {
            const response = await fetch(process.env.REACT_APP_URL+'auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username:username, password:password }),
            });
      
            if (response.ok) {
              navigate('/login')
            } else {
              console.error('Login failed');
              document.querySelector('#errorSlot').innerText = 'Login failed'
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }
  return (
    <div style={{
      backgroundImage:'linear-gradient(lightcoral, red)', 
      height:'1000px',
      display:'flex',
      justifyContent:'center',
      }}>
        <div style={{
            height: '500px',
            width: '370px',
            backgroundColor:'#202124',
            borderRadius:'50px',
        }}>
          <div style={{height:'50px'}}>
            <img style={{
                height:'100px',
                width:'100px',                    
            }} src='/wingmanLogo.png' alt="Wingman Logo" />            
            </div>
        <h1 style={{color:'#D6D6D7'}} className='needsFontHeading'>Sign Up</h1>
        <form onSubmit={signUp} style={{
          display:'flex',
          flexDirection:'column',
          width:'250px',
          margin:'auto',
          height:'200px',
          justifyContent:'space-around',
          alignItems:'center',
          }}>
            <input className='authInput' type="text" name='username' placeholder=' username' required/>
            <input className='authInput' type="password" name='password' placeholder=' password' required/>
            <input className='welcomePageButton' type="submit" value="Sign Up"/>
        </form>
        <div style={{color:'#D6D6D7'}} id='errorSlot'></div>
        <div style={{color:'#D6D6D7', paddingTop:'25px'}}>Already Have an Account? <span><Link to="/login">Log In Here</Link></span></div>
        </div>
    </div>
  )
}

export default Signup