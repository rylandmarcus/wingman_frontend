import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const login = async (e) => {
        e.preventDefault()
        const username = document.querySelector('input[name="username"]').value
        const password = document.querySelector('input[name="password"]').value
        try {
            const response = await fetch(process.env.REACT_APP_URL+'auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username:username, password:password }),
                credentials: 'include',
            });
      
            if (response.ok) {
              const data = await response.json();             
              localStorage.setItem('token', data.userid)
            //   localStorage.setItem('token', data.token)
              console.log(localStorage.getItem('token'))
            //   navigate('/test')
              window.location.href = '/home'
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
        <h1 style={{color:'#D6D6D7'}} className='needsFontHeading'>Log in</h1>
        <form onSubmit={login} style={{
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
            <input className='welcomePageButton' type="submit" value="Log in"/>
        </form>
        <div style={{color:'#D6D6D7'}} id='errorSlot'></div>
        <div style={{color:'#D6D6D7', paddingTop:'25px'}}>Don't Have an Account? <span><Link to="/signup">Sign Up Here</Link></span></div>
        </div>
    </div>
  )
}

export default Login