import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

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
                    <Link><button>Message</button></Link>
                    <Link><button>Unmatch</button></Link>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Matches