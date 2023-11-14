import React from 'react'

const Chatdisplay = ({chat}) => {
  return (
    <div>
      {chat.messages.map((message,i)=>{
        let writer
        chat.authors[i]==chat.users[0]._id ? writer = chat.users[0].firstName : writer = 'You'
        return <div key={message+i}>
          <div>{writer+': '+message}</div>
        </div>
      })}
    </div>
  )
}

export default Chatdisplay