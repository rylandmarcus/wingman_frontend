import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Logout from '../components/Logout'

const Home = () => {
    const token = localStorage.getItem('token')
    const questions = [
        'What is your favorite color?',
        'What is your favorite animal?',
        'What is your favorite food?',
        'What is your favorite movie?',
        'What is your favorite song?',
        'What is your favorite book?',
    ]
    const genders = [
        'Man', 'Woman', 'Non-Binary'
    ]
    const userData = useLoaderData()
    const [user, setUser] = useState(userData)
    if (!user.firstName){
        console.log('first time');
        window.location.href = '/firsttime'
    }
    // useEffect(()=>{
    //     const token = localStorage.getItem('token')
    //     if(!token){
    //         window.location.href = '/login'
    //     }
    //     async function fetchData(){
    //         const response = await fetch(process.env.REACT_APP_URL+'users/'+token)
    //         const data = await response.json()
    //         setUser(data)
    //     }
    //     fetchData()
    // },[])
    // going to make it a fill in more info form if it is user first time logging in
    // if not first time logging in, then it will be a dashboard
    const pictureStyle = {
        width: '200px',
        height: '200px',
        // borderRadius: '50%',
    }
  return (
    <div style={{backgroundImage:'linear-gradient(white, pink, lightcoral, red)', minHeight:'1000px', padding:'50px 200px 0px 200px',}}>
        <div style={{
            backgroundColor:'#202124',
            border:'20px',
            borderRadius:'50px',
            paddingBottom:'50px',
        }}> 

        <h2 style={{margin:'0px', padding:'25px', fontSize:'70px', color:'#D6D6D7', fontFamily: "'Cedarville Cursive', cursive"}}>Welcome to Wingman</h2>
        <h3 style={{color:'#D6D6D7'}}>View your profile here:</h3>
        <Link className='homeButton' to={`/profiles/${token}`} style={{
            textDecoration:'none',
            color:'#D6D6D7',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            height:'120px',
            fontSize:'40px',
            border:'2px solid lightcoral',
            borderRadius:'30px',
            minWidth:'500px',
            width: 'fit-content',
            margin:'auto',
        }}>
            <img style={{
                width:'100px',
                height:'100px',
                borderRadius:'50%',
                marginRight:'10px',
            
            }} src={user.profilePic} alt={user.username} />
            <div>{user.firstName+' '+user.lastName}</div>
        </Link>
        <h3 style={{color:'#D6D6D7'}}>Or you can:</h3>
        <Link className='homeButton' to='/findmatches' style={{
            textDecoration:'none',
            color:'#D6D6D7',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            height:'120px',
            fontSize:'40px',
            border:'2px solid lightcoral',
            width:'500px',
            margin:'auto',
            marginTop:'20px',
        }}>
            <div>Find a Match!</div>
        </Link>
        <Link className='homeButton' to='/matches' style={{
            textDecoration:'none',
            color:'#D6D6D7',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            height:'120px',
            fontSize:'40px',
            border:'2px solid lightcoral',
            width:'500px',
            margin:'auto',
            marginTop:'40px',
        }}>
            <div>View Your Matches</div>
        </Link>
        <Link className='homeButton' to={`/messages/none`} style={{
            textDecoration:'none',
            color:'#D6D6D7',
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            height:'120px',
            fontSize:'40px',
            border:'2px solid lightcoral',
            width:'500px',
            margin:'auto',
            marginTop:'40px',
        }}>
            <div>See Your Messages</div>
        </Link>
        <div style={{
            color:'#D6D6D7',
            border:'2px solid lightcoral',
            width:'800px',
            margin:'auto',
            marginTop:'40px',
            fontSize:'20px',
            height:'70px',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
        }}>
            When messaging, look out for the<span><img style={{height:'70px',width:'60px', paddingTop:'20px'}} src="./wingmanLogo.png" alt="Wingman Logo" /></span>, your Wingman will be there by your side!
        </div>
        </div>
    </div>
  )
}

export default Home