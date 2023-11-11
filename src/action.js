import { redirect } from "react-router-dom"
const URL = process.env.REACT_APP_URL

export const activateProfile = async ({request})=>{
    const formData = await request.formData()
    const interestedIn = []
    const interestNumber = formData.get('interested')
    if (interestNumber == 0 || interestNumber == 1 || interestNumber == 2){
        interestedIn.push(interestNumber)
    } else if (interestNumber == 3){
        interestedIn.push(0, 1)
    } else if (interestNumber == 4){
        interestedIn.push(0, 2)
    } else if (interestNumber == 5){
        interestedIn.push(1, 2)
    } else if (interestNumber == 6){
        interestedIn.push(0, 1, 2)
    }
    const token = localStorage.getItem('token')
    const user = {
        username: formData.get('username'),
        password: formData.get('password'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        profilePic: formData.get('profilePic'),
        pictures: [formData.get('pic1'), formData.get('pic2'), formData.get('pic3')],
        promptChoices: [formData.get('question1'), formData.get('question2'), formData.get('question3')],
        promptAnswers: [formData.get('answer1'), formData.get('answer2'), formData.get('answer3')],
        gender: formData.get('gender'),
        interestedIn: interestedIn,
        age: formData.get('age'),
        job: formData.get('job'),
    }
    await fetch(URL+'users/'+token, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    return redirect('/home')
}