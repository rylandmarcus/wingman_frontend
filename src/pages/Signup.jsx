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
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={signUp}>
            <input type="text" name='username' placeholder='username' required/>
            <input type="text" name='password' placeholder='password' required/>
            <input type="submit" value="Sign Up"/>
        </form>
        <div id='errorSlot'></div>
        <div>Already Have an Account? <span><Link to="/login">Log In Here</Link></span></div>
    </div>
  )
}

export default Signup