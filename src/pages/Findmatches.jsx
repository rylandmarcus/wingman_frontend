import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { io } from 'socket.io-client';

const Findmatches = () => {
    const token = localStorage.getItem('token')
    if (!token){
        window.location.href = '/login'
    }
    const socket = io.connect(process.env.REACT_APP_URL)
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
      // let match = false
      // if (reactedTo.likes.includes(token)){
      //   match = true
      // }
      await fetch(process.env.REACT_APP_URL+'users/'+token+'/like/'+reactedTo._id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
        // body: JSON.stringify({match:match}),
      });
      if (reactedTo.likes.includes(token)){
        socket.emit('notify', reactedTo._id, 'match')
        socket.emit('notify', token, 'match')
        console.log('match');
        //post a new chat
        // const newChat = await fetch(process.env.REACT_APP_URL+'chats/'+token+'/'+reactedTo._id, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({}),
        // });
      }
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
        <div style={{backgroundImage:'linear-gradient(white, pink, lightcoral, red)', minHeight:'1000px', padding:'50px 150px 0px 150px',}}>
          <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around',  alignItems:'center'}}>
          <button className='yesNo' style={{backgroundColor:'#da3434', fontSize:'60px'}} onClick={dislikeReaction}>X</button>
          <div style={{
            backgroundColor:'#202124',
            border:'20px',
            borderRadius:'50px',
            paddingBottom:'50px',
            paddingLeft:'80px',
            paddingRight:'80px',
          }}>
        <h2 style={{fontFamily: "'Cedarville Cursive', cursive",color:'#D6D6D7', paddingTop:'20px', fontSize:'60px'}}>Find a Match!</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>

        <div style={{
          backgroundColor:'#D6D6D7',
          padding:'25px',
          color:'#202124',
          borderRadius:'50px',
          width:'700px',
        }}>        
        <img style={{
          borderRadius:'50%',
          width:'300px',
          height:'300px',
        }} src={users[0].profilePic} alt={users[0].username} />
        <div style={{fontSize:'40px'}}>{users[0].firstName+' '+users[0].lastName}</div>
        <div style={{fontSize:'20px'}}>{users[0].age} years old</div>
        <div style={{fontSize:'20px'}}>{users[0].job}</div>
        <div style={{fontSize:'30px', marginTop:'20px'}}>{questions[users[0].promptChoices[0]]}</div>
        <div style={{fontSize:'20px'}}>{users[0].promptAnswers[0]}</div>
        <img style={{height:'350px', width:'350px', marginTop:'20px', border:'2px solid black', padding:'10px'}} src={users[0].pictures[0]} alt={users[0].username+'pic 1'} />
        <div style={{fontSize:'30px', marginTop:'20px'}}>{questions[users[0].promptChoices[1]]}</div>
        <div style={{fontSize:'20px'}}>{users[0].promptAnswers[1]}</div>
        <img style={{height:'350px', width:'350px', marginTop:'20px', border:'2px solid black', padding:'10px'}} src={users[0].pictures[1]} alt={users[0].username+'pic 1'} />
        <div style={{fontSize:'30px', marginTop:'20px'}}>{questions[users[0].promptChoices[2]]}</div>
        <div style={{fontSize:'20px'}}>{users[0].promptAnswers[2]}</div>
        <img style={{height:'350px', width:'350px', marginTop:'20px', border:'2px solid black', padding:'10px'}} src={users[0].pictures[2]} alt={users[0].username+'pic 1'} />
        </div>
        </div>
    </div>
      {/* <button className='yesNo' onClick={likeReaction}>YEP</button> */}
          <button className='yesNo' onClick={likeReaction} style={{backgroundColor:'rgb(32, 148, 98, .8)', fontSize:'60px'}}>✔️</button>
          </div>
        </div>
      )
    }
    return users.length==0 ? <div style={{
      backgroundImage:'linear-gradient(white, pink, lightcoral, red)', 
      minHeight:'1000px', 
      padding:'200px 150px 0px 150px',
      fontSize:'40px',
    
    }}>There are no more people to match with at the moment...</div> : remainingPeople()
}

export default Findmatches