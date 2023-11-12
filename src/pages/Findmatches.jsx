import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Findmatches = () => {
    const token = localStorage.getItem('token')
    if (!token){
        window.location.href = '/login'
    }
    const data = useLoaderData()
    let shuffled = [...data]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const [users, setUsers] = useState(shuffled)
    // const [likedUsers, setLikedUsers] = useState([])
    // const [dislikedUsers, setDislikedUsers] = useState([])
    // if users is empty, then it will offer to go through the dislikes again
    const likeReaction = async (e)=>{
      e.preventDefault()
      let newUsers = [...users]
      const reactedTo = newUsers.shift()
      // let newLikedUsers = [...likedUsers]
      // newLikedUsers.push(reactedTo)
      // setLikedUsers(newLikedUsers)
      setUsers(newUsers)
      await fetch(process.env.REACT_APP_URL+'users/'+token+'/like/'+reactedTo._id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
      //if reactedTo.likes includes token then match
    }
    const dislikeReaction = async (e)=>{
      e.preventDefault()
      let newUsers = [...users]
      const reactedTo = newUsers.shift()
      // let newDislikedUsers = [...dislikedUsers]
      // newDislikedUsers.push(reactedTo)
      // setDislikedUsers(newDislikedUsers) 
      setUsers(newUsers)
      await fetch(process.env.REACT_APP_URL+'users/'+token+'/dislike/'+reactedTo._id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });
    }
    const remainingPeople = ()=>{
      return(
        <div>
      <h2>Find a Match!</h2>
      <div style={{border:'solid black 2px'}}>
        <img src={users[0].profilePic} alt={users[0].username} />
        <div>{users[0].firstName + ' ' + users[0].lastName}</div>
        <div>{users[0].age} years old</div>
        <div>{users[0].job}</div>
        <div>{users[0].promptAnswers[0]}</div>
        <div>{users[0].promptAnswers[1]}</div>
        <div>{users[0].promptAnswers[2]}</div>
      </div>
      <button onClick={dislikeReaction}>NOPE</button>
      <button onClick={likeReaction}>YEP</button>
    </div>
      )
    }
    return users.length==0 ? <div>There are no more people to match with</div> : remainingPeople()
}

export default Findmatches