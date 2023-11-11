import React, { useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'

const Editprofile = () => {
    const user = useLoaderData()
    let interested
    if (user.interestedIn.length == 1){
        interested = user.interestedIn[0]
    } else if (user.interestedIn.includes(0)&&user.interestedIn.includes(1)){
        interested = 3
    } else if (user.interestedIn.includes(0)&&user.interestedIn.includes(2)){
        interested = 4
    } else if (user.interestedIn.includes(1)&&user.interestedIn.includes(2)){
        interested = 5
    } else {
        interested = 6
    }
    const [profPicPreview, setProfPicPreview] = useState(user.profilePic)
    const [pic1Preview, setPic1Preview] = useState(user.pictures[0])
    const [pic2Preview, setPic2Preview] = useState(user.pictures[1])
    const [pic3Preview, setPic3Preview] = useState(user.pictures[2])
    const questions = [
        'What is your favorite color?',
        'What is your favorite animal?',
        'What is your favorite food?',
        'What is your favorite movie?',
        'What is your favorite song?',
        'What is your favorite book?',
    ]
  return (
    <div>
        <h2>Editing {user.username}'s Profile</h2>
        <Form action='/activate' method='post' style={{display:'flex', flexDirection:'column', width: '50%'}}>
            <input name='username' defaultValue={user.username} hidden />
            <input name='password' defaultValue={user.password} hidden />
            <input type="text" name='firstName' placeholder='First Name' required defaultValue={user.firstName}/>
            <input type="text" name='lastName' placeholder='Last Name' required defaultValue={user.lastName}/>
            <input type="text" name='profilePic' placeholder='Link to Profile Picture' defaultValue={user.profilePic} required onChange={(e)=>setProfPicPreview(e.target.value)}/>
            <img className='preview' src={profPicPreview} alt={user.username} />
            <input type="text" name='pic1' placeholder='Link to First Picture' defaultValue={user.pictures[0]} required onChange={(e)=>setPic1Preview(e.target.value)}/>
            <img className='preview' src={pic1Preview} alt={user.username} />
            <input type="text" name='pic2' placeholder='Link to Second Picture' defaultValue={user.pictures[1]} required onChange={(e)=>setPic2Preview(e.target.value)}/>
            <img className='preview' src={pic2Preview} alt={user.username} />
            <input type="text" name='pic3' placeholder='Link to Third Picture' defaultValue={user.pictures[2]} required onChange={(e)=>setPic3Preview(e.target.value)}/>
            <img className='preview' src={pic3Preview} alt={user.username} />
            <select name='question1' defaultValue={user.promptChoices[0]} required>
                {questions.map((q,i)=>{
                  return <option key={i} value={i}>{q}</option>
                })}
            </select>
            <input type="text" name='answer1' placeholder='Answer to your first prompt' defaultValue={user.promptAnswers[0]} required/>
            <select name='question2' defaultValue={user.promptChoices[1]} required>
                {questions.map((q,i)=>{
                  return <option key={i} value={i}>{q}</option>
                })}
            </select>
            <input type="text" name='answer2' placeholder='Answer to your second prompt' defaultValue={user.promptAnswers[1]} required/>
            <select name='question3' defaultValue={user.promptChoices[2]} required>
                {questions.map((q,i)=>{
                  return <option key={i} value={i}>{q}</option>
                })}
            </select>
            <input type="text" name='answer3' placeholder='Answer to your third prompt' defaultValue={user.promptAnswers[2]} required/>
            <p>Gender:</p>
            <select name="gender" defaultValue={user.gender} required>
                <option value="0">Man</option>
                <option value="1">Woman</option>
                <option value="2">Non-Binary</option>
            </select>
            <p>Interested in:</p>
            <select name="interested" required defaultValue={interested}>
                <option value="0">Men</option>
                <option value="1">Women</option>
                <option value="2">Non-Binary</option>
                <option value="3">Men and Women</option>
                <option value="4">Men and Non-Binary</option>
                <option value="5">Women and Non-Binary</option>
                <option value="6">Everyone</option>
            </select>
            <input type="text" name='job' defaultValue={user.job} required placeholder='job'/>
            <input type="text" name='age' defaultValue={user.age} required placeholder='age'/>
            <input type="submit" value="Update Profile!"/>
        </Form>
    </div>
  )
}

export default Editprofile