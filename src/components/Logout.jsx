import React from 'react'

const Logout = () => {
    const logout = async (e) => {
        e.preventDefault()
        // const token = localStorage.getItem('token')
        // try {
        //     const response = await fetch(process.env.REACT_APP_URL+'auth/logout', {
        //         headers: {
        //             'Authorization': 'Bearer '+token,
        //         }
        //     });            
        //     localStorage.removeItem('token')
        //     window.location.href = '/login'
        //   } catch (error) {
        //     console.error('Error:', error);
        //   }
        localStorage.removeItem('token')
        window.location.href = '/login'
    }

  return (
    <div>
        <button className='navButton' onClick={logout}>Log Out</button>
    </div>
  )
}

export default Logout