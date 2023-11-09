import React from 'react'

const Login = () => {
    const login = async (e) => {
        e.preventDefault()
        const username = document.querySelector('input[name="username"]').value
        const password = document.querySelector('input[name="password"]').value
        try {
            const response = await fetch(process.env.REACT_APP_URL+'auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username:username, password:password }),
            });
      
            if (response.ok) {
              const data = await response.json();
              const token = data.token;
              // Store the token in a secure way, such as in a state or a cookie.
              console.log('Received token:', token);
              console.log('Received token:', data.auth_token);
              console.log(data)
            //   localStorage.setItem('token', data.auth_token)
            //   navigate('/sessions')
            } else {
              console.error('Login failed');
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <input type="text" name='username' placeholder='username'/>
            <input type="text" name='password' placeholder='password'/>
            <input type="submit" value="login"/>
        </form>
    </div>
  )
}

export default Login