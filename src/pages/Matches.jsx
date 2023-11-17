import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Unmatch from '../components/Unmatch'

const Matches = () => {
    const matches = useLoaderData()
    console.log(matches)
  return (
    <div style={{backgroundImage:'linear-gradient(white, pink, lightcoral, red)', minHeight:'1000px', padding:'50px 200px 0px 200px',}}>
        <div style={{
            backgroundColor:'#202124',
            border:'20px',
            borderRadius:'50px',
            paddingBottom:'50px',
            paddingLeft:'80px',
            paddingRight:'80px',
        }}>
            <h2 style={{color:'#D6D6D7', paddingTop:'25px', fontSize:'60px', fontFamily: "'Cedarville Cursive', cursive"}}>Matches</h2>
            {matches.map(match=>{
                return (
                    <div key={match._id} style={{
                        display:'flex', 
                        flexDirection:'row', 
                        justifyContent:'center', 
                        alignItems:'center',
                        marginBottom:'40px',
                        border:'2px solid lightcoral',
                        padding:'20px',
                        backgroundColor:'#D6D6D7',
                        }}>
                    <Link style={{textDecoration:'none', color:'#202124'}} to={`/profiles/${match._id}`}>
                    <div style={{
                        display:'flex', 
                        flexDirection:'row', 
                        justifyContent:'left', 
                        alignItems:'center',
                        width:'500px',
                        }}>
                        <img style={{
                            width:'150px',
                            height:'150px',
                            borderRadius:'50%',
                            marginRight:'10px',
                        
                        }} src={match.profilePic} alt={match.username} />
                        <h3 style={{
                            fontSize:'40px',
                        
                        }}>{match.firstName+' '+match.lastName}</h3>
                    </div>
                    </Link>
                    <Link to={`/messages/${match._id}`}><button className='profileButton'>Message</button></Link>
                    <Unmatch profileId={match._id} name={match.firstName}></Unmatch>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Matches