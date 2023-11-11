import React, { useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'

const Firsttime = () => {
    const user = useLoaderData()
    if (user.firstName){
        console.log('first time');
        window.location.href = '/home'
    }
    const [profPicPreview, setProfPicPreview] = useState('')
    const [pic1Preview, setPic1Preview] = useState('')
    const [pic2Preview, setPic2Preview] = useState('')
    const [pic3Preview, setPic3Preview] = useState('')
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
        <h1>Welcome to wingman {user.username}</h1>
        <h2>Let's set up your account</h2>
        <Form action='/activate' method='post' style={{display:'flex', flexDirection:'column', width: '50%'}}>
            <input name='username' defaultValue={user.username} hidden />
            <input name='password' defaultValue={user.password} hidden />
            <input type="text" name='firstName' placeholder='First Name' required/>
            <input type="text" name='lastName' placeholder='Last Name' required/>
            <input type="text" name='profilePic' placeholder='Link to Profile Picture' required onChange={(e)=>setProfPicPreview(e.target.value)}/>
            <img className='preview' src={profPicPreview} alt={user.username} />
            <input type="text" name='pic1' placeholder='Link to First Picture' required onChange={(e)=>setPic1Preview(e.target.value)}/>
            <img className='preview' src={pic1Preview} alt={user.username} />
            <input type="text" name='pic2' placeholder='Link to Second Picture' required onChange={(e)=>setPic2Preview(e.target.value)}/>
            <img className='preview' src={pic2Preview} alt={user.username} />
            <input type="text" name='pic3' placeholder='Link to Third Picture' required onChange={(e)=>setPic3Preview(e.target.value)}/>
            <img className='preview' src={pic3Preview} alt={user.username} />
            <select name='question1' required>
                {questions.map((q,i)=>{
                  return <option key={i} value={i}>{q}</option>
                })}
            </select>
            <input type="text" name='answer1' placeholder='Answer to your first prompt' required/>
            <select name='question2' required>
                {questions.map((q,i)=>{
                  return <option key={i} value={i}>{q}</option>
                })}
            </select>
            <input type="text" name='answer2' placeholder='Answer to your second prompt' required/>
            <select name='question3' required>
                {questions.map((q,i)=>{
                  return <option key={i} value={i}>{q}</option>
                })}
            </select>
            <input type="text" name='answer3' placeholder='Answer to your third prompt' required/>
            <p>Gender:</p>
            <select name="gender" required>
                <option value="0">Man</option>
                <option value="1">Woman</option>
                <option value="2">Non-Binary</option>
            </select>
            <p>Interested in:</p>
            <select name="interested">
                <option value="0">Men</option>
                <option value="1">Women</option>
                <option value="2">Non-Binary</option>
                <option value="3">Men and Women</option>
                <option value="4">Men and Non-Binary</option>
                <option value="5">Women and Non-Binary</option>
                <option value="6">Everyone</option>
            </select>
            <input type="text" name='job' required placeholder='job'/>
            <input type="text" name='age' required placeholder='age'/>
            <input type="submit" value="Activate Profile!"/>
        </Form>
    </div>
  )
}

export default Firsttime