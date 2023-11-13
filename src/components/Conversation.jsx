import React, { useEffect, useState } from 'react'

const Conversation = ({convo}) => {
    // const chat = {...convo}
    const [chat, setChat] = useState({...convo})
    useEffect(()=>{
        setChat({...convo})
        console.log(convo);
    },[convo])
    return (
        <div>There is a Conversation opne with the id of: {chat._id}</div>
    )
}

export default Conversation