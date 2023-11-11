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