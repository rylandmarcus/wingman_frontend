import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import wingmanLogo from '../../public/wingmanLogo.png' 

const Title = () => {
    // const [componentOpened, setComponentOpened] = useState(false)
    // useEffect(()=>{
    //     setComponentOpened(true)
    // },[componentOpened])
    const token = localStorage.getItem('token')
    const loggedInTitle = ()=>{
        return(
            <div style={{height: '150px'}}>
                <Link to="/home" style={{textDecoration:'none', color:'black'}}>
                <img style={{
                    // paddingTop:'150px',
                    height:'200px',
                    width:'200px',
                    paddingLeft:'20px',
                    marginBottom:'20px',
                }} src='/wingmanLogo.png' alt="Wingman Logo" />
                </Link>
            </div>
        )
    }
    const loggedOutTitle = ()=>{
        return(
            <div style={{backgroundImage:'linear-gradient(white, pink, lightcoral)'}}>
                <div style={{
                    height:'600px', 
                    // display:'flex', 
                    // justifyContent:'center', 
                    // alignItems:'center',
                    // border:'1px solid black',
                    // width:'1000px',
                    // margin:'auto',
                    // borderRadius:'50px',
                    // backgroundImage: 'linear-gradient(to bottom right, white,silver,gray,black,gray,silver,white)'
                    }}>
                <Link to='/'>
                <img style={{
                    // paddingTop:'150px',
                    height:'850px',
                    width:'1000px',
                }} src='/wingmanLogo.png' alt="Wingman Logo" />
                </Link>
                </div>
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