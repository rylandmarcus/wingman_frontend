import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Findmatches = () => {
    const data = useLoaderData()
    let shuffled = [...data]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    console.log(data);
    console.log(shuffled);
    const [users, setUsers] = useState(shuffled)
    const [likedUsers, setLikedUsers] = useState([])
    const [dislikedUsers, setDislikedUsers] = useState([])
    // if users is empty, then it will offer to go through the dislikes again
    const likeReaction = (e)=>{
      e.preventDefault()
      let newUsers = [...users]
      const reactedTo = newUsers.shift()
      let newLikedUsers = [...likedUsers]
      newLikedUsers.push(reactedTo)
      setLikedUsers(newLikedUsers)
      setUsers(newUsers)
      console.log('liked');
      console.log(likedUsers);
      console.log('all');
      console.log(users);
    }
    const dislikeReaction = (e)=>{
      e.preventDefault()
      let newUsers = [...users]
      const reactedTo = newUsers.shift()
      let newDislikedUsers = [...dislikedUsers]
      newDislikedUsers.push(reactedTo)
      setDislikedUsers(newDislikedUsers) 
      setUsers(newUsers)
      console.log('disliked');
      console.log(dislikedUsers);
      console.log('all');
      console.log(users);
    }
  return (
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

export default Findmatches