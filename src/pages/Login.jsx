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
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <input type="text" name='username' placeholder='username' required/>
            <input type="text" name='password' placeholder='password' required/>
            <input type="submit" value="login"/>
        </form>
        <div id='errorSlot'></div>
        <div>Don't Have an Account? <span><Link to="/signup">Sign Up Here</Link></span></div>
    </div>
  )
}

export default Login