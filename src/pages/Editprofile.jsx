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
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [job, setJob] = useState(user.job)
    const [age, setAge] = useState(user.age)
    const [question1, setQuestion1] = useState(user.promptChoices[0])
    const [question2, setQuestion2] = useState(user.promptChoices[1])
    const [question3, setQuestion3] = useState(user.promptChoices[2])
    const [answer1, setAnswer1] = useState(user.promptAnswers[0])
    const [answer2, setAnswer2] = useState(user.promptAnswers[1])
    const [answer3, setAnswer3] = useState(user.promptAnswers[2])

    const questions = [
        'What is your favorite color?',
        'What is your favorite animal?',
        'What is your favorite food?',
        'What is your favorite movie?',
        'What is your favorite song?',
        'What is your favorite book?',
    ]
    
  return (
    <div style={{backgroundImage:'linear-gradient(white, pink, lightcoral, red)', minHeight:'1000px', padding:'50px 200px 0px 200px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <Form action='/activate' method='post' style={{
            display:'flex', 
            flexDirection:'column', 
            width: '35%',
            backgroundColor:'#202124',
            border:'20px',
            borderRadius:'50px',
            paddingBottom:'50px',
            paddingLeft:'80px',
            paddingRight:'80px',
            // justifyContent:'space-between',
            alignItems:'center',
        }}>
            <h2 style={{color:'#D6D6D7'}}>Editing {user.username}'s Profile</h2>
            <input name='username' defaultValue={user.username} hidden />
            <input name='password' defaultValue={user.password} hidden />    
            <p style={{color:'#D6D6D7'}}>First Name:</p>        
            <input className='authInput' style={{fontSize:'20px', width:'350px'}} type="text" name='firstName' placeholder='First Name' required defaultValue={user.firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            <p style={{color:'#D6D6D7'}}>Last Name:</p>  
            <input className='authInput' style={{fontSize:'20px', width:'350px'}} type="text" name='lastName' placeholder='Last Name' required defaultValue={user.lastName} onChange={(e)=>setLastName(e.target.value)}/>
            <p style={{color:'#D6D6D7'}}>Age:</p>  
            <input className='authInput' style={{fontSize:'20px', width:'350px'}} type="number" name='age' defaultValue={user.age} required placeholder='age' onChange={(e)=>setAge(e.target.value)}/>
            <p style={{color:'#D6D6D7'}}>Job:</p>  
            <input className='authInput' style={{fontSize:'20px', width:'350px'}} type="text" name='job' defaultValue={user.job} required placeholder='job' onChange={(e)=>setJob(e.target.value)}/>
            <p style={{color:'#D6D6D7'}}>Profile Picture Link:</p>  
            <input className='authInput' style={{fontSize:'20px', width:'350px'}} type="text" name='profilePic' placeholder='Link to Profile Picture' defaultValue={user.profilePic} required onChange={(e)=>setProfPicPreview(e.target.value)}/>
            {/* <img className='preview' src={profPicPreview} alt={user.username} /> */}
            <p style={{color:'#D6D6D7'}}>Your First Main Picture:</p>  
            <input className='authInput' style={{fontSize:'20px', width:'350px'}} type="text" name='pic1' placeholder='Link to First Picture' defaultValue={user.pictures[0]} required onChange={(e)=>setPic1Preview(e.target.value)}/>
            {/* <img className='preview' src={pic1Preview} alt={user.username} /> */}
            <p style={{color:'#D6D6D7'}}>Your Second Main Picture:</p>  
            <input className='authInput' style={{fontSize:'20px', width:'350px'}} type="text" name='pic2' placeholder='Link to Second Picture' defaultValue={user.pictures[1]} required onChange={(e)=>setPic2Preview(e.target.value)}/>
            {/* <img className='preview' src={pic2Preview} alt={user.username} /> */}
            <p style={{color:'#D6D6D7'}}>Your Third Main Picture:</p>  
            <input className='authInput' style={{fontSize:'20px', width:'350px'}} type="text" name='pic3' placeholder='Link to Third Picture' defaultValue={user.pictures[2]} required onChange={(e)=>setPic3Preview(e.target.value)}/>
            {/* <img className='preview' src={pic3Preview} alt={user.username} /> */}
            <p style={{color:'#D6D6D7'}}>Pick Your First Prompt:</p>  
            <select className='authInput' style={{fontSize:'20px', width:'350px'}} name='question1' defaultValue={user.promptChoices[0]} required onChange={(e)=>setQuestion1(e.target.value)}>
                {questions.map((q,i)=>{
                  return <option key={i} value={i}>{q}</option>
                })}
            </select>
            <p style={{color:'#D6D6D7'}}>Answer Your First Prompt:</p>  
            <input className='authInput' style={{fontSize:'20px', width:'350px'}} type="text" name='answer1' placeholder='Answer to your first prompt' defaultValue={user.promptAnswers[0]} required onChange={(e)=>setAnswer1(e.target.value)}/>
            <p style={{color:'#D6D6D7'}}>Pick Your Second Prompt:</p>  
            <select className='authInput' style={{fontSize:'20px', width:'350px'}} name='question2' defaultValue={user.promptChoices[1]} required onChange={(e)=>setQuestion2(e.target.value)}>
                {questions.map((q,i)=>{
                  return <option key={i} value={i}>{q}</option>
                })}
            </select>
            <p style={{color:'#D6D6D7'}}>Answer Your Second Prompt:</p>  
            <input className='authInput' style={{fontSize:'20px', width:'350px'}} type="text" name='answer2' placeholder='Answer to your second prompt' defaultValue={user.promptAnswers[1]} required onChange={(e)=>setAnswer2(e.target.value)}/>
            <p style={{color:'#D6D6D7'}}>Pick Your Third Prompt:</p>  
            <select className='authInput' style={{fontSize:'20px', width:'350px'}} name='question3' defaultValue={user.promptChoices[2]} required onChange={(e)=>setQuestion3(e.target.value)}>
                {questions.map((q,i)=>{
                  return <option key={i} value={i}>{q}</option>
                })}
            </select>
            <p style={{color:'#D6D6D7'}}>Answer Your Third Prompt:</p>  
            <input className='authInput' style={{fontSize:'20px', width:'350px'}} type="text" name='answer3' placeholder='Answer to your third prompt' defaultValue={user.promptAnswers[2]} required onChange={(e)=>setAnswer3(e.target.value)}/>
            <p style={{color:'#D6D6D7'}}>Your Gender:</p>  
            <select className='authInput' style={{fontSize:'20px', width:'350px'}} name="gender" defaultValue={user.gender} required>
                <option value="0">Man</option>
                <option value="1">Woman</option>
                <option value="2">Non-Binary</option>
            </select>
            <p style={{color:'#D6D6D7'}}>Pick the Genders You are Interested in Matching With:</p>  
            <select className='authInput' style={{fontSize:'20px', width:'350px'}} name="interested" required defaultValue={interested}>
                <option value="0">Men</option>
                <option value="1">Women</option>
                <option value="2">Non-Binary</option>
                <option value="3">Men and Women</option>
                <option value="4">Men and Non-Binary</option>
                <option value="5">Women and Non-Binary</option>
                <option value="6">Everyone</option>
            </select>
        
            <input className='profileButton' type="submit" value="Update Profile!"/>
        </Form>
        <div style={{
            backgroundColor:'#202124',
            border:'20px',
            borderRadius:'50px',
            paddingBottom:'50px',
            paddingLeft:'80px',
            paddingRight:'80px',
            width: '35%'
        }}>
            <h2 style={{color:'#D6D6D7'}}>Preview of your profile</h2>
        <div style={{
          backgroundColor:'#D6D6D7',
          padding:'25px',
          color:'#202124',
          borderRadius:'50px',
        }}>
          <img style={{
            borderRadius:'50%',
            width:'300px',
          height:'300px',
          }} src={profPicPreview} alt={user.username} />
          <div style={{fontSize:'40px'}}>{firstName+' '+lastName}</div>
          <div style={{fontSize:'20px'}}>{age} years old</div>
          <div style={{fontSize:'20px'}}>{job}</div>
          <div style={{fontSize:'30px', marginTop:'20px'}}>{questions[question1]}</div>
          <div style={{fontSize:'20px'}}>{answer1}</div>
          <img style={{height:'350px', width:'350px', marginTop:'20px', border:'2px solid black', padding:'10px'}} src={pic1Preview} alt={user.username+'pic 1'} />
          <div style={{fontSize:'30px', marginTop:'20px'}}>{questions[question2]}</div>
          <div style={{fontSize:'20px'}}>{answer2}</div>
          <img style={{height:'350px', width:'350px', marginTop:'20px', border:'2px solid black', padding:'10px'}} src={pic2Preview} alt={user.username+'pic 1'} />
          <div style={{fontSize:'30px', marginTop:'20px'}}>{questions[question3]}</div>
          <div style={{fontSize:'20px'}}>{answer3}</div>
          <img style={{height:'350px', width:'350px', marginTop:'20px', border:'2px solid black', padding:'10px'}} src={pic3Preview} alt={user.username+'pic 1'} />
        </div>
        </div>
    </div>
  )
}

export default Editprofile