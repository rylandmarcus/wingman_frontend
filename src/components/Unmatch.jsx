import React from 'react'
import './Unmatch.css'
import { useState } from 'react'

const Unmatch = ({profileId, name}) => {
    const [unmatchTrigger, setUnmatchTrigger] = useState(false)
    const unmatch = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        try {
            const response = await fetch(process.env.REACT_APP_URL+'users/'+token+'/matches/'+profileId, {
                method: 'DELETE',
            });            
            window.location.href = '/matches'
          } catch (error) {
            console.error('Error:', error);
          }
    }
  return (unmatchTrigger) ? (
    <div>
        <button className='profileButton' >Unmatch</button>
    <div className='unmatchContainer'>
        <div className='unmatchInner'>
            <p>Are you sure you want to unmatch with {name}? This will also delete your converstaion history</p>
        <button className='unmatchClose' onClick={()=>setUnmatchTrigger(false)}>I'll give them another chance</button>
        <button onClick={unmatch}>Unmatch</button>
        </div>
    </div>
    </div>
  ) : <button className='profileButton' onClick={()=>setUnmatchTrigger(true)}>Unmatch</button>;
}

export default Unmatch