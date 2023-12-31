const URL =  process.env.REACT_APP_URL

export const userLoad = async ()=>{
    const token = localStorage.getItem('token')
    if(!token){
        window.location.href = '/login'
    } else{
        const response = await fetch(process.env.REACT_APP_URL+'users/'+token)
        const data = await response.json()
        return data
    }
    }

export const profileLoad = async ({params})=>{
    const token = localStorage.getItem('token')
    if(!token){
        window.location.href = '/login'
    } else{
        const response = await fetch(process.env.REACT_APP_URL+'users/'+params.id)
        const data = await response.json()
        return data
    }
}

export const findMatches = async ()=>{
    const token = localStorage.getItem('token')
    if(!token){
        window.location.href = '/login'
    } else{
        const response = await fetch(process.env.REACT_APP_URL+'users/potentialmatches/'+token)
        const data = await response.json()
        return data
    }
}

export const loadMatches = async ()=>{
    const token = localStorage.getItem('token')
    if(!token){
        window.location.href = '/login'
    } else{
        const response = await fetch(process.env.REACT_APP_URL+'users/'+token+'/matches')
        const data = await response.json()
        return data
    }
}

export const loadMessages = async ({params})=>{
    const token = localStorage.getItem('token')
    if(!token){
        window.location.href = '/login'
    } else{
        const response = await fetch(process.env.REACT_APP_URL+'chats/'+token)
        const data = await response.json()
        return data
    }
}