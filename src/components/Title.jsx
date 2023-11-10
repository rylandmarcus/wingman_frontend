import React, { useEffect, useState } from 'react'

const Title = () => {
    // const [componentOpened, setComponentOpened] = useState(false)
    // useEffect(()=>{
    //     setComponentOpened(true)
    // },[componentOpened])
    const token = localStorage.getItem('token')
    const loggedInTitle = ()=>{
        return(
            <div>
                <h1>Wingman Logged in</h1>
            </div>
        )
    }
    const loggedOutTitle = ()=>{
        return(
            <div>
                <h1>Wingman Logged out</h1>
            </div>
        )
    }
  return token ? loggedInTitle() : loggedOutTitle()
    // return (
    //     <div>
    //         <h1>Wingman</h1>
    //     </div>
    // )
}

export default Title