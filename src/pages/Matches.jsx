import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Unmatch from '../components/Unmatch'

const Matches = () => {
    const matches = useLoaderData()
    console.log(matches)
  return (
    <div>
        <h2>Matches</h2>
        <div>
            {matches.map(match=>{
                return (
                    <div key={match._id} style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Link to={`/profiles/${match._id}`}>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <img src={match.profilePic} alt={match.username} />
                        <h3>{match.firstName+' '+match.lastName}</h3>
                    </div>
                    </Link>
                    <Link to={`/messages/${match._id}`}><button>Message</button></Link>
                    <Unmatch profileId={match._id} name={match.firstName}></Unmatch>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Matches